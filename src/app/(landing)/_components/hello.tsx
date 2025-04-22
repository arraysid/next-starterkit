"use client";

import { api } from "@/trpc/react";
import { LucideLoader } from "lucide-react";

export function HelloText() {
  const { data, isLoading } = api.hello.get.useQuery({ text: "ArraysID" });

  return (
    <div className="mb-8">
      {isLoading ? (
        <LucideLoader className="mx-auto size-6 animate-spin" />
      ) : (
        <span>{data?.greeting}</span>
      )}
    </div>
  );
}
