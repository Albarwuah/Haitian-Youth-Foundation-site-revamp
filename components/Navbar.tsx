"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "../data/nav";
import Button from "./Button";

const links = navLinks.filter((link) => link.href !== "/donate");

const linkClass =
  "rounded px-1 py-1 font-bold underline-offset-8 hover:text-haiti-gold aria-[current=page]:text-haiti-gold aria-[current=page]:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b-4 border-haiti-gold bg-haiti-navy text-white">
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Haitian Youth Foundation home"
          className="shrink-0 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <Image
            src="/Hyflogo.jpg"
            alt="Haitian Youth Foundation logo"
            width={100}
            height={90}
            loading="eager"
            className="h-14 w-auto rounded bg-white p-1"
          />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={linkClass}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button href="/donate" size="sm">
            Donate
          </Button>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="rounded border-2 border-white px-3 py-2 text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
          >
            {open ? "Close" : "Menu"}
            <span className="sr-only"> navigation</span>
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-white/20 px-4 pb-4 pt-2 lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`block py-3 ${linkClass}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
