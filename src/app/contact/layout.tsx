import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Tejas Health | Diagnostic Centre in Burari, Delhi",
  description:
    "Get in touch with Tejas Health Diagnostic Centre in Burari. Call +91 98765 43210, email info@tejashealth.in, or visit us at Main Burari Road, Delhi 110084.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
