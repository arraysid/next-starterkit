"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCheckoutSnap } from "./_hooks/use-checkout-snap";

export default function Page() {
  const { mutate: checkout } = useCheckoutSnap();

  return (
    <main className="flex h-screen items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">Choose your region</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <Button
            variant="secondary"
            size="lg"
            className="w-full"
            onClick={() => checkout()}
          >
            🇮🇩 Indonesia Payment Process
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
