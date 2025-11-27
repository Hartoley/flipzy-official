// HeroCard.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

type HeroCardProps = {
  slide: {
    id: string | number;
    image: string;
    title?: string;
    subtitle?: string;
  };
  indexInRail?: number; // 0..3
};

export default function HeroCard({ slide, indexInRail = 0 }: HeroCardProps) {
  return (
    <motion.div
      className="w-56 md:w-64 lg:w-72 h-40 md:h-48 lg:h-56 rounded-2xl overflow-hidden shadow-xl relative bg-gray-800/30"
      initial={{ opacity: 0.0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.45, delay: indexInRail * 0.05 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
        <div className="text-white">
          {slide.subtitle && (
            <div className="text-xs opacity-80 uppercase tracking-widest">
              {slide.subtitle}
            </div>
          )}
          {slide.title && (
            <div className="font-bold text-lg leading-tight">{slide.title}</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
