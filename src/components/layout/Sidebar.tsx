import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Shield, BarChart3, Bell, Settings, LogOut, LayoutDashboard, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/");
  };

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: BarChart3, label: "Predictive Analytics", path: "/analytics" },
    { icon: Shield, label: "Law Enforcement", path: "/law-enforcement" },
    { icon: Bell, label: "Alerts & Notifications", path: "/alerts" },
    { icon: Settings, label: "Admin Settings", path: "/settings" },
  ];

  return (
    <aside 
      className={`${isCollapsed ? 'w-20' : 'w-64'} bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300`}
    >
      <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
        {!isCollapsed ? (
          <>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-sidebar-primary flex items-center justify-center rounded-xl shadow-sm">
                <Shield className="w-7 h-7 text-sidebar-primary-foreground" />
              </div>
              <div>
                <h1 className="font-heading font-semibold text-sidebar-primary tracking-tight text-lg">I4C PORTAL</h1>
                <p className="text-xs text-sidebar-foreground/60 font-mono uppercase tracking-wider">NCPFramework</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg"
            >
              <X className="w-5 h-5" />
            </Button>
          </>
        ) : (
          <div className="w-full flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-sidebar-primary flex items-center justify-center rounded-xl shadow-sm">
              <Shield className="w-7 h-7 text-sidebar-primary-foreground" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium shadow-sm"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`
            }
            title={isCollapsed ? item.label : undefined}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="text-sm">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="ghost"
          className={`w-full ${isCollapsed ? 'justify-center' : 'justify-start'} text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg`}
          onClick={handleLogout}
          title={isCollapsed ? "Logout" : undefined}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
