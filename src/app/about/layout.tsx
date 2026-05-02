import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tejas Health | Trusted Diagnostic Centre in Burari, Delhi",
  description:
    "Learn about Tejas Health Diagnostic Centre — NABL-accredited facility in Burari, Delhi with 10+ years of experience serving 50,000+ patients with accurate diagnostic services.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
