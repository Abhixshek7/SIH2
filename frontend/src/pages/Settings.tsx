import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Trash2, Edit, Shield } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const users = [
  { id: 1, name: "Rajesh Kumar", email: "rajesh.k@i4c.gov.in", role: "Admin", status: "Active" },
  { id: 2, name: "Priya Sharma", email: "priya.s@police.gov.in", role: "Law Enforcement", status: "Active" },
  { id: 3, name: "Amit Patel", email: "amit.p@icici.com", role: "Bank/FI", status: "Active" },
  { id: 4, name: "Sneha Reddy", email: "sneha.r@sbi.com", role: "Bank/FI", status: "Inactive" },
];

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Settings</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">User Management</h3>
                <Button>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">Name</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">Email</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">Role</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">Status</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                        <td className="py-3 px-4 font-medium text-foreground">{user.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{user.email}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">{user.role}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={user.status === 'Active' ? 'bg-success text-success-foreground' : 'bg-muted text-muted-foreground'}>
                            {user.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Risk Level Thresholds</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="high-threshold">High Risk Threshold</Label>
                  <Input
                    id="high-threshold"
                    type="number"
                    defaultValue="80"
                    className="mt-1"
                    placeholder="Enter percentage"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Alerts above this value are marked as high severity</p>
                </div>

                <div>
                  <Label htmlFor="medium-threshold">Medium Risk Threshold</Label>
                  <Input
                    id="medium-threshold"
                    type="number"
                    defaultValue="50"
                    className="mt-1"
                    placeholder="Enter percentage"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Alerts between this and high threshold are medium severity</p>
                </div>

                <div>
                  <Label htmlFor="alert-frequency">Alert Frequency (minutes)</Label>
                  <Input
                    id="alert-frequency"
                    type="number"
                    defaultValue="5"
                    className="mt-1"
                    placeholder="Minutes between checks"
                  />
                  <p className="text-xs text-muted-foreground mt-1">How often the system checks for new patterns</p>
                </div>

                <Button className="w-full">Save Threshold Settings</Button>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">System Status</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Database</span>
                  <Badge className="bg-success text-success-foreground">Online</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Predictive Engine</span>
                  <Badge className="bg-success text-success-foreground">Running</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">API Services</span>
                  <Badge className="bg-success text-success-foreground">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Storage</span>
                  <span className="text-sm font-medium text-foreground">67% Used</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Map Layer Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="default-layer">Default Map Layer</Label>
                  <Select defaultValue="street">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem value="street">Street View</SelectItem>
                      <SelectItem value="satellite">Satellite</SelectItem>
                      <SelectItem value="terrain">Terrain</SelectItem>
                      <SelectItem value="dark">Dark Mode</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="cluster-radius">Cluster Radius (km)</Label>
                  <Input
                    id="cluster-radius"
                    type="number"
                    defaultValue="5"
                    className="mt-1"
                    placeholder="Enter radius"
                  />
                </div>

                <Button className="w-full">Apply Map Settings</Button>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Notification Rules</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">High Severity Alerts</span>
                  <span className="text-foreground">Immediate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Medium Severity</span>
                  <span className="text-foreground">15 min delay</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Low Severity</span>
                  <span className="text-foreground">1 hour batch</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                Edit Rules
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
