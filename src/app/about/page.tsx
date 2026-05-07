"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeUp = (d = 0): Variants => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] } },
});
const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } };
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const values = [
  { icon: "🩺", title: "Patient-First Always", desc: "Every decision — from pricing to turnaround time — is guided by what's best for you, not the clinic." },
  { icon: "🎯", title: "Clinical Accuracy", desc: "We invest in the latest equipment and strict quality controls so every diagnosis and treatment is reliable." },
  { icon: "💎", title: "Full Transparency", desc: "No hidden fees, no unnecessary procedures. Honest, straightforward care from your first visit." },
  { icon: "🤝", title: "Affordable Access", desc: "Quality dental care shouldn't be a luxury. We offer 0% finance plans so everyone can access the best treatment." },
];

const team = [
  { name: "Dr. Rhea Kapoor", role: "Chief Dentist & Prosthodontist", exp: "15 years in restorative and cosmetic dentistry.", initials: "RK", gradient: "from-teal-500 to-sky-500" },
  { name: "Dr. Vikram Joshi", role: "Oral Surgeon", exp: "12 years specialising in implantology and oral surgery.", initials: "VJ", gradient: "from-violet-500 to-purple-600" },
  { name: "Dr. Priya Nair", role: "Orthodontist", exp: "10 years specialising in Invisalign and braces treatment.", initials: "PN", gradient: "from-emerald-500 to-teal-600" },
];

const milestones = [
  { year: "2009", event: "Founded as a single-chair practice in Burari, Delhi." },
  { year: "2013", event: "Expanded to a full dental suite with in-house lab capabilities." },
  { year: "2017", event: "Received NABL accreditation — a milestone in clinical quality." },
  { year: "2021", event: "Launched painless laser dentistry and Invisalign services." },
  { year: "2024", event: "Crossed 10,000 happy patients across North Delhi." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-xl relative z-10 py-12">
          <motion.div initial="hidden" animate="visible" variants={stagger} style={{ maxWidth: "40rem" }}>
            <motion.div variants={fadeUp(0)}>
              <div className="section-label on-dark mb-5">About Us</div>
            </motion.div>
            <motion.h1
              variants={fadeUp(0.08)}
              className="display-heading mb-5"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
            >
              Your Trusted <em>Dental Partner</em><br />for Healthy Smiles
            </motion.h1>
            <motion.p variants={fadeUp(0.16)} className="section-sub" style={{ color: "#94A3B8" }}>
              Since 2009, Demo Clinic Dental Studio has been delivering gentle, high-tech dental care to families across Burari and North Delhi. Over 10,000 smiles transformed.
            </motion.p>
            <motion.div variants={fadeUp(0.24)} className="flex flex-wrap gap-3 mt-8">
              <Link href="/appointment" className="btn-primary">Book a Consultation</Link>
              <Link href="/services" className="btn-ghost-white">View Our Services</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-10 bg-white" style={{ borderBottom: "1px solid #E2E8F0" }}>
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: "10,000+", label: "Patients Served" },
              { value: "15+", label: "Years Active" },
              { value: "NABL", label: "Accredited" },
              { value: "4.9★", label: "Google Rating" },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <p className="stat-number" style={{ fontSize: "2.25rem" }}>{s.value}</p>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}>
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "0 24px 64px rgba(11,31,58,0.12)" }}>
                <Image
                  src="/images/dental/clinic_interior.png"
                  alt="Demo Clinic interior"
                  width={900}
                  height={700}
                  className="w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
              <motion.div variants={fadeUp(0)}>
                <div className="section-label mb-4">Our Story</div>
              </motion.div>
              <motion.h2 variants={fadeUp(0.08)} className="section-heading mb-6">
                From One Chair to a Full-Service Dental Studio
              </motion.h2>
              <motion.div variants={fadeUp(0.14)} className="space-y-4 text-sm leading-relaxed" style={{ color: "#64748B" }}>
                <p>What started as a small practice has grown into a modern dental studio — offering everything from cosmetic makeovers and implants to same-day restorations and emergency care.</p>
                <p>We proudly serve families across Burari and North Delhi, building trust through gentle, patient-first dentistry and consistently excellent clinical outcomes.</p>
                <p>Our in-house lab and specialist team allow us to deliver fast, precise treatments without long waiting times or unnecessary referrals.</p>
              </motion.div>

              {/* Timeline */}
              <motion.div variants={fadeUp(0.2)} className="mt-8 space-y-4">
                {milestones.map((m) => (
                  <div key={m.year} className="flex gap-4 items-start">
                    <span
                      className="shrink-0 text-xs font-bold px-2 py-1 rounded-md"
                      style={{ background: "#CCFBF1", color: "#0B7A70", minWidth: "3.5rem", textAlign: "center" }}
                    >
                      {m.year}
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{m.event}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp(0.27)} className="mt-8">
                <Link href="/appointment" className="btn-primary">Schedule Consultation</Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "#F8FAFC" }}>
        <div className="container-xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} className="text-center mb-14">
            <div className="section-label justify-center mb-4">Our Values</div>
            <h2 className="section-heading mb-4">The Principles We Work By</h2>
            <p className="section-sub mx-auto text-center">Simple commitments we make — and keep — for every single patient.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp(i * 0.08)}
                className="flex gap-5 p-7 rounded-2xl bg-white"
                style={{ border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.05)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: "#CCFBF1", border: "1px solid #99F6E4" }}
                >
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold mb-2" style={{ color: "#0F172A" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{v.desc}</p>
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
            <h2 className="section-heading mb-4">Expert Doctors, Proven Results</h2>
            <p className="section-sub mx-auto text-center">Board-certified specialists with decades of combined clinical expertise across all dental disciplines.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="grid sm:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <motion.div key={m.name} variants={fadeUp(i * 0.09)}>
                <div className="team-card">
                  <div className="team-card-image">
                    <div
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${m.gradient} flex items-center justify-center shadow-xl`}
                      style={{ border: "3px solid rgba(255,255,255,0.2)" }}
                    >
                      <span className="text-white font-extrabold text-2xl">{m.initials}</span>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-lg tracking-tight mb-1" style={{ color: "#0F172A" }}>{m.name}</h3>
                    <p className="text-sm font-semibold mb-3" style={{ color: "#0D9488" }}>{m.role}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{m.exp}</p>
                    <Link href="/appointment" className="btn-primary !py-2.5 !text-sm mt-5 w-full">
                      Book with Dr. {m.name.split(" ")[1]}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16" style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
        <div className="container-xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <p className="text-xs font-bold tracking-widest uppercase text-center mb-8" style={{ color: "#94A3B8" }}>
              Certifications & Affiliations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                { icon: "🏅", label: "NABL Accredited" },
                { icon: "✅", label: "Indian Dental Association" },
                { icon: "🏆", label: "ISO 9001 Certified" },
                { icon: "⭐", label: "Clinical Excellence Award" },
                { icon: "🔬", label: "Delhi Dental Association" },
              ].map((c) => (
                <div key={c.label} className="cert-badge">
                  <span className="text-lg">{c.icon}</span>
                  <span className="text-sm font-semibold" style={{ color: "#334155" }}>{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
