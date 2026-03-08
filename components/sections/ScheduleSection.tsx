import Section from "@/components/layout/Section";
import { WeddingTranslation } from "@/types";

type ScheduleSectionProps = {
  t: WeddingTranslation;
};

export default function ScheduleSection({ t }: ScheduleSectionProps) {
  return (
    <Section id="schedule" title={t.schedule.title}>
      <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
        {t.schedule.items.map((item, index) => (
          <div
            key={item[0] + item[1]}
            className={`grid gap-2 px-6 py-5 sm:grid-cols-[140px_1fr] ${
              index !== t.schedule.items.length - 1
                ? "border-b border-stone-100"
                : ""
            }`}
          >
            <div className="font-medium text-stone-900">{item[0]}</div>
            <div className="text-[#5b6470]">{item[1]}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}