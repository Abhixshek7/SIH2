import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, CheckCircle, UserPlus, FileText } from "lucide-react";

const alerts = [
  {
    id: "ALT-2024-001",
    type: "UPI Fraud",
    location: "Mumbai, Maharashtra",
    severity: "high",
    status: "Active",
    timestamp: "2024-01-15 14:23",
    assignedTo: "Team Alpha"
  },
  {
    id: "ALT-2024-002",
    type: "Phishing Campaign",
    location: "Delhi NCR",
    severity: "high",
    status: "Active",
    timestamp: "2024-01-15 13:45",
    assignedTo: "Team Beta"
  },
  {
    id: "ALT-2024-003",
    type: "Investment Scam",
    location: "Bangalore, Karnataka",
    severity: "medium",
    status: "Under Investigation",
    timestamp: "2024-01-15 12:10",
    assignedTo: "Team Gamma"
  },
  {
    id: "ALT-2024-004",
    type: "Job Fraud",
    location: "Pune, Maharashtra",
    severity: "medium",
    status: "Active",
    timestamp: "2024-01-15 11:30",
    assignedTo: "Unassigned"
  },
  {
    id: "ALT-2024-005",
    type: "OTP Fraud",
    location: "Hyderabad, Telangana",
    severity: "low",
    status: "Resolved",
    timestamp: "2024-01-15 10:15",
    assignedTo: "Team Delta"
  },
];

const LawEnforcement = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-2">
          <h1 className="text-3xl font-bold text-foreground mb-2">Law Enforcement Interface</h1>
 
        </div>

        <Card className="p-6 bg-card border-border mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by Alert ID, Location, Type..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Alert ID</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Type</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Location</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Severity</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Timestamp</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {alerts.map((alert) => (
                  <tr key={alert.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4">
                      <span className="font-mono text-sm text-primary">{alert.id}</span>
                    </td>
                    <td className="py-3 px-4 text-foreground">{alert.type}</td>
                    <td className="py-3 px-4 text-foreground">{alert.location}</td>
                    <td className="py-3 px-4">
                      <Badge className={
                        alert.severity === 'high' 
                          ? 'bg-destructive text-destructive-foreground'
                          : alert.severity === 'medium'
                          ? 'bg-warning text-warning-foreground'
                          : 'bg-success text-success-foreground'
                      }>
                        {alert.severity.toUpperCase()}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="outline">{alert.status}</Badge>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground text-sm">{alert.timestamp}</td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" title="View Details">
                          <FileText className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" title="Acknowledge">
                          <CheckCircle className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" title="Assign Team">
                          <UserPlus className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default LawEnforcement;
