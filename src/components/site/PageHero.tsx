import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-40 pb-24 bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(60%_50%_at_70%_30%,oklch(0.66_0.12_210/0.45),transparent_60%)]" />
      <div className="container-prime relative">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">{eyebrow}</p>
        )}
        <h1 className="mt-5 text-5xl md:text-6xl font-semibold text-balance max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
