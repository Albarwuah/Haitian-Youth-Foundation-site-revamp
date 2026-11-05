import Image from "next/image";
import Button from "./Button";

type ProgramCardProps = {
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
};

export default function ProgramCard({ title, description, href, image, imageAlt = "" }: ProgramCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border-b-4 border-haiti-gold bg-white text-haiti-charcoal shadow-md">
      {image && (
        <div className="relative aspect-[4/3] w-full">
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold text-haiti-navy">{title}</h3>
        <p className="mt-4 line-clamp-5 leading-relaxed">{description}</p>
        <div className="mt-auto pt-6">
          <Button href={href} variant="secondary">
            Learn More<span className="sr-only"> about {title}</span>
          </Button>
        </div>
      </div>
    </article>
  );
}
