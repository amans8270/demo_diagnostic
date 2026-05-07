"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

const fadeUp = (d = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease: [0.22, 1, 0.36, 1] } },
});
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const services = ["Cosmetic Consultation", "Dental Implant", "Invisalign", "Emergency Care", "Same-day Crown", "Oral Surgery", "Routine Check-up", "Other"];
const slots = ["9:00 – 10:00 AM", "10:00 – 11:00 AM", "11:00 AM – 12:00 PM", "12:00 – 1:00 PM", "2:00 – 3:00 PM", "3:00 – 4:00 PM", "4:00 – 5:00 PM", "5:00 – 6:00 PM"];

type FormState = { name: string; phone: string; email: string; age: string; gender: string; test: string; date: string; time: string; prescription: boolean; notes: string };
const empty: FormState = { name: "", phone: "", email: "", age: "", gender: "", test: "", date: "", time: "", prescription: false, notes: "" };

export default function AppointmentPage() {
  const [form, setForm] = useState<FormState>(empty);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const t = e.target as HTMLInputElement;
    setForm((p) => ({ ...p, [t.name]: t.type === "checkbox" ? t.checked : t.value }));
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-xl relative z-10 py-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp(0)}>
                <div className="section-label on-dark mb-5">Schedule Consultation</div>
              </motion.div>
              <motion.h1 variants={fadeUp(0.08)} className="display-heading mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
                Book Your <em>Dental Consultation</em>
              </motion.h1>
              <motion.p variants={fadeUp(0.16)} className="section-sub mb-8" style={{ color: "#94A3B8" }}>
                Fill out the form and we'll confirm your slot within 30 minutes. No prepayment required.
              </motion.p>

              <motion.div variants={fadeUp(0.22)} className="space-y-3">
                {[
                  { n: "01", t: "Fill the Form", d: "Enter your details and preferred service & time" },
                  { n: "02", t: "We Confirm", d: "Receive a call within 30 minutes to confirm your slot" },
                  { n: "03", t: "Visit Us", d: "Come in at your chosen time — zero prepayment needed" },
                ].map(({ n, t, d }) => (
                  <div key={n} className="flex items-center gap-4">
                    <div className="step-number shrink-0">{n}</div>
                    <div>
                      <p className="text-sm font-bold text-white">{t}</p>
                      <p className="text-xs" style={{ color: "#64748B" }}>{d}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="hidden lg:grid grid-cols-1 gap-4"
            >
              {[
                { icon: "📋", title: "No Prepayment Required", desc: "Pay at the centre on the day of your visit — cash or card accepted." },
                { icon: "🔄", title: "Easy Rescheduling", desc: "Call us anytime to change or cancel your appointment without any hassle." },
                { icon: "⚡", title: "Urgent Cases Welcome", desc: "Same-day emergency slots available for urgent dental needs." },
                { icon: "💰", title: "0% Finance Options", desc: "Flexible payment plans available for all major treatments." },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="text-2xl shrink-0">{icon}</div>
                  <div>
                    <p className="text-sm font-bold text-white mb-0.5">{title}</p>
                    <p className="text-xs" style={{ color: "#64748B" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section" style={{ background: "#F8FAFC" }}>
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-20 px-8 rounded-3xl bg-white"
                  style={{ border: "1px solid #E2E8F0", boxShadow: "0 16px 48px rgba(0,0,0,0.08)" }}
                >
                  <div
                    className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{ background: "#D1FAE5", border: "1px solid #6EE7B7" }}
                  >
                    <svg className="w-9 h-9" style={{ color: "#059669" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-extrabold tracking-tight mb-3" style={{ color: "#0F172A", fontFamily: "'Playfair Display', serif" }}>
                    Appointment Requested!
                  </h2>
                  <p className="mb-2 leading-relaxed" style={{ color: "#64748B", maxWidth: "28rem", margin: "0 auto 0.5rem" }}>
                    Thank you, <strong style={{ color: "#1E293B" }}>{form.name}</strong>. Your request for <strong style={{ color: "#1E293B" }}>{form.test}</strong> on <strong style={{ color: "#1E293B" }}>{form.date}</strong> has been submitted.
                  </p>
                  <p className="text-sm mb-10" style={{ color: "#94A3B8" }}>We'll call <strong style={{ color: "#475569" }}>{form.phone}</strong> within 30 minutes to confirm.</p>
                  <button
                    onClick={() => { setDone(false); setForm(empty); }}
                    className="btn-primary !px-8"
                  >
                    Book Another Appointment
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="rounded-3xl bg-white overflow-hidden" style={{ border: "1px solid #E2E8F0", boxShadow: "0 16px 48px rgba(0,0,0,0.08)" }}>
                    {/* Card header */}
                    <div
                      className="px-8 sm:px-10 pt-8 pb-6"
                      style={{ borderBottom: "1px solid #F1F5F9", background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)" }}
                    >
                      <h2 className="text-xl font-bold tracking-tight mb-1" style={{ color: "#0F172A", fontFamily: "'Playfair Display', serif" }}>
                        Appointment Details
                      </h2>
                      <p className="text-sm" style={{ color: "#64748B" }}>All fields marked * are required. We confirm via phone call.</p>
                    </div>

                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setLoading(true);
                        try {
                          const res = await fetch("/api/appointments", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ name: form.name, phone: form.phone, email: form.email, service: form.test, date: form.date, time: form.time }),
                          });
                          const json = await res.json();
                          if (res.ok && json.success) { setDone(true); }
                          else { alert(json.message || "Failed to submit appointment"); }
                        } catch { alert("Network error — please try again"); }
                        finally { setLoading(false); }
                      }}
                      className="px-8 sm:px-10 py-10 space-y-8"
                    >
                      {/* Section: Patient Info */}
                      <div className="p-6 rounded-2xl" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                        <p className="text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-2" style={{ color: "#0D9488" }}>
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                          </svg>
                          Patient Information
                        </p>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="label" htmlFor="a-name">Full Name *</label>
                            <input id="a-name" name="name" type="text" required value={form.name} onChange={onChange} placeholder="Patient's full name" className="input" />
                          </div>
                          <div>
                            <label className="label" htmlFor="a-phone">Phone Number *</label>
                            <input id="a-phone" name="phone" type="tel" required value={form.phone} onChange={onChange} placeholder="+91 XXXXX XXXXX" className="input" />
                          </div>
                          <div>
                            <label className="label" htmlFor="a-email">Email Address</label>
                            <input id="a-email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@example.com" className="input" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="label" htmlFor="a-age">Age *</label>
                              <input id="a-age" name="age" type="number" min="1" max="120" required value={form.age} onChange={onChange} placeholder="Age" className="input" />
                            </div>
                            <div>
                              <label className="label" htmlFor="a-gender">Gender *</label>
                              <select id="a-gender" name="gender" required value={form.gender} onChange={onChange} className="input">
                                <option value="">Select</option>
                                <option>Male</option><option>Female</option><option>Other</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Section: Schedule */}
                      <div className="p-6 rounded-2xl" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                        <p className="text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-2" style={{ color: "#0D9488" }}>
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                          Service & Schedule
                        </p>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="sm:col-span-2">
                            <label className="label" htmlFor="a-test">Service Required *</label>
                            <select id="a-test" name="test" required value={form.test} onChange={onChange} className="input">
                              <option value="">Select a service</option>
                              {services.map((t) => <option key={t}>{t}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className="label" htmlFor="a-date">Preferred Date *</label>
                            <input id="a-date" name="date" type="date" required min={minDate} value={form.date} onChange={onChange} className="input" />
                          </div>
                          <div>
                            <label className="label" htmlFor="a-time">Preferred Time *</label>
                            <select id="a-time" name="time" required value={form.time} onChange={onChange} className="input">
                              <option value="">Select a slot</option>
                              {slots.map((s) => <option key={s}>{s}</option>)}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Section: Additional */}
                      <div className="p-6 rounded-2xl" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                        <p className="text-xs font-bold tracking-widest uppercase mb-5 flex items-center gap-2" style={{ color: "#0D9488" }}>
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
                          </svg>
                          Additional Details
                        </p>
                        <div className="space-y-5">
                          <label className="flex items-start gap-4 cursor-pointer group p-4 rounded-xl" style={{ border: "1px solid #E2E8F0", background: "white" }}>
                            <input name="prescription" type="checkbox" checked={form.prescription} onChange={onChange} className="mt-1 w-5 h-5 cursor-pointer" />
                            <span className="text-sm font-medium leading-relaxed" style={{ color: "#475569" }}>
                              I have a doctor&apos;s prescription / referral for this treatment
                            </span>
                          </label>
                          <div>
                            <label className="label" htmlFor="a-notes">Notes <span className="font-normal" style={{ color: "#94A3B8" }}>(optional)</span></label>
                            <textarea id="a-notes" name="notes" rows={3} value={form.notes} onChange={onChange} placeholder="Any medical conditions, allergies, or special requirements…" className="input resize-none" />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                          type="submit"
                          whileTap={{ scale: 0.985 }}
                          disabled={loading}
                          className="btn-primary !px-10 w-full sm:w-auto justify-center"
                          style={{ opacity: loading ? 0.7 : 1 }}
                        >
                          {loading ? "Submitting…" : "Submit Appointment Request →"}
                        </motion.button>
                        <p className="text-xs self-center leading-relaxed" style={{ color: "#94A3B8" }}>
                          By submitting you consent to us contacting you about this appointment.
                        </p>
                      </div>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
