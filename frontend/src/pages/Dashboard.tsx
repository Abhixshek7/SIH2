import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import { AlertTriangle, Shield, DollarSign, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const complaintsData = [
  { day: "Mon", complaints: 145 },
  { day: "Tue", complaints: 178 },
  { day: "Wed", complaints: 162 },
  { day: "Thu", complaints: 203 },
  { day: "Fri", complaints: 187 },
  { day: "Sat", complaints: 134 },
  { day: "Sun", complaints: 98 },
];

const predictionData = [
  { month: "Jan", accuracy: 82 },
  { month: "Feb", accuracy: 85 },
  { month: "Mar", accuracy: 88 },
  { month: "Apr", accuracy: 91 },
  { month: "May", accuracy: 89 },
  { month: "Jun", accuracy: 93 },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-4 bg-background min-h-screen ">
        <div>
          <h1 className="text-4xl font-heading  font-bold text-foreground mb-2">Dashboard Overview</h1>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard
            icon={AlertTriangle}
            label="Total Complaints Today"
            value="1,247"
            change="+12.5% from yesterday"
            trend="up"
          />
          <StatCard
            icon={MapPin}
            label="High-Risk Zones"
            value="23"
            change="3 new zones identified"
            trend="up"
          />
          <StatCard
            icon={Shield}
            label="Active Alerts"
            value="87"
            change="-5.2% from last hour"
            trend="down"
          />
          <StatCard
            icon={DollarSign}
            label="Funds Blocked (₹)"
            value="42.8M"
            change="+8.3% this week"
            trend="up"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Card className="p-6 bg-card border-0 shadow-md">
            <h3 className="font-heading font-semibold text-foreground text-lg mb-1">Daily Complaints Trend</h3>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-6">Last 7 days</p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={complaintsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
                <YAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.75rem",
                  }}
                />
                <Bar dataKey="complaints" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 bg-card border-0 shadow-md">
            <h3 className="font-heading font-semibold text-foreground text-lg mb-1">Prediction Accuracy Trend</h3>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-6">Monthly Performance</p>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={predictionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
                <YAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.75rem",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <Card className="p-6 bg-card border-0 shadow-md">
          <h3 className="font-heading font-semibold text-foreground text-lg mb-1">Geographic Risk Heatmap</h3>
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-6">Real-time Hotspot Analysis</p>
          <div className="h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl flex items-center justify-center border border-border/50">
            <div className="text-center space-y-4">
              <MapPin className="w-16 h-16 text-muted-foreground mx-auto" />
              <div>
                <p className="font-heading font-medium text-foreground">Interactive Risk Heatmap</p>
                <p className="text-sm text-muted-foreground mt-2">Integrated with live crime data</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary rounded"></div>
                  <span className="text-xs text-muted-foreground">High Risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-muted rounded"></div>
                  <span className="text-xs text-muted-foreground">Medium Risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-secondary rounded"></div>
                  <span className="text-xs text-muted-foreground">Low Risk</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
