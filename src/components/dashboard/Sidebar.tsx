import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  MessageSquare,
  BarChart2,
  Settings,
  Users,
  LogOut,
} from "lucide-react";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
}

interface SidebarProps {
  activeSection?: string;
  onNavigate?: (href: string) => void;
}

const defaultNavItems: NavItem[] = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
    href: "/dashboard",
    active: true,
  },
  {
    label: "Conversations",
    icon: <MessageSquare className="w-5 h-5" />,
    href: "/conversations",
  },
  {
    label: "Analytics",
    icon: <BarChart2 className="w-5 h-5" />,
    href: "/analytics",
  },
  {
    label: "Integrations",
    icon: <Settings className="w-5 h-5" />,
    href: "/integrations",
  },
  {
    label: "Lead Management",
    icon: <Users className="w-5 h-5" />,
    href: "/leads",
  },
];

const Sidebar = ({
  activeSection = "/dashboard",
  onNavigate = () => {},
}: SidebarProps) => {
  return (
    <div className="w-[280px] h-full bg-white border-r flex flex-col">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-2">
          <img
            src="https://api.dicebear.com/7.x/shapes/svg?seed=logo"
            alt="Logo"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold">CRM Dashboard</h1>
        </div>
      </div>

      <ScrollArea className="flex-1 py-6">
        <nav className="px-4 space-y-2">
          {defaultNavItems.map((item) => (
            <Button
              key={item.href}
              variant={item.href === activeSection ? "secondary" : "ghost"}
              className="w-full justify-start gap-3"
              onClick={() => onNavigate(item.href)}
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
        </nav>
      </ScrollArea>

      <div className="p-6 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
