import type { FieldDef } from "./field-types";
import type { SignIn } from "@/lib/validations";

export const signInFields = [
  {
    kind: "email",
    name: "email",
    label: "Email",
    placeholder: "example@example.com",
  },
  {
    kind: "password",
    name: "password",
    label: "Password",
    placeholder: "••••••••",
  },
] satisfies FieldDef<SignIn>[];
