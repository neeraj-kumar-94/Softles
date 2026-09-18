"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "./motion-presets";
import BrandPreloader from "./BrandPreloader";

// Two pieces of loading feedback:
//  - a slim progress bar that starts the moment an internal link is clicked and
//    completes when the route commits, so navigation never feels frozen;
//  - the wordmark preloader on the very first load.
// The bar is deliberately not a blocking overlay — the page stays readable.
export default function RouteLoader() {
  const pathname = usePathname();
  const [pending, setPending] = useState(false);
  const safety = useRef(null);

  // Route committed → finish the bar.
  useEffect(() => {
    setPending(false);
    if (safety.current) clearTimeout(safety.current);
  }, [pathname]);

  // Start the bar as soon as an internal link is clicked.
  useEffect(() => {
    const onClick = (e) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest?.("a");
      if (!a || a.target === "_blank") return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/") || href.startsWith("/#")) return;
      let dest;
      try {
        dest = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      if (dest.pathname === window.location.pathname) return;
      setPending(true);
      if (safety.current) clearTimeout(safety.current);
      safety.current = setTimeout(() => setPending(false), 8000);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <>
      <AnimatePresence>
        {pending && (
          <motion.div
            key="route-bar"
            aria-hidden="true"
            className="fixed inset-x-0 top-0 z-[110] h-[3px] origin-left bg-gradient-to-r from-[#FF4D57] to-[#FF6A3D] shadow-[0_0_14px_rgba(255,77,87,0.55)]"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 0.92, transition: { duration: 2.6, ease: EASE } }}
            exit={{ scaleX: 1, opacity: 0, transition: { duration: 0.4, ease: "easeOut" } }}
          />
        )}
      </AnimatePresence>

      <BrandPreloader />
    </>
  );
}
