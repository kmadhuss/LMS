import React from "react";
import { Home, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";

interface BottomNavProps {
  activeTab?: "home" | "search" | "cart" | "account";
  onTabChange?: (tab: "home" | "search" | "cart" | "account") => void;
}

const BottomNav = ({
  activeTab = "home",
  onTabChange = () => {},
}: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[60px] bg-white border-t border-gray-200 flex items-center justify-around px-4 z-50">
      <Button
        variant={activeTab === "home" ? "default" : "ghost"}
        size="icon"
        onClick={() => onTabChange("home")}
        className="flex flex-col items-center justify-center gap-1"
      >
        <Home className="h-5 w-5" />
        <span className="text-xs">Home</span>
      </Button>

      <Button
        variant={activeTab === "search" ? "default" : "ghost"}
        size="icon"
        onClick={() => onTabChange("search")}
        className="flex flex-col items-center justify-center gap-1"
      >
        <Search className="h-5 w-5" />
        <span className="text-xs">Search</span>
      </Button>

      <Button
        variant={activeTab === "cart" ? "default" : "ghost"}
        size="icon"
        onClick={() => onTabChange("cart")}
        className="flex flex-col items-center justify-center gap-1"
      >
        <ShoppingCart className="h-5 w-5" />
        <span className="text-xs">Cart</span>
      </Button>

      <Button
        variant={activeTab === "account" ? "default" : "ghost"}
        size="icon"
        onClick={() => onTabChange("account")}
        className="flex flex-col items-center justify-center gap-1"
      >
        <User className="h-5 w-5" />
        <span className="text-xs">Account</span>
      </Button>
    </nav>
  );
};

export default BottomNav;
