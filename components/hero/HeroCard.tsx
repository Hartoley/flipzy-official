"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroCard({
  slide,
  indexInRail,
}: {
  slide: any;
  indexInRail?: number;
}) {
  return (
    <motion.div
      className="w-[220px] sm:w-[260px] md:w-[280px] lg:w-[320px] h-[160px] sm:h-[200px] md:h-[220px] rounded-xl overflow-hidden shadow-lg relative"
      initial={{ scale: 0.98, opacity: 0.85 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.45, delay: (indexInRail ?? 0) * 0.03 }}
    >
      <img
        src={slide.image}
        className="w-full h-full object-cover"
        alt={slide.title || ""}
      />
      <div className="absolute left-3 bottom-3 text-white drop-shadow">
        <div className="font-semibold">{slide.title}</div>
      </div>
    </motion.div>
  );
}
