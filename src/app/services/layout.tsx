import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostic Services | MRI, CT Scan, X-Ray, Pathology — Aarogya Diagnostic Burari",
  description:
    "Explore our full range of diagnostic services: MRI Scan, CT Scan, X-Ray, Ultrasound, Pathology, ECG, Mammography & Health Packages at Aarogya Diagnostic Centre, Burari Delhi.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
