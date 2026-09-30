import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CallToAction from "@/components/CallToAction";
import { programs } from "@/data/programs";

export const metadata = { title: "Our Programs | Haitian Youth Foundation Inc." };

export default function ProgramPage() {
  return (
    <>
      <PageHeader
        title="Our Programs"
        subtitle="Supporting schools, orphanages, and community life across Haiti."
      />

      <Section>
        <div className="space-y-16">
          {programs.map((program, index) => (
            <article key={program.id} className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-haiti-navy">{program.title}</h2>
                <div className="mt-3 h-1 w-16 rounded-full bg-haiti-gold" aria-hidden="true" />
                <p className="mt-4 text-lg leading-relaxed">{program.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CallToAction />
    </>
  );
}
