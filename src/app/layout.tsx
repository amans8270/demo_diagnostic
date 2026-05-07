import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCTAs from "@/components/StickyCTAs";
import HeaderSpacer from "@/components/HeaderSpacer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Demo Clinic Dental Studio — Best Dentist in Delhi",
  description:
    "A Brighter Smile Begins With a Gentler Touch. Demo Clinic Dental Studio in Sant Nagar, Burari, Delhi — cosmetic dentistry, implants, Invisalign and emergency care.",
  keywords: [
    "Best Dentist in Delhi",
    "Dental Clinic Sant Nagar",
    "Dental Implants Burari",
    "Cosmetic Dentistry Delhi",
    "Emergency Dental Care Burari",
  ],
  openGraph: {
    title: "Demo Clinic Dental Studio — Best Dentist in Delhi",
    description: "High-tech, gentle dentistry in Sant Nagar, Burari. Schedule your consultation today.",
    type: "website",
    locale: "en_IN",
    siteName: "Demo Clinic Dental Studio",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Demo Clinic Dental Studio",
    "description": "High-tech, gentle dentistry in Sant Nagar, Burari. Cosmetic dentistry, implants, Invisalign and emergency care.",
    "telephone": "+918287806712",
    "email": "hello@democlinicdental.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sant Nagar",
      "addressLocality": "Burari",
      "addressRegion": "Delhi",
      "postalCode": "110084",
      "addressCountry": "IN"
    },
    "openingHours": ["Mo-Sa 09:00-18:00"],
    "image": "/images/dental/hero_image.png",
    "priceRange": "₹₹",
    "url": "https://example.com"
  };
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preload" as="image" href="/images/dental/hero_image.png" />
      </head>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        {/* HeaderSpacer dynamically measures the header and sets padding-top on <main> */}
        <HeaderSpacer />
        {/*
          Fallback pt-[112px] via inline style so SSR never clips content.
          HeaderSpacer will override this precisely once JS runs on client.
        */}
        <main id="main-content" className="flex-1" style={{ paddingTop: "88px" }}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <StickyCTAs />
      </body>
    </html>
  );
}
