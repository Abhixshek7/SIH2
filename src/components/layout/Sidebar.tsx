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
      className={`${isCollapsed ? 'w-20' : 'w-64'} bg-black border-r border-gray-800 flex flex-col transition-all duration-300`}
    >
      <div className="p-6 border-b border-gray-800 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white flex items-center justify-center">
              <Shield className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="font-heading font-semibold text-white tracking-tight">I4C PORTAL</h1>
              <p className="text-xs text-gray-400 font-mono uppercase tracking-wider">NCPFramework</p>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="w-10 h-10 bg-white flex items-center justify-center mx-auto">
            <Shield className="w-6 h-6 text-black" />
          </div>
        )}
      </div>

      <div className="p-4 border-b border-gray-800">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full text-white hover:bg-gray-800 hover:text-white justify-center"
        >
          {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
        </Button>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} px-4 py-3 transition-all ${
                isActive
                  ? "bg-white text-black font-medium"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
            title={isCollapsed ? item.label : undefined}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="text-sm">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <Button
          variant="ghost"
          className={`w-full ${isCollapsed ? 'justify-center' : 'justify-start'} text-gray-300 hover:bg-gray-800 hover:text-white`}
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
