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
  title: "Aarogya Diagnostic Centre | Best Diagnostic Center in Burari, Delhi",
  description:
    "Aarogya Diagnostic Centre is a trusted diagnostic centre in Sant Nagar, Burari, Delhi offering MRI scan, CT scan, X-Ray, ultrasound, pathology and more. Book your appointment today.",
  keywords: [
    "Aarogya Diagnostic Centre",
    "diagnostic center Burari Delhi",
    "MRI scan in Burari",
    "CT scan near me Burari",
    "pathology lab Burari",
    "X-Ray Burari Delhi",
    "ultrasound Burari Delhi",
    "diagnostic centre Sant Nagar",
    "NABL lab North Delhi",
  ],
  openGraph: {
    title: "Aarogya Diagnostic Centre — Diagnostic Centre in Burari, Delhi",
    description: "Trusted diagnostic services: MRI, CT Scan, X-Ray, Ultrasound, and Pathology in Burari, North Delhi.",
    type: "website",
    locale: "en_IN",
    siteName: "Aarogya Diagnostic Centre",
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
