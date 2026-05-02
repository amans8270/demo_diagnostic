import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="container-xl pt-12 pb-10 sm:pt-20 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center shadow-md shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/></svg>
              </div>
              <div>
                <div className="text-white font-bold text-base leading-none tracking-tight">Tejas Health</div>
                <div className="text-neutral-500 text-[10px] tracking-[0.12em] uppercase mt-1">Diagnostic Centre</div>
              </div>
            </Link>
            <p className="text-sm leading-7 text-neutral-500 mb-6">
              NABL-accredited diagnostic centre providing accurate and timely services in Burari, North Delhi since 2015.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["NABL", "ISO 15189", "AERB Licensed"].map(c => (
                <span key={c} className="text-[11px] font-medium px-2.5 py-1 rounded-md border border-white/10 text-neutral-500">{c}</span>
              ))}
            </div>
            <div className="flex gap-2">
              {[
                { label: "Facebook", d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "Instagram", d: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zM12 15a3 3 0 110-6 3 3 0 010 6z" },
                { label: "Twitter", d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-sky-500/20 border border-white/[0.07] hover:border-sky-500/30 flex items-center justify-center transition-all duration-200">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={s.d}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">Navigation</h4>
            <ul className="space-y-4">
              {[{h:"/",l:"Home"},{h:"/about",l:"About Us"},{h:"/services",l:"Services"},{h:"/contact",l:"Contact"},{h:"/appointment",l:"Book Appointment"}].map(x => (
                <li key={x.h}>
                  <Link href={x.h} className="text-sm text-neutral-500 hover:text-white transition-colors duration-150">{x.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">Services</h4>
            <ul className="space-y-4">
              {["MRI Scan","CT Scan","Digital X-Ray","Ultrasound","Pathology & Lab","ECG & EEG","Mammography","Health Packages"].map(s => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-neutral-500 hover:text-white transition-colors duration-150">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex gap-3 items-start">
                <svg className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-sm text-neutral-500 leading-relaxed">Shop No. 12, Main Burari Road,<br/>Near Burari Chowk, Delhi – 110084</span>
              </li>
              <li className="flex gap-3 items-center">
                <svg className="w-4 h-4 text-sky-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <a href="tel:+919876543210" className="text-sm text-neutral-500 hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex gap-3 items-center">
                <svg className="w-4 h-4 text-sky-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
                <a href="mailto:info@tejashealth.in" className="text-sm text-neutral-500 hover:text-white transition-colors">info@tejashealth.in</a>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <div className="text-sm text-neutral-500 leading-7">
                  <span className="text-white font-medium">Mon–Sat:</span> 7:00 AM – 9:00 PM<br/>
                  <span className="text-white font-medium">Sunday:</span> 8:00 AM – 2:00 PM
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container-xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-600">© {new Date().getFullYear()} Tejas Health Diagnostic Centre. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
