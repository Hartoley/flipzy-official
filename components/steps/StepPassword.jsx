// src/components/steps/StepPassword.jsx
import React, { useState, useEffect } from "react";
import { createAccount } from "@/lib/api";
import { validEmail, validPassword } from "@/lib/validators";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/toast/ToastContext";

export default function StepPassword({ prefill, onSuccess, onBack }) {
  // prefill: { phone, identity: { firstName, lastName, dob }, ninBvn, sessionId }
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const { showToast } = useToast();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const emailOk = validEmail(email);
  const pwOk = validPassword(password);
  const [identity, setIdentity] = useState({});

  // On mount, fetch BVN/NIN data from sessionStorage
  useEffect(() => {
    const savedEmail = sessionStorage.getItem("email");
    const savedPassword = sessionStorage.getItem("password"); // optional if user typed it before

    if (savedEmail) setEmail(savedEmail);
    if (savedPassword) setPassword(savedPassword);

    // also fetch BVN/NIN if already saved
    const bvnResult = sessionStorage.getItem("bvnResult");
    if (bvnResult) {
      const parsed = JSON.parse(bvnResult);
      setIdentity({
        firstName: parsed.first_name,
        lastName: parsed.last_name,
        dob: parsed.dob || "",
        bvn: parsed.bvn,
      });
    }
  }, []);

  const handleCreate = async () => {
    if (!validEmail(email) || !validPassword(password)) return;

    setLoading(true);
    setErr(null);

    try {
      const payload = {
        phone,
        ninBvn: identity.bvn,
        firstName: identity.firstName,
        lastName: identity.lastName,
        dob: identity.dob,
        email,
        password,
      };

      const res = await createAccount(payload);
      setLoading(false);

      if (!res.ok) {
        showToast({
          type: "error",
          title: "Account creation failed",
          message: res.error || "Please try again",
        });
        return;
      }

      // ✅ Clear temporary BVN/NIN data
      sessionStorage.removeItem("bvnResult");

      // ✅ Store session data
      sessionStorage.setItem("email", email);
      // sessionStorage.setItem("password", password);
      sessionStorage.setItem("token", res.token);
      sessionStorage.setItem("userId", res.userId);

      // 🔔 SUCCESS TOAST (HERE 👇)
      showToast({
        type: "success",
        title: "Account created successfully 🎉",
        message: "Welcome to Flipzy. Redirecting to dashboard...",
        duration: 2500,
      });

      // Call success callback
      onSuccess({
        userId: res.userId,
        token: res.token,
      });

      // ⏳ Small delay so user sees toast
      setTimeout(() => {
        router.push("/dashboard");
      }, 2500);
    } catch (e) {
      console.error(e);
      setLoading(false);

      showToast({
        type: "error",
        title: "Network error",
        message: "Please check your connection and try again",
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-sm">
        <div>
          <strong>
            {prefill.identity?.firstName} {prefill.identity?.lastName}
          </strong>
        </div>
        <div className="text-xs text-gray-500">
          DOB: {prefill.identity?.dob}
        </div>
      </div>

      <label className="text-sm font-medium">Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-lg p-3"
        placeholder="you@example.com"
      />

      <label className="text-sm font-medium">Phone number</label>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="e.g. +234 803 000 0000 or 08030000000"
        className="w-full border rounded-lg p-3"
      />

      <label className="text-sm font-medium">Password</label>
      <div className="relative">
        <input
          type={passwordVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg p-3"
          placeholder="Min 8 chars, letters & numbers"
        />
        <button
          onClick={() => setPasswordVisible((s) => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          {passwordVisible ? <EyeOff /> : <Eye />}
        </button>
      </div>

      {/* {err && <p className="text-sm text-red-500">{err}</p>} */}

      <div className="flex gap-2">
        <button className="flex-1 py-2 rounded-lg border" onClick={onBack}>
          Back
        </button>
        <button
          onClick={handleCreate}
          disabled={!emailOk || !pwOk || loading}
          className={`flex-1 py-2 rounded-lg font-semibold ${
            !emailOk || !pwOk || loading
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-[#cc5400] text-white"
          }`}
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>
      </div>
    </div>
  );
}
