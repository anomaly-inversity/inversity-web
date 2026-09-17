"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  mockDetector,
  mockDetectorPages,
  mockSummary,
  type DetectorPage,
} from "./mock";
import {
  BotIcon,
  CheckCircle2Icon,
  ChevronRightIcon,
  CopyIcon,
  FileTextIcon,
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

function pageTone(ai: number) {
  if (ai >= 30) return "bg-destructive";
  if (ai >= 15) return "bg-amber-500";
  return "bg-emerald-500";
}

export function SummaryBody() {
  return (
    <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
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
        Mock summary — prompt + model version bakal tampil di sini pas API real
        nyambung.
      </p>
    </div>
  );
}

export function DetectorBody() {
  const [selected, setSelected] = useState<DetectorPage | null>(null);

  return (
    <>
      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
        <div className="flex items-center gap-4 rounded-xl border border-border p-3.5">
          <ScoreRing score={mockDetector.score} />
          <div className="min-w-0">
            <Badge className="bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20 dark:text-emerald-400">
              <BotIcon className="size-3" />
              {mockDetector.verdict}
            </Badge>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
              {mockDetector.label} {mockDetector.score}% — klik halaman di
              bawah buat lihat paragraf AI-nya.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Per halaman — klik buat detail
          </p>
          <div className="mt-2.5 space-y-2">
            {mockDetectorPages.map((p) => {
              const aiCount = p.paragraphs.filter((x) => x.ai).length;
              return (
                <button
                  key={p.page}
                  type="button"
                  onClick={() => setSelected(p)}
                  className="w-full cursor-pointer rounded-xl border border-border p-3 text-left transition hover:border-primary/40 hover:bg-muted/40"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-bold tabular-nums">
                      {p.page}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[13px] font-medium">
                        {p.title}
                      </span>
                      <span className="text-[11px] text-muted-foreground">
                        {aiCount > 0
                          ? `${aiCount} paragraf terdeteksi AI`
                          : "Tidak ada paragraf AI"}
                      </span>
                    </span>
                    <Badge variant="secondary" className="shrink-0 tabular-nums">
                      {p.ai}% AI
                    </Badge>
                    <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className={cn("h-full rounded-full", pageTone(p.ai))}
                      style={{ width: `${p.ai}%` }}
                    />
                  </div>
                </button>
              );
            })}
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
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileTextIcon className="size-4 text-primary" />
              Halaman {selected?.page} — {selected?.title}
            </DialogTitle>
            <DialogDescription>
              {selected?.ai}% AI ·{" "}
              {selected?.paragraphs.filter((x) => x.ai).length ?? 0} paragraf
              terdeteksi AI. Paragraf AI disorot merah.
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[50vh] space-y-2.5 overflow-y-auto">
            {selected?.paragraphs.map((pg) => (
              <div
                key={pg.id}
                className={cn(
                  "rounded-xl border p-3 text-[13px] leading-relaxed",
                  pg.ai
                    ? "border-destructive/30 bg-destructive/[0.06]"
                    : "border-border bg-muted/30"
                )}
              >
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <Badge
                    variant={pg.ai ? "destructive" : "secondary"}
                    className="tabular-nums"
                  >
                    {pg.ai ? `AI ${pg.score}%` : `Human ${100 - pg.score}%`}
                  </Badge>
                  <span className="text-[11px] tabular-nums text-muted-foreground">
                    {pg.id}
                  </span>
                </div>
                <p>{pg.text}</p>
              </div>
            ))}
          </div>
          <DialogFooter showCloseButton />
        </DialogContent>
      </Dialog>
    </>
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
        <CardContent className="flex min-h-0 flex-1 flex-col px-0 py-0">
          <SummaryBody />
        </CardContent>
      ) : (
        <CardContent className="flex min-h-0 flex-1 flex-col px-0 py-0">
          <DetectorBody />
        </CardContent>
      )}
    </Card>
  );
}
