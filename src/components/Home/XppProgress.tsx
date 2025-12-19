import type { JSX } from "react";

export default function XPProgress(): JSX.Element {
  return (
    <div className="rounded-2xl bg-[#3CCB7F] px-4 py-3 text-white">
      <div className="flex justify-between text-[12px] font-medium mb-2">
        <span>XP Progress</span>
        <span>Level 3</span>
      </div>

      <div className="w-full h-[6px] bg-white/30 rounded-full">
        <div className="h-[6px] w-[65%] bg-white rounded-full" />
      </div>

      <p className="text-[11px] mt-2">242 XP</p>
    </div>
  );
}
