"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { FormGroup } from "@/components/ui/form/form-group";
import { PasswordInput } from "../../_components/password-input";
import { loginDefaultValues, loginSchema, type LoginFormData } from "../schema";
import Link from "next/link";
import { AuthForm } from "../../_components/auth-form";

export function LoginForm() {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginDefaultValues,
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login data:", data);
  };

  return (
    <AuthForm
      title="Sign in"
      description="Enter your email and password to access your account"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-4">
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
      </div>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="text-primary hover:underline font-medium"
        >
          Sign up
        </Link>
      </p>
    </AuthForm>
  );
}
