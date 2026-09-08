"use client";

import { useEffect, useRef, useState } from "react";

// Drives the "Our Approach" / process rows: when the row scrolls into view the
// steps light up once, in order, then settle into a completed state. Hovering a
// step takes over from there, so a visitor can walk the flow themselves instead
// of waiting for a loop to come back around.
export default function useStepSequence(count, { interval = 420 } = {}) {
  const ref = useRef(null);
  const [played, setPlayed] = useState(0);
  const [done, setDone] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setPlayed(count);
      setDone(true);
      return;
    }

    let timer;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        let i = 0;
        timer = setInterval(() => {
          i += 1;
          setPlayed(i);
          if (i >= count) {
            clearInterval(timer);
            setDone(true);
          }
        }, interval);
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      clearInterval(timer);
    };
  }, [count, interval]);

  // Hover wins; otherwise the leading edge of the intro sequence is "current".
  const activeIdx = hovered !== null ? hovered : done ? null : played - 1;

  return { ref, activeIdx, played, done, hovered, setHovered };
}
