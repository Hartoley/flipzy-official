"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FlipzyEmpowerSection() {
  return (
    <section className="w-full bg-flipzy-dark text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Empower Your Daily
            <span className="text-flipzy-orange"> Banking Experience</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Every tool you need to manage your money effortlessly — fast,
            secure, and beautifully simple.
          </p>
        </motion.div>

        {/* 3 FEATURE CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-24 w-full bg-[#1a1a1a] rounded-xl mb-6 opacity-60"></div>

            <h3 className="text-xl font-semibold mb-3">
              Manage All Accounts in One Place
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Flipzy connects all your bank accounts into a clean, unified
              dashboard. No switching app everything is already synced.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-24 w-full bg-gradient-to-br from-flipzy-orange to-orange-700 rounded-xl mb-6 opacity-80"></div>

            <h3 className="text-xl font-semibold mb-3">
              Instant Transfers Worldwide
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Send and receive money instantly — locally or international —
              backed by global-grade security.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-24 w-full bg-[#1a1a1a] rounded-xl mb-6 opacity-60"></div>

            <h3 className="text-xl font-semibold mb-3">
              Built-In Smart Insights
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Track spending, automate budgets, and get intelligent suggestions
              — Flipzy helps you stay in control.
            </p>
          </motion.div>
        </div>

        {/* BOTTOM CTA BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#0f0f0f] border border-white/10 rounded-3xl p-10 shadow-xl backdrop-blur-sm"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="lg:w-2/3">
              <h3 className="text-3xl font-semibold mb-4">
                Flipzy gives you everything you need — without complexity.
              </h3>
              <p className="text-white/60 max-w-xl">
                Fast onboarding, unified accounts, high-level security, and
                instant payments all wrapped in one powerful experience.
              </p>
            </div>

            <button className="bg-flipzy-orange text-black font-semibold px-8 py-4 rounded-full hover:bg-white transition">
              Get Started →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
