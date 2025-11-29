"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    title: "I barely had to do anything",
    text: "The experience was smooth. Everything was handled perfectly, and I barely had to lift a finger. Highly recommended!",
    author: "Catherine Johns",
    stars: 5,
  },
  {
    id: 2,
    title: "Super easy and fast",
    text: "My setup was done in no time. Flipzy made the whole process effortless.",
    author: "Daniel Okoro",
    stars: 5,
  },
  {
    id: 3,
    title: "Reliable every step",
    text: "Clear instructions and quick support. I loved how seamless it all felt.",
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
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      {/* LEFT DARK PANEL */}
      <div className="w-full md:w-2/5 bg-[#0F1115] text-white flex flex-col justify-between px-6 py-4 md:py-6 h-auto md:h-screen">
        {/* Logo */}
        <div className="text-2xl font-bold mb-2 md:mb-4">FLIPZY</div>

        {/* Heading */}
        <div className="flex-1 md:flex-shrink md:flex md:flex-col md:justify-center">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug md:leading-tight">
            Let’s setup
            <br />
            your Operating
            <br />
            Agreement
          </h1>
          <p className="mt-2 text-gray-300 text-xs md:text-sm max-w-xs">
            All-in-one solution for your business formation. Start from scratch
            or onboard your existing company with ease.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="mt-4 md:mt-6 flex-shrink-0">
          <div className="relative h-28 md:h-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="bg-[#1A1C20] rounded-xl p-3 md:p-4 shadow"
              >
                <h3 className="font-semibold text-sm md:text-base">
                  {testimonials[index].title}
                </h3>
                <p className="text-xs md:text-sm mt-1 opacity-80">
                  {testimonials[index].text}
                </p>
                <p className="text-[10px] md:text-xs mt-1 font-medium">
                  {testimonials[index].author}
                </p>
                <p className="text-yellow-400 text-xs md:text-sm">
                  {"★★★★★".slice(0, testimonials[index].stars)}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-1 mt-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === i ? "bg-white w-3" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT LIGHT PANEL */}
      <div className="w-full md:w-3/5 bg-white flex flex-col items-center justify-center p-4 md:p-6 h-auto md:h-screen">
        <div className="w-full max-w-md h-full flex flex-col justify-center">
          <h2 className="text-lg md:text-xl font-semibold text-[#0F1115] mb-4 text-center">
            Let’s get started
          </h2>
          <form className="space-y-2 md:space-y-3 flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <input
                className="input p-2 md:p-3 rounded border"
                placeholder="First name"
              />
              <input
                className="input p-2 md:p-3 rounded border"
                placeholder="Last name"
              />
            </div>
            <input
              type="email"
              className="input p-2 md:p-3 rounded border"
              placeholder="Email"
            />
            <select className="input p-2 md:p-3 rounded border w-full">
              {nigeriaStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <input
              className="input p-2 md:p-3 rounded border"
              placeholder="+234 813 000 0000"
            />
            <input
              type="password"
              className="input p-2 md:p-3 rounded border"
              placeholder="Password"
            />

            <button
              type="submit"
              className="w-full bg-[#0F1115] text-white py-2 md:py-3 rounded font-semibold hover:bg-black transition"
            >
              GET STARTED →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
