import type { LucideIcon } from "lucide-react";
import type { JSX } from "react";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  className?: string;
  onClick?: () => void;
}

function NavItem({
  icon: Icon,
  label,
  onClick,
  className,
}: NavItemProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`${className} flex flex-col items-center gap-1 cursor-pointer`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );
}

export default NavItem;
