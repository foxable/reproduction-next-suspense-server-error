"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

export default function Home() {
  const { data } = useSuspenseQuery({
    queryKey: ["clientQuery"],
    queryFn: async () => {
      if (typeof window === "undefined") {
        throw new Error("Should only run on client");
      }

      return new Promise((resolve) =>
        setTimeout(() => resolve("Client result"), 1000)
      );
    },
  });

  return data;
}
