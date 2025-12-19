"use client";

import { useState, useEffect } from "react";
import OnboardingContainer from "../../components/OnboardingContainer";
import { motion, AnimatePresence } from "framer-motion";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [emailData, setEmailData] = useState(null); // { email, sessionId }
  const [identityData, setIdentityData] = useState(null); // { ninBvn, identity }

  useEffect(() => {
    const bvn = sessionStorage.getItem("bvnResult");

    if (bvn) {
      const parsed = JSON.parse(bvn);

      setIdentityData({
        ninBvn: parsed.bvn,
        identity: parsed,
      });

      setStep(3); // 👉 StepPassword
    }
  }, []);

  const handleEmailSuccess = (data) => {
    setEmailData(data);
    setStep(2);
  };

  const handleIdentitySuccess = (payload) => {
    setIdentityData(payload);
    setStep(3);
  };

  const handleCreateSuccess = (user) => {
    console.log("Account created:", user);
    // redirect to dashboard or show success
  };

  // Auto-change testimonials (your existing UI unchanged)
  const testimonials = [
    {
      id: 1,
      title: "I barely had to do anything",
      text: "The process was smooth and effortless.",
      author: "Catherine Johns",
      stars: 5,
    },
    {
      id: 2,
      title: "Super easy and fast",
      text: "My onboarding was quick and stress-free.",
      author: "Daniel Okoro",
      stars: 5,
    },
    {
      id: 3,
      title: "Reliable every step",
      text: "Clear instructions and smooth process.",
      author: "Fatima Bello",
      stars: 5,
    },
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const i = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      3000
    );
    return () => clearInterval(i);
  }, []);

  // Multi-step transitions
  const stepMotion = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.35 },
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col md:flex-row bg-[#E8ECF3]">
        {/* LEFT PANEL (unchanged) */}
        <div className="w-full md:w-2/5 bg-[#0F1115] text-white px-8 py-8 rounded-r-3xl flex flex-col justify-between shadow-xl">
          <div className="text-xl font-bold text-[#cc5400] flex gap-1 items-center ">
            <img src="../images/logo.png" className="w-14" alt="" />
            <span>FLIPZY</span>
          </div>

          <div className="flex-1 flex flex-col justify-center mt-6">
            <h1 className="text-3xl font-bold leading-tight">
              Let’s set up your
              <br />
              Flipzy Account
            </h1>
            <p className="mt-3 text-gray-300 text-sm">
              Fast Nigerian digital banking secure, simple & verified.
            </p>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].id}
                {...stepMotion}
                className="bg-[#cc5400] p-5 rounded-xl shadow-lg"
              >
                <h3 className="font-semibold">{testimonials[index].title}</h3>
                <p className="text-sm mt-1">{testimonials[index].text}</p>
                <p className="text-xs mt-2">{testimonials[index].author}</p>
                <p className="text-yellow-400 text-sm">
                  {"★★★★★".slice(0, testimonials[index].stars)}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-1 mt-4">
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

        {/* RIGHT PANEL (New Multi-Step Flow) */}
        <OnboardingContainer />
      </div>
    </>
  );
}
