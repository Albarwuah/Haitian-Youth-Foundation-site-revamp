import Image from "next/image";
import Button from "./Button";

type HeroProps = {
  headline?: string;
  mission?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function Hero({
  headline = "Empowering Haiti's Youth Through Education",
  mission = "A 501(c)(3) nonprofit supporting schools, orphanages, and community programs for children in Haiti.",
  imageSrc = "/gallery/joy.jpg",
  imageAlt = "Smiling Haitian schoolchildren in blue uniforms holding up their notebooks",
}: HeroProps) {
  return (
    <section className="relative isolate flex min-h-[32rem] items-center overflow-hidden bg-haiti-charcoal md:min-h-[40rem]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Dark overlay keeps the white text above 4.5:1 contrast on any part of the photo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-haiti-charcoal/90 via-haiti-charcoal/70 to-haiti-charcoal/40" />

      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="font-body mt-6 text-lg leading-relaxed text-haiti-offwhite md:text-xl">
            {mission}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/donate" variant="primary">
              Donate
            </Button>
            <Button href="/about" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
