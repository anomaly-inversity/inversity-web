import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CheckCircle2Icon, FileTextIcon } from "lucide-react";
import { DocPreviewPanel } from "./_components/doc-preview-panel";
import { DocSidePanel } from "./_components/doc-side-panel";
import { mockDoc } from "./_components/mock";

export default async function DocDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="w-screen max-w-[1440px] px-4 sm:px-6 relative left-1/2 -translate-x-1/2">
      <div className="mb-5">
        <h1 className="truncate text-xl font-semibold tracking-tight sm:text-2xl">
          {mockDoc.title}
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 pb-10 lg:grid-cols-[minmax(0,1fr)_400px]">
        <section aria-label="PDF preview" className="min-w-0 order-first">
          <DocPreviewPanel />
        </section>
        <section aria-label="Assistant">
          <DocSidePanel />
        </section>
      </div>
    </div>
  );
}
