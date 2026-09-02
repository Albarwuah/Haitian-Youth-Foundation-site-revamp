"use client";
import Image from "next/image";
import Link from "next/link";
import Facebook from './logo/facebook.svg';
import Instagram from './logo/instagram.svg';
import X from './logo/x.svg';
import {navLinks} from '../data/nav';

export default function Footer() {
  const date = new Date();
  

  return (
    <footer className="h-full text-amber-200 font-normal  text-sm flex items-start justify-center mx-auto md:gap-20 gap-10 py-8 px-4 md:px-20 flex-wrap bg-teal-800"> 

      {/* Column 1 - About */}
      <div className="flex flex-col items-center gap-4 max-w-xs text-center">
        <h2 className="font-heading text-xl font-bold py-4">Haitian Youth Foundation Inc.</h2>
        <p className="font-body text-sm md:text-base lg:text-lg">
          Haitian Youth Foundation Inc. is a 501(C)(3) organization empowering Haiti's youth through education, cultural pride, and community service for a brighter tomorrow.
        </p>
        <div className="flex justify-center gap-4 py-4">
          <Link href="https://www.facebook.com/HaitianYouthFoundation" target="_blank" rel="noopener noreferrer" className="fill-haiti-gold">
            <Image src={Facebook} alt="Facebook" width={28} height={28} className="hover:opacity-60 transition-opacity duration-300 hover:scale-110" />
          </Link>
          <Link href="https://www.instagram.com/HaitianYouthF" target="_blank" rel="noopener noreferrer">
            <Image src={Instagram} alt="Instagram" width={28} height={28} className="hover:opacity-60 transition-transform duration-300 hover:scale-110" />
          </Link>
          <Link href="https://x.com/HaitianYouthF" target="_blank" rel="noopener noreferrer">
            <Image src={X} alt="X" width={28} height={28} className="hover:opacity-60 transition-opacity duration-300 hover:scale-110" />
          </Link>
        </div>
      </div>

      {/* Column 2 - Links */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="font-heading text-xl font-bold py-4">Links</h3>
        <nav className="font-body flex flex-col gap-2 text-sm md:text-base">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:underline">
            {link.name}
          </Link>
        ))}
        </nav>
      </div>

      {/* Column 3 - Contact */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="font-heading text-xl font-bold py-4">Get in Touch</h3>
        <address className="font-body not-italic flex flex-col gap-2 text-sm md:text-base">
          <span>PO Box 650142, Fresh Meadows, NY 11365</span>
          <a href="mailto:HYF@haitianyouth.org" className="hover:underline">HYF@haitianyouth.org</a>
          <a href="tel:7187814747" className="hover:underline">718-781-4747</a>
        </address>
      </div>
      <div className="w-full border-t border-haiti-red m-4 py-2">
<div className=" items-center gap-2 text-center py-4">
        Copyright © {date.getFullYear()}, Haitian Youth Foundation Inc, All rights reserved.
      </div>
      </div>
    </footer>
    
  );
}