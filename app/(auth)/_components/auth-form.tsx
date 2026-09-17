"use client";

import { ReactNode, SubmitEventHandler } from "react";

export interface AuthFormProps {
  title: string;
  description: string;
  onSubmit?: SubmitEventHandler<HTMLFormElement> | undefined;
  children: ReactNode;
}

export function AuthForm({
  title,
  description,
  onSubmit,
  children,
}: AuthFormProps) {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-md space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {children}
    </form>
  );
}
