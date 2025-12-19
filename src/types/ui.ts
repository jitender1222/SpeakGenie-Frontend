import type { ReactNode } from "react";

export interface SectionProps {
  title: string;
  actionLabel?: string;
  children: ReactNode;
}

export interface AIAvatarProps {
  name: string;
  img: string;
}
