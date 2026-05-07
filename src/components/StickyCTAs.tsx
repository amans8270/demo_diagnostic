"use client";

import Link from "next/link";

export default function StickyCTAs() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex items-center justify-center pointer-events-none sm:hidden">
      <div className="w-full max-w-xl px-4 pointer-events-auto flex gap-3">
        <a href="tel:+918287806712" className="flex-1 btn-ghost py-3 rounded-2xl text-sm flex items-center justify-center">
          Call Now
        </a>
        <Link href="/appointment" className="flex-1 btn-primary py-3 rounded-2xl text-sm flex items-center justify-center">
          Schedule Consultation
        </Link>
      </div>
    </div>
  );
}
