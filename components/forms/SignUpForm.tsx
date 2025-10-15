import { signUpSchema } from "@/lib/validations";
import React from "react";
import z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { FIELD_NAMES, FIELD_TYPES } from "@/app/constants";
import { signUpFields } from "./fields/SignUpFields";
import FileUpload from "../FileUpload";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type SignUp = z.output<typeof signUpSchema>;

interface Props {
  onSubmit: (
    data: SignUp
  ) => Promise<{ success: boolean; error?: string }> | void;
}

const SignUpForm = ({ onSubmit }: Props) => {
  const form = useForm<SignUp>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        {signUpFields.map((f) => (
          <FormField
            key={f.name}
            control={form.control}
            name={f.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">
                  {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                </FormLabel>
                <FormControl>
                  {field.name === "universityCard" ? (
                    <FileUpload />
                  ) : (
                    <Input
                      required
                      type={FIELD_TYPES[f.name as keyof typeof FIELD_TYPES]}
                      {...f}
                      className="form-input"
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="form-btn">
          Sign Up
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
