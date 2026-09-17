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

export default function MePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold">My Documents</div>
        <Button
          className="cursor-pointer"
          render={
            <Link href="/app/new">
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
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option, i) => (
              <SelectItem key={i} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card className="py-20 flex items-center justify-center">
        <div className="text-center">
          <FilesIcon className="size-40 text-primary mb-10 inline" />
          <div className="text-muted-foreground">
            You don{"'"}t have any documents yet.
          </div>
          <Button
            className="flex-inline mt-5"
            render={
              <Link href="/app/new">
                <PlusIcon className="size-4" /> New Document
              </Link>
            }
          ></Button>
        </div>
      </Card>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        {Array.from({ length: 9 }).map((_, i) => (
          <Card key={i} className="h-40 group">
            <CardContent className="relative">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <FileIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dokumen {i + 1}</h3>
              <p className="text-muted-foreground text-xs">
                {moment().format("DD MMMM YYYY")}
              </p>

              <div className="absolute top-0 right-2 opacity-0 transition group-hover:opacity-100">
                <Button variant="ghost" size="icon">
                  <MoreVerticalIcon />
                </Button>
              </div>
            </CardContent>
          </Card>
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
