import { LucideIcon } from "lucide-react";

export interface HomeFeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function HomeFeatureCard({
  title,
  description,
  icon: Icon,
}: HomeFeatureCardProps) {
  return (
    <div className="bg-card text-card-foreground p-8 rounded-2xl border border-border shadow-sm">
      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
