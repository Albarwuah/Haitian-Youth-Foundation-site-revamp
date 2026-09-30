import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
//import StatsStrip from "@/components/StatsStrip";
import CallToAction from "@/components/CallToAction";
import { stats } from "@/data/stats";

export const metadata = { title: "Our Impact | Haitian Youth Foundation Inc." };

const photos = [
  { src: "/gallery/girlwriting.jpg", alt: "A child writing at a school desk" },
  { src: "/gallery/PHOTO-2026-06-14-21-56-32.jpg", alt: "Students studying together outdoors at a school" },
  { src: "/gallery/smile/PHOTO-2026-06-14-21-56-06.jpg", alt: "A schoolgirl in uniform holding up a paper and smiling" },
  { src: "/gallery/diploma.jpg", alt: "Four young graduates holding certificates outdoors" },
  { src: "/gallery/smile/PHOTO-2026-06-14-21-56-08.jpg", alt: "Children gathered together in a community hall" },
  { src: "/gallery/boy.jpg", alt: "A small boy in a yellow shirt reaching for a yellow balloon" },
  { src: "/gallery/Fashion Show/fashionshow1.jpg", alt: "Two young models walking outdoors at a fashion show" },
  { src: "/gallery/PHOTO-2026-06-14-21-56-30.jpg", alt: "A man speaking into a microphone at an outdoor gathering" },
];

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        title="Our Impact"
        subtitle="Since the 2010 earthquake, friends and supporters have helped us reach more schools and children in Haiti."
      />
      

      <Section title="Moments from Our Work" intro="A look at the students and communities your support reaches.">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {photos.map((photo) => (
            <li key={photo.src} className="relative aspect-square overflow-hidden rounded-2xl shadow-md">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </Section>

      <CallToAction />
    </>
  );
}
