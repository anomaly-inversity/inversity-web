"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, User } from "lucide-react";
import { FormGroup } from "@/components/ui/form/form-group";
import { PasswordInput } from "../../_components/password-input";
import {
  registerDefaultValues,
  registerSchema,
  type RegisterFormData,
} from "../schema";
import Link from "next/link";
import { AuthForm } from "../../_components/auth-form";

export function RegisterForm() {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: registerDefaultValues,
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log("Register data:", data);
  };

  return (
    <AuthForm
      title="Create an account"
      description="Enter your details below to create your account"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-4">
        <FormGroup
          label="Name"
          control={control}
          name="name"
          required
          render={({ field }) => (
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                className="pl-10"
                {...field}
                disabled={isSubmitting}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
            </div>
          )}
        />

        <FormGroup
          label="Email"
          control={control}
          name="email"
          required
          render={({ field }) => (
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="pl-10"
                {...field}
                disabled={isSubmitting}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
            </div>
          )}
        />

        <FormGroup
          label="Password"
          control={control}
          name="password"
          required
          render={({ field }) => (
            <PasswordInput
              id="password"
              placeholder="••••••••"
              {...field}
              disabled={isSubmitting}
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
            />
          )}
        />

        <FormGroup
          label="Confirm Password"
          control={control}
          name="password_confirmation"
          required
          render={({ field }) => (
            <PasswordInput
              id="password_confirmation"
              placeholder="••••••••"
              showAriaLabel="Show password confirmation"
              hideAriaLabel="Hide password confirmation"
              {...field}
              disabled={isSubmitting}
              aria-invalid={!!errors.password_confirmation}
              aria-describedby={
                errors.password_confirmation
                  ? "password_confirmation-error"
                  : undefined
              }
            />
          )}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Creating account..." : "Create account"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-primary hover:underline font-medium"
        >
          Sign in
        </Link>
      </p>
    </AuthForm>
  );
}
