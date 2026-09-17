"use client";

export function HomeFooter() {
  return (
    <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border bg-background">
      <p>&copy; {new Date().getFullYear()} Inversity. All rights reserved.</p>
    </footer>
  );
}
