import { getSession } from "@/server/fn/get-session";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getSession();
  if (session) redirect("/dashboard");

  return <>{children}</>;
}
