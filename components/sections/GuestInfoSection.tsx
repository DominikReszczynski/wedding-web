import Section from "@/components/layout/Section";
import { WeddingTranslation } from "@/types";

type GuestInfoSectionProps = {
  t: WeddingTranslation;
};

export default function GuestInfoSection({ t }: GuestInfoSectionProps) {
  return (
    <Section id="guest-info" title={t.guestInfo.title}>
      <div className="rounded-3xl border border-[#d8cfbe] bg-[#f6f1e9] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
        <ul className="space-y-4 text-stone-600">
          {t.guestInfo.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-stone-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}