import { z } from "zod";

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be atleast 8 Characters Long" })
      .max(32, { message: "Password must be less than 32 Characters Long" }),
  });

  export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>;
