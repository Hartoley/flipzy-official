"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OnboardingContainer from "../../onboarding/page";
import { Eye, EyeOff } from "lucide-react";

export default function FlipzyOnboardingPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [ninBvn, setNinBvn] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

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

  return <OnboardingContainer />;
}
