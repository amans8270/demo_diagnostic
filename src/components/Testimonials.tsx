"use client";
import { useEffect, useState } from "react";

type Testimonial = { name: string; role?: string; stars?: number; text: string; video?: string };

function VideoEmbed({ url }: { url: string }) {
  // YouTube handling
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    let id = "";
    const m = url.match(/(?:v=|\/)([0-9A-Za-z_-]{6,})/);
    if (m) id = m[1];
    const src = `https://www.youtube.com/embed/${id}`;
    return (
      <div className="w-48 h-28 rounded-md overflow-hidden">
        <iframe src={src} title="testimonial video" className="w-full h-full" frameBorder={0} allowFullScreen />
      </div>
    );
  }

  // MP4 fallback
  if (url.endsWith('.mp4')) {
    return (
      <video className="w-48 h-28 rounded-md" controls>
        <source src={url} />
        Your browser does not support the video tag.
      </video>
    );
  }

  return null;
}

export default function Testimonials({ items }: { items?: Testimonial[] }) {
  const defaults: Testimonial[] = items || [
    { name: "Sonal Gupta", role: "Smile Makeover", stars: 5, text: "The team made me feel comfortable and my veneers look incredible.", video: "" },
    { name: "Amit Verma", role: "Implant Patient", stars: 5, text: "Professional and quick — my implant feels natural.", video: "" },
    { name: "Neha Singh", role: "Invisalign", stars: 5, text: "Discreet and effective. The staff guided me through every step.", video: "" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % defaults.length), 6000);
    return () => clearInterval(id);
  }, [defaults.length]);

  const cur = defaults[index];

  return (
    <div className="testimonials-component card p-6">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="flex gap-2 mb-4">{[...Array(cur.stars || 5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          ))}</div>
          <p className="text-neutral-600 mb-4">“{cur.text}”</p>
          <div className="flex items-center gap-3 pt-3 border-t border-neutral-100 mt-3">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 text-sm font-bold">{cur.name.charAt(0)}</div>
            <div>
              <p className="text-sm font-semibold text-neutral-900">{cur.name}</p>
              {cur.role && <p className="text-xs text-neutral-400">{cur.role}</p>}
            </div>
          </div>
        </div>

        <div className="shrink-0 flex flex-col items-center gap-3">
          {cur.video ? <VideoEmbed url={cur.video} /> : <div className="w-48 h-28 rounded-md bg-neutral-100" />}
          <div className="flex flex-col items-center gap-2 mt-2">
            <button onClick={() => setIndex(i => (i - 1 + defaults.length) % defaults.length)} className="btn-ghost p-2">◀</button>
            <button onClick={() => setIndex(i => (i + 1) % defaults.length)} className="btn-ghost p-2">▶</button>
          </div>
        </div>
      </div>
    </div>
  );
}
