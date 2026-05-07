"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeUp = (d = 0): Variants => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] } },
});
const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } };
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const services = [
  {
    title: "Cosmetic Dentistry", time: "Consultation", gradient: "from-teal-500 to-sky-500",
    desc: "Veneers, professional whitening and smile design to craft your ideal smile and boost your confidence.",
    subs: ["Porcelain Veneers", "Teeth Whitening", "Smile Makeovers", "Composite Bonding"],
    icon: <path d="M12 3C8.5 3 6 5.5 6 8c0 1.5.5 2.5 1 3.5C8 13 8 15 7 19c-.3 1.2.5 2 1.5 1.5C10 20 11 18 12 18s2 2 3.5 2.5c1 .5 1.8-.3 1.5-1.5C16 15 16 13 17 11.5c.5-1 1-2 1-3.5 0-2.5-2.5-5-6-5z"/>,
    id: "cosmetic",
  },
  {
    title: "Dental Implants", time: "Consultation", gradient: "from-violet-500 to-purple-600",
    desc: "Single and full-arch implants to restore full function and natural aesthetics with long-term results.",
    subs: ["Single Implants", "All-on-4", "Bone Grafting", "Implant Restoration"],
    icon: <><path d="M12 2v6M6 12h12M4 20h16"/><circle cx="12" cy="9" r="2.5"/></>,
    id: "implants",
  },
  {
    title: "Invisalign", time: "Consultation", gradient: "from-emerald-500 to-teal-600",
    desc: "Clear, removable aligners for discreet teeth straightening — comfortable, accurate, and virtually invisible.",
    subs: ["Invisalign Full", "Invisalign Lite", "Retention Planning", "Progress Monitoring"],
    icon: <path d="M3 8c0 6 9 13 9 13s9-7 9-13a9 9 0 00-18 0z"/>,
    id: "invisalign",
  },
  {
    title: "Emergency Care", time: "< 60 mins", gradient: "from-rose-500 to-red-600",
    desc: "Urgent care for severe pain, trauma, broken teeth and infections — priority booking always available.",
    subs: ["Trauma Care", "Toothache Relief", "Emergency Extractions", "Infection Treatment"],
    icon: <><path d="M12 2v10"/><path d="M4 12h16"/><circle cx="12" cy="12" r="10"/></>,
    id: "emergency",
  },
  {
    title: "Same-Day Crowns", time: "Same Day", gradient: "from-sky-500 to-blue-600",
    desc: "CAD/CAM crowns and restorations from our in-house lab — precision results without multi-week waits.",
    subs: ["CEREC Crowns", "Shade Matching", "Inlays & Onlays", "No Temporaries Needed"],
    icon: <rect x="3" y="3" width="18" height="18" rx="2"/>,
    id: "crowns",
  },
  {
    title: "Oral Surgery", time: "Consultation", gradient: "from-fuchsia-500 to-pink-600",
    desc: "Impaction removals, bone grafts and corrective procedures performed by our experienced oral surgeons.",
    subs: ["Wisdom Tooth Removal", "Bone Grafting", "Apicoectomy", "Soft Tissue Surgery"],
    icon: <><path d="M12 2v6M6 12h12"/><circle cx="12" cy="16" r="4"/></>,
    id: "surgery",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-xl relative z-10 py-14">
          <motion.div initial="hidden" animate="visible" variants={stagger} style={{ maxWidth: "42rem" }}>
            <motion.div variants={fadeUp(0)}>
              <div className="section-label on-dark mb-5">Dental Services</div>
            </motion.div>
            <motion.h1
              variants={fadeUp(0.08)}
              className="display-heading mb-5"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
            >
              Modern Dentistry.<br /><em>Comfort & Results.</em>
            </motion.h1>
            <motion.p variants={fadeUp(0.16)} className="section-sub" style={{ color: "#94A3B8" }}>
              Comprehensive dental care — from cosmetic makeovers to implants and emergency treatment — delivered with a gentle, patient-first approach using the latest technology.
            </motion.p>
            <motion.div variants={fadeUp(0.24)} className="flex flex-wrap gap-3 mt-8">
              <Link href="/appointment" className="btn-primary">Book Consultation</Link>
              <a href="tel:+918287806712" className="btn-ghost-white">📞 Emergency Line</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section bg-white">
        <div className="container-xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp(i * 0.07)}
                id={s.id}
                whileHover={{ y: -6 }}
                transition={{ type: "tween", duration: 0.2 }}
              >
                <div className="service-card h-full flex flex-col">
                  {/* Top accent */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`service-icon-wrap bg-gradient-to-br ${s.gradient} text-white`}>
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        {s.icon}
                      </svg>
                    </div>
                    <span className="badge badge-teal text-[11px]">{s.time}</span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight mb-2.5" style={{ color: "#0F172A" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed flex-grow" style={{ color: "#64748B" }}>{s.desc}</p>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-5" style={{ borderTop: "1px solid #F1F5F9" }}>
                    {s.subs.map((sub) => (
                      <span
                        key={sub}
                        className="text-[11px] font-semibold px-3 py-1.5 rounded-lg"
                        style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#475569" }}
                      >
                        {sub}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/appointment"
                    className="mt-5 flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: "#0D9488" }}
                  >
                    Book this service
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: "#F8FAFC" }}>
        <div className="container-xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-14">
            <div className="section-label justify-center mb-4">How It Works</div>
            <h2 className="section-heading mb-4">Your Journey to a Better Smile</h2>
            <p className="section-sub mx-auto text-center">Simple, transparent steps — from booking to your final smile reveal.</p>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { n: "01", t: "Book Online", d: "Choose a convenient slot online or call us for priority or emergency booking." },
              { n: "02", t: "Consultation", d: "Meet your specialist for a thorough examination and personalised treatment plan." },
              { n: "03", t: "Treatment", d: "Receive expert, pain-free treatment using our latest laser and CAD/CAM technology." },
              { n: "04", t: "Smile Reveal", d: "See your transformation and get aftercare guidance to maintain your new smile." },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                variants={fadeUp(i * 0.09)}
                className="text-center p-8 rounded-2xl bg-white"
                style={{ border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.05)" }}
              >
                <div className="step-number mx-auto mb-5">{step.n}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: "#0F172A" }}>{step.t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{step.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section section-sm">
        <div className="container-xl relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeUp(0)} className="section-label on-dark justify-center mb-4">Get Started</motion.div>
            <motion.h2 variants={fadeUp(0.07)} className="display-heading mb-5" style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}>
              Not Sure Which Service You Need?
            </motion.h2>
            <motion.p variants={fadeUp(0.14)} className="section-sub mx-auto text-center mb-8" style={{ color: "#94A3B8" }}>
              Our team will guide you based on your symptoms and goals. Book a free consultation or call us now.
            </motion.p>
            <motion.div variants={fadeUp(0.2)} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/appointment" className="btn-primary">Book Free Consultation</Link>
              <a href="tel:+918287806712" className="btn-ghost-white">Call: +91 82878 06712</a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
