"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "./heroData";
import useTypingText from "./useTypingText";

import HeroCard from "./HeroCard";
import Headers from "./Header";

const AUTO_ADVANCE_MS = 9000; // FASTER SLIDE CHANGES

export default function HeroStage() {
  const total = heroSlides.length;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(id);
  }, [isPaused, total]);

  // ---------------- MOBILE CARD COUNT ----------------
  function getVisibleCount() {
    if (window.innerWidth < 640) return 2; // mobile → 2 cards
    if (window.innerWidth < 1024) return 3; // tablet → 3 cards
    return 4; // desktop → 4 cards
  }

  const [visibleCount, setVisibleCount] = useState(4); // default for SSR

  useEffect(() => {
    function getVisibleCount() {
      if (window.innerWidth < 640) return 2;
      if (window.innerWidth < 1024) return 3;
      return 4;
    }

    setVisibleCount(getVisibleCount());

    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleResize() {
      setVisibleCount(getVisibleCount());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ---------------- RAIL ITEMS ----------------
  const rail = useMemo(() => {
    const arr = [];
    for (let i = 1; i <= visibleCount; i++) {
      const idx = (index + i) % total;
      arr.push(heroSlides[idx]);
    }
    return arr;
  }, [index, total, visibleCount]);

  const active = heroSlides[index];
  const prevIndex = (index - 1 + total) % total;
  const previous = heroSlides[prevIndex];
  const typedSubtitle = useTypingText(active.subtitle || "");
  const typedTitle = useTypingText(active.title || "");
  const typedDescription = useTypingText(active.description || "");

  return (
    <>
      <Headers />
      <section
        className="relative w-full h-[95vh] overflow-hidden bg-[#0A0F1F]"
        style={{
          backgroundImage: `url(${previous.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ------------------- BACKGROUND ------------------- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            className="absolute inset-0 z-0"
            initial={{ scale: 0.7, filter: "blur(12px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{
              duration: 0.45,
              ease: [0.12, 0.9, 0.33, 1],
            }}
          >
            <img src={active.image} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/25" />
          </motion.div>
        </AnimatePresence>

        {/* ------------------- LEFT TEXT ------------------- */}
        <div
          className="absolute inset-0 z-10 flex items-center 
                      px-6 sm:px-10 md:px-16 bottom-10 md:mb-10"
        >
          <div className="max-[40vw] text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + "-text"}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 60 }}
                transition={{ duration: 0.6 }}
              >
                {active.subtitle && (
                  <div className="uppercase tracking-wide text-xs sm:text-sm opacity-80 mb-2">
                    {typedSubtitle}
                  </div>
                )}

                <h4 className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-tight">
                  {typedTitle}
                </h4>

                {active.description && (
                  <p className="mt-4 text-base sm:text-lg opacity-90 max-w-lg">
                    {typedDescription}
                  </p>
                )}

                {/* CTA BUTTONS */}
                <div className="mt-6 flex gap-4">
                  {/* Primary CTA */}
                  <button
                    className="px-4 py-2 sm:px-6 sm:py-3 rounded-full 
             bg-[#ff6b2c] text-white shadow-lg 
             hover:bg-[#fc9062] transition-all"
                  >
                    {active.cta1}
                  </button>

                  {/* Secondary CTA */}
                  <button
                    className="px-4 py-2 sm:px-6 sm:py-3 rounded-full  text-white 
             border border-white/40 backdrop-blur-md 
             hover:bg-white/10 transition-all"
                  >
                    {active.cta2}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ------------------- CARD RAIL ------------------- */}
        <div
          className="
          absolute bottom-8 sm:bottom-10 md:bottom-14 
          right-1/2 translate-x-1/2 md:translate-x-0 md:right-16 
          z-20
        "
        >
          <div
            className="
            overflow-hidden mx-auto
            w-[90vw] sm:w-[80vw] md:w-[50vw]
            max-w-[900px]
          "
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`rail-${index}`}
                className="flex gap-4 sm:gap-5 md:gap-6"
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -120 }}
                transition={{ duration: 0.5 }}
              >
                {rail.map((s, i) => (
                  <HeroCard key={s.id} slide={s} indexInRail={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ------------------- CONTROLS ------------------- */}
          <div className="mt-4 flex items-center gap-3 sm:gap-4 justify-center md:justify-start">
            {/* Previous */}
            <button
              onClick={() => setIndex((i) => (i - 1 + total) % total)}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                       border border-white/30 flex items-center justify-center 
                       backdrop-blur-md text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>

            {/* Progress bar */}
            <div className="h-2 w-40 sm:w-56 bg-white/15 rounded-full overflow-hidden">
              <motion.div
                key={`progress-${index}`}
                className="h-full bg-white/50"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: AUTO_ADVANCE_MS / 1000,
                  ease: "linear",
                }}
              />
            </div>

            {/* Next */}
            <button
              onClick={() => setIndex((i) => (i + 1) % total)}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                       border border-white/30 flex items-center justify-center 
                       backdrop-blur-md text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            {/* Pause / Play */}
            <button
              onClick={() => setIsPaused((p) => !p)}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full 
             border border-white/30 flex items-center justify-center 
             backdrop-blur-md text-white"
            >
              {isPaused ? (
                // Play icon
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5l12 7-12 7V5z" fill="currentColor" />
                </svg>
              ) : (
                // Pause icon
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
