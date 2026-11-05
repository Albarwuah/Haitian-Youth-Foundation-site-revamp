import Hero from "@/components/Hero";
//import StatsStrip from "@/components/StatsStrip";
import ProgramCard from "@/components/ProgramCard";
import Section from "@/components/Section";
import CallToAction from "@/components/CallToAction";
import { stats } from "@/data/stats";
import { programs } from "@/data/programs";

export default function Home() {
  return (
    <>
      <Hero />
            <Section title="Our Mission" tone="white">
              <div className="text-center text-2xl font-normal sm:text-3xl">
                <p>Our Mission is to support excellence in education and a thriving environment for the development and bright future of the deprived youth in Haiti.
                   The foundation is dedicated to developing a comprehensive approach to learning in order to equip the children with instrumental skills, allowing them to participate effectively in the advancement of their community.
                  The foundation also encourages a cultural approach to learning and focuses on community service, which will serve as a foundation for the future.</p>
              </div>
            </Section>
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
