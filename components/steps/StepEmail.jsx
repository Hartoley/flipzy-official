// src/components/steps/StepEmail.jsx
import React, { useState } from "react";
import { sendEmailOtp, verifyEmailOtp } from "@/lib/api";
import { validEmail, validOtp } from "@/lib/validators";
import { v4 as uuidv4 } from "uuid"; // For generating sessionId

export default function StepEmail({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [sessionId, setSessionId] = useState(null);

  const canSend = validEmail(email);
  const canVerify = validOtp(otp);

  // Send OTP to email
  const handleSendOtp = async () => {
    if (!canSend) return;
    setLoading(true);
    setErr(null);

    const newSessionId = uuidv4(); // generate a unique session ID

    try {
      const res = await sendEmailOtp({ email, sessionId: newSessionId });
      setLoading(false);

      if (!res.ok) return setErr(res.error || "Failed to send OTP");

      setSessionId(newSessionId); // save sessionId for verification
      setSent(true);
    } catch (e) {
      setLoading(false);
      setErr("Network error");
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    if (!canVerify) return;
    setLoading(true);
    setErr(null);

    try {
      const res = await verifyEmailOtp({ email, otp, sessionId });
      setLoading(false);

      if (!res.ok) return setErr(res.error || "Invalid OTP");

      // ✅ Save email and sessionId in sessionStorage for the next step
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("emailSessionId", sessionId);

      onSuccess({ email, sessionId });
    } catch (e) {
      setLoading(false);
      setErr("Network error");
    }
  };

  return (
    <div className="space-y-4">
      {/* Email input */}
      {!sent && (
        <div>
          <label className="text-sm font-medium mb-1 block">Enter Email</label>
          <input
            type="email"
            value={email}
            placeholder="example@mail.com"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>
      )}

      {/* OTP input */}
      {sent && (
        <div>
          <label className="text-sm font-medium mb-1 block">Enter OTP</label>
          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="6-digit code"
            className="w-full border rounded-lg p-3"
          />
          <p className="text-xs text-gray-500 mt-2">
            OTP sent to <span className="font-medium">{email}</span>
          </p>
        </div>
      )}

      {/* Error message */}
      {/* {err && <p className="text-sm text-red-500">{err}</p>} */}

      {/* Submit buttons */}
      {!sent ? (
        <button
          disabled={!canSend || loading}
          onClick={handleSendOtp}
          className={`w-full py-3 rounded-lg font-semibold ${
            !canSend || loading
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-[#cc5400] text-white"
          }`}
        >
          {loading ? "Sending..." : "Send OTP"}
        </button>
      ) : (
        <button
          disabled={!canVerify || loading}
          onClick={handleVerifyOtp}
          className={`w-full py-3 rounded-lg font-semibold ${
            !canVerify || loading
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-[#cc5400] text-white"
          }`}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      )}
    </div>
  );
}
