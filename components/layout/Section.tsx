import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  secondTitle?: string;
  children: ReactNode;
};

export default function Section({ id, title, secondTitle, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#d4af37]">
          Wedding
        </p>
        <h2 className="text-3xl font-light tracking-wide text-[#f6f1e9] sm:text-4xl">
          {title}
        </h2>
        <p className="text-[#f6f1e9]">{secondTitle}</p>
      </div>
      {children}
    </section>
  );
}