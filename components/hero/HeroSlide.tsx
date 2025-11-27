"use client";
import { motion } from "framer-motion";

export default function HeroSlide({ slide, active }: any) {
  return (
    <motion.div
      className="relative w-full h-full rounded-3xl overflow-hidden"
      animate={{
        scale: active ? 1 : 0.9,
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
          className="absolute inset-0 bg-black/40 flex items-center px-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl text-white"
          >
            <h1 className="text-5xl font-bold mb-3">{slide.title}</h1>
            <p className="text-lg mb-2">{slide.subtitle}</p>
            <span className="text-orange-400 font-medium">{slide.tagline}</span>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
