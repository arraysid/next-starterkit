"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth";
import { useMutation } from "@tanstack/react-query";
import { FcGoogle } from "react-icons/fc";

export function ButtonContinueGoogle() {
  const { mutate: signIn, isPending } = useMutation({
    mutationFn: () => authClient.signIn.social({ provider: "google" }),
  });

  return (
    <Button onClick={() => signIn()} disabled={isPending}>
      <FcGoogle className="size-5" />
      <span>Continue with Google</span>
    </Button>
  );
}
