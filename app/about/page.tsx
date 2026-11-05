import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CallToAction from "@/components/CallToAction";
import { MembersCard } from "@/components/MembersCard";
import { membersData } from "@/data/membersData";

const values = [
  {
    title: "Education",
    text: "We believe that access to quality education is the foundation for a brighter future and a more empowered Haiti.",
  },
  {
    title: "Community Engagement",
    text: "We foster a spirit of service and responsibility, encouraging youth to actively contribute to the well-being of their communities.",
  },
  {
    title: "Cultural Pride",
    text: "We promote an understanding and appreciation of Haiti's rich heritage, helping children stay connected to their roots while building their future.",
  },
  {
    title: "Empowerment",
    text: "We aim to equip Haiti's youth with the skills, resources, and confidence they need to shape their own destiny and lead positive change.",
  },
];

export const metadata = { title: "About Us | Haitian Youth Foundation Inc." };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Empowering Haiti's youth through education, cultural pride, and community service."
      />

      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed">
            <h2 className="text-4xl font-bold text-haiti-navy sm:text-8xl ">Our Story</h2>
            <p>
              Haitian Youth Foundation is a non profit organization established in the state of New York, USA, under the
              Internal Revenue Code 501(c)(3) as a charitable organization.
            </p>
            <p>
              The Haitian Youth Foundation is a non profit organization, established in the state of New York, USA, under the Internal Revenue code (501)©(3). As a charitable institution, we are committed to helping underserved schools and orphanages in Haiti. This is, and will continue to be possible because of the generosity of people like you.
              Thank you for your continuous support
            </p>

          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/gallery/smile/PHOTO-2026-06-14-21-56-07.jpg"
              alt="A smiling Haitian girl"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>


      <Section title="Our Core Values" tone="white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="rounded-2xl border-t-4 border-haiti-gold bg-haiti-offwhite p-6 shadow-md">
              <h3 className="text-xl font-bold text-haiti-navy">{value.title}</h3>
              <p className="mt-3 leading-relaxed">{value.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Our Team" className="relative bg-cover bg-center">
        <Image src="/gallery/Hyfgala26/foundingmembers.jpg" alt="A smiling Haitian girl"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"></Image>
      <div className="absolute inset-0 bg-black/20"/>     
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3 opacity-80 w -full">
          {membersData.map((member) => (
            <MembersCard key={member.id} {...member} />
          ))}
          </div>
        
      </Section>

      <CallToAction />
    </>
  );
}
