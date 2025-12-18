export type Screen = "home" | "player" | "quiz";

export interface NavigationProps {
  onNavigate: (screen: Screen) => void;
}

export interface BackProps {
  onBack: () => void;
}
