// components/forms/fields/field-types.ts
import type { FieldPath, FieldValues } from "react-hook-form";

type FieldBase<T extends FieldValues> = {
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  description?: string;
};

type FieldType = "text" | "email" | "password" | "number";

type TextField<T extends FieldValues> = FieldBase<T> & {
  kind: FieldType;
  inputMode?: "text" | "email" | "numeric" | "search" | "tel" | "url";
};

type SelectField<T extends FieldValues> = FieldBase<T> & {
  kind: "select";
  options: { value: string; label: string }[];
};

type FileField<T extends FieldValues> = FieldBase<T> & {
  kind: "file";
  accept?: string;
};

export type FieldDef<T extends FieldValues> =
  | TextField<T>
  | SelectField<T>
  | FileField<T>;
