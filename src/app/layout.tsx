import type { Metadata } from "next";
import { Playfair_Display, Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QUASAR Designer Studio | Luxury Aari Embroidery & Bridal Blouses",
  description:
    "Premium Aari embroidery, custom bridal blouses, and handcrafted fashion couture. Preserving traditional Kerala textile artistry with luxury boutique standards.",
  keywords:
    "Aari embroidery, custom bridal blouses, luxury wedding outfits, Kerala embroidery, handcrafted designer wear, Zardozi, QUASAR Designer Studio, Kochi",
  openGraph: {
    title: "QUASAR Designer Studio | Luxury Aari Embroidery & Bridal Blouses",
    description:
      "Premium Aari embroidery and custom bridal blouses. Merging ancestral Kerala craftsmanship with contemporary Indian couture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} ${cormorant.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
