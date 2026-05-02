import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeaderSpacer from "@/components/HeaderSpacer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Diagnostic Center in Burari | Tejas Health — MRI, CT Scan, X-Ray, Pathology",
  description:
    "Tejas Health is a trusted NABL-accredited diagnostic centre in Burari, Delhi offering MRI scan, CT scan, X-Ray, ultrasound, pathology and more. Book your appointment today.",
  keywords: [
    "diagnostic center Burari Delhi",
    "MRI scan in Burari",
    "CT scan near me Burari",
    "pathology lab Burari",
    "X-Ray Burari Delhi",
    "ultrasound Burari Delhi",
    "Tejas Health diagnostic",
    "NABL lab North Delhi",
  ],
  openGraph: {
    title: "Tejas Health — Diagnostic Centre in Burari, Delhi",
    description: "Trusted diagnostic services: MRI, CT Scan, X-Ray, Ultrasound, and Pathology in Burari, North Delhi.",
    type: "website",
    locale: "en_IN",
    siteName: "Tejas Health",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {/* HeaderSpacer dynamically measures the header and sets padding-top on <main> */}
        <HeaderSpacer />
        {/*
          Fallback pt-[112px] via inline style so SSR never clips content.
          HeaderSpacer will override this precisely once JS runs on client.
        */}
        <main id="main-content" className="flex-1" style={{ paddingTop: "112px" }}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
