"use client";

import Image from "next/image";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { weddingData } from "@/data/wedding";
import weddingLogo from "@/public/wedding_logo.webp";
import { Lang, WeddingTranslation } from "@/types";

type NavbarProps = {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  t: WeddingTranslation;
};

export default function Navbar({ lang, onLangChange, t }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#f8f5f1]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-medium tracking-[0.2em] text-stone-900">
          <Image src={weddingLogo} alt="Wedding Logo" className="h-14 w-auto" />
        </a>

        <nav className="hidden gap-6 text-sm text-stone-600 lg:flex">
          <a href="#home" className="hover:text-stone-900">{t.nav.home}</a>
          <a href="#guest-info" className="hover:text-stone-900">{t.nav.info}</a>
          <a href="#story" className="hover:text-stone-900">{t.nav.story}</a>
          <a href="#schedule" className="hover:text-stone-900">{t.nav.schedule}</a>
          <a href="#menu" className="hover:text-stone-900">{t.nav.menu}</a>
          <a href="#attractions" className="hover:text-stone-900">{t.nav.attractions}</a>
          <a href="#info" className="hover:text-stone-900">{t.nav.info}</a>
          <a href="#faq" className="hover:text-stone-900">{t.nav.faq}</a>
          <a href="#rsvp" className="hover:text-stone-900">{t.nav.rsvp}</a>
          <a href="#contact" className="hover:text-stone-900">{t.nav.contact}</a>
        </nav>

        <LanguageSwitcher lang={lang} onChange={onLangChange} />
      </div>
    </header>
  );
}