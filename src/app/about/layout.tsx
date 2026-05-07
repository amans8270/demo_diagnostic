import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Demo Clinic Dental Studio | Trusted Dentist in Burari, Delhi",
  description:
    "Learn about Demo Clinic Dental Studio — our experienced dental team in Burari, Delhi offering cosmetic, implant, and emergency dental care.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
