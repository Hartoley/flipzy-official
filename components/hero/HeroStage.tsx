// HeroStage.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "./heroData";
import HeroCard from "./HeroCard";

const AUTO_ADVANCE_MS = 5500;
const BG_EXPAND_DURATION = 0.9; // < 1s as requested

export default function HeroStage() {
  const total = heroSlides.length;
  const [index, setIndex] = useState(0); // the active slide which becomes background
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = window.setInterval(() => {
      setIndex((s) => (s + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [isPaused, total]);

  // Visible rail shows next 4 items after the active one (queue)
  const rail = useMemo(() => {
    const arr = [];
    for (let i = 1; i <= 4; i++) {
      const idx = (index + i) % total;
      arr.push(heroSlides[idx]);
    }
    return arr;
  }, [index, total]);

  const active = heroSlides[index];

  function prev() {
    setIndex((s) => (s - 1 + total) % total);
  }
  function next() {
    setIndex((s) => (s + 1) % total);
  }

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ----------------------- BACKGROUND -> scales center 70% -> 100% ----------------------- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          className="absolute inset-0 z-0"
          initial={{
            scale: 0.65,
            opacity: 1,
            filter: "blur(12px)",
          }}
          animate={{
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{
            scale: 1.05,
            opacity: 0,
          }}
          transition={{
            duration: 0.35, // SUPER FAST
            ease: [0.12, 0.9, 0.33, 1],
          }}
        >
          <img src={active.image} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* -------------------------- LEFT TEXT (foreground) -------------------------- */}
      <div className="absolute inset-0 z-10 flex items-center px-8 md:px-16">
        <div className="max-w-2xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "-text"}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.7 }}
            >
              {active.subtitle && (
                <div className="uppercase text-sm opacity-80 mb-2">
                  {active.subtitle}
                </div>
              )}

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                {active.title}
              </h1>

              {active.description && (
                <p className="mt-4 text-lg opacity-90">{active.description}</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ------------------------ CARD RAIL (bottom-right queue) ------------------------ */}
      <div className="absolute bottom-12 right-16 z-20 pointer-events-auto">
        {/* Rail container → 50% width like design */}
        <div className="w-[50vw] max-w-[800px] overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`rail-${index}`}
              className="flex gap-6"
              initial={{ opacity: 0, x: 140 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -140 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {rail.map((s, i) => (
                <HeroCard key={s.id} slide={s} indexInRail={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls under rail */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/25 flex items-center justify-center backdrop-blur-sm text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          <div className="h-2 w-64 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              key={`progress-${index}`}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
              className="h-full bg-white/40"
            />
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/25 flex items-center justify-center backdrop-blur-sm text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
