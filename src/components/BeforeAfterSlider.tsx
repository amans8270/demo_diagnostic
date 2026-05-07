"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  alt?: string;
  className?: string;
};

export default function BeforeAfterSlider({ beforeSrc, afterSrc, alt = "Before and after", className = "" }: Props) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDrag = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      setPos(Math.max(5, Math.min(95, Math.round(x * 100))));
    };

    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("pointerdown", (ev: PointerEvent) => {
      (ev.target as Element).setPointerCapture?.(ev.pointerId);
      onDrag(ev);
      const move = (m: PointerEvent) => onDrag(m);
      const up = (_: PointerEvent) => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerup", up);
        el.removeEventListener("pointercancel", up);
      };
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerup", up);
      el.addEventListener("pointercancel", up);
    });

    return () => {
      el.replaceWith(el.cloneNode(true));
    };
  }, []);

  return (
    <div className={`before-after-slider ${className}`} ref={containerRef} style={{ position: "relative", userSelect: "none" }}>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 12 }}>
        <Image src={beforeSrc} alt={`${alt} — before`} width={1600} height={900} style={{ width: "100%", height: "auto", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={afterSrc} alt={`${alt} — after`} fill style={{ objectFit: "cover" }} />
        </div>
        <div aria-hidden style={{ position: "absolute", left: `${pos}%`, top: 0, bottom: 0, width: 2, transform: "translateX(-50%)", background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(0,0,0,0.05))" }} />
      </div>

      <input
        aria-label="Before/after slider"
        type="range"
        min={5}
        max={95}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="mt-3 w-full"
        style={{ appearance: "none" }}
      />
    </div>
  );
}
