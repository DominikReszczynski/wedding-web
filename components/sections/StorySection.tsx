import Section from "@/components/layout/Section";
import { WeddingTranslation } from "@/types";

type StorySectionProps = {
  t: WeddingTranslation;
};

export default function StorySection({ t }: StorySectionProps) {
  return (
    <Section id="story" title={t.story.title}>
      <p className="mb-8 max-w-2xl text-stone-600">{t.story.intro}</p>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {t.story.items.map((item) => (
          <div
            key={item.year + item.title}
            className="rounded-3xl border border-[#d8cfbe] bg-[#f6f1e9] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
              {item.year}
            </p>
            <h3 className="mt-3 text-xl font-medium text-stone-900">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-stone-600">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}