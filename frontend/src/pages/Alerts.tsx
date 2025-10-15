import DashboardLayout from "@/components/layout/DashboardLayout";
import AlertCard from "@/components/alerts/AlertCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Filter } from "lucide-react";

const recentAlerts = [
  {
    severity: "high" as const,
    title: "Massive UPI Fraud Detected",
    source: "Predictive Engine",
    timestamp: "2 minutes ago",
    description: "Unusual transaction pattern detected in Mumbai region affecting 230+ victims"
  },
  {
    severity: "high" as const,
    title: "Phishing Campaign Active",
    source: "Bank Report",
    timestamp: "15 minutes ago",
    description: "Large-scale phishing attack targeting ICICI Bank customers via SMS"
  },
  {
    severity: "medium" as const,
    title: "Investment Scam Alert",
    source: "Citizen Complaint",
    timestamp: "1 hour ago",
    description: "Multiple complaints about fake cryptocurrency investment platform"
  },
  {
    severity: "medium" as const,
    title: "Job Fraud Pattern Identified",
    source: "Predictive Engine",
    timestamp: "2 hours ago",
    description: "Recurring pattern of fake job offers in IT sector across Delhi NCR"
  },
  {
    severity: "low" as const,
    title: "OTP Fraud Attempt Blocked",
    source: "Bank API",
    timestamp: "3 hours ago",
    description: "Automated system blocked suspicious OTP sharing attempt"
  },
];

const Alerts = () => {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-1">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Alerts & Notifications</h1>
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter Alerts
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Recent Alerts</h2>
              <span className="ml-auto text-sm text-muted-foreground">{recentAlerts.length} active</span>
            </div>
            
            {recentAlerts.map((alert, index) => (
              <AlertCard key={index} {...alert} />
            ))}
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Notification Settings</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notif" className="font-medium">Email Notifications</Label>
                    <p className="text-xs text-muted-foreground">Receive alerts via email</p>
                  </div>
                  <Switch id="email-notif" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="sms-notif" className="font-medium">SMS Alerts</Label>
                    <p className="text-xs text-muted-foreground">Critical alerts via SMS</p>
                  </div>
                  <Switch id="sms-notif" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="dashboard-notif" className="font-medium">Dashboard Pop-ups</Label>
                    <p className="text-xs text-muted-foreground">Show alerts on dashboard</p>
                  </div>
                  <Switch id="dashboard-notif" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="api-notif" className="font-medium">API Webhooks</Label>
                    <p className="text-xs text-muted-foreground">Send to external systems</p>
                  </div>
                  <Switch id="api-notif" />
                </div>
              </div>

              <Button className="w-full mt-6">Save Preferences</Button>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Alert Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Today</span>
                  <span className="font-semibold text-foreground">87 alerts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">This Week</span>
                  <span className="font-semibold text-foreground">523 alerts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Resolved</span>
                  <span className="font-semibold text-success">412</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Pending</span>
                  <span className="font-semibold text-warning">111</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Alerts;
