"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white py-12 px-6 relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0f0f0f] to-transparent pointer-events-none"></div>

      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* LOGO + DESCRIPTION */}
        <div className="flex flex-col space-y-4 md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-extrabold text-flipzy-orange tracking-wide">
            Flipzy
          </h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            Seamless global banking solutions that are fast, secure, and
            elegant. Manage your money effortlessly anywhere, anytime.
          </p>
          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-2">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-flipzy-orange transition"
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon className="text-white text-sm" />
                </motion.a>
              )
            )}
          </div>
        </div>

        {/* LINKS */}
        <div className="flex flex-col sm:flex-row gap-12 md:w-2/3 justify-between">
          {/* Company */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-white/90 uppercase text-sm tracking-wider">
              Company
            </h3>
            <a
              href="#"
              className="text-white/50 text-sm hover:text-flipzy-orange transition"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white/50 text-sm hover:text-flipzy-orange transition"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-white/50 text-sm hover:text-flipzy-orange transition"
            >
              Blog
            </a>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-white/90 uppercase text-sm tracking-wider">
              Support
            </h3>
            <a
              href="#"
              className="text-white/50 text-sm hover:text-flipzy-orange transition"
            >
              Help Center
            </a>
            <a
              href="#"
              className="text-white/50 text-sm hover:text-flipzy-orange transition"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="text-white/50 text-sm hover:text-flipzy-orange transition"
            >
              FAQ
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-white/90 uppercase text-sm tracking-wider">
              Legal
            </h3>
            <a
              href="#"
              className="text-white/50 text-sm hover:text-flipzy-orange transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/50 text-sm hover:text-flipzy-orange transition"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/50 text-sm hover:text-flipzy-orange transition"
            >
              Security
            </a>
          </div>
        </div>
      </motion.div>

      {/* BOTTOM COPYRIGHT */}
      <motion.div
        className="mt-12 border-t border-white/10 pt-6 text-center text-white/40 text-xs md:text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Flipzy. All rights reserved.
      </motion.div>
    </footer>
  );
}
