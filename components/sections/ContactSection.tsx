import Section from "@/components/layout/Section";
import { weddingData } from "@/data/wedding";
import { WeddingTranslation } from "@/types";

type ContactSectionProps = {
  t: WeddingTranslation;
};

export default function ContactSection({ t }: ContactSectionProps) {
  return (
    <Section id="contact" title={t.contact.title} secondTitle={t.contact.text}>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-[#d8cfbe] bg-[#f6f1e9] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
          <p className="text-sm uppercase tracking-[0.25em] text-[#b38b2d]">
            {t.contact.bride}
          </p>
          <p className="mt-4 text-lg font-medium text-stone-900">
            {weddingData.couple.brideNameSurname}
          </p>
          <p className="mt-2 text-stone-600">{weddingData.contacts.bridePhone}</p>
        </div>

        <div className="rounded-3xl border border-[#d8cfbe] bg-[#f6f1e9] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
          <p className="text-sm uppercase tracking-[0.25em] text-[#b38b2d]">
            {t.contact.groom}
          </p>
          <p className="mt-4 text-lg font-medium text-stone-900">
            {weddingData.couple.groomNameSurname}
          </p>
          <p className="mt-2 text-stone-600">{weddingData.contacts.groomPhone}</p>
        </div>

        <div className="rounded-3xl border border-[#d8cfbe] bg-[#f6f1e9] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
          <p className="text-sm uppercase tracking-[0.25em] text-[#b38b2d]">
            {t.contact.witness}
          </p>
          <p className="mt-4 text-lg font-medium text-stone-900">
            {weddingData.contacts.witnessName}
          </p>
          <p className="mt-2 text-stone-600">
            {weddingData.contacts.witnessPhone}
          </p>
        </div>
      </div>

      
    </Section>
  );
}