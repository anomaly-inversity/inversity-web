import {
  BookOpenIcon,
  BrainIcon,
  FileCheckIcon,
  UsersIcon,
} from "lucide-react";
import {
  HomeFeatureCard,
  HomeFeatureCardProps,
} from "./_components/home-feature-card";
import { HomeHeader } from "./_components/home-header";
import { HomeHero } from "./_components/home-hero";
import { HomeFooter } from "./_components/home-footer";

const features: HomeFeatureCardProps[] = [
  {
    title: "Auth & Workspaces",
    description:
      "Create workspaces, invite team members with secure codes, and manage roles (Admin, Reviewer, User) for streamlined collaboration.",
    icon: UsersIcon,
  },
  {
    title: "Core Workflow",
    description:
      "Manage master data, submit documents to specific reviewers, and track the entire review lifecycle from request to approval.",
    icon: FileCheckIcon,
  },
  {
    title: "AI Document Processing",
    description:
      "Automated PDF reading, summarization, and advanced AI-generation detection to ensure document authenticity.",
    icon: BookOpenIcon,
  },
  {
    title: "Advanced AI & Review",
    description:
      "Get AI-recommended revisions, chat directly with your documents, and automatically verify if requested changes exist in new versions.",
    icon: BrainIcon,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HomeHeader />

      <main className="flex-1 flex flex-col items-center py-20 px-6">
        <HomeHero />

        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <HomeFeatureCard key={i} {...feature} />
          ))}
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}
