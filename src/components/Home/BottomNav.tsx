import { Home, BookOpen, Phone, User } from "lucide-react";
import NavItem from "../NavItem";

import type { Screen } from "../../types";

interface BottomNavProps {
  onNavigate: (screen: Screen) => void;
}

export default function BottomNav({ onNavigate }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="flex justify-around py-2 text-[11px] text-gray-600">
        <NavItem icon={Home} label="Home" />
        <NavItem
          icon={BookOpen}
          label="Learn"
          onClick={() => onNavigate("quiz")}
        />
        <NavItem icon={Phone} label="Call" />
        <NavItem icon={User} label="Profile" />
      </div>
    </div>
  );
}
