import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '../data/nav';

export default function Navbar() {
  return (
    <nav className="bg-teal-800 text-amber-200 font-extrabold flex-wrap flex items-center py-4 px-4 md:px-20 relative">
      <Image src="/Hyflogo.jpg" alt="HYF Logo" width={100} height={90} className="flex justify-center items-center md:w-auto mr-4 border-10 pl-4 border-haiti-offwhite" loading='eager'/>
      {/* Links */}
      <div className="md:gap-8 font-semibold sm:text-sm md:text-base lg:text-lg xl:text-2xl sm:py-0 py-4 gap-4 flex-col text-xs md:flex-row flex items-center mx-auto
      ">
       {navLinks.map ((link) => (
          <Link key={link.href}href={link.href} className="hover:underline">
            {link.name}
          </Link>
        ))}
      </div>

      {/* Donate button */}
      <Link href="/donate" className="rounded-full border-2 border-haiti-gold  px-4 py-2 hover:bg-haiti-lightgray
       hover:text-haiti-navy flex items-center justify-center transition-colors duration-300 top-0 right-4 mt-2 md:mt-0">
        Donate Here
      </Link>

    </nav>
  );
}