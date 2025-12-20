"use client";

import { useEffect, useState, Suspense } from "react"; // 1. Import Suspense
import { useSearchParams, useRouter } from "next/navigation";
import { retrieveBVN } from "@/lib/api";
import { Loader2 } from "lucide-react";

// Keep this for extra safety
export const dynamic = "force-dynamic";

// 2. Move your logic into a sub-component
function BvnCallbackContent() {
  const params = useSearchParams();
  const router = useRouter();

  const [err, setErr] = useState(null as string | null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const reference = params.get("reference");

    if (!reference) {
      setErr("Missing verification reference");
      setLoading(false);
      return;
    }

    const verifyBVN = async () => {
      try {
        const res = (await retrieveBVN(reference)) as any; // Note: using 'as any' since lib is .js

        if (!res?.ok) {
          setErr(res?.error || "BVN verification failed");
          setLoading(false);
          return;
        }

        if (!res.data) {
          setErr("Invalid BVN data received");
          setLoading(false);
          return;
        }

        sessionStorage.setItem("bvnResult", JSON.stringify(res.data));
        router.replace("/onboarding");
      } catch (e) {
        console.error("BVN ERROR:", e);
        setErr("Network error");
        setLoading(false);
      }
    };

    verifyBVN();
  }, [params, router]);

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center gap-4 max-w-md w-full text-center">
      {loading && !err && (
        <>
          <Loader2 className="animate-spin w-12 h-12 text-[#cc5400]" />
          <p className="text-gray-700 text-lg font-medium">
            Completing BVN verification…
          </p>
          <p className="text-gray-400 text-sm">
            Please do not close this window.
          </p>
        </>
      )}

      {err && (
        <>
          <p className="text-red-500 text-lg font-semibold">{err}</p>
          <button
            className="mt-4 px-6 py-2 bg-[#cc5400] text-white rounded-lg"
            onClick={() => router.replace("/onboarding")}
          >
            Go Back
          </button>
        </>
      )}
    </div>
  );
}

// 3. Export a default component wrapped in Suspense
export default function BvnCallback() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      <Suspense
        fallback={<Loader2 className="animate-spin w-12 h-12 text-[#cc5400]" />}
      >
        <BvnCallbackContent />
      </Suspense>
    </div>
  );
}
