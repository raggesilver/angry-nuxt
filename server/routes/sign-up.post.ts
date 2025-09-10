import { signUpSchema } from "#shared/validation/sign-up";

export default defineEventHandler(async (event) => {
  const data = await readValidatedBody(event, signUpSchema.parseAsync);

  return { message: `Hello from the server, ${data.name}!` };
});
