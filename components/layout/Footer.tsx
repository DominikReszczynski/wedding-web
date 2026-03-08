import { WeddingTranslation } from "@/types";

type FooterProps = {
  t: WeddingTranslation;
};

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t border-white/10 px-4 py-10 text-center text-[#f6f1e9]/75 sm:px-12 lg:px-14">
      {t.footer}
      <p className="mt-3 text-sm text-[#f6f1e9]/50">
2026 Dominik Reszczyński · Designed & developed with care
</p>
    </footer>
  );
}