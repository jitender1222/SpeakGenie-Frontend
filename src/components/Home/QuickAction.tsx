import type { JSX } from "react";

interface Action {
  name: string;
  img: string;
}

interface QuickActionsProps {
  actions: Action[];
}

export default function QuickActions({
  actions,
}: QuickActionsProps): JSX.Element {
  return (
    <div className="grid grid-cols-4 gap-3 md:grid-cols-6 lg:grid-cols-8 text-center">
      {actions.map((action) => (
        <div key={action.name} className="flex flex-col items-center gap-1">
          <img
            src={action.img}
            className="w-11 h-11 rounded-full"
            alt={action.name}
          />
          <span className="text-[11px] text-gray-700">{action.name}</span>
        </div>
      ))}
    </div>
  );
}
