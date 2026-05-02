"use client";
import { useEffect, useRef } from "react";

/**
 * Measures the fixed header height (including announcement strip) via
 * ResizeObserver and sets --header-h on <html> so any element can use it.
 * Also sets padding-top on <body> so page content never hides behind the header.
 */
export default function HeaderSpacer() {
  const initialized = useRef(false);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const apply = () => {
      const h = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
      const main = document.querySelector("main");
      if (main) (main as HTMLElement).style.paddingTop = `${h}px`;
    };

    apply();
    initialized.current = true;

    const ro = new ResizeObserver(apply);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  return null;
}
