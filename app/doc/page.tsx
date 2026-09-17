import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FileIcon,
  FilesIcon,
  MoreVerticalIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import moment from "moment";
import Link from "next/link";

const sortOptions = [
  {
    label: "Newest",
    value: "created_at-desc",
  },
  {
    label: "Oldest",
    value: "created_at-asc",
  },
  {
    label: "Title (ASC)",
    value: "title-asc",
  },
  {
    label: "Title (DESC)",
    value: "title-desc",
  },
];

export default function DocPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold">My Documents</div>
        <Button
          className="cursor-pointer"
          render={
            <Link href="/doc/new">
              <PlusIcon className="size-4" />
              Create New
            </Link>
          }
        ></Button>
      </div>

      <div className="flex md:items-center gap-4 flex-wrap">
        <div className="relative md:flex-1 w-full">
          <Input placeholder="Search document..." className="pl-10" />
          <button className="absolute top-0 left-0 bottom-0 w-10 flex items-center justify-center outline-none">
            <SearchIcon className="size-4 text-muted-foreground" />
          </button>
        </div>
        <Select>
          <SelectTrigger>
            <SelectValue className="w-40" placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option, i) => (
              <SelectItem key={i} value={option.value} label={option.label}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card className="relative overflow-hidden py-16 flex items-center justify-center rounded-2xl">
        <div className="relative text-center px-6">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-lg shadow-primary/25 ring-1 ring-primary/20">
            <FilesIcon className="size-7" />
          </div>
          <h3 className="text-base font-semibold tracking-tight">
            No documents yet
          </h3>
          <div className="mt-1.5 text-sm text-muted-foreground">
            You don{"'"}t have any documents yet. Start with your first one.
          </div>
          <Button
            className="mt-6 shadow-sm shadow-primary/20"
            render={
              <Link href="/doc/new">
                <PlusIcon className="size-4" /> New Document
              </Link>
            }
          ></Button>
        </div>
      </Card>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        {Array.from({ length: 9 }).map((_, i) => (
          <Link
            href="/doc/1"
            key={i}
            className="group block transition hover:scale-105"
          >
            <Card>
              <CardContent className="relative">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <FileIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dokumen {i + 1}</h3>
                <p className="text-muted-foreground text-xs">
                  {moment().format("DD MMMM YYYY")}
                </p>

                <div className="absolute top-0 right-2 z-1 opacity-0 transition group-hover:opacity-100">
                  <Button variant="ghost" size="icon">
                    <MoreVerticalIcon />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-between md:flex-row flex-col">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Records per page
          </span>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="9" />
            </SelectTrigger>
            <SelectContent>
              {[9, 18, 30, 60].map((v) => (
                <SelectItem key={v} value={v}>
                  {v}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
