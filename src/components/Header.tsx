"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(255,255,255,0.97)"
          : "rgba(255,255,255,0.97)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: scrolled
          ? "0 1px 0 rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.06)"
          : "0 1px 0 rgba(0,0,0,0.05)",
      }}
    >
      {/* Announcement strip */}
      <div className="announcement-strip">
        <span className="hidden sm:inline">
          📍 Mon–Sat: 9 AM – 6 PM &nbsp;|&nbsp; Sant Nagar, Burari, Delhi &nbsp;|&nbsp;
        </span>
        <span className="sm:hidden">📍 Sant Nagar, Burari &nbsp;|&nbsp;</span>
        <a href="tel:+918287806712">+91 82878 06712</a>
        &nbsp;|&nbsp;
        <Link href="/appointment" style={{ color: "#F59E0B", fontWeight: 700 }}>
          Book Now →
        </Link>
      </div>

      <div className="container-xl">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div
              className="relative w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
              style={{ background: "linear-gradient(135deg, #0D9488 0%, #0EA5E9 100%)" }}
            >
              {/* Tooth icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3C8.5 3 6 5.5 6 8c0 1.5.5 2.5 1 3.5C8 13 8 15 7 19c-.3 1.2.5 2 1.5 1.5C10 20 11 18 12 18s2 2 3.5 2.5c1 .5 1.8-.3 1.5-1.5C16 15 16 13 17 11.5c.5-1 1-2 1-3.5 0-2.5-2.5-5-6-5z"
                  fill="white"
                  fillOpacity="0.95"
                />
              </svg>
            </div>
            <div>
              <div
                className="text-[1.0625rem] leading-none tracking-tight"
                style={{ fontWeight: 800, color: "#0B1F3A" }}
              >
                Demo Clinic
              </div>
              <div
                className="text-[10px] tracking-[0.12em] uppercase mt-0.5 font-medium"
                style={{ color: "#0D9488" }}
              >
                Dental Studio
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`header-nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918287806712"
              className="flex items-center gap-2 text-sm font-semibold"
              style={{ color: "#475569" }}
            >
              <svg
                className="w-4 h-4"
                style={{ color: "#0D9488" }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +91 82878 06712
            </a>

            <Link href="/appointment" className="btn-primary !py-2.5 !px-5 !text-sm">
              Book Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#334155" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
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
            className="lg:hidden overflow-hidden border-t"
            style={{ borderColor: "#E2E8F0", background: "white" }}
          >
            <div className="container-xl py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`header-nav-link block !px-4 !py-3 ${
                    pathname === link.href ? "active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 pb-1 flex flex-col gap-2">
                <Link
                  href="/appointment"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full !py-3 !text-sm"
                >
                  Book Consultation
                </Link>
                <a
                  href="tel:+918287806712"
                  className="btn-ghost w-full !py-3 !text-sm text-center"
                >
                  Call +91 82878 06712
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
