import Section from "@/components/layout/Section";
import { WeddingTranslation } from "@/types";

type FAQSectionProps = {
  t: WeddingTranslation;
};

export default function FAQSection({ t }: FAQSectionProps) {
  return (
    <Section id="faq" title={t.faq.title}>
      <div className="space-y-4">
        {t.faq.items.map((item) => (
          <div
            key={item[0]}
            className="rounded-3xl border border-[#d8cfbe] bg-[#f6f1e9] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-lg font-medium text-stone-900">{item[0]}</h3>
            <p className="mt-2 text-stone-600">{item[1]}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}