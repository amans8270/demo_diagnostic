import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | Tejas Health Diagnostic Centre, Burari Delhi",
  description:
    "Schedule your diagnostic test appointment online at Tejas Health, Burari Delhi. Quick confirmation, no prepayment, easy rescheduling. MRI, CT Scan, X-Ray & more.",
};

export default function AppointmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
