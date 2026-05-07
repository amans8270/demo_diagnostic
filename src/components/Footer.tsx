"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0B1F3A", color: "#94A3B8" }}>
      {/* Top border gradient */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, #0D9488, #0EA5E9, #0D9488)" }} />

      <div className="container-xl pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 w-fit">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md shrink-0"
                style={{ background: "linear-gradient(135deg, #0D9488, #0EA5E9)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3C8.5 3 6 5.5 6 8c0 1.5.5 2.5 1 3.5C8 13 8 15 7 19c-.3 1.2.5 2 1.5 1.5C10 20 11 18 12 18s2 2 3.5 2.5c1 .5 1.8-.3 1.5-1.5C16 15 16 13 17 11.5c.5-1 1-2 1-3.5 0-2.5-2.5-5-6-5z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-base leading-none tracking-tight">Demo Clinic</div>
                <div className="text-[10px] tracking-[0.14em] uppercase mt-1 font-medium" style={{ color: "#0D9488" }}>Dental Studio</div>
              </div>
            </Link>
            <p className="text-sm leading-7 mb-6" style={{ color: "#64748B" }}>
              Gentle, high-tech dentistry in Sant Nagar, Burari, Delhi. Veneers, implants, Invisalign and emergency care — trusted by 10,000+ patients.
            </p>
            <div className="flex gap-2">
              {[
                { label: "Facebook", d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "Instagram", d: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zM12 15a3 3 0 110-6 3 3 0 010 6z" },
                { label: "YouTube", d: "M22 8s-.3-1.8-1-2.6c-1-.9-2-.9-2.5-.9C16 4.4 12 4.4 12 4.4s-4 0-6.5.1c-.5 0-1.5 0-2.5.9C2.3 6.2 2 8 2 8S1.8 10 1.8 12v1.9c0 2 .2 3.8.2 3.8s.3 1.8 1 2.5c1 .9 2.3.9 2.8 1C7.8 21.3 12 21.3 12 21.3s4 0 6.5-.2c.5 0 1.5 0 2.5-.9.7-.7 1-2.5 1-2.5s.2-2 .2-4V12c0-2-.2-4-.2-4zM9.8 15.5v-7l6.5 3.5-6.5 3.5z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(13,148,136,0.2)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(13,148,136,0.35)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Navigation</h4>
            <ul className="space-y-3.5">
              {[
                { h: "/", l: "Home" },
                { h: "/about", l: "About Us" },
                { h: "/services", l: "Services" },
                { h: "/services#gallery", l: "Smile Gallery" },
                { h: "/contact", l: "Contact" },
                { h: "/appointment", l: "Book Appointment" },
              ].map((x) => (
                <li key={x.h}>
                  <Link
                    href={x.h}
                    className="text-sm transition-colors duration-150 flex items-center gap-2 group"
                    style={{ color: "#64748B" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748B")}
                  >
                    <span className="w-1 h-1 rounded-full shrink-0 group-hover:bg-teal-400 transition-colors" style={{ background: "#334155" }} />
                    {x.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Our Services</h4>
            <ul className="space-y-3.5">
              {["Cosmetic Dentistry", "Dental Implants", "Invisalign", "Emergency Care", "Same-Day Crowns", "Oral Surgery"].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm transition-colors duration-150 flex items-center gap-2 group"
                    style={{ color: "#64748B" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748B")}
                  >
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "#334155" }} />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {[
                {
                  icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>,
                  content: <span className="text-sm leading-relaxed" style={{ color: "#64748B" }}>Sant Nagar, Burari, Delhi – 110084</span>,
                },
                {
                  icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>,
                  content: <a href="tel:+918287806712" className="text-sm" style={{ color: "#64748B" }}>+91 82878 06712</a>,
                },
                {
                  icon: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></>,
                  content: <a href="mailto:hello@democlinicdental.in" className="text-sm" style={{ color: "#64748B" }}>hello@democlinicdental.in</a>,
                },
                {
                  icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
                  content: (
                    <div className="text-sm leading-7" style={{ color: "#64748B" }}>
                      <span className="text-white font-medium">Mon–Sat:</span> 9 AM – 6 PM<br />
                      <span className="text-white font-medium">Sunday:</span> Closed
                    </div>
                  ),
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#0D9488" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                  {item.content}
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-xl" style={{ background: "rgba(13,148,136,0.10)", border: "1px solid rgba(13,148,136,0.20)" }}>
              <p className="text-xs font-semibold mb-2" style={{ color: "#14B8A6" }}>🚨 Emergency?</p>
              <a href="tel:+918287806712" className="btn-primary !py-2.5 !text-sm w-full text-center">
                Call for Urgent Care
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#334155" }}>
            © {new Date().getFullYear()} Demo Clinic Dental Studio. All rights reserved. | NABL Accredited | ISO 9001
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs transition-colors" style={{ color: "#334155" }}>Privacy Policy</a>
            <a href="#" className="text-xs transition-colors" style={{ color: "#334155" }}>Terms of Service</a>
            <a href="#" className="text-xs transition-colors" style={{ color: "#334155" }}>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
