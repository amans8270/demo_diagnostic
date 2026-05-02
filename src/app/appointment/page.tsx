"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const fadeUp = (d = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease: [0.22, 1, 0.36, 1] } },
});
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const tests = ["MRI Scan","CT Scan","Digital X-Ray","Ultrasound","Blood Test / Pathology","ECG","EEG","Mammography","Health Check-Up Package","Other"];
const slots = ["7:00 – 8:00 AM","8:00 – 9:00 AM","9:00 – 10:00 AM","10:00 – 11:00 AM","11:00 AM – 12:00 PM","12:00 – 1:00 PM","2:00 – 3:00 PM","3:00 – 4:00 PM","4:00 – 5:00 PM","5:00 – 6:00 PM","6:00 – 7:00 PM","7:00 – 8:00 PM"];

type FormState = { name: string; phone: string; email: string; age: string; gender: string; test: string; date: string; time: string; prescription: boolean; notes: string; };
const empty: FormState = { name:"",phone:"",email:"",age:"",gender:"",test:"",date:"",time:"",prescription:false,notes:"" };

export default function AppointmentPage() {
  const [form, setForm] = useState<FormState>(empty);
  const [done, setDone] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const t = e.target as HTMLInputElement;
    setForm(p => ({ ...p, [t.name]: t.type === "checkbox" ? t.checked : t.value }));
  };

  const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-950 overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 80% 0%, rgb(14 165 233 / 0.1), transparent 70%)" }} />
        <div className="container-xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp(0)}>
                <div className="section-label mb-5" style={{ color: "#38bdf8" }}>Book Appointment</div>
              </motion.div>
              <motion.h1 variants={fadeUp(0.08)} className="section-heading mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#ffffff" }}>
                Schedule Your<br/><span className="text-gradient">Diagnostic Visit</span>
              </motion.h1>
              <motion.p variants={fadeUp(0.16)} className="section-sub mb-10" style={{ color: "#94a3b8" }}>
                Book online in under 2 minutes. We confirm via phone within 30 minutes. No prepayment required.
              </motion.p>
              <motion.div variants={fadeUp(0.22)} className="flex flex-col gap-4">
                {[["01","Fill the form","Enter your details and preferred test & time"],["02","We confirm","Receive a confirmation call within 30 minutes"],["03","Visit us","Come in at your chosen date and time slot"]].map(([n,t,d]) => (
                  <div key={n} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sky-400 text-xs font-bold shrink-0" style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}>{n}</div>
                    <div><p className="text-sm font-semibold text-white">{t}</p><p className="text-xs text-neutral-500">{d}</p></div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as any }} className="hidden lg:flex flex-col gap-4">
              {[["📋 No Prepayment Required","Pay at the centre on the day of your visit — cash or card accepted."],["🔄 Easy Rescheduling","Call us anytime to change or cancel your appointment slot."],["⚡ Urgent Cases Welcome","Same-day slots are available for urgent diagnostic needs."]].map(([title, desc]) => (
                <div key={title as string} className="flex gap-4 p-5 rounded-2xl border" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.07)" }}>
                  <div className="text-xl shrink-0">{(title as string).split(" ")[0]}</div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{(title as string).replace(/^\S+\s/, "")}</p>
                    <p className="text-xs text-neutral-500">{desc as string}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section bg-neutral-50">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
                  className="text-center py-20 px-8 rounded-3xl bg-white border border-neutral-100 shadow-xl shadow-black/[0.04]">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
                    <svg className="w-9 h-9 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight mb-3">Appointment Requested!</h2>
                  <p className="text-neutral-500 max-w-sm mx-auto mb-2 leading-relaxed">
                    Thank you, <span className="font-semibold text-neutral-800">{form.name}</span>. Your request for <span className="font-semibold text-neutral-800">{form.test}</span> on <span className="font-semibold text-neutral-800">{form.date}</span> has been submitted.
                  </p>
                  <p className="text-neutral-400 text-sm mb-10">We will call <span className="font-medium text-neutral-600">{form.phone}</span> to confirm within 30 minutes.</p>
                  <button onClick={() => { setDone(false); setForm(empty); }} className="btn-primary !px-8">Book Another Appointment</button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="rounded-3xl bg-white border border-neutral-100 shadow-xl shadow-black/[0.04] overflow-hidden">
                    {/* Card header */}
                    <div className="px-8 sm:px-10 pt-10 pb-7 border-b border-neutral-100">
                      <h2 className="text-xl font-bold text-neutral-900 tracking-tight mb-2">Appointment Details</h2>
                      <p className="text-sm text-neutral-400">All fields marked * are required. We confirm via phone call.</p>
                    </div>

                    <form onSubmit={e => { e.preventDefault(); setDone(true); }} className="px-8 sm:px-10 py-10 space-y-10">

                      {/* Patient Info */}
                      <div className="bg-neutral-50/50 p-6 sm:p-8 rounded-2xl border border-neutral-100">
                        <p className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-6 flex items-center gap-2">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                          Patient Information
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
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
                          <div className="grid grid-cols-2 gap-4 sm:gap-6">
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

                      <div className="h-px bg-neutral-100 hidden" />

                      {/* Test & Schedule */}
                      <div className="bg-neutral-50/50 p-6 sm:p-8 rounded-2xl border border-neutral-100">
                        <p className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-6 flex items-center gap-2">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          Test &amp; Schedule
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                          <div className="sm:col-span-2">
                            <label className="label" htmlFor="a-test">Test / Service *</label>
                            <select id="a-test" name="test" required value={form.test} onChange={onChange} className="input">
                              <option value="">Select a service</option>
                              {tests.map(t => <option key={t}>{t}</option>)}
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
                              {slots.map(s => <option key={s}>{s}</option>)}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="h-px bg-neutral-100 hidden" />

                      {/* Additional */}
                      <div className="bg-neutral-50/50 p-6 sm:p-8 rounded-2xl border border-neutral-100">
                        <p className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-6 flex items-center gap-2">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                          Additional Details
                        </p>
                        <div className="space-y-6 sm:space-y-8">
                          <label className="flex items-start gap-4 cursor-pointer group p-4 rounded-xl border border-neutral-200 bg-white hover:border-sky-300 transition-colors">
                            <input name="prescription" type="checkbox" checked={form.prescription} onChange={onChange} className="mt-1 w-5 h-5 rounded border-neutral-300 text-sky-600 cursor-pointer" />
                            <span className="text-[0.9375rem] font-medium text-neutral-700 group-hover:text-neutral-900 transition-colors leading-relaxed">
                              I have a doctor&apos;s prescription / referral for this test
                            </span>
                          </label>
                          <div>
                            <label className="label" htmlFor="a-notes">Notes <span className="text-neutral-400 font-normal">(optional)</span></label>
                            <textarea id="a-notes" name="notes" rows={4} value={form.notes} onChange={onChange}
                              placeholder="Any medical conditions, special requirements, or questions…"
                              className="input resize-none" />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <motion.button type="submit" whileTap={{ scale: 0.985 }} className="btn-primary !px-10 w-full sm:w-auto justify-center">
                          Submit Appointment Request
                        </motion.button>
                        <p className="text-xs text-neutral-400 self-center leading-relaxed">
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
