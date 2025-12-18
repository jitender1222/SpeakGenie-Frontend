import type { JSX } from "react";
import type { SectionProps } from "../types";

function Section({ title, actionLabel, children }: SectionProps): JSX.Element {
  return (
    <section className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-[14px] font-semibold">{title}</h3>
        {actionLabel && (
          <span className="text-[12px] text-[#3CCB7F]">{actionLabel}</span>
        )}
      </div>
      {children}
    </section>
  );
}

export default Section;
