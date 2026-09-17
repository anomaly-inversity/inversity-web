"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { mockDoc } from "./mock";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
  FileTextIcon,
  MaximizeIcon,
  MinusIcon,
  PlusIcon,
} from "lucide-react";

function FakePage({ page }: { page: number }) {
  return (
    <div className="mx-auto w-full max-w-[560px] rounded-lg bg-white p-8 text-neutral-800 shadow-[0_2px_24px_-8px_rgba(0,0,0,0.25)] ring-1 ring-black/5 dark:bg-neutral-100">
      <p className="text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">
        Q3 Marketing Report · p. {page}
      </p>
      <div className="mt-3 h-4 w-3/4 rounded bg-neutral-900/80" />
      <div className="mt-2 h-4 w-1/2 rounded bg-neutral-900/20" />
      <div className="mt-6 space-y-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="h-2 rounded bg-neutral-200"
            style={{ width: `${[96, 100, 92, 98, 84, 100, 90, 97, 72][i]}%` }}
          />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {["$1.24M", "-11% CAC", "+18% QoQ"].map((s) => (
          <div
            key={s}
            className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-3 text-center text-xs font-semibold"
          >
            {s}
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-2 rounded bg-neutral-200"
            style={{ width: `${[100, 94, 88, 96, 60][i]}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function DocPreviewPanel() {
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);

  return (
    <Card className="flex h-[calc(100vh-200px)] min-h-[560px] flex-col overflow-hidden py-0">
      <div className="flex flex-wrap items-center gap-2 px-4 pt-3.5 pb-3">
        <span className="flex size-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
          <FileTextIcon className="size-4" />
        </span>
        <div className="mr-auto min-w-0">
          <p className="truncate text-sm font-semibold">{mockDoc.title}</p>
          <p className="text-xs text-muted-foreground">
            {mockDoc.pages} pages · {mockDoc.size}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Previous page"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeftIcon className="size-4" />
          </Button>
          <span className="min-w-14 text-center text-xs tabular-nums text-muted-foreground">
            {page} / {mockDoc.pages}
          </span>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Next page"
            onClick={() => setPage((p) => Math.min(mockDoc.pages, p + 1))}
          >
            <ChevronRightIcon className="size-4" />
          </Button>
        </div>
        <Separator orientation="vertical" className="mx-1 h-5" />
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Zoom out"
            onClick={() => setZoom((z) => Math.max(60, z - 10))}
          >
            <MinusIcon className="size-3.5" />
          </Button>
          <span className="min-w-11 text-center text-xs tabular-nums text-muted-foreground">
            {zoom}%
          </span>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Zoom in"
            onClick={() => setZoom((z) => Math.min(160, z + 10))}
          >
            <PlusIcon className="size-3.5" />
          </Button>
        </div>
        <Button variant="outline" size="sm">
          <DownloadIcon className="size-3.5" />
          <span className="hidden sm:inline">Download</span>
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Fullscreen">
          <MaximizeIcon className="size-3.5" />
        </Button>
      </div>
      <Separator />

      <div className="flex-1 overflow-y-auto bg-muted/40 p-4 sm:p-6">
        <div style={{ fontSize: `${zoom / 100}rem` }}>
          <FakePage page={page} />
          <div className="mx-auto mt-4 w-full max-w-[560px] opacity-60">
            <FakePage page={Math.min(mockDoc.pages, page + 1)} />
          </div>
        </div>
        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          Mock preview — PDF renderer real (react-pdf / iframe) nyusul pas API
          siap.
        </p>
      </div>
    </Card>
  );
}
