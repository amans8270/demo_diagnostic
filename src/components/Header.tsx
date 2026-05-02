"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-xl border-b border-neutral-100">
      {/* Announcement strip — compact on mobile, full on sm+ */}
      <div className="bg-sky-600 text-white text-center text-xs font-medium py-2.5 px-4 tracking-wide">
        <span className="hidden sm:inline">📍 Open Mon–Sat: 7 AM–9 PM &nbsp;|&nbsp; Sun: 8 AM–2 PM &nbsp;|&nbsp; </span>
        <span className="sm:hidden">📍 Burari, Delhi &nbsp;|&nbsp; </span>
        <a href="tel:+919876543210" className="underline underline-offset-2 hover:text-sky-100 transition-colors font-semibold">
          Call +91 98765 43210
        </a>
      </div>

      <div className="container-xl">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center shadow-md shadow-sky-200 group-hover:shadow-sky-300 transition-shadow duration-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20" />
                <circle cx="12" cy="12" r="4" fill="white" stroke="none" opacity="0.3" />
              </svg>
            </div>
            <div>
              <div className="text-[1.0625rem] font-800 text-neutral-900 leading-none tracking-tight" style={{ fontWeight: 800 }}>
                Tejas Health
              </div>
              <div className="text-[10px] text-neutral-400 tracking-[0.12em] uppercase mt-0.5 font-medium">
                Diagnostic Centre
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`header-nav-link ${
                  pathname === link.href
                    ? "!text-sky-600 !bg-sky-50 font-semibold"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="btn-ghost !py-2.5 !px-4 !text-sm !border-neutral-200"
            >
              <svg className="w-4 h-4 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +91 98765 43210
            </a>

            <Link href="/appointment" className="btn-primary !py-2.5 !px-5 !text-sm">
              Book Appointment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors text-neutral-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              ) : (
                <><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-neutral-100"
          >
            <div className="container-xl py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`header-nav-link block !px-4 !py-3 ${
                    pathname === link.href ? "!text-sky-600 !bg-sky-50 font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 pb-1">
                <Link
                  href="/appointment"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full !py-3 !text-sm"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
