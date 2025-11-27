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
  indexInRail?: number;
};

export default function HeroCard({ slide, indexInRail = 0 }: HeroCardProps) {
  return (
    <motion.div
      className="
        w-40 h-32              /* mobile size */
        sm:w-48 sm:h-36        /* small devices */
        md:w-56 md:h-40        /* tablets */
        lg:w-64 lg:h-48        /* laptop */
        xl:w-72 xl:h-56        /* large screens */
        rounded-2xl overflow-hidden shadow-xl relative bg-gray-800/30
      "
      initial={{ opacity: 0.0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.97 }}
      transition={{ duration: 0.45, delay: indexInRail * 0.05 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3 sm:p-4">
        <div className="text-white">
          {slide.subtitle && (
            <div className="text-[3px] sm:text-xs opacity-80 uppercase tracking-wider">
              {slide.subtitle}
            </div>
          )}

          {slide.title && (
            <div
              className="font-semibold 
                text-sm sm:text-base md:text-lg 
                leading-tight"
            >
              {slide.title}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
