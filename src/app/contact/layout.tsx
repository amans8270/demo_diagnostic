import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Aarogya Diagnostic Centre | Diagnostic Centre in Burari, Delhi",
  description:
    "Get in touch with Aarogya Diagnostic Centre in Burari. Call +91 82878 06712, email info@aarogyadiagnostic.in, or visit us at Sant Nagar, Delhi 110084.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
