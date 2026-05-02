"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const fadeUp = (d = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease: [0.22, 1, 0.36, 1] } },
});
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name:"",phone:"",email:"",subject:"",message:"" }); }, 5000);
  };

  const info = [
    { icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: "Address", value: "Shop No. 12, Main Burari Road, Near Burari Chowk, Delhi – 110084", href: undefined },
    { icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>, label: "Email", value: "info@tejashealth.in", href: "mailto:info@tejashealth.in" },
    { icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label: "Hours", value: "Mon–Sat: 7 AM – 9 PM  •  Sun: 8 AM – 2 PM", href: undefined },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-950 overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 30% 0%, rgb(14 165 233 / 0.1), transparent 70%)" }} />
        <div className="container-xl relative">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeUp(0)}>
              <div className="section-label mb-5" style={{ color: "#38bdf8" }}>Get in Touch</div>
            </motion.div>
            <motion.h1 variants={fadeUp(0.08)} className="section-heading !text-white mb-5" style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}>
              We&apos;re Here to Help
            </motion.h1>
            <motion.p variants={fadeUp(0.16)} className="section-sub text-neutral-400">
              Questions about our services, need directions, or want to check your report status? Reach us through any channel below.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Info col */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mb-7">Contact Information</h2>
              {info.map(item => (
                <div key={item.label} className="flex gap-4 p-5 rounded-xl border border-neutral-100 bg-neutral-50 hover:border-sky-100 hover:bg-sky-50/30 transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-neutral-800 hover:text-sky-600 transition-colors break-words">{item.value}</a>
                    ) : (
                      <p className="text-sm font-medium text-neutral-800 leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form col */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-neutral-100 bg-white shadow-xl shadow-black/[0.04] p-8 sm:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mb-1.5">Send a Message</h2>
                  <p className="text-sm text-neutral-500">We respond within 2 hours during operating hours.</p>
                </div>

                {sent && (
                  <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                    <p className="text-sm font-medium text-green-800">Message sent! We&apos;ll get back to you shortly.</p>
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
                      <option>Report Collection</option>
                      <option>Pricing Information</option>
                      <option>Home Sample Collection</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="label" htmlFor="c-message">Message *</label>
                    <textarea id="c-message" name="message" rows={4} required value={form.message} onChange={onChange} placeholder="How can we help you?" className="input resize-none" />
                  </div>
                  <motion.button type="submit" whileTap={{ scale: 0.985 }} className="btn-primary w-full sm:w-auto !px-10">
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-neutral-50 border-t border-neutral-100 py-14">
        <div className="container-xl">
          <h2 className="text-xl font-bold text-neutral-900 mb-6 tracking-tight">Find Us on the Map</h2>
          <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
            <iframe
              title="Tejas Health Diagnostic Centre Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13993.66073058534!2d77.1895!3d28.7555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01a04e72a6e3%3A0x2e1e5a0a7c5a1b1c!2sBurari%2C%20Delhi!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%" height="420" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
