import React from "react";

interface StatsCardProps {
  value: string;
  label: string;
  progress?: number; // 0 – 100
}

export default function StatsCard({
  value,
  label,
  progress = 65,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111833] p-5">
      {/* Circle */}
      <div className="relative mx-auto mb-4 h-24 w-24">
        {/* Background ring */}
        <div className="absolute inset-0 rounded-full border-[6px] border-white/10" />

        {/* Progress ring */}
        <div
          className="absolute inset-0 rounded-full border-[6px] border-orange-500"
          style={{
            clipPath: `inset(${100 - progress}% 0 0 0)`,
          }}
        />

        {/* Center value */}
        <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
          {value}
        </div>
      </div>

      {/* Label */}
      <p className="text-center text-sm text-gray-400">{label}</p>
    </div>
  );
}
