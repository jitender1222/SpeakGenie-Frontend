import type { JSX } from "react";
import Section from "../Section";
import AIAvatar from "../AIAvatar";

interface PracticeAIProps {
  avatars: { img: string; name: string }[];
}

export default function PracticeAI({ avatars }: PracticeAIProps): JSX.Element {
  return (
    <Section title="Practice with AI" actionLabel="See all">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
        {avatars.map((bot) => (
          <AIAvatar key={bot.name} img={bot.img} name={bot.name} />
        ))}
      </div>
    </Section>
  );
}
