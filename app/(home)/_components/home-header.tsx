"use client";

import { Button } from "@/components/ui/button";
import { BrainIcon } from "lucide-react";
import Link from "next/link";

export function HomeHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <BrainIcon className="h-6 w-6 text-primary" />
        <span className="font-bold text-xl tracking-tight">Inversity</span>
      </div>
      <nav className="flex items-center gap-4">
        <Link href="/login">
          <Button variant="ghost">Log in</Button>
        </Link>
        <Link href="/register">
          <Button>Sign up</Button>
        </Link>
      </nav>
    </header>
  );
}
