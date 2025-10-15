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
    <Card className="p-6 bg-card border-0 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono mb-3">{label}</p>
          <p className="text-4xl font-heading font-bold text-foreground mb-2">{value}</p>
          {change && (
            <p className={`text-sm font-medium ${trendColors[trend]}`}>
              {change}
            </p>
          )}
        </div>
        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center">
          <Icon className="w-7 h-7 text-primary" />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
