import Section from "@/components/layout/Section";
import { weddingData } from "@/data/wedding";
import { WeddingTranslation } from "@/types";

type DetailsSectionProps = {
  t: WeddingTranslation;
};

export default function DetailsSection({ t }: DetailsSectionProps) {
  return (
    <Section id="info" title={t.details.title}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-[#d8cfbe] bg-[#f6f1e9] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
          <p className="text-sm uppercase tracking-[0.25em] text-[#b38b2d]">
            {t.details.ceremony}
          </p>
          <h3 className="mt-4 text-2xl font-medium text-stone-900">
            {t.details.ceremonyPlace}
          </h3>
          <p className="mt-2 text-stone-600">{t.details.ceremonyTime}</p>
          <p className="mt-2 text-stone-500">{t.details.address1}</p>
          <a
            href={weddingData.locations.ceremonyMapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-sm font-medium text-stone-900 underline underline-offset-4"
          >
            {t.details.map}
          </a>
        </div>

        <div className="rounded-3xl border border-[#d8cfbe] bg-[#f6f1e9] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
          <p className="text-sm uppercase tracking-[0.25em] text-[#b38b2d]">
            {t.details.party}
          </p>
          <h3 className="mt-4 text-2xl font-medium text-stone-900">
            {t.details.partyPlace}
          </h3>
          <p className="mt-2 text-stone-600">{t.details.partyTime}</p>
          <p className="mt-2 text-stone-500">{t.details.address2}</p>
          <a
            href={weddingData.locations.partyMapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-sm font-medium text-stone-900 underline underline-offset-4"
          >
            {t.details.map}
          </a>
        </div>
      </div>
    </Section>
  );
}