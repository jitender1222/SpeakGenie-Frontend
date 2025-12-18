import type { JSX } from "react";
import type { NavigationProps } from "../types";
import Section from "../components/Section";
import AIAvatar from "../components/AIAvatar";
import { Home, BookOpen, Phone, User } from "lucide-react";
import NavItem from "../components/NavItem";

function HomeScreen({ onNavigate }: NavigationProps): JSX.Element {
  return (
    <div className="px-4 pt-4 pb-20 space-y-5 md:px-6 lg:px-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <p className="text-[12px] text-gray-500">Good night</p>
          <h1 className="text-[18px] font-semibold leading-tight">Lorenzo</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">
            30
          </span>
          <button aria-label="settings" className="text-gray-600">
            ⚙️
          </button>
        </div>
      </div>

      {/* XP Progress */}
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

      {/* Main Actions */}
      <div
        className="
        grid
        grid-cols-4
        gap-3
        md:grid-cols-6
        lg:grid-cols-8
        text-center
        "
      >
        {["Video Learning", "Peer Calls", "Stories", "AI Calls"].map(
          (label) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="w-11 h-11 rounded-full bg-[#EEF1F4]" />
              <span className="text-[11px] text-gray-700">{label}</span>
            </div>
          )
        )}
      </div>

      {/* Audio Stories */}
      <Section title="Audio Stories" actionLabel="See all">
        <div
          className="
    flex gap-3 overflow-x-auto
    md:grid md:grid-cols-3 md:overflow-visible
    lg:grid-cols-4
  "
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              onClick={() => onNavigate("player")}
              className="
      min-w-[120px]
      h-[150px]
      rounded-xl
      bg-[#E6EAEE]
      cursor-pointer
      active:scale-95
      transition
    "
            />
          ))}
        </div>
      </Section>

      {/* Practice with Humans */}
      <Section title="Practice with Humans" actionLabel="See all">
        <div className="rounded-2xl bg-[#E8F7EF] p-4 space-y-3">
          <p className="text-[13px] font-medium">Favorite Topics</p>
          <button className="w-full rounded-xl bg-[#3CCB7F] py-2.5 text-[13px] font-medium text-white">
            Join & Start Call
          </button>
        </div>
      </Section>

      {/* Practice with AI */}
      <Section title="Practice with AI" actionLabel="See all">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
          <AIAvatar name="Talk with Doraemon" />
          <AIAvatar name="Talk with Spider Man" />
        </div>
      </Section>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-[390px] bg-white border-t">
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
    </div>
  );
}

export default HomeScreen;
