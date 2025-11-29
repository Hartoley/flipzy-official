"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    title: "I barely had to do anything",
    text: "The experience was smooth. Everything was handled perfectly and I barely had to lift a finger. Highly recommended!",
    author: "Catherine Johns",
    stars: 5,
  },
  {
    id: 2,
    title: "Super easy and fast",
    text: "My onboarding was quick and stress-free. Flipzy made everything effortless.",
    author: "Daniel Okoro",
    stars: 5,
  },
  {
    id: 3,
    title: "Reliable every step",
    text: "Clear instructions, Nigerian support, and a smooth process from start to finish.",
    author: "Fatima Bello",
    stars: 5,
  },
];

const nigeriaStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "FCT",
];

export default function FlipzyOnboardingPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const auto = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      3500
    );
    return () => clearInterval(auto);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-[#E8ECF3]">
      {/* LEFT DARK PANEL */}
      <div className="w-full md:w-2/5 bg-[#0F1115] text-white flex flex-col justify-between px-8 py-3 md:py-14 rounded-r-3xl shadow-xl">
        {/* Logo */}
        <div className="text-xl font-bold text-[#cc5400] tracking-wide">
          FLIPZY
        </div>

        {/* Heading + Text */}
        <div className="flex-1 flex flex-col justify-center max-w-xs mt-2 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Let’s set up
            <br />
            your Flipzy
            <br />
            Account
          </h1>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Open your Flipzy digital bank account in minutes. 100% Nigerian,
            secure, and simple.
          </p>
        </div>

        {/* Testimonial */}
        <div className="mt-2">
          <div className="relative h-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="bg-[#cc5400] p-5 rounded-xl shadow-lg"
              >
                <h3 className="font-semibold text-base">
                  {testimonials[index].title}
                </h3>
                <p className="text-sm mt-1 opacity-80">
                  {testimonials[index].text}
                </p>
                <p className="text-xs mt-2 font-medium">
                  {testimonials[index].author}
                </p>
                <p className="text-yellow-400 text-sm">
                  {"★★★★★".slice(0, testimonials[index].stars)}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex gap-1 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full ${
                  index === i ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT WHITE PANEL */}
      <div className="w-full md:w-3/5 bg-white flex flex-col items-center justify-center">
        <div className="w-full max-w-md h-auto md:h-[90vh] md:border-1 rounded-3xl p-10 justify-evenly">
          <h2 className="text-2xl font-semibold text-center text-[#0F1115] mb-6">
            Let’s get started
          </h2>

          {/* FORM */}
          <form className="space-y-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="border rounded-lg p-3 text-sm focus:ring-2 focus:ring-black/20 outline-none"
                placeholder="First name"
              />
              <input
                className="border rounded-lg p-3 text-sm focus:ring-2 focus:ring-black/20 outline-none"
                placeholder="Last name"
              />
            </div>

            <input
              type="email"
              className="border rounded-lg p-3 w-full text-sm focus:ring-2 focus:ring-black/20 outline-none"
              placeholder="Email address"
            />

            <select className="border rounded-lg p-3 w-full text-sm focus:ring-2 focus:ring-black/20 outline-none">
              <option>Select State of Residence</option>
              {nigeriaStates.map((state) => (
                <option key={state}>{state}</option>
              ))}
            </select>

            <div className="w-full flex flex-col gap-4 justify-between">
              <input
                className="border rounded-lg p-3 text-sm focus:ring-2 focus:ring-black/20 outline-none"
                placeholder="+234 813 000 0000"
              />

              <input
                type="password"
                className="border rounded-lg p-3 text-sm focus:ring-2 focus:ring-black/20 outline-none"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#cc5400] text-white py-3 rounded-lg font-semibold mt-2 hover:bg-black transition"
            >
              GET STARTED →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
