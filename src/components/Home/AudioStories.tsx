import type { JSX } from "react";
import Section from "../Section";

interface AudioStoriesProps {
  stories: string[];
  onSelect: () => void;
}

export default function AudioStories({
  stories,
  onSelect,
}: AudioStoriesProps): JSX.Element {
  return (
    <Section title="Audio Stories" actionLabel="See all">
      <div className="flex gap-3 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4">
        {stories.map((img, index) => (
          <div
            key={index}
            onClick={onSelect}
            className="cursor-pointer hover:scale-95 transition"
          >
            <img
              src={img}
              className="rounded-2xl object-contain"
              alt="Audio story"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
