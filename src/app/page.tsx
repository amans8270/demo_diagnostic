"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});
const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } };
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const services = [
  { title: "MRI Scan", time: "Same day", desc: "1.5T high-resolution MRI for brain, spine, joints and soft tissue. No radiation.", gradient: "from-sky-500 to-blue-600", icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="3"/><circle cx="12" cy="12" r="3"/><path d="M6 6V4M18 6V4M6 18v2M18 18v2"/></svg> },
  { title: "CT Scan", time: "2–4 hrs", desc: "128-slice CT imaging for chest, abdomen, head and vascular studies.", gradient: "from-violet-500 to-purple-600", icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg> },
  { title: "Digital X-Ray", time: "30 min", desc: "Low-dose digital radiography with instant results for bones and chest.", gradient: "from-teal-500 to-emerald-600", icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M12 6v8M8 10h8"/></svg> },
  { title: "Ultrasound", time: "Same day", desc: "Colour Doppler for obstetrics, abdomen, thyroid and vascular care.", gradient: "from-orange-400 to-pink-500", icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12a7 7 0 0114 0"/><path d="M8 12a4 4 0 018 0"/><circle cx="12" cy="12" r="1"/><path d="M12 13v6"/></svg> },
  { title: "Pathology", time: "4–6 hrs", desc: "NABL-accredited lab for blood counts, hormones, diabetes and more.", gradient: "from-rose-500 to-red-600", icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v11.5a4 4 0 108 0V3"/><path d="M9 9h8"/></svg> },
  { title: "ECG & EEG", time: "Same day", desc: "Non-invasive cardiac and neurological monitoring and analysis.", gradient: "from-cyan-500 to-sky-600", icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 12 5 12 7 4 10 20 13 8 16 16 18 12 22 12"/></svg> },
];

const reasons = [
  { title: "NABL Accredited Laboratory", desc: "Our lab meets the highest national quality standards for diagnostic accuracy and reporting.", num: "01" },
  { title: "Board-Certified Radiologists", desc: "Reports reviewed by specialists with 15+ years of clinical experience in diagnostic imaging.", num: "02" },
  { title: "Same-Day Reports", desc: "Most diagnostic reports are delivered within 4–6 hours. Urgent reports in under 2 hours.", num: "03" },
  { title: "State-of-the-Art Equipment", desc: "Siemens & GE imaging systems ensuring superior image quality and diagnostic precision.", num: "04" },
];

const testimonials = [
  { name: "Priya Sharma", role: "MRI Patient", stars: 5, text: "Got my MRI done here and the entire experience was seamless. Staff was professional and my report was ready the same evening. Highly recommended." },
  { name: "Rajesh Kumar", role: "Regular Patient", stars: 5, text: "Coming to Aarogya Diagnostic Centre for 3 years now for all family diagnostic needs. Clean facility, accurate reports, and genuinely caring staff." },
  { name: "Anita Verma", role: "Ultrasound Patient", stars: 5, text: "Dr. Gupta explained every detail of my ultrasound report clearly. The pricing is transparent and fair. A trustworthy centre." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white hero-grid-pattern">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-sky-50 via-transparent to-transparent" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-teal-50 via-transparent to-transparent" />
        </div>
        <div className="container-xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp(0)}>
                <span className="badge badge-primary mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-1.5 animate-pulse" />
                  NABL Accredited Diagnostic Centre
                </span>
              </motion.div>
              <motion.h1 variants={fadeUp(0.08)} className="text-[2.5rem] sm:text-5xl lg:text-[3.25rem] font-extrabold text-neutral-900 leading-[1.08] tracking-[-0.03em] mb-5">
                Advanced Diagnostic<br />Care You Can{" "}<span className="text-gradient">Trust</span>
              </motion.h1>
              <motion.p variants={fadeUp(0.16)} className="text-lg text-neutral-500 leading-relaxed max-w-lg mb-8">
                Serving Burari and North Delhi with accurate, affordable diagnostics since 2015. MRI, CT Scan, X-Ray, Pathology — all under one roof.
              </motion.p>
              <motion.div variants={fadeUp(0.22)} className="flex flex-wrap gap-3">
                <Link href="/appointment" className="btn-primary">
                  Book Appointment
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <a href="tel:+918287806712" className="btn-ghost">
                  <svg className="w-4 h-4 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  Call +91 82878 06712
                </a>
              </motion.div>
              <motion.div variants={fadeUp(0.28)} className="trust-strip flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <div className="flex">{[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
                  <span className="text-sm font-semibold text-neutral-800">4.8</span>
                  <span className="text-sm text-neutral-500">Google Rating</span>
                </div>
                <div className="trust-divider hidden sm:block" />
                <div className="text-sm text-neutral-500"><span className="font-semibold text-neutral-800">50,000+</span> patients served</div>
                <div className="trust-divider hidden sm:block" />
                <div className="text-sm text-neutral-500"><span className="font-semibold text-neutral-800">10+</span> years of trust</div>
              </motion.div>
            </motion.div>

            {/* Visual panel — desktop only */}
            <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as any }} className="hidden lg:block">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-sky-600 to-sky-800 aspect-[4/3] flex flex-col items-center justify-center p-10 shadow-2xl shadow-sky-900/20">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-64 h-64 rounded-full border border-white/10" />
                    <div className="absolute w-44 h-44 rounded-full border border-white/10" />
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center mb-5 border border-white/20">
                      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="5"/></svg>
                    </div>
                    <p className="text-white font-bold text-xl tracking-tight">Aarogya Diagnostic Centre</p>
                    <p className="text-sky-200 text-sm mt-1">Sant Nagar, Burari, Delhi</p>
                    <div className="mt-6 grid grid-cols-2 gap-3 text-left">
                      {[["MRI Scan","Same Day"],["CT Scan","2–4 hrs"],["X-Ray","30 min"],["Pathology","4–6 hrs"]].map(([s,t]) => (
                        <div key={s} className="bg-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur border border-white/10">
                          <p className="text-white text-sm font-semibold">{s}</p>
                          <p className="text-sky-200 text-xs">{t}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl shadow-black/10 border border-neutral-100 px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div><p className="text-sm font-bold text-neutral-900 leading-none mb-0.5">NABL Accredited</p><p className="text-xs text-neutral-400">ISO 15189:2022</p></div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.5 }}
                  className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl shadow-black/10 border border-neutral-100 px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div><p className="text-sm font-bold text-neutral-900 leading-none mb-0.5">Reports in 4 hrs</p><p className="text-xs text-neutral-400">Urgent: under 2 hours</p></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-100">
        <div className="container-xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ n: "50,000+", l: "Patients Served" },{ n: "10+", l: "Years of Experience" },{ n: "25+", l: "Diagnostic Services" },{ n: "4.8 ★", l: "Google Rating" }].map((s, i) => (
              <motion.div key={s.l} variants={fadeUp(i * 0.07)} className="stat-card">
                <p className="stat-number">{s.n}</p>
                <p className="stat-label">{s.l}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section bg-white">
        <div className="container-xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} className="text-center mb-14">
            <div className="section-label justify-center mb-4">Our Services</div>
            <h2 className="section-heading mb-4">Comprehensive Diagnostics Under One Roof</h2>
            <p className="section-sub mx-auto text-center">From advanced imaging to routine laboratory tests — accurate results delivered by certified specialists.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s, i) => (
              <motion.div key={s.title} variants={fadeUp(i * 0.07)} whileHover={{ y: -6 }} transition={{ type: "tween", duration: 0.22 }}
                className="group relative overflow-hidden rounded-2xl border border-neutral-100 border-t-2 border-t-sky-500 bg-white cursor-pointer shadow-sm hover:shadow-md hover:shadow-sky-900/5 transition-all duration-300">
                <div className="p-8 sm:p-10">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white mb-5 shadow-lg`}>
                      {s.icon}
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold text-neutral-900 leading-tight">{s.title}</h3>
                      <span className="badge badge-primary shrink-0 text-[11px] mt-0.5">{s.time}</span>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-6">{s.desc}</p>
                  <div className="flex items-center gap-1.5 text-sky-600 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-200">
                    View details
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-ghost !px-8">
              Explore All Services
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgb(14 165 233 / 0.15), transparent)" }} />
        <div className="container-xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
              <motion.div variants={fadeUp(0)}>
                <div className="section-label mb-4" style={{ color: "#38bdf8" }}>Why Choose Us</div>
              </motion.div>
              <motion.h2 variants={fadeUp(0.08)} className="section-heading mb-5" style={{ color: "#ffffff" }}>
                Why Patients Trust<br />Aarogya Diagnostic
              </motion.h2>
              <motion.p variants={fadeUp(0.14)} className="section-sub mb-10" style={{ color: "#94a3b8" }}>
                Over 50,000 patients have trusted us for diagnostics. Our commitment is simple — accurate results, expert care, delivered with honesty.
              </motion.p>
              <motion.div variants={fadeUp(0.2)}>
                <Link href="/about" className="btn-primary !bg-sky-500 hover:!bg-sky-400">Learn More About Us</Link>
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="space-y-6 sm:space-y-8">
              {reasons.map((r, i) => (
                <motion.div key={r.title} variants={fadeUp(i * 0.1)}
                  className="flex gap-5 p-6 rounded-2xl border border-white/5 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/10 transition-all duration-200">
                  <div className="text-3xl font-extrabold leading-none shrink-0 w-10 select-none" style={{ color: "rgba(56,189,248,0.25)" }}>{r.num}</div>
                  <div>
                    <h3 className="text-[0.9375rem] font-semibold mb-1.5" style={{ color: "#ffffff" }}>{r.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section pb-24 bg-neutral-50">
        <div className="container-xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} className="text-center mb-14">
            <div className="section-label justify-center mb-4">Patient Stories</div>
            <h2 className="section-heading mb-4">What Our Patients Say</h2>
            <p className="section-sub mx-auto text-center">Real experiences from people who trusted us with their healthcare.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} variants={fadeUp(i * 0.09)} className="testimonial-card">
                <div className="flex gap-0.5 mb-5">{[...Array(t.stars)].map((_, j) => <svg key={j} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
                <p className="text-neutral-600 text-[0.9375rem] leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-5 border-t border-neutral-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold shrink-0">{t.name.charAt(0)}</div>
                  <div><p className="text-sm font-semibold text-neutral-900">{t.name}</p><p className="text-xs text-neutral-400">{t.role}</p></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-sm cta-section">
        <div className="container-xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center">
            <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">Get Started Today</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 tracking-tight leading-tight">Need a Diagnostic Test?</h2>
            <p className="text-sky-200 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Book online in under 2 minutes. We confirm within 30 minutes during operating hours. Walk-ins always welcome.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/appointment" className="btn-primary !bg-white !text-sky-700 hover:!bg-sky-50 !shadow-none w-full sm:w-auto justify-center">
                Book Appointment Online
              </Link>
              <a href="tel:+918287806712"
                className="btn-primary !bg-sky-500 hover:!bg-sky-400 !text-white !shadow-none w-full sm:w-auto justify-center"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                +91 82878 06712
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
