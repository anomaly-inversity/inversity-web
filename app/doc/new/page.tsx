"use client";

import { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormGroup } from "@/components/ui/form/form-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { newDocumentDefaultValues, newDocumentSchema } from "./schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  AlignLeftIcon,
  ArrowLeftIcon,
  EyeIcon,
  FilePlus2Icon,
  FileTextIcon,
  FileUpIcon,
  SaveIcon,
  TypeIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function NewAppPage() {
  const { control, handleSubmit, watch, setValue } = useForm({
    resolver: zodResolver(newDocumentSchema),
    defaultValues: newDocumentDefaultValues,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const watchedFile = watch("file");
  const watchedDescription = watch("description") ?? "";

  const pickFile = (files: FileList | null) => {
    const file = files?.[0];
    if (!file) return;
    setValue("file", file.name, { shouldValidate: true, shouldDirty: true });
  };

  const clearFile = () => {
    setValue("file", "", { shouldValidate: true, shouldDirty: true });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = handleSubmit((values) => {
    // TODO: wire to upload action
    console.log(values);
  });

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 pb-10">
      <div className="space-y-5">
        <Button
          variant="ghost"
          size="sm"
          className="w-fit -ml-2 text-muted-foreground hover:text-foreground"
          render={
            <Link href="/doc">
              <ArrowLeftIcon className="size-4" />
              Back to documents
            </Link>
          }
        />

        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            New Document
          </h1>
          <Badge
            className="inline-flex items-center gap-1.5 text-xs"
            variant="secondary"
          >
            <FileTextIcon className="size-3.5" />
            PDF only · max 25 MB
          </Badge>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <Card className="overflow-hidden shadow-sm">
          <CardContent className="space-y-7 pt-6">
            <FormGroup
              control={control}
              name="title"
              label="Title"
              required
              render={({ field }) => (
                <div className="relative">
                  <TypeIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="e.g. Q3 Marketing Report"
                    className="h-10 pl-9"
                    {...field}
                  />
                </div>
              )}
            />

            <FormGroup
              control={control}
              name="description"
              label="Description"
              render={({ field }) => (
                <div className="space-y-2">
                  <div className="relative">
                    <AlignLeftIcon className="pointer-events-none absolute top-3 left-3 size-4 text-muted-foreground" />
                    <Textarea
                      className="min-h-32 resize-y pl-9"
                      placeholder="What is this document about? Key topics, audience, version…"
                      maxLength={500}
                      {...field}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Optional — a short summary works best.</span>
                    <span className="tabular-nums">
                      {watchedDescription.length}/500
                    </span>
                  </div>
                </div>
              )}
            />

            <FormGroup
              control={control}
              name="file"
              label="File"
              required
              render={() => (
                <div className="space-y-3">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,application/pdf"
                    className="sr-only"
                    onChange={(e) => pickFile(e.target.files)}
                  />

                  {!watchedFile ? (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragOver(true);
                      }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setDragOver(false);
                        pickFile(e.dataTransfer.files);
                      }}
                      className={cn(
                        "group flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-9 text-center transition-colors outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50",
                        dragOver
                          ? "border-primary bg-primary/5"
                          : "border-border bg-muted/30 hover:border-primary/50 hover:bg-muted/50",
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-11 items-center justify-center rounded-full ring-1 transition-colors",
                          dragOver
                            ? "bg-primary text-primary-foreground ring-primary"
                            : "bg-primary/10 text-primary ring-primary/20 group-hover:bg-primary group-hover:text-primary-foreground",
                        )}
                      >
                        <FileUpIcon className="size-5" />
                      </span>
                      <span className="text-sm font-medium">
                        {dragOver ? (
                          <>Drop your PDF here</>
                        ) : (
                          <>
                            Drag & drop your PDF here, or{" "}
                            <span className="text-primary underline-offset-4 group-hover:underline">
                              browse files
                            </span>
                          </>
                        )}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        PDF up to 25 MB — text-based PDFs give the best results
                      </span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-3 pl-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                        <FileTextIcon className="size-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {watchedFile}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Ready to upload · click Preview to check it first
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <EyeIcon className="size-3.5" />
                          Preview
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon-sm"
                          aria-label="Remove file"
                          onClick={clearFile}
                        >
                          <XIcon className="size-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            />
          </CardContent>
        </Card>

        <div className="flex mt-6 flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            By creating this document you agree it will be processed for search
            & chat.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              render={<Link href="/doc">Cancel</Link>}
            />
            <Button type="submit" size="lg" className="min-w-40">
              <SaveIcon className="size-4" />
              Create Document
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
