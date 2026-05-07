import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Services | Cosmetic, Implants, Invisalign — Demo Clinic Dental Studio",
  description:
    "Explore dental services at Demo Clinic Dental Studio: Cosmetic Dentistry, Dental Implants, Invisalign, Emergency Dental Care, Same-day Crowns, and more.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
