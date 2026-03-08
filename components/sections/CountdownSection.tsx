"use client";

import Section from "@/components/layout/Section";
import { weddingData } from "@/data/wedding";
import { useCountdown } from "@/hooks/useCountdown";
import { WeddingTranslation } from "@/types";

type CountdownSectionProps = {
  t: WeddingTranslation;
};

export default function CountdownSection({ t }: CountdownSectionProps) {
  const timeLeft = useCountdown(weddingData.date.iso);

  if (timeLeft.total <= 0) {
    return (
      <Section id="countdown" title={t.countdown.title}>
        <div className="rounded-3xl border border-[#d8cfbe] bg-[#f6f1e9] p-8 text-center text-xl text-[#1f2937] shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
          {t.countdown.finished}
        </div>
      </Section>
    );
  }

  const items = [
    { label: t.countdown.days, value: timeLeft.days },
    { label: t.countdown.hours, value: timeLeft.hours },
    { label: t.countdown.minutes, value: timeLeft.minutes },
    { label: t.countdown.seconds, value: timeLeft.seconds },
  ];

  return (
    <Section id="countdown" title={t.countdown.title}>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-[#d8cfbe] bg-[#f6f1e9] p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
          >
            <div className="text-3xl font-semibold text-[#004225] sm:text-4xl">
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="mt-2 text-sm text-[#7a6a43]">{item.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}