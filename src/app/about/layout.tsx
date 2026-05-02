import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Aarogya Diagnostic Centre | Trusted Diagnostic Centre in Burari, Delhi",
  description:
    "Learn about Aarogya Diagnostic Centre — facility in Burari, Delhi with years of experience serving patients with accurate diagnostic services.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
