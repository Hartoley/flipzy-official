"use client";

import React from "react";

const tabs = ["Payments", "Pricing", "Invoices", "Sales"];

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      {/* ================= LEFT ================= */}
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">One Banking</h1>

        {/* Small badge */}
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300">
          Google
        </span>
      </div>

      {/* ================= CENTER (TABS) ================= */}
      <div className="flex items-center gap-6">
        {tabs.map((tab, index) => {
          const isActive = tab === "Payments";

          return (
            <button
              key={tab}
              className={`relative text-sm transition-all
                ${
                  isActive
                    ? "text-orange-400"
                    : "text-gray-400 hover:text-gray-200"
                }`}
            >
              {tab}

              {/* Active underline */}
              {isActive && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-orange-500" />
              )}
            </button>
          );
        })}
      </div>

      {/* ================= RIGHT ================= */}
      <div className="flex items-center gap-3">
        {/* Date / Filter pill */}
        <button className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-4 py-2 text-sm text-gray-300 hover:bg-white/10">
          <span>Wed, 16 Aug</span>
          <span className="text-xs opacity-70">▼</span>
        </button>
      </div>
    </div>
  );
}
