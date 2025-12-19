import type { JSX } from "react";

interface HomeHeaderProps {
  userImage: string;
  userName: string;
}

export default function HomeHeader({
  userImage,
  userName,
}: HomeHeaderProps): JSX.Element {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3">
        <img
          src={userImage}
          className="rounded-full w-8 h-8"
          alt="User avatar"
        />
        <div>
          <p className="text-[12px] text-gray-500">Good night</p>
          <h1 className="text-[18px] font-semibold">{userName}</h1>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[11px] font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">
          30
        </span>
        <button aria-label="settings">⚙️</button>
      </div>
    </div>
  );
}
