import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import { AlertTriangle, Shield, DollarSign, MapPin, TrendingUp, Users } from "lucide-react";
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
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h1>
          <p className="text-muted-foreground">Real-time cybercrime monitoring and predictive insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 bg-card border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Daily Complaints Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={complaintsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="complaints" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 bg-card border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Prediction Accuracy Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={predictionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-2))", r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <Card className="p-6 bg-card border-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Risk Heatmap - Geographic Distribution</h3>
            <div className="flex gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-destructive/20 text-destructive">High Risk</span>
              <span className="text-xs px-3 py-1 rounded-full bg-warning/20 text-warning">Medium Risk</span>
              <span className="text-xs px-3 py-1 rounded-full bg-success/20 text-success">Low Risk</span>
            </div>
          </div>
          <div className="h-96 bg-muted/30 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive GIS map integration</p>
              <p className="text-sm text-muted-foreground">Real-time hotspot visualization</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
