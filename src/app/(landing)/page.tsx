import { ThemesToggle } from "@/components/providers/theme-provider";
import { getSession } from "@/server/fn/get-session";
import { api, HydrateClient, prefetch } from "@/trpc/server";
import { ButtonDashboard } from "./_components/button-dashboard";
import { ButtonSignin } from "./_components/button-signin";
import { HelloText } from "./_components/hello";

export default async function Page() {
  const session = await getSession();
  await prefetch(api.hello.get.queryOptions({ text: "ArraysID" }));

  return (
    <HydrateClient>
      <main className="flex h-screen flex-col items-center justify-center">
        <HelloText />
        <div className="flex gap-x-2.5">
          {!session ? <ButtonSignin /> : <ButtonDashboard />}
          <ThemesToggle />
        </div>
      </main>
    </HydrateClient>
  );
}
