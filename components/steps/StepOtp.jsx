// src/components/steps/StepOtp.jsx
import React, { useState } from "react";
import { verifyOtp } from "@/lib/api";
import { validOtp } from "@/lib/validators";

export default function StepOtp({ phone, sessionId, onSuccess, onBack }) {
  const [otp, setOtp] = useState("");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const ok = validOtp(otp);

  const handleVerify = async () => {
    if (!ok) return;
    setLoading(true);
    setErr(null);
    try {
      const res = await verifyOtp({ phone, otp, sessionId });
      setLoading(false);
      if (!res.ok) return setErr(res.error || "OTP verification failed");
      onSuccess();
    } catch (e) {
      setLoading(false);
      setErr("Network error");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <button className="text-sm text-gray-600" onClick={onBack}>
          ← Change phone
        </button>
        <span className="text-sm text-gray-500">{phone}</span>
      </div>

      <label className="text-sm font-medium">Enter OTP</label>
      <input
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="6-digit code"
        className="w-full border rounded-lg p-3"
      />

      {err && <p className="text-sm text-red-500">{err}</p>}

      <button
        disabled={!ok || loading}
        onClick={handleVerify}
        className={`w-full py-3 rounded-lg font-semibold ${
          !ok || loading
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-[#cc5400] text-white"
        }`}
      >
        {loading ? "Verifying..." : "Verify OTP"}
      </button>
    </div>
  );
}
