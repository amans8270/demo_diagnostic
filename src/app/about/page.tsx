"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeUp = (d = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease: [0.22, 1, 0.36, 1] } },
});
const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } };
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const values = [
  { title: "Patient-First Always", desc: "Every decision — from pricing to turnaround time — is guided by what is best for the patient." },
  { title: "Clinical Accuracy", desc: "We invest in the latest equipment and maintain strict quality controls so every report is reliable." },
  { title: "Full Transparency", desc: "No hidden fees, no unnecessary tests. Honest, straightforward care from start to finish." },
  { title: "Affordable Access", desc: "Quality diagnostics shouldn't be a luxury. We keep services affordable without cutting corners." },
];

const team = [
  { name: "Dr. Suresh Gupta", role: "Chief Radiologist", exp: "18 years in diagnostic radiology. Formerly at AIIMS Delhi.", gradient: "from-sky-500 to-blue-600" },
  { name: "Dr. Meena Agarwal", role: "Senior Pathologist", exp: "15 years in clinical pathology. NABL quality auditor.", gradient: "from-teal-500 to-emerald-600" },
  { name: "Dr. Anil Bhardwaj", role: "Consultant Sonologist", exp: "12 years specialising in obstetric and abdominal ultrasound.", gradient: "from-violet-500 to-purple-600" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-950 overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 20% 0%, rgb(14 165 233 / 0.1), transparent 70%)" }} />
        <div className="container-xl relative">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeUp(0)}>
              <div className="section-label mb-5" style={{ color: "#38bdf8" }}>About Us</div>
            </motion.div>
            <motion.h1 variants={fadeUp(0.08)} className="section-heading mb-5" style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)", color: "#ffffff" }}>
              Your Trusted Diagnostic<br />
              Partner Since{" "}<span className="text-gradient">2015</span>
            </motion.h1>
            <motion.p variants={fadeUp(0.16)} className="section-sub" style={{ color: "#94a3b8" }}>
              A small pathology lab that grew into a full-service diagnostic centre — trusted by over 50,000 patients across North Delhi.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-sky-600 to-sky-900 flex items-center justify-center p-10 shadow-2xl shadow-sky-900/20 relative">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-72 h-72 rounded-full border border-white" />
                  <div className="absolute w-48 h-48 rounded-full border border-white" />
                </div>
                <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-xs">
                  {[["50,000+","Patients Served"],["10+","Years Active"],["NABL","Accredited"],["25+","Services"]].map(([v, l]) => (
                    <div key={l} className="bg-white/10 backdrop-blur border border-white/10 rounded-xl p-5 text-center">
                      <p className="text-white font-extrabold text-xl tracking-tight">{v}</p>
                      <p className="text-sky-200 text-xs mt-1">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
              <motion.div variants={fadeUp(0)}>
                <div className="section-label mb-4">Our Story</div>
              </motion.div>
              <motion.h2 variants={fadeUp(0.08)} className="section-heading mb-6">From One Lab to a Full Diagnostic Centre</motion.h2>
              <motion.div variants={fadeUp(0.14)} className="space-y-5 text-[0.9375rem] text-neutral-500 leading-relaxed">
                <p>What started as a small pathology laboratory in 2015 has grown into a full-service diagnostic centre equipped with advanced imaging technology and a team of experienced specialists.</p>
                <p>Over the years, we have served more than 50,000 patients from Burari, Mukherjee Nagar, Jahangirpuri and surrounding areas of North Delhi — growing entirely on patient trust and referrals.</p>
                <p>We achieved NABL accreditation in 2019, validating our commitment to quality. Today, Tejas Health offers over 25 diagnostic services — from advanced MRI and CT scanning to routine blood tests — all under one roof.</p>
              </motion.div>
              <motion.div variants={fadeUp(0.2)} className="mt-8">
                <Link href="/appointment" className="btn-primary">Book Your Visit</Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-neutral-50">
        <div className="container-xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} className="text-center mb-14">
            <div className="section-label justify-center mb-4">Our Values</div>
            <h2 className="section-heading mb-4">The Principles We Work By</h2>
            <p className="section-sub mx-auto text-center">Simple commitments we make — and keep — for every patient.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} variants={fadeUp(i * 0.08)}
                className="flex gap-5 p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-2 shrink-0 rounded-full bg-gradient-to-b from-sky-400 to-teal-400 self-stretch" />
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-3">{v.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container-xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} className="text-center mb-14">
            <div className="section-label justify-center mb-4">Our Specialists</div>
            <h2 className="section-heading mb-4">Expert Doctors, Proven Experience</h2>
            <p className="section-sub mx-auto text-center">Board-certified specialists with decades of combined clinical expertise.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="grid sm:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <motion.div key={m.name} variants={fadeUp(i * 0.09)}
                className="text-center p-10 rounded-2xl border border-neutral-100 bg-neutral-50 hover:bg-white hover:shadow-xl hover:shadow-black/[0.05] hover:-translate-y-1 transition-all duration-200">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${m.gradient} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-extrabold text-xl">{m.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <h3 className="font-bold text-neutral-900 text-lg tracking-tight mb-1">{m.name}</h3>
                <p className="text-sky-600 text-sm font-semibold mb-4">{m.role}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{m.exp}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certs */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-100">
        <div className="container-xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest text-center mb-8">Certifications &amp; Affiliations</p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {["NABL Accredited","ISO 15189:2022","Delhi Medical Council","AERB Licensed"].map(c => (
                <div key={c} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-neutral-200 shadow-sm">
                  <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  <span className="text-sm font-semibold text-neutral-700">{c}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
