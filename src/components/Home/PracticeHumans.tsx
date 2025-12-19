import type { JSX } from "react";
import Section from "../Section";

export default function PracticeHumans(): JSX.Element {
  return (
    <Section title="Practice with Humans" actionLabel="See all">
      <div className="rounded-2xl bg-[#E8F7EF] p-4 space-y-3">
        <p className="text-[13px] font-medium">Favorite Topics</p>
        <button className="w-full rounded-xl bg-[#3CCB7F] py-2.5 text-[13px] font-medium text-white">
          Join & Start Call
        </button>
      </div>
    </Section>
  );
}
