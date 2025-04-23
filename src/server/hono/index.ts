import { env } from "@/env";
import { appRouter } from "@/server/api/root";
import { createTRPCContext } from "@/server/api/trpc";
import { auth } from "@/server/auth";
import { trpcServer } from "@hono/trpc-server";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { Hono, type Context } from "hono";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a HTTP request (e.g. when you make requests from Client Components).
 */
const createContext = async (
  opts: FetchCreateContextFnOptions,
  honoContext: Context,
) => {
  return createTRPCContext({
    request: opts.req,
    headers: honoContext.req.raw.headers,
  });
};

export const hono = new Hono().basePath("/api");

hono.on(["POST", "GET"], "/auth/**", (c) => auth.handler(c.req.raw));

hono.use(
  "/procedures/*",
  trpcServer({
    router: appRouter,
    createContext,
    endpoint: "/api/procedures",
    onError:
      env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
            );
          }
        : undefined,
  }),
);
