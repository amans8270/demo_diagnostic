"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeUp = (d = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease: [0.22, 1, 0.36, 1] } },
});
const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } };
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const services = [
  {
    title: "MRI Scan", time: "Same day", gradient: "from-sky-500 to-blue-600",
    desc: "High-resolution 1.5T MRI for brain, spine, joints and soft tissue. No radiation, no discomfort.",
    subs: ["Brain & Spine MRI", "Joint & Musculoskeletal", "Abdominal MRI", "MRI Angiography", "Contrast-enhanced MRI"],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="3"/><circle cx="12" cy="12" r="3"/><path d="M6 6V4M18 6V4M6 18v2M18 18v2"/></svg>,
  },
  {
    title: "CT Scan", time: "2–4 hours", gradient: "from-violet-500 to-purple-600",
    desc: "128-slice multi-detector CT scanner for precise cross-sectional imaging of any body region.",
    subs: ["CT Head & Brain", "CT Chest (HRCT)", "CT Abdomen & Pelvis", "CT Angiography", "CT KUB"],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>,
  },
  {
    title: "Digital X-Ray", time: "30 minutes", gradient: "from-teal-500 to-emerald-600",
    desc: "Low-dose digital radiography with instant image processing for bones, chest and dental imaging.",
    subs: ["Chest X-Ray", "Bone & Joint X-Ray", "Dental X-Ray (OPG)", "Abdominal X-Ray", "Spine X-Ray"],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M12 6v8M8 10h8M9 14h6"/></svg>,
  },
  {
    title: "Ultrasound", time: "Same day", gradient: "from-orange-400 to-pink-500",
    desc: "Advanced colour Doppler ultrasonography for obstetric, abdominal, thyroid and vascular studies.",
    subs: ["Obstetric Ultrasound", "Abdominal Ultrasound", "Thyroid Ultrasound", "Doppler Studies", "Pelvic Ultrasound"],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12a7 7 0 0114 0"/><path d="M8 12a4 4 0 018 0"/><circle cx="12" cy="12" r="1"/><path d="M12 13v6M9 19h6"/></svg>,
  },
  {
    title: "Pathology & Lab", time: "4–6 hours", gradient: "from-rose-500 to-red-600",
    desc: "NABL-accredited fully automated laboratory covering blood tests, hormones, infection markers and more.",
    subs: ["Complete Blood Count", "Liver & Kidney Function", "Thyroid Profile", "Diabetes Panel (HbA1c)", "Lipid Profile"],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v11.5a4 4 0 108 0V3"/><path d="M9 9h8"/></svg>,
  },
  {
    title: "ECG & EEG", time: "Same day", gradient: "from-cyan-500 to-sky-600",
    desc: "Non-invasive cardiac and neurological function testing to evaluate heart rhythm and brain activity.",
    subs: ["12-Lead ECG", "Holter Monitoring", "Stress Test (TMT)", "EEG Recording", "Nerve Conduction Study"],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 12 5 12 7 4 10 20 13 8 16 16 18 12 22 12"/></svg>,
  },
  {
    title: "Mammography", time: "Same day", gradient: "from-fuchsia-500 to-pink-600",
    desc: "Digital mammography for early breast abnormality detection. Recommended annually for women over 40.",
    subs: ["Screening Mammography", "Diagnostic Mammography", "Breast Ultrasound", "Guided Biopsy"],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12a4 4 0 018 0"/><line x1="12" y1="8" x2="12" y2="16"/></svg>,
  },
  {
    title: "Health Packages", time: "24 hours", gradient: "from-amber-500 to-orange-600",
    desc: "Curated preventive check-up bundles for every age group — from basic panels to comprehensive cardiac screening.",
    subs: ["Basic Health Check-Up", "Executive Package", "Senior Citizen Package", "Women's Wellness", "Cardiac Risk Assessment"],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/></svg>,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 60% 0%, rgb(14 165 233 / 0.1), transparent 70%)" }} />
        <div className="container-xl relative">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeUp(0)}>
              <div className="section-label mb-5" style={{ color: "#38bdf8" }}>Diagnostic Services</div>
            </motion.div>
            <motion.h1 variants={fadeUp(0.08)} className="section-heading mb-5" style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)", color: "#ffffff" }}>
              Every Test You Need.<br />
              <span className="text-gradient">One Trusted Centre.</span>
            </motion.h1>
            <motion.p variants={fadeUp(0.16)} className="section-sub" style={{ color: "#94a3b8" }}>
              From advanced imaging to routine blood tests, our NABL-accredited facility offers over 25 diagnostic services performed by certified specialists.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section bg-white">
        <div className="container-xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="grid md:grid-cols-2 gap-7">
            {services.map((s, i) => (
              <motion.div key={s.title} variants={fadeUp(i * 0.06)} whileHover={{ y: -4 }} transition={{ type: "tween", duration: 0.2 }}
                className="group relative overflow-hidden rounded-2xl border border-neutral-100 border-t-2 border-t-sky-500 bg-white shadow-sm hover:shadow-md hover:shadow-sky-900/5 transition-all duration-300">
                <div className="p-8 sm:p-10 flex flex-col h-full">
                  <div className="flex flex-col gap-6 mb-8 flex-grow">
                    <div className="flex items-start justify-between">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white shadow-lg`}>
                        {s.icon}
                      </div>
                      <span className="badge badge-primary shrink-0 text-[11px] mt-2 px-3 py-1 shadow-sm border border-sky-100">{s.time}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-2.5">{s.title}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-100">
                    {s.subs.map(sub => (
                      <span key={sub} className="text-[11px] font-semibold text-neutral-600 bg-neutral-50 border border-neutral-100 px-3 py-1.5 rounded-lg hover:bg-neutral-100 transition-colors">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-neutral-50 border-t border-neutral-100">
        <div className="container-xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading mb-4">Not sure which test you need?</h2>
            <p className="section-sub mx-auto text-center mb-8">Our team will guide you based on your symptoms or doctor&apos;s prescription. Call us or book a consultation.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/appointment" className="btn-primary">Book Appointment</Link>
              <a href="tel:+919876543210" className="btn-ghost">Call: +91 98765 43210</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
