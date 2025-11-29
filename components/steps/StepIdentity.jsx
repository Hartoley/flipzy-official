// src/components/steps/StepIdentity.jsx
import React, { useState } from "react";
import { verifyIdentity } from "@/lib/api";
import { validBvnOrNin } from "@/lib/validators";

export default function StepIdentity({ phone, onSuccess, onBack }) {
  const [ninBvn, setNinBvn] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const ok = validBvnOrNin(ninBvn);

  const handleVerify = async () => {
    if (!ok) return;
    setLoading(true);
    setErr(null);
    try {
      const res = await verifyIdentity({ phone, ninBvn });
      setLoading(false);
      if (!res.ok) return setErr(res.error || "Identity verification failed");
      // pass identity payload to parent (firstName, lastName, dob, etc.)
      onSuccess({ ninBvn, identity: res.data });
    } catch (e) {
      setLoading(false);
      setErr("Network error");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <button className="text-sm text-gray-600" onClick={onBack}>
          ← Back
        </button>
        <span className="text-sm text-gray-500">{phone}</span>
      </div>

      <label className="text-sm font-medium">Enter NIN or BVN</label>
      <input
        value={ninBvn}
        onChange={(e) => setNinBvn(e.target.value)}
        placeholder="e.g. 11 or 14 digit number"
        className="w-full border rounded-lg p-3"
      />

      <p className="text-xs text-gray-500">
        We will verify this with the identity provider (Monnify).
      </p>

      {/* {err && <p className="text-sm text-red-500">{err}</p>} */}

      <button
        onClick={handleVerify}
        disabled={!ok || loading}
        className={`w-full py-3 rounded-lg font-semibold ${
          !ok || loading
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-[#cc5400] text-white"
        }`}
      >
        {loading ? "Verifying identity..." : "Verify Identity"}
      </button>
    </div>
  );
}
