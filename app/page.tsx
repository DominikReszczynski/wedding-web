"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AttractionsSection from "@/components/sections/AttractionsSection";
import ContactSection from "@/components/sections/ContactSection";
import CountdownSection from "@/components/sections/CountdownSection";
import DetailsSection from "@/components/sections/DetailsSection";
import FAQSection from "@/components/sections/FAQSection";
import GuestInfoSection from "@/components/sections/GuestInfoSection";
import HeroSection from "@/components/sections/HeroSection";
import MenuSection from "@/components/sections/MenuSection";
import RSVPSection from "@/components/sections/RSVPSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import StorySection from "@/components/sections/StorySection";
import { translations } from "@/data/translations";
import { Lang } from "@/types";
import { useEffect, useMemo, useState } from "react";

const LANGUAGE_STORAGE_KEY = "wedding-language";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("pl");

  useEffect(() => {
    const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLang === "pl" || savedLang === "en" || savedLang === "de") {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  }, [lang]);

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <main className="min-h-screen bg-[#004225] text-[#1f2937]">
      <Navbar lang={lang} onLangChange={setLang} t={t} />
      <HeroSection t={t} />
      <CountdownSection t={t} />
      <DetailsSection t={t} />
      <StorySection t={t} />
      <ScheduleSection t={t} />
      <MenuSection t={t} />
      <AttractionsSection t={t} />
      <GuestInfoSection t={t} />
      <FAQSection t={t} />
      {/* <RSVPSection t={t} /> */}
      <ContactSection t={t} />
      <Footer t={t} />
    </main>
  );
}