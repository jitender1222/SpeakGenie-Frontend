import { useState, type JSX } from "react";
import HomeScreen from "./screen/HomeScreen";
import type { Screen } from "./types";
import NowPlayingScreen from "./screen/NowPlayingScreen";
import QuizScreen from "./screen/QuizScreen";

export default function App(): JSX.Element {
  const [screen, setScreen] = useState<Screen>("home");

  return (
    <div className="min-h-screen bg-[#F6F7F8] flex justify-center px-4">
      <div
        className="w-full max-w-[390px] md:max-w-[720px] lg:max-w-[1024px]
      bg-white
      rounded-none
      md:rounded-2xl
      md:my-6
      overflow-hidden"
      >
        {screen === "home" && <HomeScreen onNavigate={setScreen} />}
        {screen === "player" && (
          <NowPlayingScreen onBack={() => setScreen("home")} />
        )}
        {screen === "quiz" && <QuizScreen onBack={() => setScreen("home")} />}
      </div>
    </div>
  );
}
