import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CheckCircle2Icon, FileTextIcon } from "lucide-react";
import { DocChatPanel } from "./_components/doc-chat-panel";
import { DocPreviewPanel } from "./_components/doc-preview-panel";
import { DocInsightPanel } from "./_components/doc-insight-panel";
import { mockDoc } from "./_components/mock";

export default async function DocDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="w-screen max-w-[1440px] px-4 sm:px-6 relative left-1/2 -translate-x-1/2">
      <div className="mb-5 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FileTextIcon className="size-5" />
            </span>
            <div className="min-w-0">
              <h1 className="truncate text-xl font-semibold tracking-tight sm:text-2xl">
                {mockDoc.title}
              </h1>
              <p className="mt-0.5 truncate text-sm text-muted-foreground">
                {mockDoc.description} · id: {id} · {mockDoc.uploadedAt}
              </p>
            </div>
          </div>
          <Badge className="bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20 dark:text-emerald-400">
            <CheckCircle2Icon className="size-3" />
            {mockDoc.status}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 pb-10 lg:grid-cols-[300px_minmax(0,1fr)_340px]">
        <section aria-label="Document chatbot">
          <DocChatPanel />
        </section>
        <section aria-label="PDF preview" className="min-w-0">
          <DocPreviewPanel />
        </section>
        <section aria-label="AI insights">
          <DocInsightPanel />
        </section>
      </div>
    </div>
  );
}
