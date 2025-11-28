import React from "react";
import { motion } from "framer-motion";

export default function FlipzySection() {
  return (
    <section className="w-full bg-[#0B0B0F] text-white py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Forget Banking Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          {/* LEFT SIDE — Heading */}
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
            Forget About
            <br />
            <span className="text-[#ff6a00] font-bold">Old Banking</span>
          </h2>

          {/* RIGHT SIDE — Description + Button */}
          <div className="text-left md:max-w-sm">
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Banking made simple: open your account in 10 minutes. Fast,
              transparent, and instant just the way it should be.
            </p>

            <button className="bg-gradient-to-r from-[#ff6a00] to-[#ff8800] text-white px-4 py-1 rounded-full font-normal shadow-md hover:opacity-90 transition-all">
              Open an Account
            </button>
          </div>
        </motion.div>

        {/* 3 Card Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-white text-black p-6 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-2">
              Open an account online in{" "}
              <span className="text-[#ff6a00]">10 minutes</span>
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Banking made simple: open your account in 10 minutes.
            </p>
            <div className="w-full h-52 bg-gray-200 rounded-xl"></div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-white text-black p-6 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-2">Instant transactions</h3>
            <p className="text-sm text-gray-700 mb-4">
              Banking made simple: open your account in 10 minutes.
            </p>
            <div className="w-full h-52 bg-gray-200 rounded-xl"></div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl bg-white text-black p-6 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-2">Transparent pricing</h3>
            <p className="text-sm text-gray-700 mb-4">
              Banking made simple: open your account in 10 minutes.
            </p>
            <div className="w-full h-52 bg-gray-200 rounded-xl"></div>
          </motion.div>
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 rounded-3xl bg-white text-black p-8 shadow-xl"
        >
          {/* TOP SECTION */}
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
            <h3 className="text-xl font-semibold leading-snug">
              Why thousands <br /> of clients trust us
            </h3>

            <p className="text-gray-600 text-sm max-w-xs">
              Because we turn banking into a safe, fast, and effortless
              experience.
            </p>
          </div>

          {/* BOTTOM CARDS */}
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {/* LEFT ORANGE CARD */}
            <div className="rounded-xl p-6 bg-[#ff6a00] text-white font-semibold text-base leading-snug flex flex-col justify-center">
              Transfers in Nigeria <br /> and worldwide
              <p className="text-xs font-normal mt-2 opacity-80">
                Send money to loved ones or partners anywhere, hassle-free
              </p>
            </div>

            {/* MIDDLE BLACK CARD */}
            <div className="rounded-xl p-6 bg-black text-white flex flex-col justify-center items-center">
              <span className="text-2xl font-bold">+1M</span>
              <p className="text-gray-400 text-xs mt-1">
                Successful transactions daily
              </p>
            </div>

            {/* RIGHT LIGHT CARD */}
            <div className="rounded-xl p-6 bg-gradient-to-b from-gray-100 to-white flex flex-col justify-center text-center">
              <span className="text-2xl font-bold text-black">95%</span>
              <p className="text-gray-600 text-xs mt-1">Clients recommend us</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
