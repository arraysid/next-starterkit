import { env } from "@/env";
import { useTRPC } from "@/trpc/react";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

export function useCheckoutSnap() {
  useSnapScript();
  const api = useTRPC();
  return useMutation(
    api.payment.checkout.mutationOptions({
      onSuccess: ({ token }) => {
        window.snap.pay(token, {
          onSuccess: () => {},
          onPending: () => {},
          onError: () => {},
          onClose: () => {},
        });
      },
    }),
  );
}

function useSnapScript() {
  useEffect(() => {
    if (document.querySelector('script[src*="snap.js"]')) return;
    const src = env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY.startsWith("SB")
      ? "https://app.sandbox.midtrans.com/snap/snap.js"
      : "https://app.midtrans.com/snap/snap.js";
    const script = Object.assign(document.createElement("script"), {
      src,
      async: true,
      "data-client-key": env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY,
    });
    document.body.appendChild(script);
  }, []);
}

declare global {
  interface Window {
    snap: {
      pay: (
        token: string,
        options?: {
          onSuccess?: () => void;
          onPending?: () => void;
          onError?: () => void;
          onClose?: () => void;
        },
      ) => void;
      show: () => void;
      hide: () => void;
    };
  }
}
