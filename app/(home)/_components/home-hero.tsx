"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function HomeHero() {
  return (
    <div className="max-w-4xl w-full text-center space-y-8 mb-20">
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance leading-tight">
        AI-Powered Document <br />
        <span className="text-primary">Review Workflow</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
        Streamline your document processing with intelligent AI generation
        detection, automated summaries, and smart revision compliance checks.
      </p>
      <div className="flex items-center justify-center gap-4 pt-4">
        <Link href="/register">
          <Button size="lg" className="gap-2 rounded-full py-5 px-5">
            Get Started <ArrowRightIcon className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
