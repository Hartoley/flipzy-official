"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FlipzyEmpowerSection() {
  return (
    <section className="relative w-full py-16 px-6">
      {/* WHITE OVERLAY (40% opacity) */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-7xl mx-auto text-white">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-1">
            Empower Your Daily
            <span className="text-flipzy-orange"> Banking Experience</span>
          </h2>
          <p className="text-[#1a1a1a] text-base md:text-lg max-w-2xl mx-auto">
            Every tool you need to manage your money effortlessly fast, secure,
            and beautifully simple.
          </p>
        </motion.div>

        {/* 3 FEATURE CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => {
            const delays = [0.1, 0.2, 0.3];
            const titles = [
              "Manage All Accounts in One Place",
              "Instant Transfers Worldwide",
              "Built-In Smart Insights",
            ];
            const descriptions = [
              "Flipzy connects all your bank accounts into a clean, unified dashboard. No switching app everything is already synced.",
              "Send and receive money instantly locally or international backed by global-grade security.",
              "Track spending, automate budgets, and get intelligent suggestions Flipzy helps you stay in control.",
            ];
            const images = [
              "../images/all-accounts.jpg",
              "../images/Global.jpg",
              "../images/All-in-one.jpg",
            ];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{
                  duration: 0.6,
                  delay: delays[i - 1],
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 shadow-xl cursor-pointer"
              >
                <motion.div
                  className="h-36 w-full rounded-xl mb-6 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={images[i - 1]}
                    className="w-full h-full object-cover rounded-2xl"
                    alt=""
                  />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{titles[i - 1]}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {descriptions[i - 1]}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 120,
          }}
          viewport={{ once: true }}
          className="mt-20 bg-[#0f0f0f] border border-white/10 rounded-3xl p-10 shadow-xl backdrop-blur-sm flex flex-col lg:flex-row justify-between items-start gap-8"
        >
          <div className="lg:w-2/3">
            <h3 className="text-3xl font-semibold mb-4">
              Flipzy gives you everything you need without complexity.
            </h3>
            <p className="text-white/60 max-w-xl">
              Fast onboarding, unified accounts, high-level security, and
              instant payments all wrapped in one powerful experience.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-flipzy-orange text-black font-semibold px-8 py-4 rounded-full transition-all"
          >
            Get Started →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
