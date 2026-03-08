"use client";

import { Lang } from "@/types";

type LanguageSwitcherProps = {
  lang: Lang;
  onChange: (lang: Lang) => void;
};

const languageOptions: { code: Lang; label: string; flag: string }[] = [
  { code: "pl", label: "Polski", flag: "🇵🇱" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export default function LanguageSwitcher({
  lang,
  onChange,
}: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 p-1 shadow-lg backdrop-blur">
      {languageOptions.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => onChange(item.code)}
          aria-label={item.label}
          title={item.label}
          className={`rounded-full px-3 py-1.5 text-lg transition ${
            lang === item.code
              ? "bg-[#d4af37] shadow-md"
              : "bg-transparent hover:bg-white/10"
          }`}
        >
          <span aria-hidden="true">{item.flag}</span>
        </button>
      ))}
    </div>
  );
}