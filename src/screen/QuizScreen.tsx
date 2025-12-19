import type { JSX } from "react";
import type { BackProps } from "../types";
import { useState } from "react";

type Difficulty = "easy" | "medium" | "hard";

function QuizScreen({ onBack }: BackProps): JSX.Element {
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty | null>(null);

  const difficultyLevels = [
    {
      key: "easy",
      label: "Easy",
      desc: "Short sentences & gentle vocabulary",
    },
    {
      key: "medium",
      label: "Medium",
      desc: "Everyday situations with detail",
    },
    {
      key: "hard",
      label: "Hard",
      desc: "Longer thinking and tricky choices",
    },
  ] as const;

  return (
    <div className="px-4 pt-4 space-y-5">
      <button
        onClick={onBack}
        className="cursor-pointer text-[13px] text-gray-600"
      >
        ← Back
      </button>

      <h2 className="text-[18px] font-semibold">Craft a custom quiz</h2>

      {/* Choose Topic */}
      <div className="rounded-2xl bg-[#F1F3F5] p-4 space-y-3">
        <p className="text-[13px] font-medium">Choose a topic</p>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            "My Best Friend",
            "Cricket Basics",
            "Solar System",
            "Healthy Habits",
          ].map((topic) => (
            <div
              key={topic}
              className="rounded-xl bg-white py-2 text-center text-[12px]"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>

      {/* Pick Difficulty */}
      <div className="rounded-2xl bg-[#F1F3F5] p-4 space-y-3">
        <p className="text-[13px] font-medium">Pick a challenge level</p>

        <div className="space-y-2 md:grid md:grid-cols-3 md:gap-3 md:space-y-0">
          {difficultyLevels.map((level) => {
            const isSelected = selectedDifficulty === level.key;

            return (
              <button
                key={level.key}
                onClick={() => setSelectedDifficulty(level.key)}
                className={`cursor-pointer hover:bg-[#3CCB7F]
                  rounded-xl p-3 text-left transition
                  ${isSelected ? "bg-[#3CCB7F] text-white" : "bg-white"}
                `}
              >
                <p className="text-[13px] font-medium">{level.label}</p>
                <p
                  className={`text-[11px] ${
                    isSelected ? "text-white/90" : "text-gray-500"
                  }`}
                >
                  {level.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Generate Quiz */}
        <button
          disabled={!selectedDifficulty}
          onClick={() => {
            alert("Thank you for creating the quiz ");
            console.log("Generate quiz with difficulty:", selectedDifficulty);
          }}
          className="
          cursor-pointer
            w-full rounded-2xl py-3 text-[14px] font-medium transition
            bg-[#3CCB7F] text-white
            disabled:bg-gray-300 disabled:cursor-not-allowed
          "
        >
          Generate Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizScreen;
