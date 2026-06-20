import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";

export const locales = {
  en,
  pt,
  es,
} as const;

export type Language = keyof typeof locales;
export type Locale = typeof en;

export const languageOptions: Array<{ code: Language; label: string }> = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
  { code: "es", label: "ES" },
];
