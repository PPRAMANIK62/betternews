import { hcWithType } from "@/shared/types";

const client = hcWithType("/", {
  fetch: (input: RequestInfo | URL, init?: RequestInit) =>
    fetch(input, {
      ...init,
      credentials: "include",
    }),
}).api;
