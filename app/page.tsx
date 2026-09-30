import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import ProgramCard from "@/components/ProgramCard";
import Section from "@/components/Section";
import CallToAction from "@/components/CallToAction";
import { stats } from "@/data/stats";
import { programs } from "@/data/programs";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip stats={stats} />
      <Section title="Our Programs">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.id} {...program} />
          ))}
        </div>
      </Section>
      <CallToAction />
    </>
  );
}
