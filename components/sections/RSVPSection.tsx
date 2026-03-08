import Section from "@/components/layout/Section";
import { WeddingTranslation } from "@/types";

type RSVPSectionProps = {
  t: WeddingTranslation;
};

export default function RSVPSection({ t }: RSVPSectionProps) {
  return (
    <Section id="rsvp" title={t.rsvp.title}>
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-3xl border border-[#d8cfbe] bg-[#f6f1e9] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
          <p className="text-[#5b6470]">{t.rsvp.desc}</p>

          <div className="mt-6 space-y-3 text-sm text-stone-500">
            <p>• Supabase</p>
            <p>• Firebase</p>
            <p>• Formspree</p>
            <p>• EmailJS</p>
          </div>
        </div>

        <form className="grid gap-4 rounded-3xl border border-[#d8cfbe] bg-[#f6f1e9] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
          <input
            className="rounded-2xl border border-[#d8cfbe] bg-[#fffdf9] px-4 py-3 outline-none transition focus:border-[#b38b2d]"
            placeholder={t.rsvp.name}
          />

          <select
            className="rounded-2xl border border-[#d8cfbe] bg-[#fffdf9] px-4 py-3 outline-none transition focus:border-[#b38b2d]"
            defaultValue=""
          >
            <option value="" disabled>
              {t.rsvp.attending}
            </option>
            <option>{t.rsvp.yes}</option>
            <option>{t.rsvp.no}</option>
          </select>

          <input
            className="rounded-2xl border border-[#d8cfbe] bg-[#fffdf9] px-4 py-3 outline-none transition focus:border-[#b38b2d]"
            placeholder={t.rsvp.guests}
          />

          <input
            className="rounded-2xl border border-[#d8cfbe] bg-[#fffdf9] px-4 py-3 outline-none transition focus:border-[#b38b2d]"
            placeholder={t.rsvp.meal}
          />

          <input
            className="rounded-2xl border border-[#d8cfbe] bg-[#fffdf9] px-4 py-3 outline-none transition focus:border-[#b38b2d]"
            placeholder={t.rsvp.transport}
          />

          <input
            className="rounded-2xl border border-[#d8cfbe] bg-[#fffdf9] px-4 py-3 outline-none transition focus:border-[#b38b2d]"
            placeholder={t.rsvp.accommodation}
          />

          <textarea
            className="min-h-[140px] rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-900"
            placeholder={t.rsvp.message}
          />

          <button
  type="button"
  className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-medium text-[#004225] transition hover:opacity-90"
>
  {t.rsvp.send}
</button>
        </form>
      </div>
    </Section>
  );
}