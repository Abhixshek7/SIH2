import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock } from "lucide-react";

interface AlertCardProps {
  severity: "high" | "medium" | "low";
  title: string;
  source: string;
  timestamp: string;
  description: string;
}

const AlertCard = ({ severity, title, source, timestamp, description }: AlertCardProps) => {
  const severityConfig = {
    high: { color: "bg-destructive text-destructive-foreground", label: "High" },
    medium: { color: "bg-warning text-warning-foreground", label: "Medium" },
    low: { color: "bg-success text-success-foreground", label: "Low" },
  };

  const config = severityConfig[severity];

  return (
    <Card className="p-4 border-border hover:border-primary/50 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className={`w-5 h-5 ${severity === 'high' ? 'text-destructive' : severity === 'medium' ? 'text-warning' : 'text-success'}`} />
          <h3 className="font-semibold text-foreground">{title}</h3>
        </div>
        <Badge className={config.color}>{config.label}</Badge>
      </div>
      
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
        <span>Source: {source}</span>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{timestamp}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Button size="sm" variant="outline" className="flex-1">
          View Details
        </Button>
        <Button size="sm" className="flex-1">
          Acknowledge
        </Button>
      </div>
    </Card>
  );
};

export default AlertCard;
