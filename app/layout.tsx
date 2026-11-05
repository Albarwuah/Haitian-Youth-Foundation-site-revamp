import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Baloo_2, Nunito } from "next/font/google";

// Bold, rounded headings that echo the HYF logo's lettering
const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-baloo",
});

// A warm, humanist body face that pairs with Baloo 2
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Haitian Youth Foundation Inc.",
  description:
    "Haitian Youth Foundation Inc. is a 501(c)(3) nonprofit supporting education for youth in Haiti through schools, orphanage assistance, and community programs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunito.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-haiti-gold focus:px-4 focus:py-2 focus:font-bold focus:text-haiti-charcoal"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}