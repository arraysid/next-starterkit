import { ThemesToggle } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { HelloText } from "./_components/hello";

export default async function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <HelloText />
      <div className="flex gap-x-2.5">
        <Button>Click Me</Button>
        <ThemesToggle />
      </div>
    </main>
  );
}
