"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChatBody } from "./doc-chat-panel";
import { DetectorBody, SummaryBody } from "./doc-insight-panel";
import {
  BotIcon,
  ScanSearchIcon,
  SparklesIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type SideTab = "chat" | "summary" | "detector";

const TABS: { id: SideTab; label: string; icon: typeof BotIcon }[] = [
  { id: "chat", label: "Chat", icon: BotIcon },
  { id: "summary", label: "Summary", icon: SparklesIcon },
  { id: "detector", label: "Detector", icon: ScanSearchIcon },
];

export function DocSidePanel() {
  const [tab, setTab] = useState<SideTab>("chat");

  return (
    <Card className="flex h-[calc(100vh-220px)] min-h-[560px] flex-col overflow-hidden py-0">
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-center gap-2">
          <p className="mr-auto text-sm font-semibold">Assistant</p>
          <Badge variant="secondary" className="gap-1">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Online
          </Badge>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1 rounded-xl bg-muted/70 p-1">
          {TABS.map((t) => (
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
      <Separator />

      <div className="flex min-h-0 flex-1 flex-col">
        {tab === "chat" && <ChatBody compact />}
        {tab === "summary" && <SummaryBody />}
        {tab === "detector" && <DetectorBody />}
      </div>
    </Card>
  );
}
