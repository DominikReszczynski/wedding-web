import Section from "@/components/layout/Section";
import { WeddingTranslation } from "@/types";

type AttractionsSectionProps = {
  t: WeddingTranslation;
};

export default function AttractionsSection({
  t,
}: AttractionsSectionProps) {
  return (
    <Section id="attractions" title={t.attractions.title}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.attractions.items.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-stone-200 bg-white p-6 text-center text-stone-700 shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </Section>
  );
}