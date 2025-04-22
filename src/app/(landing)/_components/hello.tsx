"use client";

import { useTRPC } from "@/trpc/react";
import { useQuery } from "@tanstack/react-query";
import { LucideLoader } from "lucide-react";

export function HelloText() {
  const api = useTRPC();

  const { data, isLoading } = useQuery(
    api.hello.get.queryOptions({ text: "ArraysID" }),
  );

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
