import Image from "next/image";
import Link from "next/link";
import Facebook from "./logo/facebook.svg";
import Instagram from "./logo/instagram.svg";
import X from "./logo/x.svg";
import { navLinks } from "../data/nav";

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/HaitianYouthFoundation", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/HaitianYouthF", icon: Instagram },
  { name: "X", href: "https://x.com/HaitianYouthF", icon: X },
];

const linkClass =
  "rounded hover:text-haiti-gold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function Footer() {
  return (
    <footer className="border-t-4 border-haiti-gold bg-haiti-charcoal text-haiti-offwhite">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-xl font-bold text-haiti-gold">Haitian Youth Foundation Inc.</h2>
          <p className="mt-4 leading-relaxed">
            A 501(c)(3) organization empowering Haiti&apos;s youth through education, cultural pride, and community
            service for a brighter tomorrow.
          </p>
          <ul className="mt-6 flex gap-4">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name} (opens in a new tab)`}
                  className="block rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="brightness-0 invert transition-transform duration-200 hover:scale-110"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xl font-bold text-haiti-gold">Links</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xl font-bold text-haiti-gold">Get in Touch</h2>
          <address className="mt-4 flex flex-col gap-2 not-italic">
            <span>PO Box 650142, Fresh Meadows, NY 11365</span>
            <a href="mailto:HYF@haitianyouth.org" className={linkClass}>
              HYF@haitianyouth.org
            </a>
            <a href="tel:7187814747" className={linkClass}>
              718-781-4747
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/20 px-4 py-6 text-center text-sm">
        <p>Copyright © {new Date().getFullYear()}, Haitian Youth Foundation Inc. All rights reserved.</p>
        <p className="mt-3 flex items-center justify-center gap-2">
          <Image
            src="/gallery/HaitianHerelogo.png"
            alt=""
            width={32}
            height={35}
            className="h-9 w-auto rounded bg-black/30"
          />
          <span>Website by <Link href="https://www.haitianhere.com"
          target="_blank"
          rel="noopener noreferrer">HaitianHere</Link></span>
        </p>
      </div>
    </footer>
  );
}
