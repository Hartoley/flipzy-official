"use client";

import React from "react";
import { motion } from "framer-motion";

interface SvgProps {
  color?: string;
}

const features = [
  {
    title: "Simultaneous And Fast Operation",
    color: "#F97316",
    desc: "Execute multiple banking operations simultaneously with low latency and high reliability.",
    illustration: function Svg1({ color }: SvgProps) {
      return (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="0" width="80" height="80" rx="14" fill="#F3F3F6" />
          <g transform="translate(8,12)">
            <circle
              cx="20"
              cy="20"
              r="10"
              stroke={color}
              strokeWidth="2"
              fill="none"
              opacity="0.9"
            />
            <circle
              cx="28"
              cy="20"
              r="6"
              stroke={color}
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="36"
              cy="20"
              r="4"
              stroke={color}
              strokeWidth="2"
              fill="none"
            />
          </g>
        </svg>
      );
    },
  },
  {
    title: "Can Be Connected To All Accounts",
    color: "#F97316",
    desc: "Link multiple bank accounts, cards and external services into a single dashboard.",
    illustration: function Svg2({ color }: SvgProps) {
      return (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="0" width="80" height="80" rx="14" fill="#F3F3F6" />
          <g
            transform="translate(12,18)"
            stroke={color}
            strokeWidth="2"
            fill="none"
          >
            <rect
              x="0"
              y="0"
              width="56"
              height="16"
              rx="8"
              strokeDasharray="2 4"
            />
            <rect x="0" y="22" width="36" height="12" rx="6" />
            <circle cx="44" cy="28" r="4" fill="#FDE68A" stroke="none" />
          </g>
        </svg>
      );
    },
  },
  {
    title: "Strong And Advanced Encryption",
    color: "#F97316",
    desc: "Your data is protected with advanced encryption layers and secure key management.",
    illustration: function Svg3({ color }: SvgProps) {
      return (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="0" width="80" height="80" rx="14" fill="#F3F3F6" />
          <g transform="translate(8,12)">
            <path
              d="M24 6C17 6 11 12 11 19V26"
              stroke={color}
              strokeWidth="2"
              fill="none"
            />
            <rect
              x="12"
              y="28"
              width="24"
              height="18"
              rx="3"
              stroke={color}
              strokeWidth="2"
              fill="none"
            />
            <circle cx="24" cy="37" r="3" fill={color} />
          </g>
        </svg>
      );
    },
  },
  {
    title: "Comprehensive Electronic Banking Services",
    color: "#F97316",
    desc: "A full set of electronic services from payments to lending and analytics.",
    illustration: function Svg4({ color }: SvgProps) {
      return (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="0" width="80" height="80" rx="14" fill="#F3F3F6" />
          <g
            transform="translate(12,16)"
            stroke={color}
            strokeWidth="2"
            fill="none"
          >
            <path d="M0 0H32" />
            <path d="M0 10H24" />
            <path d="M0 20H16" />
            <circle cx="40" cy="8" r="6" fill={color} />
          </g>
        </svg>
      );
    },
  },
];

export default function ToDareSection() {
  return (
    <section className="w-full bg-flipzy-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-10 mb-20 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="text-4xl font-semibold leading-tight">
                We Tried To Provide You <br /> With All Global Banking Services
              </h2>
              <p className="text-white/70 leading-relaxed">
                We made every effort to ensure you have access to seamless
                global banking services. Flipzy gives you modern, fast banking
                designed for everyone.
              </p>
              <button className="px-6 py-3 rounded-full bg-flipzy-orange text-black font-semibold hover:bg-white transition">
                Explore More →
              </button>
            </motion.div>

            {/* RIGHT FEATURES */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-6 lg:w-1/2"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 text-center hover:bg-[#222] transition shadow-lg"
                >
                  <div className="h-20 w-full flex items-center justify-center opacity-60">
                    <feature.illustration color={feature.color} />
                  </div>
                  <p className="text-sm text-white/70 mt-4">{feature.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold mb-10"
        >
          Up-To-Date and Fast Banking <br /> Services in One Place
        </motion.h3>

        {/* CAROUSEL */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            {[...features, ...features].map((feature, i) => (
              <div
                key={i}
                className="max-w-[25vw] bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 shadow-xl flex-shrink-0"
              >
                <div className="h-32 w-full flex items-center justify-center bg-[#1a1a1a] rounded-xl mb-6 opacity-60">
                  <feature.illustration color={feature.color} />
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
