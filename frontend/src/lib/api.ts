import { ErrorResponse, hcWithType, SuccessResponse } from "@/shared/types";

const client = hcWithType("/", {
  fetch: (input: RequestInfo | URL, init?: RequestInit) =>
    fetch(input, {
      ...init,
      credentials: "include",
    }),
}).api;

export const postSignup = async (username: string, password: string) => {
  try {
    const res = await client.auth.signup.$post({
      form: {
        username,
        password,
      },
    });

    if (res.ok) {
      const data = (await res.json()) as SuccessResponse;
      return data;
    }

    const data = (await res.json()) as unknown as ErrorResponse;
    return data;
  } catch (error) {
    return {
      success: false as const,
      error: String(error),
      isFormError: false,
    } as ErrorResponse;
  }
};
