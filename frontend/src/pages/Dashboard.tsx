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
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2 tracking-tight">Dashboard Overview</h1>
          <p className="text-muted-foreground font-mono text-sm">Real-time cybercrime monitoring and predictive insights</p>
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
          <Card className="p-6 bg-white border border-border shadow-sm">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-6 uppercase tracking-wide">Daily Complaints Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={complaintsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="day" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "2px",
                  }}
                />
                <Bar dataKey="complaints" fill="#000000" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 bg-white border border-border shadow-sm">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-6 uppercase tracking-wide">Prediction Accuracy Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={predictionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "2px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#000000"
                  strokeWidth={2}
                  dot={{ fill: "#000000", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <Card className="p-6 bg-white border border-border shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-heading font-semibold text-foreground uppercase tracking-wide">Risk Heatmap - Geographic Distribution</h3>
            <div className="flex gap-2">
              <span className="text-xs px-3 py-1 bg-black text-white font-mono uppercase">High Risk</span>
              <span className="text-xs px-3 py-1 bg-gray-400 text-white font-mono uppercase">Medium Risk</span>
              <span className="text-xs px-3 py-1 bg-gray-200 text-black font-mono uppercase">Low Risk</span>
            </div>
          </div>
          <div className="h-96 bg-gray-100 border border-border flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-black mx-auto mb-4" />
              <p className="text-muted-foreground font-mono text-sm uppercase">Interactive GIS Map Integration</p>
              <p className="text-xs text-muted-foreground font-mono">Real-time hotspot visualization</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;