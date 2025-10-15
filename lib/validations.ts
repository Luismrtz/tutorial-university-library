import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3),
  email: z.email(),
  universityId: z.number(),
  universityCard: z.string().nonempty("University Card is Required"),
  password: z.string().min(8),
});

export const signInSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type SignIn = z.output<typeof signInSchema>;
export type SignUp = z.infer<typeof signUpSchema>;
