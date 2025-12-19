// src/components/steps/StepIdentity.jsx
import React, { useState } from "react";
import { initiateBVN, verifyNIN } from "@/lib/api";
import { validBvnOrNin } from "@/lib/validators";

export default function StepIdentity({ phone, onSuccess, onBack }) {
  const [mode, setMode] = useState("bvn"); // "bvn" or "nin"
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const ok = validBvnOrNin(value);

  async function handleVerify() {
    if (!ok) return;

    setLoading(true);
    setErr(null);

    try {
      // ✅ BVN MUST REDIRECT
      if (mode === "bvn") {
        const res = await initiateBVN({
          phone,
          bvn: value,
          firstname: "Test",
          lastname: "User",
        });

        if (!res.ok) {
          setLoading(false);
          return setErr(res.error || "BVN initiation failed");
        }

        const redirectUrl =
          res.data?.meta?.authorization?.redirect ||
          res.data?.data?.redirect_url;

        if (!redirectUrl) {
          setLoading(false);
          return setErr("Unable to get redirect URL");
        }

        window.location.href = redirectUrl;
        return;
      }

      // ✅ NIN is still one-step
      const res = await verifyNIN({ phone, nin: value });

      setLoading(false);

      if (!res.ok) return setErr(res.error || "Verification failed");

      onSuccess({
        ninBvn: value,
        identity: res.data,
        mode,
      });
    } catch (e) {
      console.error(e);
      setLoading(false);
      setErr("Network error");
    }
  }

  return (
    <div className="space-y-4">
      {/* Back */}
      <div className="flex justify-between items-center">
        <button onClick={onBack} className="text-sm text-gray-600">
          ← Back
        </button>
        <span className="text-sm text-gray-500">{phone}</span>
      </div>

      {/* Toggle */}
      <div className="flex gap-3">
        <button
          className={`flex-1 py-2 rounded-lg border ${
            mode === "bvn" ? "bg-[#cc5400] text-white" : ""
          }`}
          onClick={() => setMode("bvn")}
        >
          Use BVN
        </button>
        <button
          className={`flex-1 py-2 rounded-lg border ${
            mode === "nin" ? "bg-[#cc5400] text-white" : ""
          }`}
          onClick={() => setMode("nin")}
        >
          Use NIN
        </button>
      </div>

      {/* Input */}
      <label className="text-sm font-medium">
        {mode === "bvn" ? "Enter BVN (11 digits)" : "Enter NIN (11 digits)"}
      </label>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={mode === "bvn" ? "e.g. 22334455667" : "e.g. 12345678901"}
        className="w-full border rounded-lg p-3"
      />

      {err && <p className="text-sm text-red-500">{err}</p>}

      {/* Submit */}
      <button
        onClick={handleVerify}
        disabled={!ok || loading}
        className={`w-full py-3 rounded-lg font-semibold ${
          !ok || loading
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-[#cc5400] text-white"
        }`}
      >
        {loading ? "Verifying..." : "Verify Identity"}
      </button>
    </div>
  );
}
