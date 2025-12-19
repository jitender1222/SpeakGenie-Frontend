import AudioStories from "../components/Home/AudioStories";
import BottomNav from "../components/Home/BottomNav";
import HomeHeader from "../components/Home/HomeHeader";
import PracticeAI from "../components/Home/PracticeAI";
import PracticeHumans from "../components/Home/PracticeHumans";
import QuickActions from "../components/Home/QuickAction";
import XPProgress from "../components/Home/XppProgress";
import type { NavigationProps } from "../types";
import user from "/user.png";
import stories from "/stories.png";
import AIBots from "/AIcalls.png";
import peercalls from "/peercalls.png";
import videolearning from "/videolearning.png";

export default function HomeScreen({ onNavigate }: NavigationProps) {
  return (
    <div className="px-4 pt-4 pb-20 space-y-5">
      <HomeHeader userImage={user} userName="Lorenzo" />
      <XPProgress />
      <QuickActions
        actions={[
          { name: "Video Learning", img: videolearning },
          { name: "Peer Calls", img: peercalls },
          { name: "Stories", img: stories },
          { name: "AI Calls", img: AIBots },
        ]}
      />
      <AudioStories
        stories={[stories, AIBots, peercalls]}
        onSelect={() => onNavigate("player")}
      />
      <PracticeHumans />
      <PracticeAI
        avatars={[
          { name: "Talk with Doreamon", img: AIBots },
          { name: "Talk with Spider Man", img: peercalls },
        ]}
      />
      <BottomNav onNavigate={onNavigate} />
    </div>
  );
}
