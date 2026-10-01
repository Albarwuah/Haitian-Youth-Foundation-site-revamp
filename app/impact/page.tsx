import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CallToAction from "@/components/CallToAction";

export const metadata = { title: "Our Impact | Haitian Youth Foundation Inc." };

const photos = [
  { src: "/gallery/PHOTO-2026-06-14-21-56-32.jpg", alt: "Students studying together outdoors at a school" },
  { src: "/gallery/smile/PHOTO-2026-06-14-21-56-06.jpg", alt: "A schoolgirl in uniform holding up a paper and smiling" },
  { src: "/gallery/diploma.jpg", alt: "Four young graduates holding certificates outdoors" },
  { src: "/gallery/smile/PHOTO-2026-06-14-21-56-08.jpg", alt: "Children gathered together in a community hall" },
  { src: "/gallery/boy.jpg", alt: "A small boy in a yellow shirt reaching for a yellow balloon" },
  { src: "/gallery/Fashion Show/fashionshow1.jpg", alt: "Two young models walking outdoors at a fashion show" },
  { src: "/gallery/PHOTO-2026-06-14-21-56-30.jpg", alt: "A man speaking into a microphone at an outdoor gathering" },
  { src: "/gallery/girlwriting.jpg", alt: "A child writing at a school desk" },
];

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        title="Our Impact"
        subtitle="Our efforts have resulted in empowered individuals and stronger communities. Explore the difference we are making together."
        bgImage="/gallery/girlwriting.jpg"
         className="min-h-[420px] sm:min-h-[520px] flex flex-col justify-center"
        overlay
      />
      <Section
        title="Educational Support and Community Development"
        intro="We are committed to enhancing the quality of education in Haiti by providing essential resources to schools in underserved areas. 
        Our support includes school supplies, books, infrastructure improvements, and helping to cover teachers’ salaries, ensuring that educators are
         fairly compensated for their critical work. By supporting both students and 
        teachers, we aim to create a nurturing and effective learning environment that fosters academic success and personal growth."
        className="bg-haiti-red/15 flex flex-col md:flex-row gap-4 items-center justify-center">
          <Image
            src="/gallery/PHOTO-2026-06-14-21-56-32.jpg"
            alt="Students studying together outdoors at a school"
            width={600}
            height={600}
            className="mx-auto h-auto w-full max-w-sm rounded-4xl bg-white p-4 shadow-md"
          />
      </Section>

           <Section
        title="Orphanage Assistance"
        intro="Many children in Haiti face the harsh reality of growing up without parents due to natural disasters, 
        poverty, and other challenges. The Haitian Youth Foundation provides direct support to orphanages, offering 
        care packages that include food, clothing, and educational supplies. Our goal is to ensure that these children 
        have access to a stable, nurturing environment where they can thrive 
        academically and emotionally, helping to secure a brighter future for them."
        className="bg-haiti-gold/15 flex flex-col md:flex-row gap-4 items-center justify-center">
          <Image
            src="/gallery/girlsmiling.jpg"
            alt="A girl smiling while holding a book in a classroom"
            width={600}
            height={600}
            className="mx-auto h-auto w-full max-w-sm rounded-4xl p-4 shadow-md"
          />
      </Section>
      <Section
        title="Community and Cultural Programs"
        intro="We believe in the power of community-driven initiatives. By working closely with local leaders and organizations, we aim to create sustainable solutions that address the unique challenges faced by Haitian communities. Our programs focus on skill development, economic opportunities, and fostering a sense of ownership among community members."
        className="bg-haiti-green/15 flex flex-col md:flex-row gap-4 items-center justify-center">
          <Image
            src="/gallery/satellite.jpg"
            alt="Community members collaborating on a project"
            width={600}
            height={600}
            className="mx-auto h-auto w-full max-w-sm rounded-4xl object-cover p-4 shadow-md"
          />
      </Section>

      <Section
        title="Moments from Our Work"
        intro="A look at the students and communities your support reaches."
      >
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {photos.map((photo) => (
            <li
              key={photo.src}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 motion-safe:hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </Section>

      <CallToAction />
    </>
  );
}