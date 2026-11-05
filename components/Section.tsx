import type { ReactNode } from "react";

type SectionProps = {
  title?: string;
  intro?: string;
  tone?: "light" | "white";
  className?: string;
  children: ReactNode;
};

export default function Section({ title, intro, tone = "light", className = "", children }: SectionProps) {
  const id = title ? `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading` : undefined;

  return (
    <section aria-labelledby={id} className={tone === "white" ? "bg-white" : "bg-haiti-offwhite"}>
      <div className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 ${className}`}>
        {title && (
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 id={id} className="text-3xl font-bold text-haiti-navy sm:text-4xl">
              {title}
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-haiti-gold" aria-hidden="true" />
            {intro && <p className="mt-4 text-lg leading-relaxed">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
