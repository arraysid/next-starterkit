import { ThemeProvider } from "@/components/providers/theme-provider";
import { geist } from "@/lib/fonts";
import { generateSEOMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata = generateSEOMetadata();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", geist.variable)}
      suppressHydrationWarning
    >
      <body>
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
