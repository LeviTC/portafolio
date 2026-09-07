export const HERO_SECTIONS = ["hero", "experience", "projects"] as const;

export type HeroSection = (typeof HERO_SECTIONS)[number];
