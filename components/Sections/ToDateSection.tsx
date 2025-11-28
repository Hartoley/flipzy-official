"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Simultaneous And Fast Operation",
    desc: "Execute multiple banking operations simultaneously with low latency and high reliability.",
    illustration: function Svg1() {
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
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              opacity="0.9"
            />
            <circle
              cx="28"
              cy="20"
              r="6"
              stroke="#C084FC"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="36"
              cy="20"
              r="4"
              stroke="#E9D5FF"
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
    desc: "Link multiple bank accounts, cards and external services into a single dashboard.",
    illustration: function Svg2() {
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
            stroke="#7C3AED"
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
    desc: "Your data is protected with advanced encryption layers and secure key management.",
    illustration: function Svg3() {
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
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
            />
            <rect
              x="12"
              y="28"
              width="24"
              height="18"
              rx="3"
              stroke="#7C3AED"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="24" cy="37" r="3" fill="#7C3AED" />
          </g>
        </svg>
      );
    },
  },
  {
    title: "Comprehensive Electronic Banking Services",
    desc: "A full set of electronic services from payments to lending and analytics.",
    illustration: function Svg4() {
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
            stroke="#8B5CF6"
            strokeWidth="2"
            fill="none"
          >
            <path d="M0 0H32" stroke="#7C3AED" />
            <path d="M0 10H24" stroke="#C084FC" />
            <path d="M0 20H16" stroke="#E9D5FF" />
            <circle cx="40" cy="8" r="6" fill="#E9D5FF" />
          </g>
        </svg>
      );
    },
  },
];

const cards = [
  {
    title: "Types Of Business And Personal Accounts",
    desc: "Easily open any type of account — personal or business — with global services and automatic updates.",
    imgAlt: "account-types-illustration",
  },
  {
    title: "Opening Of Essential Bank Account",
    desc: "Open an account online in a secure, fast, and simple way with two clicks.",
    imgAlt: "open-account-illustration",
  },
  {
    title: "Information And Data Access",
    desc: "See and manage detailed account information quickly and without friction.",
    imgAlt: "data-access-illustration",
  },
];

export default function ToDareSection() {
  return (
    <section className="w-full bg-flipzy-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP CARD */}
        <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-10 mb-20 shadow-xl">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            {/* LEFT TEXT */}
            <div className="lg:w-1/2 space-y-6">
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
            </div>

            {/* RIGHT FEATURES */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-6 lg:w-1/2">
              {[
                "Simultaneous and Fast Operation",
                "Can Be Connected to All Accounts",
                "Strong and Advanced Encryption",
                "Comprehensive Electronic Banking Services",
              ].map((label, i) => (
                <div
                  key={i}
                  className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 text-center hover:bg-[#222] transition shadow-lg"
                >
                  <div className="h-20 w-full flex items-center justify-center opacity-60">
                    [ICON]
                  </div>
                  <p className="text-sm text-white/70 mt-4">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TITLE */}
        <h3 className="text-3xl font-semibold mb-10">
          Up-To-Date and Fast Banking <br /> Services in One Place
        </h3>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden">
          <div
            className="flex animate-slide gap-6"
            style={{ width: "calc(350px * 6)" }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="min-w-[350px] bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition duration-300"
              >
                <div className="h-32 w-full bg-[#1a1a1a] rounded-xl mb-6 opacity-60">
                  [IMAGE]
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  Flipzy Feature {i + 1}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Description for this Flipzy feature. Replace with real copy
                  later.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
