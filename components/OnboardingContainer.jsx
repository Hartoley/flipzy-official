"use client";

import { useState, useEffect } from "react";
import StepEmail from "./steps/StepEmail";
import StepIdentity from "./steps/StepIdentity";
import StepPassword from "./steps/StepPassword";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function OnboardingContainer() {
  const [step, setStep] = useState(1);
  const [emailData, setEmailData] = useState(null); // { email, sessionId }
  const [identityData, setIdentityData] = useState(null); // { ninBvn, identity }
  const router = useRouter();

  useEffect(() => {
    const bvn = sessionStorage.getItem("bvnResult");

    if (bvn) {
      const parsed = JSON.parse(bvn);

      setIdentityData({
        ninBvn: parsed.bvn,
        identity: parsed,
      });

      setStep(3); // 👉 StepPassword
    }
  }, []);

  const handleEmailSuccess = (data) => {
    setEmailData(data);
    setStep(2);
  };

  const handleIdentitySuccess = (payload) => {
    setIdentityData(payload);
    setStep(3);
  };

  const handleCreateSuccess = (user) => {
    console.log("Account created:", user);
    // redirect to dashboard or show success
  };

  const stepMotion = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.28 },
  };

  return (
    <div className="w-full py-6 px-0 flex flex-col items-center justify-center">
      <div className="mb-6">
        {/* Flow indicator */}
        <div className="flex items-center justify-between text-xs">
          <StepBadge label="Email" active={step === 1} done={step > 1} />
          <div className="flex-1 h-0.5 bg-gray-200 mx-2" />
          <StepBadge label="Identity" active={step === 2} done={step > 2} />
          <div className="flex-1 h-0.5 bg-gray-200 mx-2" />
          <StepBadge label="Account" active={step === 3} done={false} />
        </div>
      </div>

      <div className="bg-white w-[70%] self-center p-6 rounded-xl shadow">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="s1" {...stepMotion}>
              <StepEmail onSuccess={handleEmailSuccess} />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div key="s2" {...stepMotion}>
              <StepIdentity
                email={emailData?.email}
                onSuccess={handleIdentitySuccess}
                onBack={() => setStep(1)}
              />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div key="s3" {...stepMotion}>
              <StepPassword
                prefill={{
                  email: emailData?.email,
                  ninBvn: identityData?.ninBvn,
                  identity: identityData?.identity,
                }}
                onBack={() => setStep(2)}
                onSuccess={handleCreateSuccess}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/login")}
              className="text-orange-600 font-semibold hover:underline"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

function StepBadge({ label, active, done }) {
  return (
    <div
      className={`flex items-center gap-2 ${
        done ? "text-green-600" : active ? "text-[#cc5400]" : "text-gray-400"
      }`}
    >
      <div
        className={`h-6 w-6 rounded-full flex items-center justify-center border ${
          done
            ? "bg-green-100 border-green-400"
            : active
            ? "bg-[#fff2e6] border-[#cc5400]"
            : "bg-white border-gray-200"
        }`}
      >
        {done ? "✓" : label[0]}
      </div>
      <div>{label}</div>
    </div>
  );
}
