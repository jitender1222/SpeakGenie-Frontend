import type { JSX } from "react";
import type { BackProps } from "../types";

function NowPlayingScreen({ onBack }: BackProps): JSX.Element {
  return (
    <div className="px-4 pt-4 space-y-5">
      <button onClick={onBack} className="text-[13px] text-gray-600">
        ← Back
      </button>
      <p className="text-center text-[11px] tracking-wide text-gray-400">
        NOW PLAYING
      </p>

      <div className="rounded-2xl bg-[#E8F7EF] p-4 space-y-4">
        <div className="h-[210px] rounded-xl bg-[#DCE3E8]" />
        <div className="space-y-1">
          <h2 className="text-[16px] font-semibold">
            The Melody of Friendship
          </h2>
          <p className="text-[13px] text-gray-600">
            A heartwarming story about friendship and courage
          </p>
        </div>
        <button className="w-full rounded-xl bg-[#3CCB7F] py-2.5 text-[13px] font-medium text-white">
          Test Your Understanding · 7 Questions
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-[11px] text-gray-500">
          <span>0:00</span>
          <span>2:18</span>
        </div>
        <div className="h-[4px] w-full rounded-full bg-gray-200" />
        <div className="flex justify-center pt-2">
          <button className="w-14 h-14 rounded-full bg-[#3CCB7F] text-white text-lg">
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}

export default NowPlayingScreen;
