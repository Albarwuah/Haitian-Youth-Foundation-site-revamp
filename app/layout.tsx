import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Playfair_Display, Lato } from "next/font/google";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      
    </html>
  )
}