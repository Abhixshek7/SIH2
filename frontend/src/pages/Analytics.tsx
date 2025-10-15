import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Play, Share2, Map } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const patternData = [
  { category: "Phishing", incidents: 423, risk: "High" },
  { category: "UPI Fraud", incidents: 387, risk: "High" },
  { category: "Investment Scam", incidents: 256, risk: "Medium" },
  { category: "Job Fraud", incidents: 189, risk: "Medium" },
  { category: "OTP Fraud", incidents: 312, risk: "High" },
];

const stateData = [
  { state: "Maharashtra", value: 1234 },
  { state: "Delhi", value: 987 },
  { state: "Karnataka", value: 856 },
  { state: "UP", value: 743 },
  { state: "Gujarat", value: 621 },
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Predictive Analytics</h1>

          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
            <Button variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share with LEAs
            </Button>
            <Button>
              <Play className="w-4 h-4 mr-2" />
              Run Prediction
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 bg-card border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Crime Category Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stateData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {stateData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 bg-card border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Top Affected States</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stateData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                <YAxis dataKey="state" type="category" stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <Card className="p-6 bg-card border-border mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Pattern Detection Results</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Category</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Incidents Detected</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Risk Level</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {patternData.map((pattern, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4 font-medium text-foreground">{pattern.category}</td>
                    <td className="py-3 px-4 text-foreground">{pattern.incidents}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        pattern.risk === 'High' 
                          ? 'bg-destructive/20 text-destructive' 
                          : 'bg-warning/20 text-warning'
                      }`}>
                        {pattern.risk}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">View Details</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Geospatial Risk Modeling</h3>
            <Button variant="outline" size="sm">
              <Map className="w-4 h-4 mr-2" />
              Toggle Layers
            </Button>
          </div>
          <div className="h-96 bg-muted/30 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Map className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Cluster analysis and hotspot prediction</p>
              <p className="text-sm text-muted-foreground">Geographic risk zones with probability scores</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
