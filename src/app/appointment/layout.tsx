import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | Aarogya Diagnostic Centre, Burari Delhi",
  description:
    "Schedule your diagnostic test appointment online at Aarogya Diagnostic Centre, Burari Delhi. Quick confirmation, no prepayment, easy rescheduling.",
};

export default function AppointmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
