"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});
const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.55 } } };
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const services = [
  {
    title: "Cosmetic Dentistry",
    subtitle: "Veneers & Whitening",
    desc: "Transform your smile with custom porcelain veneers and professional-grade whitening.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3C8.5 3 6 5.5 6 8c0 1.5.5 2.5 1 3.5C8 13 8 15 7 19c-.3 1.2.5 2 1.5 1.5C10 20 11 18 12 18s2 2 3.5 2.5c1 .5 1.8-.3 1.5-1.5C16 15 16 13 17 11.5c.5-1 1-2 1-3.5 0-2.5-2.5-5-6-5z"/>
      </svg>
    ),
    gradient: "from-teal-500 to-sky-500",
    href: "/services#cosmetic",
  },
  {
    title: "Dental Implants",
    subtitle: "Permanent Replacement",
    desc: "Lifelike, permanent implants that restore full function and your natural confident smile.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6M6 12h12M4 20h16"/><circle cx="12" cy="9" r="3"/>
      </svg>
    ),
    gradient: "from-violet-500 to-purple-600",
    href: "/services#implants",
  },
  {
    title: "Invisalign",
    subtitle: "Clear Aligners",
    desc: "Discreet, comfortable teeth straightening with removable clear aligners — no metal needed.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8c0 6 9 13 9 13s9-7 9-13a9 9 0 00-18 0z"/>
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-600",
    href: "/services#invisalign",
  },
  {
    title: "Emergency Care",
    subtitle: "Pain Relief in &lt; 60 mins",
    desc: "Immediate attention for dental trauma, severe pain, or infection — priority slots always available.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v10M4 12h16"/><circle cx="12" cy="12" r="10"/>
      </svg>
    ),
    gradient: "from-rose-500 to-red-600",
    href: "/contact",
  },
];

const stats = [
  { value: "10,000+", label: "Happy Patients" },
  { value: "15+", label: "Years of Excellence" },
  { value: "4.9★", label: "Google Rating" },
  { value: "99%", label: "Satisfaction Rate" },
];

const whyUs = [
  { title: "Painless Laser Tech", desc: "Minimally invasive treatments that reduce discomfort and speed recovery significantly.", icon: "⚡" },
  { title: "Same-Day Crowns", desc: "Our in-house CAD/CAM lab delivers precision crowns — no long waits, no temporary fixtures.", icon: "🏆" },
  { title: "Anxiety-Free Care", desc: "TVs overhead, noise-cancelling headphones and a calm team dedicated to your comfort.", icon: "🌿" },
  { title: "0% Finance Options", desc: "Flexible payment plans so excellent dental care fits every budget without compromise.", icon: "💳" },
  { title: "NABL Accredited", desc: "Internationally recognised quality standards ensuring every procedure meets clinical benchmarks.", icon: "🏅" },
  { title: "15+ Years Trusted", desc: "Over a decade serving families across Burari and North Delhi with trusted, gentle care.", icon: "❤️" },
];

