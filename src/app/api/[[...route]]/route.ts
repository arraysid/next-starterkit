import { hono } from "@/server/hono";
import { handle } from "hono/vercel";

export const runtime = "nodejs";

export const GET = handle(hono);
export const POST = handle(hono);
