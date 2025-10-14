import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
}

const StatCard = ({ icon: Icon, label, value, change, trend = "neutral" }: StatCardProps) => {
  const trendColors = {
    up: "text-success",
    down: "text-destructive",
    neutral: "text-muted-foreground",
  };

  return (
    <Card className="p-6 bg-card border border-border hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono mb-2">{label}</p>
          <p className="text-4xl font-heading font-bold text-foreground mb-2">{value}</p>
          {change && (
            <p className={`text-xs font-medium ${trendColors[trend]}`}>
              {change}
            </p>
          )}
        </div>
        <div className="w-12 h-12 bg-black flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
