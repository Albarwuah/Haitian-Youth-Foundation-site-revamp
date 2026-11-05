import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PayPalDonateButton from "@/components/Button/PaypalDonateButton";

export const metadata = { title: "Donate | Haitian Youth Foundation Inc." };

export default function DonatePage() {
  return (
    <>
      <PageHeader
        title="Support Our Mission"
        subtitle="Your contribution helps us empower Haitian youth through education, mentorship, and community development. Every donation makes a difference."
      />

      <Section title="Give Online">
        <div className="mx-auto max-w-2xl rounded-2xl border-t-4 border-haiti-gold bg-white p-6 shadow-md sm:p-10">
          <PayPalDonateButton />
        </div>
      </Section>

      <Section title="Other Ways to Give" tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-3">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/gallery/diploma.jpg"
              alt="Four young graduates holding certificates outdoors"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="text-center leading-relaxed">
            <h3 className="text-2xl font-bold text-haiti-navy sm:text-3xl">
              Empowering Haiti&apos;s Youth, Building Tomorrow&apos;s Leaders.
            </h3>
            <p className="mt-4 text-lg">
              Your generous contribution can make a lasting difference in the lives of underprivileged youth in Haiti.
              By donating to the Haitian Youth Foundation, you are directly investing in education, community
              development, and the future of Haiti&apos;s children.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/logo/cashapp.svg"
              alt="Cash App QR code for donations"
              width={192}
              height={192}
              className="rounded-lg"
            />
            <h3 className="mt-6 text-2xl font-bold text-haiti-navy">Donate via Cash App</h3>
            <p className="mt-2">Scan the QR code</p>
          </div>
        </div>
      </Section>

      <Section title="Become a Sponsor" intro="Your support provides essential resources, mentorship, and educational opportunities to children who need it most. Together, we can empower the next generation with the tools they need to succeed and contribute positively to their communities.">
        <div className="flex justify-center">
          <Button href="/contact" variant="secondary">
            Become a Sponsor Today!
          </Button>
        </div>
      </Section>
    </>
  );
}
