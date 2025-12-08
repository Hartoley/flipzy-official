// src/pages/BvnCallback.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { retrieveBVN } from "@/lib/api";

export default function BvnCallback({ onSuccess }) {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  useEffect(() => {
    const reference = params.get("reference");

    if (!reference) {
      setErr("Missing verification reference");
      return;
    }

    async function fetchBVN() {
      try {
        const res = await retrieveBVN(reference);

        if (!res.ok) return setErr(res.error || "BVN verification failed");

        onSuccess({
          mode: "bvn",
          ninBvn: res.data?.bvn,
          identity: res.data,
        });

        navigate("/next-step");
      } catch (e) {
        console.log("error", e);
        setErr("Network error");
      }
    }

    fetchBVN();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      {err ? (
        <p className="text-red-500">{err}</p>
      ) : (
        <p className="text-gray-700">Completing BVN verification...</p>
      )}
    </div>
  );
}
