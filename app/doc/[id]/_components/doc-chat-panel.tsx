"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { mockChatMessages, mockSuggestions } from "./mock";
import { BotIcon, SendIcon, SparklesIcon, UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ChatBody({ compact = false }: { compact?: boolean }) {
  const [messages, setMessages] = useState(mockChatMessages);
  const [value, setValue] = useState("");

  const send = (text: string) => {
    const clean = text.trim();
    if (!clean) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), role: "user" as const, text: clean, time: "now" },
      {
        id: Date.now() + 1,
        role: "assistant" as const,
        text: "Catat — ini mockup statis. Nanti jawaban real dari chatbot document (RAG) muncul di sini.",
        time: "now",
      },
    ]);
    setValue("");
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div
        className={cn(
          "flex-1 space-y-4 overflow-y-auto px-4 py-4",
          compact && "space-y-3"
        )}
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={cn(
              "flex gap-2.5",
              m.role === "user" && "flex-row-reverse"
            )}
          >
            <span
              className={cn(
                "flex size-7 shrink-0 items-center justify-center rounded-lg",
                m.role === "assistant"
                  ? "bg-primary/10 text-primary"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {m.role === "assistant" ? (
                <BotIcon className="size-3.5" />
              ) : (
                <UserIcon className="size-3.5" />
              )}
            </span>
            <div
              className={cn(
                "max-w-[85%] rounded-xl px-3 py-2 text-[13px] leading-relaxed",
                m.role === "assistant"
                  ? "rounded-tl-sm bg-muted/70"
                  : "rounded-tr-sm bg-primary text-primary-foreground"
              )}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3 px-4 pb-4">
        <div className="flex flex-wrap gap-1.5">
          {mockSuggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => send(s)}
              className="cursor-pointer rounded-full border border-border bg-background px-2.5 py-1 text-[11px] text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            >
              {s}
            </button>
          ))}
        </div>
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            send(value);
          }}
        >
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Tanya soal dokumen…"
            className="h-9"
          />
          <Button type="submit" size="icon" aria-label="Send">
            <SendIcon className="size-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}

export function DocChatPanel() {
  return (
    <Card className="flex h-[calc(100vh-220px)] min-h-[560px] flex-col overflow-hidden py-0">
      <div className="flex items-center gap-3 px-4 pt-4 pb-3">
        <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <BotIcon className="size-4.5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">Doc Chatbot</p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Online · mock mode
          </p>
        </div>
        <Badge variant="secondary">
          <SparklesIcon className="size-3" />
          RAG
        </Badge>
      </div>
      <Separator />
      <ChatBody />
    </Card>
  );
}
