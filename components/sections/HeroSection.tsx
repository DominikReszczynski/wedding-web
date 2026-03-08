import { weddingData } from "@/data/wedding";
import { WeddingTranslation } from "@/types";

type HeroSectionProps = {
  t: WeddingTranslation;
};

export default function HeroSection({ t }: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.22),_rgba(0,66,37,0.35),_transparent_68%)]" />

      <div className="mx-auto grid min-h-[88vh] max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative z-10">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Wedding website
          </p>

          <h1 className="text-5xl font-light leading-tight tracking-wide text-[#f6f1e9] sm:text-7xl">
            {weddingData.couple.brideName}
            <span className="mx-2 text-[#d4af37]"> & </span>
            {weddingData.couple.groomName}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-[#f6f1e9]/85">
            {t.hero.subtitle}
          </p>

          <p className="mt-3 text-base text-[#d4af37]">{t.hero.dateLabel}</p>

          <p className="mt-6 max-w-xl italic text-[#f6f1e9]/70">
            “{t.hero.quote}”
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#info"
              className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-medium text-[#004225] transition hover:opacity-90"
            >
              {t.hero.ctaSecondary}
            </a>
            {/* <a
              href="#rsvp"
              className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-medium text-[#004225] transition hover:opacity-90"
            >
              {t.hero.ctaPrimary}
            </a> */}

            {/* <a
              href="#info"
              className="rounded-full border border-[#f6f1e9]/30 bg-white/10 px-6 py-3 text-sm font-medium text-[#f6f1e9] backdrop-blur transition hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              {t.hero.ctaSecondary}
            </a> */}
          </div>
        </div>

        <div className="relative h-[420px] rounded-[2rem] border border-[#000000]/15 bg-[#f8f5f1] p-4 shadow-2xl backdrop-blur sm:h-[520px]">
          <div className="h-full rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(0,66,37,0.15),rgba(0,0,0,0.15)),url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
        </div>
      </div>
    </section>
  );
}