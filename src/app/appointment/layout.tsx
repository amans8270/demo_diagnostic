import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule Appointment | Demo Clinic Dental Studio — Book Dentist Visit",
  description:
    "Book your dental consultation or treatment at Demo Clinic Dental Studio. Fast confirmations, multiple service options, and emergency slots available.",
};

export default function AppointmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
