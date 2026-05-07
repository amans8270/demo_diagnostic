import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Demo Clinic Dental Studio | Best Dentist in Burari, Delhi",
  description:
    "Contact Demo Clinic Dental Studio — call +91 82878 06712 or email hello@democlinicdental.in to schedule a consultation or emergency dental care.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
