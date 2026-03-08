import Section from "@/components/layout/Section";
import { WeddingTranslation } from "@/types";

type MenuSectionProps = {
  t: WeddingTranslation;
};

export default function MenuSection({ t }: MenuSectionProps) {
  return (
    <Section id="menu" title={t.menu.title}>
      <div className="grid gap-6 md:grid-cols-2">
        {t.menu.sections.map((section) => (
          <div
            key={section.title}
            className="rounded-3xl border border-[#d8cfbe] bg-[#f6f1e9] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-xl font-medium text-stone-900">
              {section.title}
            </h3>

            <ul className="mt-4 space-y-3 text-stone-600">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-stone-100 pb-3 last:border-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}