"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.3, delay: i * 0.04, ease: "easeOut" },
  }),
};

const appts = [
  { id: "DC-101", patient: "Rakesh Verma",    test: "Dental Implant",         date: "07 May 2026", time: "9:00 AM",  status: "Confirmed" },
  { id: "DC-102", patient: "Sunita Devi",     test: "Veneer Consultation",    date: "07 May 2026", time: "10:00 AM", status: "Confirmed" },
  { id: "DC-103", patient: "Amit Singh",      test: "Root Canal",             date: "07 May 2026", time: "11:30 AM",  status: "Completed" },
  { id: "DC-104", patient: "Neha Gupta",      test: "Same-day Crown",         date: "08 May 2026", time: "11:00 AM", status: "Pending" },
  { id: "DC-105", patient: "Mohammad Irfan",  test: "Emergency Extraction",   date: "08 May 2026", time: "8:00 AM",  status: "Completed" },
  { id: "DC-106", patient: "Kavita Rani",     test: "Invisalign Review",      date: "09 May 2026", time: "2:00 PM",  status: "Completed" },
  { id: "DC-107", patient: "Suresh Yadav",    test: "Oral Surgery Consult",   date: "09 May 2026", time: "3:30 PM",  status: "Pending" },
  { id: "DC-108", patient: "Pooja Sharma",    test: "Teeth Whitening",        date: "10 May 2026", time: "10:30 AM", status: "Confirmed" },
];

const statusStyle: Record<string, string> = {
  Confirmed: "bg-sky-50 text-sky-700 border-sky-200",
  Completed: "bg-green-50 text-green-700 border-green-200",
  Pending:   "bg-amber-50 text-amber-700 border-amber-200",
  Cancelled: "bg-red-50 text-red-700 border-red-200",
};

export default function DashboardPage() {
  const [filter, setFilter] = useState("All");
  const rows = filter === "All" ? appts : appts.filter(a => a.status === filter);

  return (
    <>
      {/* Header */}
      <section className="border-b border-neutral-100 py-8 bg-white">
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="section-label mb-2">Clinic Dashboard</div>
              <h1 className="text-2xl font-extrabold text-neutral-900 tracking-tight">Appointment Overview</h1>
              <p className="text-sm text-neutral-500 mt-0.5">Today&apos;s appointments at Demo Clinic Dental Studio</p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs text-neutral-500 bg-neutral-50 border border-neutral-200 px-3 py-2 rounded-lg">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              Demo only — not connected to real data
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-neutral-50 border-b border-neutral-100">
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Today's Appointments", value: "12", sub: "+2 from yesterday", accent: "sky" },
              { label: "Reports Pending", value: "4", sub: "2 due within 1 hour", accent: "amber" },
              { label: "Completed Today", value: "6", sub: "50% completion rate", accent: "green" },
              { label: "Revenue Today", value: "₹18,400", sub: "+12% vs last week", accent: "violet" },
            ].map((s, i) => (
              <motion.div key={s.label} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                className="stat-card text-left">
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">{s.label}</p>
                <p className="stat-number !text-left !text-2xl">{s.value}</p>
                <p className="text-xs text-neutral-400 mt-1.5">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="py-10 bg-white">
        <div className="container-xl">
          <div className="rounded-2xl border border-neutral-100 overflow-hidden shadow-sm">
            {/* Table header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 border-b border-neutral-100 bg-white">
              <h2 className="text-lg font-bold text-neutral-900 tracking-tight">Appointments</h2>
              <div className="flex gap-2">
                {["All","Confirmed","Pending","Completed"].map(f => (
                  <button key={f} onClick={() => setFilter(f)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-150 ${
                      filter === f
                        ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                        : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-300 hover:text-neutral-700"
                    }`}
                  >{f}</button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-neutral-50">
                    {["ID","Patient","Test","Date","Time","Status"].map(h => (
                      <th key={h} className="px-6 py-3.5 text-[11px] font-700 text-neutral-400 uppercase tracking-wider" style={{fontWeight:700}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-50">
                  {rows.map((a, i) => (
                    <motion.tr key={a.id} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                      className="hover:bg-neutral-50/70 transition-colors duration-100">
                      <td className="px-6 py-4 text-xs font-mono text-neutral-400">{a.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                            {a.patient.split(" ").map(n => n[0]).join("")}
                          </div>
                          <span className="text-sm font-semibold text-neutral-900">{a.patient}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-600">{a.test}</td>
                      <td className="px-6 py-4 text-sm text-neutral-500">{a.date}</td>
                      <td className="px-6 py-4 text-sm text-neutral-500">{a.time}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2.5 py-0.5 text-xs font-semibold rounded-full border ${statusStyle[a.status]}`}>
                          {a.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {rows.length === 0 && (
              <div className="text-center py-14 text-sm text-neutral-400">No appointments match this filter.</div>
            )}

            <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-100 bg-neutral-50/50">
              <span className="text-xs text-neutral-400">Showing {rows.length} of {appts.length} appointments</span>
              <span className="text-xs text-neutral-300">Demo data · Aarogya Diagnostic Dashboard</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
