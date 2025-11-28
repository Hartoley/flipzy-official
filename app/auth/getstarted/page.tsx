"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Image from "next/image";
import security from "../../../public/images/secutity1.jpg";
import logo from "../../../public/images/logo.jpg";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        const res = await axios.post("/api/login", {
          email: form.email,
          password: form.password,
        });
        console.log("Login success:", res.data);
      } else {
        if (form.password !== form.confirmPassword) {
          setError("Passwords do not match!");
          setLoading(false);
          return;
        }

        const res = await axios.post("/api/signup", {
          fullName: form.fullName,
          email: form.email,
          password: form.password,
        });
        console.log("Signup success:", res.data);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-flipzy-dark to-black px-4 py-12">
      <motion.div
        className="bg-[#0f0f0f] w-full max-w-4xl rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* LEFT INFO */}
        <div className="md:w-1/2 relative p-10 flex flex-col justify-center text-center md:text-left">
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0">
            <Image
              src={security}
              alt="Security Illustration"
              className="object-cover w-full h-full opacity-40 rounded-3xl"
              priority
              fill
            />
            <div className="absolute inset-0  rounded-3xl"></div>{" "}
            {/* optional color overlay */}
          </div>

          {/* TEXT CONTENT */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {isLogin ? "Welcome Back!" : "Join Flipzy Today!"}
          </motion.h2>

          <motion.p
            className="text-white/90 mb-6 text-sm md:text-base relative z-10"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isLogin
              ? "Sign in to access your accounts and manage your finances effortlessly."
              : "Sign up to start your journey with Flipzy and experience seamless banking."}
          </motion.p>

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="mt-auto bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition relative z-10"
          >
            {isLogin ? "Create Account" : "Already have an account?"}
          </button>
        </div>

        {/* RIGHT FORM */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <motion.h3
            className="text-2xl font-semibold text-white mb-6 text-center md:text-left"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </motion.h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <motion.input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-white/20 text-white px-4 py-3 rounded-xl focus:border-flipzy-orange outline-none transition"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                required
              />
            )}

            <motion.input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-white/20 text-white px-4 py-3 rounded-xl focus:border-flipzy-orange outline-none transition"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              required
            />

            <motion.input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-white/20 text-white px-4 py-3 rounded-xl focus:border-flipzy-orange outline-none transition"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              required
            />

            {!isLogin && (
              <motion.input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-white/20 text-white px-4 py-3 rounded-xl focus:border-flipzy-orange outline-none transition"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                required
              />
            )}

            {error && (
              <p className="text-red-500 text-sm mt-1 text-center md:text-left">
                {error}
              </p>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-flipzy-orange text-black font-semibold py-3 rounded-full mt-4 hover:bg-orange-500 transition disabled:opacity-60 disabled:cursor-not-allowed"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
            </motion.button>
          </form>

          <motion.p
            className="text-white/50 text-xs mt-4 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {isLogin
              ? "Forgot your password?"
              : "By signing up, you agree to our Terms & Privacy Policy."}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
