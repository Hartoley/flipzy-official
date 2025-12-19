"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useToast } from "@/components/toast/ToastContext";
import { loginAccount } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleLogin = async () => {
    if (!email || !password) {
      showToast({
        type: "error",
        title: "Validation Error",
        message: "Please enter email and password",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await loginAccount({ email, password });

      if (!res.ok) {
        showToast({
          type: "error",
          title: "Login Failed",
          message: res.error || "Invalid credentials",
        });
        return;
      }

      // Destructure directly from res (JS, no types)
      const { userId, token, fullName } = res;

      // ✅ Success toast
      showToast({
        type: "success",
        title: "Login Successful",
        message: `Welcome back, ${fullName}`,
      });

      // Save session
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      showToast({
        type: "error",
        title: "Error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020a14] flex items-center justify-center px-4">
      {/* Outer Card */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border-2 border-white">
        {/* LEFT – Showcase */}
        <div
          style={{
            clipPath: "polygon(0 0, 92% 0, 100% 100%, 0% 100%)",
          }}
          className="relative hidden md:flex items-center justify-center "
        >
          <Image
            src="/images/background1.jpg" // replace with banking-related image
            alt="Flipzy Banking"
            fill
            className="object-cover opacity-90"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 text-white p-8 max-w-xs">
            <h2 className="text-2xl font-semibold mb-2">Secure Banking</h2>
            <p className="text-sm text-gray-200 mb-4">
              Access your Flipzy account, check balances, transfer funds, and
              manage your finances with ease.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center font-bold">
                F
              </div>
              <div>
                <p className="text-sm font-semibold">Flipzy</p>
                <p className="text-xs text-gray-300">Smart Banking App</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT – Login */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            Welcome Back to Flipzy
          </h1>
          <p className="text-gray-500 mb-8">
            Sign in to manage your account securely
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-2 relative">
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:outline-none pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[38px] text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <button
              onClick={() => router.push("/forgot-password")}
              className="text-sm text-orange-600 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Signup */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <button
              onClick={() => router.push("/onboarding")}
              className="text-orange-600 font-semibold hover:underline"
            >
              Create Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
