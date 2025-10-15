import type { FieldDef } from "./field-types";
import type { SignUp } from "@/lib/validations";

export const signUpFields = [
  {
    kind: "text",
    name: "fullName",
    label: "Full Name",
    placeholder: "Keanu Reeves",
  },
  {
    kind: "email",
    name: "email",
    label: "Email",
    placeholder: "example@example.com",
  },
  {
    kind: "number",
    name: "universityId",
    label: "University ID",
    inputMode: "numeric",
    description: "Parsed to a number on submit.",
  },
  {
    kind: "text",
    name: "universityCard",
    label: "University Card",
    placeholder: "Card code",
  },
  {
    kind: "password",
    name: "password",
    label: "Password",
    placeholder: "••••••••",
  },
] satisfies FieldDef<SignUp>[];
