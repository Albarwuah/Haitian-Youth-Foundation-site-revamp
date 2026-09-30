import Button from "./Button";
import Image from "next/image";

type CallToActionProps = {
  heading?: string;
  text?: string;
};

export default function CallToAction({
  heading = "Help a Child Learn, Grow, and Lead",
  text = "Your support provides school supplies, teachers' salaries, and care for children across Haiti.",
}: CallToActionProps) {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-haiti-navy">
      {/* Background image */}
      <Image
        src="/gallery/Hyfgala26/footerbg.jpg"
        alt=""
        fill
        className="object-cover"
        priority={false}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 id="cta-heading" className="text-3xl font-bold text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-haiti-offwhite">{text}</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/donate" variant="primary">
            Donate
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}