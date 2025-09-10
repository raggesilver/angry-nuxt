import z from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(
      2,
      "Name must be at least 2 characters. This is a custom error message.",
    ),
  tos: z
    .boolean()
    .refine((value) => value, "You must accept the terms of service."),
});
