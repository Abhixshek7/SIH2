import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password || !role) {
      toast.error("Please fill in all fields");
      return;
    }

    localStorage.setItem("userRole", role);
    toast.success("Login successful");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/30 p-4">
      <Card className="w-full max-w-md p-8 bg-card border-0 shadow-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary mx-auto mb-4 flex items-center justify-center rounded-xl shadow-md">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">I4C Portal</h1>
          <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider">National Cybercrime Predictive Framework</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <Label htmlFor="username" className="font-mono uppercase text-xs tracking-wider text-foreground">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 rounded-lg border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <Label htmlFor="password" className="font-mono uppercase text-xs tracking-wider text-foreground">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 rounded-lg border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <Label htmlFor="role" className="font-mono uppercase text-xs tracking-wider text-foreground">Select Role</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="mt-2 rounded-lg border-border focus:border-primary focus:ring-2 focus:ring-primary/20">
                <SelectValue placeholder="Choose your role" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border rounded-xl shadow-lg">
                <SelectItem value="law-enforcement">Law Enforcement</SelectItem>
                <SelectItem value="bank">Bank / Financial Institution</SelectItem>
                <SelectItem value="admin">I4C Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" variant="accent" size="lg" className="w-full font-heading font-semibold">
            Sign In
          </Button>
        </form>

        <div className="text-center mt-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">Forgot Password?</a>
        </div>
      </Card>
    </div>
  );
};

export default Login;
