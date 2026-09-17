import { HomeHeader } from "../(home)/_components/home-header";
import { HomeFooter } from "../(home)/_components/home-footer";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HomeHeader />

      <div className="max-w-5xl w-full px-4 mx-auto py-10 min-h-screen">
        {children}
      </div>

      <HomeFooter />
    </div>
  );
}