const testimonials = [
  { name: "Sonal Gupta", role: "Smile Makeover", stars: 5, text: "The team made me feel completely at ease. My veneers look absolutely incredible — I can't stop smiling! Totally painless process from start to finish." },
  { name: "Amit Verma", role: "Dental Implant", stars: 5, text: "Professional, quick, and thorough. My implant feels completely natural. The staff explained every step clearly. Highly recommend Demo Clinic." },
  { name: "Neha Singh", role: "Invisalign", stars: 5, text: "I was nervous about straightening my teeth but the team guided me through everything. Discreet, comfortable, and the results are beyond what I expected!" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0B1F3A 0%, #0D2B4E 55%, #103462 100%)",
          minHeight: "80vh",
        }}
      >
        {/* Background dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Radial glows */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 70% at 80% 60%, rgba(13,148,136,0.18) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 50% at 10% 20%, rgba(14,165,233,0.10) 0%, transparent 55%)" }} />

        <div className="container-xl relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left copy */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp(0)} className="flex flex-wrap gap-2 mb-6">
                <span className="badge badge-success">⭐ 4.9/5 Google Rating</span>
                <span className="badge" style={{ background: "rgba(13,148,136,0.15)", color: "#5EEAD4", border: "1px solid rgba(13,148,136,0.25)" }}>
                  10,000+ Patients
                </span>
                <span className="badge" style={{ background: "rgba(245,158,11,0.15)", color: "#FCD34D", border: "1px solid rgba(245,158,11,0.25)" }}>
                  0% Finance
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp(0.07)}
                className="display-heading mb-6"
                style={{ fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)" }}
              >
                A Brighter Smile Begins<br />
                With a <em>Gentler Touch.</em>
              </motion.h1>

              <motion.p
                variants={fadeUp(0.14)}
                className="text-lg leading-relaxed mb-8"
                style={{ color: "#94A3B8", maxWidth: "32rem" }}
              >
                Experience painless, high-tech dentistry in Sant Nagar, Burari, Delhi.
                From routine check-ups to complete smile makeovers — trusted by 10,000+ patients.
              </motion.p>

              <motion.div variants={fadeUp(0.2)} className="flex flex-wrap gap-3 mb-10">
                <Link href="/appointment" className="btn-primary">
                  Book Free Consultation →
                </Link>
                <a href="tel:+918287806712" className="btn-ghost-white">
                  📞 +91 82878 06712
                </a>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeUp(0.27)} className="flex flex-wrap gap-4">
                {["NABL Accredited", "15+ Years Trusted", "Pain-Free Guarantee", "Same-Day Crowns"].map((b) => (
                  <div key={b} className="hero-badge">
                    <svg className="w-3.5 h-3.5" style={{ color: "#14B8A6" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {b}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl opacity-30"
                  style={{ background: "linear-gradient(135deg, rgba(13,148,136,0.4), rgba(14,165,233,0.2))", filter: "blur(32px)" }}
                />
                <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}>
                  <Image
                    src="/images/dental/hero_image.png"
                    alt="Professional dental care at Demo Clinic"
                    width={900}
                    height={700}
                    className="w-full h-full object-cover"
                    priority
                  />
                  {/* Floating card overlay */}
                  <div
                    className="absolute bottom-5 left-5 right-5 p-4 rounded-xl flex items-center gap-3"
                    style={{ background: "rgba(11,31,58,0.85)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(13,148,136,0.25)", border: "1px solid rgba(13,148,136,0.4)" }}>
                      <svg className="w-5 h-5" style={{ color: "#14B8A6" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Next Available Slot</p>
                      <p className="text-xs" style={{ color: "#14B8A6" }}>Today — Call to confirm</p>
                    </div>
                    <Link href="/appointment" className="ml-auto btn-primary !py-2 !px-4 !text-xs shrink-0">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 scroll-indicator hidden lg:flex flex-col items-center gap-1">
          <span className="text-xs" style={{ color: "#475569" }}>Scroll</span>
          <svg className="w-4 h-4" style={{ color: "#0D9488" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 10l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────── */}
      <section className="py-12 bg-white" style={{ borderBottom: "1px solid #E2E8F0" }}>
        <div className="container-xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div key={s.label} variants={fadeUp(i * 0.07)} className="stat-card">
                <p className="stat-number">{s.value}</p>
                <p className="stat-label">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────── */}
      <section className="section" style={{ background: "#F8FAFC" }}>
        <div className="container-xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn} className="text-center mb-14"
          >
            <div className="section-label justify-center mb-4">Our Services</div>
            <h2 className="section-heading mb-4">Modern Dental Care,<br />Focused on Comfort & Results</h2>
            <p className="section-sub mx-auto text-center">
              Cosmetic, restorative and emergency dental care using painless laser technology and same-day lab services.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((s, i) => (
              <motion.div key={s.title} variants={fadeUp(i * 0.07)}>
                <Link href={s.href} className="service-card block h-full no-underline">
                  <div className={`service-icon-wrap bg-gradient-to-br ${s.gradient} text-white mb-5`} style={{ width: "3.25rem", height: "3.25rem" }}>
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: "#0F172A" }}>{s.title}</h3>
                  <p className="text-sm font-medium mb-3" style={{ color: "#0D9488" }}>{s.subtitle}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{s.desc}</p>
                  <div className="flex items-center gap-1 mt-5 text-sm font-semibold" style={{ color: "#0D9488" }}>
                    Learn more
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-ghost">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
              <motion.div variants={fadeUp(0)}>
                <div className="section-label mb-4">Why Choose Us</div>
              </motion.div>
              <motion.h2 variants={fadeUp(0.07)} className="section-heading mb-5">
                Why 10,000+ Patients<br />Trust Demo Clinic
              </motion.h2>
              <motion.p variants={fadeUp(0.14)} className="section-sub mb-8">
                We combine cutting-edge technology with a genuinely patient-first philosophy — because your comfort and results matter equally.
              </motion.p>
              <motion.div variants={fadeUp(0.2)} className="grid sm:grid-cols-2 gap-4">
                {whyUs.map((w) => (
                  <div
                    key={w.title}
                    className="flex gap-3 p-4 rounded-xl"
                    style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
                  >
                    <span className="text-2xl shrink-0">{w.icon}</span>
                    <div>
                      <h4 className="text-sm font-bold mb-1" style={{ color: "#0F172A" }}>{w.title}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp(0.27)} className="flex gap-3 mt-8">
                <Link href="/appointment" className="btn-primary">Book Consultation</Link>
                <Link href="/about" className="btn-ghost">Our Story</Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "0 24px 64px rgba(11,31,58,0.16)" }}>
                <Image
                  src="/images/dental/clinic_interior.png"
                  alt="Demo Clinic modern interior"
                  width={900}
                  height={700}
                  className="w-full h-full object-cover"
                />
                {/* Emergency card overlay */}
                <div
                  className="absolute top-5 right-5 p-4 rounded-xl"
                  style={{ background: "rgba(11,31,58,0.88)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.1)", minWidth: "170px" }}
                >
                  <p className="text-xs font-semibold mb-1" style={{ color: "#94A3B8" }}>Emergency Care</p>
                  <p className="text-white font-bold text-sm">Pain relief in</p>
                  <p className="font-bold text-lg" style={{ color: "#14B8A6" }}>&lt; 60 mins</p>
                  <a href="tel:+918287806712" className="btn-primary !py-2 !px-3 !text-xs mt-2 w-full">Call Now</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMATION GALLERY ───────────────── */}
      <section className="section" style={{ background: "#F8FAFC" }}>
        <div className="container-xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <div className="section-label justify-center mb-4">Real Results</div>
            <h2 className="section-heading mb-4">See the Smiles We've Restored</h2>
            <p className="section-sub mx-auto text-center">
              Drag the slider to compare real before & after results from our patients.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="card p-6">
              <BeforeAfterSlider
                beforeSrc="/images/dental/before_dental.png"
                afterSrc="/images/dental/after_dental.png"
                alt="Patient smile transformation"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────── */}
      <section className="section bg-white">
        <div className="container-xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <div className="section-label justify-center mb-4">Patient Stories</div>
            <h2 className="section-heading mb-4">What Our Patients Say</h2>
            <p className="section-sub mx-auto text-center">Don't just take our word for it — hear from real patients across Delhi.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div key={t.name} variants={fadeUp(i * 0.09)}>
                <div className="testimonial-card h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_, si) => (
                      <svg key={si} className="w-4 h-4" style={{ color: "#F59E0B" }} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#475569" }}>"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid #F1F5F9" }}>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: "linear-gradient(135deg, #0D9488, #0EA5E9)", color: "white" }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold" style={{ color: "#0F172A" }}>{t.name}</p>
                      <p className="text-xs" style={{ color: "#0D9488" }}>{t.role}</p>
                    </div>
                    <span className="ml-auto badge badge-success text-[10px]">Verified</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="cta-section section-sm">
        <div className="container-xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp(0)} className="section-label on-dark mb-4">Start Today</motion.div>
              <motion.h2 variants={fadeUp(0.07)} className="display-heading mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
                Ready for Your <em>New Smile?</em>
              </motion.h2>
              <motion.p variants={fadeUp(0.14)} className="text-lg leading-relaxed mb-8" style={{ color: "#94A3B8" }}>
                Start with a relaxed, no-pressure consultation. We'll craft a personalised treatment plan that fits your smile goals and budget.
              </motion.p>
              <motion.div variants={fadeUp(0.2)} className="flex flex-wrap gap-3">
                <Link href="/appointment" className="btn-primary">Book Free Consultation</Link>
                <a href="tel:+918287806712" className="btn-ghost-white">Call +91 82878 06712</a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {[
                { icon: "📅", title: "Same-Day Appointments", sub: "Emergency slots available 7 days" },
                { icon: "💰", title: "0% Finance Plans", sub: "Spread treatment costs, no interest" },
                { icon: "🏅", title: "NABL Certified", sub: "International quality standards" },
                { icon: "😊", title: "Pain-Free Promise", sub: "Gentle techniques & LA always used" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-white text-sm font-bold mb-1">{item.title}</p>
                  <p className="text-xs" style={{ color: "#64748B" }}>{item.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
