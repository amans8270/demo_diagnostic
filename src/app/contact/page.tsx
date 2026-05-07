"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const fadeUp = (d = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease: [0.22, 1, 0.36, 1] } },
});
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setSent(true);
        setTimeout(() => { setSent(false); setForm({ name: "", phone: "", email: "", subject: "", message: "" }); }, 5000);
      } else {
        alert(json.message || "Failed to send message");
      }
    } catch {
      alert("Network error — please try again");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>,
      label: "Address",
      value: "Demo Clinic Dental Studio, Sant Nagar, Burari, Delhi – 110084",
      href: "https://maps.google.com",
    },
    {
      icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>,
      label: "Phone",
      value: "+91 82878 06712",
      href: "tel:+918287806712",
    },
    {
      icon: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></>,
      label: "Email",
      value: "hello@democlinicdental.in",
      href: "mailto:hello@democlinicdental.in",
    },
    {
      icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
      label: "Hours",
      value: "Mon–Sat: 9 AM – 6 PM  •  Sunday: Closed",
      href: undefined,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-xl relative z-10 py-14">
          <motion.div initial="hidden" animate="visible" variants={stagger} style={{ maxWidth: "38rem" }}>
            <motion.div variants={fadeUp(0)}>
              <div className="section-label on-dark mb-5">Get in Touch</div>
            </motion.div>
            <motion.h1 variants={fadeUp(0.08)} className="display-heading mb-5" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}>
              We&apos;re Here<br /><em>to Help You</em>
            </motion.h1>
            <motion.p variants={fadeUp(0.16)} className="section-sub" style={{ color: "#94A3B8" }}>
              Questions about treatments, directions, or appointment availability? Reach us through any channel below — we usually respond within 2 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">
            {/* Info column */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="lg:col-span-2 space-y-4"
            >
              <motion.h2 variants={fadeUp(0)} className="text-2xl font-bold tracking-tight mb-7" style={{ color: "#0F172A", fontFamily: "'Playfair Display', serif" }}>
                Contact Information
              </motion.h2>

              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp(0.06)}
                  className="flex gap-4 p-5 rounded-xl"
                  style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", transition: "border-color 0.2s, background 0.2s" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "#CCFBF1", border: "1px solid #99F6E4" }}
                  >
                    <svg className="w-5 h-5" style={{ color: "#0D9488" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      {item.icon}
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#94A3B8" }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium break-words" style={{ color: "#1E293B" }}>{item.value}</a>
                    ) : (
                      <p className="text-sm font-medium leading-relaxed" style={{ color: "#1E293B" }}>{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Emergency box */}
              <motion.div
                variants={fadeUp(0.15)}
                className="p-6 rounded-2xl mt-6"
                style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #0D2B4E 100%)", border: "1px solid rgba(13,148,136,0.25)" }}
              >
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#14B8A6" }}>🚨 Dental Emergency?</p>
                <p className="text-white text-sm leading-relaxed mb-4">For severe pain, trauma, or swelling — call us immediately. Priority slots available within 60 minutes.</p>
                <a href="tel:+918287806712" className="btn-primary w-full text-center !py-3">
                  Call for Emergency Care
                </a>
              </motion.div>

              <motion.div variants={fadeUp(0.2)}>
                <Link href="/appointment" className="btn-ghost w-full text-center !py-3 mt-2 block">
                  Book Regular Appointment
                </Link>
              </motion.div>
            </motion.div>

            {/* Form column */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl p-8 sm:p-10" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 16px 48px rgba(0,0,0,0.06)" }}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold tracking-tight mb-2" style={{ color: "#0F172A", fontFamily: "'Playfair Display', serif" }}>Send a Message</h2>
                  <p className="text-sm" style={{ color: "#64748B" }}>We respond within 2 hours during clinic hours.</p>
                </div>

                {sent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 rounded-xl flex items-center gap-3"
                    style={{ background: "#D1FAE5", border: "1px solid #6EE7B7" }}
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#A7F3D0" }}>
                      <svg className="w-4 h-4" style={{ color: "#065F46" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold" style={{ color: "#065F46" }}>Message sent! We&apos;ll get back to you shortly.</p>
                  </motion.div>
                )}

                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label" htmlFor="c-name">Full Name *</label>
                      <input id="c-name" name="name" type="text" required value={form.name} onChange={onChange} placeholder="Your full name" className="input" />
                    </div>
                    <div>
                      <label className="label" htmlFor="c-phone">Phone Number *</label>
                      <input id="c-phone" name="phone" type="tel" required value={form.phone} onChange={onChange} placeholder="+91 XXXXX XXXXX" className="input" />
                    </div>
                  </div>
                  <div>
                    <label className="label" htmlFor="c-email">Email Address</label>
                    <input id="c-email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@example.com" className="input" />
                  </div>
                  <div>
                    <label className="label" htmlFor="c-subject">Subject</label>
                    <select id="c-subject" name="subject" value={form.subject} onChange={onChange} className="input">
                      <option value="">Select a topic</option>
                      <option>Appointment Enquiry</option>
                      <option>Treatment Information</option>
                      <option>Pricing / Finance</option>
                      <option>Emergency Query</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="label" htmlFor="c-message">Message *</label>
                    <textarea id="c-message" name="message" rows={4} required value={form.message} onChange={onChange} placeholder="How can we help you today?" className="input resize-none" />
                  </div>
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.985 }}
                    disabled={loading}
                    className="btn-primary w-full sm:w-auto !px-10"
                    style={{ opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? "Sending…" : "Send Message →"}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-14" style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
        <div className="container-xl">
          <h2 className="text-xl font-bold mb-6 tracking-tight" style={{ color: "#0F172A", fontFamily: "'Playfair Display', serif" }}>Find Us on the Map</h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <iframe
              title="Demo Clinic Dental Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.4116496229!2d77.19541947551824!3d28.744573375594033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfe1f37c6b829%3A0x76ebf31aa96e6fac!2sAarogya%20Diagnostic%20Centre!5e0!3m2!1sen!2sin!4v1714652932000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
