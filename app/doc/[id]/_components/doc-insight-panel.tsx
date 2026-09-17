"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { mockDetector, mockSummary } from "./mock";
import {
  BotIcon,
  CheckCircle2Icon,
  CopyIcon,
  ListChecksIcon,
  RefreshCwIcon,
  ScanSearchIcon,
  SparklesIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = "summary" | "detector";

function ScoreRing({ score }: { score: number }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative size-24 shrink-0">
      <svg viewBox="0 0 84 84" className="size-24 -rotate-90">
        <circle
          cx="42"
          cy="42"
          r={r}
          fill="none"
          strokeWidth="8"
          className="stroke-muted"
        />
        <circle
          cx="42"
          cy="42"
          r={r}
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * score) / 100}
          className="stroke-emerald-500"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold tabular-nums">{score}%</span>
        <span className="text-[10px] text-muted-foreground">AI</span>
      </div>
    </div>
  );
}

export function DocInsightPanel() {
  const [tab, setTab] = useState<Tab>("summary");

  return (
    <Card className="flex h-[calc(100vh-220px)] min-h-[560px] flex-col overflow-hidden py-0">
      <div className="px-4 pt-4">
        <div className="grid grid-cols-2 gap-1 rounded-xl bg-muted/70 p-1">
          {(
            [
              { id: "summary", label: "AI Summary", icon: SparklesIcon },
              { id: "detector", label: "AI Detector", icon: ScanSearchIcon },
            ] as const
          ).map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={cn(
                "flex cursor-pointer items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-medium transition",
                tab === t.id
                  ? "bg-background text-foreground shadow-sm ring-1 ring-border"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <t.icon className="size-3.5" />
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === "summary" ? (
        <CardContent className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
          <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-3.5">
            <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
              <SparklesIcon className="size-3.5" />
              TL;DR
            </p>
            <p className="mt-2 text-[13px] leading-relaxed">{mockSummary.tldr}</p>
          </div>

          <div>
            <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              <ListChecksIcon className="size-3.5" />
              Key points
            </p>
            <ul className="mt-2.5 space-y-2.5">
              {mockSummary.points.map((p) => (
                <li key={p} className="flex gap-2 text-[13px] leading-relaxed">
                  <CheckCircle2Icon className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Keywords
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {mockSummary.keywords.map((k) => (
                <Badge key={k} variant="secondary">
                  {k}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <CopyIcon className="size-3.5" />
              Copy
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <RefreshCwIcon className="size-3.5" />
              Regenerate
            </Button>
          </div>
          <p className="text-[11px] text-muted-foreground">
            Mock summary — prompt + model version bakal tampil di sini pas API
            real nyambung.
          </p>
        </CardContent>
      ) : (
        <CardContent className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
          <div className="flex items-center gap-4 rounded-xl border border-border p-3.5">
            <ScoreRing score={mockDetector.score} />
            <div className="min-w-0">
              <Badge className="bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20 dark:text-emerald-400">
                <BotIcon className="size-3" />
                {mockDetector.verdict}
              </Badge>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                {mockDetector.label} {mockDetector.score}% — mayoritas tulisan
                manusia, aman.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Per section
            </p>
            <div className="mt-2.5 space-y-3">
              {mockDetector.sections.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium">{s.name}</span>
                    <span className="tabular-nums text-muted-foreground">
                      {s.ai}% AI
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className={cn(
                        "h-full rounded-full",
                        s.ai >= 15 ? "bg-amber-500" : "bg-emerald-500"
                      )}
                      style={{ width: `${s.human}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl bg-muted/50 px-3.5 py-2.5 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-500" /> Human
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-amber-500" /> Mixed
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-destructive" /> AI
            </span>
          </div>
          <p className="text-[11px] text-muted-foreground">
            Mock detector — threshold & model version nyusul.
          </p>
        </CardContent>
      )}
    </Card>
  );
}
