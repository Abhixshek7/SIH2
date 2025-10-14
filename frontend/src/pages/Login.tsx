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
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-10 bg-white border-2 border-black shadow-2xl">
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 bg-black flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-heading font-bold text-foreground tracking-tight mb-1">I4C PORTAL</h1>
          <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider">National Cybercrime Predictive Framework</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <Label htmlFor="username" className="font-mono uppercase text-xs tracking-wider">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 border-2 border-gray-300 focus:border-black"
            />
          </div>

          <div>
            <Label htmlFor="password" className="font-mono uppercase text-xs tracking-wider">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 border-2 border-gray-300 focus:border-black"
            />
          </div>

          <div>
            <Label htmlFor="role" className="font-mono uppercase text-xs tracking-wider">Select Role</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="mt-2 border-2 border-gray-300 focus:border-black">
                <SelectValue placeholder="Choose your role" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-black">
                <SelectItem value="law-enforcement">Law Enforcement</SelectItem>
                <SelectItem value="bank">Bank / Financial Institution</SelectItem>
                <SelectItem value="admin">I4C Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 h-12 text-sm font-mono uppercase tracking-wider">
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-black hover:underline font-mono">
            Forgot Password?
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Login;
