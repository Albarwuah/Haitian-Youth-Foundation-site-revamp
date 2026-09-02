import Link from "next/link";
import PayPalDonateButton from "@/components/Button/PaypalDonateButton";

export default function DonatePage() {
  return (
    <>
      {/* HERO */}
      <section className="w-full bg-background-light text-haiti-charcoal">
        <div className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40">
          <div className="absolute inset-0 bg-gradient-to-br from-haiti-navy/20 via-haiti-gold/10 to-haiti-red/20" />
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8 2xl:max-w-[1760px]">
            <h1 className="mb-6 text-3xl font-bold leading-tight text-haiti-navy sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
              Support Our Mission
            </h1>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-haiti-navy sm:text-lg md:text-xl 2xl:max-w-3xl 2xl:text-2xl">
              Your contribution helps us empower Haitian youth through
              education, mentorship, and community development. Every
              donation makes a difference.
            </p>

            <div className="flex flex-col items-center justify-center sm:px-8 lg:px-12 lg:py-10 xl:py-12">
              <PayPalDonateButton />
            </div>
          </div>
        </div>
      </section>

      {/* OTHER WAYS TO SUPPORT */}
      <div className="border-b-8  h-250 w-full p-8 sm:p-16 lg:p-24 bg-haiti-lightgray">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between 2xl:max-w-[1760px] 2xl:gap-16">
          {/* Left: image */}
          <div className="w-full lg:w-1/3">
            <img
              src="/gallery/diploma.jpg"
              alt="Diploma"
              className="h-64 w-full max-w-full rounded-b-full rounded-tr-full object-cover shadow-lg shadow-amber-500 lg:h-80 2xl:h-96"
            />
          </div>

          {/* Middle: copy */}
          <div className="w-full text-center leading-relaxed text-haiti-navy lg:w-1/3">
            <h1 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl 2xl:text-5xl">
              Empowering Haiti&apos;s Youth, Building Tomorrow&apos;s Leaders.
            </h1>
            <p className="mt-4 text-sm font-light leading-loose sm:text-base md:text-lg 2xl:text-xl">
              Your generous contribution can make a lasting difference in the
              lives of underprivileged youth in Haiti. By donating to the
              Haitian Youth Foundation, you are directly investing in
              education, community development, and the future of
              Haiti&apos;s children.
            </p>
          </div>

          {/* Right: CASHAPP */}
          <div className="w-full lg:w-1/3">
            <div className="mx-auto flex max-w-xs flex-col items-center p-4 sm:p-8 2xl:max-w-xl">
              <img
                className="w-40 transition-transform duration-300 hover:scale-110 sm:w-48 2xl:w-56"
                src="/logo/cashapp.svg"
                alt="Cash App logo"
              />
              <div className="pt-8 text-center font-bold text-haiti-navy">
                <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl">
                  Donate via Cashapp
                </h1>
                <p className="mt-2 text-sm font-normal sm:text-base 2xl:text-lg">
                  Scan the QR code
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MISSION / CALL TO ACTION */}
      <section className="flex px-4 py-16 sm:px-6 lg:px-8 lg:py-24 xl:py-28 bg-haiti-lightgray">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 lg:gap-10 2xl:max-w-490">
          <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:gap-10">
            <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-lg bg-[url('/gallery/joy.jpg')] bg-cover bg-center sm:h-80 lg:h-112 lg:w-1/2 xl:h-128 2xl:h-144" />
            <div className="flex w-full items-center justify-center bg-cover bg-center py-10 lg:w-1/2 lg:py-0">
              <div className="mx-auto flex max-w-3xl flex-col items-center gap-6  px-4 py-6 text-center lg:max-w-4xl lg:items-start lg:gap-8 lg:text-left xl:max-w-5xl 2xl:max-w-2xl">
                <Link
                  href="/contact"
                  className="inline-block rounded-lg border bg-haiti-navy px-6 py-3 text-center text-sm font-semibold text-white transition-transform duration-300 hover:scale-105 hover:bg-green-700 sm:text-base lg:px-8 lg:py-4 lg:text-lg 2xl:px-10 2xl:py-5 2xl:text-xl"
                >
                  Become a Sponsor Today!
                </Link>
              </div>
            </div>
          </div>

          <h2 className="mt-6 text-center text-2xl font-bold leading-snug text-haiti-navy sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
            Donate to Our Cause for Positive Community Impact.
          </h2>
          <p className="max-w-3xl text-center text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg lg:max-w-4xl lg:text-xl 2xl:max-w-5xl 2xl:text-2xl">
            Your support can transform lives. By contributing to the Haitian
            Youth Foundation, you are helping to provide essential resources,
            mentorship, and educational opportunities to children who need it
            most. Together, we can empower the next generation with the
            tools they need to succeed and contribute positively to their
            communities. The Haitian Youth Foundation is committed to
            shaping a brighter future by giving children the tools they need
            to succeed.
          </p>
        </div>
      </section>
    </>
  );
}


