import type { JSX } from "react";
import type { AIAvatarProps } from "../types";

function AIAvatar({ name }: AIAvatarProps): JSX.Element {
  return (
    <div className="rounded-2xl bg-[#FFE9F1] p-3 flex flex-col items-center gap-2">
      <div className="w-16 h-16 rounded-full bg-white" />
      <p className="text-[11px] text-center">{name}</p>
    </div>
  );
}

export default AIAvatar;
