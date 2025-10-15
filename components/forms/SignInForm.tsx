import { signInSchema } from "@/lib/validations";
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
import { useForm } from "react-hook-form";
import { FIELD_NAMES, FIELD_TYPES } from "@/app/constants";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signInFields } from "./fields/SignInFields";

type signIn = z.output<typeof signInSchema>;

interface Props {
  onSubmit: (
    data: signIn
  ) => Promise<{ success: boolean; error?: string }> | void;
}

const signInForm = ({ onSubmit }: Props) => {
  const form = useForm<signIn>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        {signInFields.map((f) => (
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
                  <Input
                    required
                    type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                    {...f}
                    className="form-input"
                  />
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

export default signInForm;
