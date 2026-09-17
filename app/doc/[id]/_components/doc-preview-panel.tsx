"use client";

import { PDFViewer } from "@embedpdf/react-pdf-viewer";
import { Card } from "@/components/ui/card";

// TODO(API): ganti dengan URL file asli dari API (prop src).
const DEMO_PDF_SRC = "https://snippet.embedpdf.com/ebook.pdf";

export function DocPreviewPanel() {
  return (
    <Card className="flex h-[calc(100vh-200px)] min-h-[560px] flex-col overflow-hidden py-0">
      <div className="min-h-0 flex-1">
        <PDFViewer
          config={{
            src: DEMO_PDF_SRC,
            theme: { preference: "system" },
            // Read-only: matikan semua aksi yang bisa merubah dokumen.
            // 'annotation' saja tidak cukup — tombol mode insert/form/redact
            // dan panel komentar/redact pakai kategori sendiri di skema UI.
            disabledCategories: [
              "annotation",
              "form",
              "redaction",
              "insert",
              "panel-comment",
              "panel-redaction",
            ],
          }}
          style={{ height: "100%" }}
        />
      </div>
    </Card>
  );
}
