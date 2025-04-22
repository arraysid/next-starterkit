import { ThemesToggle } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { api, HydrateClient, prefetch } from "@/trpc/server";
import { HelloText } from "./_components/hello";

export default async function Page() {
  await prefetch(api.hello.get.queryOptions({ text: "ArraysID" }));

  return (
    <HydrateClient>
      <main className="flex h-screen flex-col items-center justify-center">
        <HelloText />
        <div className="flex gap-x-2.5">
          <Button>Click Me</Button>
          <ThemesToggle />
        </div>
      </main>
    </HydrateClient>
  );
}
