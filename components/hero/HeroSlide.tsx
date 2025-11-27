"use client";
import React from "react";
import { motion } from "framer-motion";

type Slide = {
  id: string | number;
  image: string;
  title?: string;
  subtitle?: string;
  description?: string;
  tagline?: string;
  cta1?: string;
  cta2?: string;
};

export default function HeroSlide({
  slide,
  active,
  className,
}: {
  slide: Slide;
  active?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative w-full h-full rounded-3xl overflow-hidden ${
        className ?? ""
      }`}
      animate={{
        scale: active ? 1 : 0.96,
        opacity: active ? 1 : 0.6,
      }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      {active && (
        <motion.div
          className="absolute inset-0 bg-black/40 flex items-center px-8 md:px-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-white"
          >
            {slide.title && (
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                {slide.title}
              </h1>
            )}
            {slide.subtitle && <p className="text-lg mb-2">{slide.subtitle}</p>}
            {slide.tagline && (
              <span className="text-orange-400 font-medium">
                {slide.tagline}
              </span>
            )}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
