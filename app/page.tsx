import Link from "next/link";
import { ArrowRight, BookOpen, Brain, FileCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl tracking-tight">Inversity</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost">Log in</Button>
          </Link>
          <Link href="/register">
            <Button>Sign up</Button>
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center py-20 px-6">
        <div className="max-w-4xl w-full text-center space-y-8 mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance leading-tight">
            AI-Powered Document <br />
            <span className="text-primary">Review Workflow</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Streamline your document processing with intelligent AI generation
            detection, automated summaries, and smart revision compliance
            checks.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="/register">
              <Button size="lg" className="gap-2 rounded-full py-5 px-5">
                Get Started <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="bg-card text-card-foreground p-8 rounded-2xl border border-border shadow-sm">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Auth & Workspaces</h3>
            <p className="text-muted-foreground leading-relaxed">
              Create workspaces, invite team members with secure codes, and
              manage roles (Admin, Reviewer, User) for streamlined
              collaboration.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-card text-card-foreground p-8 rounded-2xl border border-border shadow-sm">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <FileCheck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Core Workflow</h3>
            <p className="text-muted-foreground leading-relaxed">
              Manage master data, submit documents to specific reviewers, and
              track the entire review lifecycle from request to approval.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-card text-card-foreground p-8 rounded-2xl border border-border shadow-sm">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              AI Document Processing
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Automated PDF reading, Langchain-powered summarization, and
              advanced AI-generation detection to ensure document authenticity.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-card text-card-foreground p-8 rounded-2xl border border-border shadow-sm">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Advanced AI & Review</h3>
            <p className="text-muted-foreground leading-relaxed">
              Get AI-recommended revisions, chat directly with your documents,
              and automatically verify if requested changes exist in new
              versions.
            </p>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border bg-background">
        <p>&copy; {new Date().getFullYear()} Inversity. All rights reserved.</p>
      </footer>
    </div>
  );
}
