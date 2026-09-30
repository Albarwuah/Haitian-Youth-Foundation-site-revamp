import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Button from "@/components/Button";
import CallToAction from "@/components/CallToAction";

export const metadata = { title: "Events | Haitian Youth Foundation Inc." };

const fashionShow = [
  { src: "/gallery/Fashion Show/fashionshow1.jpg", alt: "Two young models walking outdoors at a fashion show" },
  { src: "/gallery/Fashion Show/fashionshow3.jpg", alt: "Two young models posing in front of a yellow building" },
];

const GALA_DIR = "gallery/Hyfgala26";
const FEATURED = "foundingmembers.jpg";

// Read at build time so photos added to the folder appear without code changes
const galaFiles = fs
  .readdirSync(path.join(process.cwd(), "public", GALA_DIR))
  .filter((file) => /\.jpe?g$/i.test(file) && file !== FEATURED)
  .sort();

// The featured photo goes first so the viewer can step through everything
const galaPhotos = [
  {
    src: `/${GALA_DIR}/${FEATURED}`,
    alt: "A man and two women posing together at the gala, one woman standing between the seated pair",
  },
  ...galaFiles.map((file, i) => ({
    src: `/${GALA_DIR}/${file}`,
    alt: `Gala photo ${i + 2} of ${galaFiles.length + 1}`,
  })),
];

export default function EventPage() {
  return (
    <>
      <PageHeader title="Events" subtitle="Join us in celebrating and supporting Haiti's youth." />

      <Section title="Upcoming Events">
        {/* TODO: replace with real upcoming events (title, date, place, link) */}
        <div className="mx-auto max-w-2xl rounded-2xl border-t-4 border-haiti-gold bg-white p-8 text-center shadow-md">
          <p className="text-lg leading-relaxed">
            No events are scheduled at the moment. Follow us on Facebook and Instagram for announcements, or get in
            touch to learn how you can help.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>

      <Section title="HYF Gala 2026" intro="Photos from the Haitian Youth Foundation gala. Select any photo to enlarge it." tone="white">
        <Gallery photos={galaPhotos} featuredCaption="Founding members" />
      </Section>

      <Section title="Fashion Show">
        <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {fashionShow.map((photo) => (
            <li key={photo.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 640px) 384px, 100vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </Section>

      <CallToAction />
    </>
  );
}
