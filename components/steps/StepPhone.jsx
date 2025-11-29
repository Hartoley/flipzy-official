// src/components/steps/StepPhone.jsx
import React, { useState } from "react";
import { sendOtp } from "@/lib/api";
import { validPhone } from "@/lib/validators";

export default function StepPhone({ onSuccess }) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const phoneValid = validPhone(phone);

  const handleSend = async () => {
    if (!phoneValid) return;
    setLoading(true);
    setErr(null);
    try {
      const res = await sendOtp(phone);
      setLoading(false);
      if (!res.ok) return setErr(res.error || "Unable to send OTP");
      // pass session info (e.g., sessionId) to parent
      onSuccess({ phone, sessionId: res.data?.sessionId });
    } catch (e) {
      setLoading(false);
      setErr("Network error");
    }
  };

  return (
    <div className="space-y-4">
      <label className="text-sm font-medium">Phone number</label>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="e.g. +234 803 000 0000 or 08030000000"
        className="w-full border rounded-lg p-3"
      />

      {/* {err && <p className="text-sm text-red-500">{err}</p>} */}

      <button
        onClick={handleSend}
        disabled={!phoneValid || loading}
        className={`w-full py-3 rounded-lg font-semibold ${
          !phoneValid || loading
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-[#cc5400] text-white"
        }`}
      >
        {loading ? "Sending OTP..." : "Send OTP"}
      </button>
    </div>
  );
}
