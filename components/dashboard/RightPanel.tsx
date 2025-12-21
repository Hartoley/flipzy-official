import React from "react";

export default function RightPanel() {
  return (
    <aside className="w-[300px] border-l border-white/5 bg-[#0e1325] px-5 py-6 text-white">
      {/* ================= HEADER ================= */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-300">Active analytics</h3>

        <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs text-orange-400">
          Live
        </span>
      </div>

      {/* ================= KPI CARDS ================= */}
      <div className="space-y-4">
        <KpiCard title="Today Sales" value="6,430" change="+12.5%" />
        <KpiCard title="Branches" value="47,575" change="+0.4%" />
        <KpiCard title="Gross Profit" value="€5,270" change="+9.8%" />
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="my-6 h-px bg-white/5" />

      {/* ================= PROGRESS ================= */}
      <div className="space-y-4">
        <ProgressRow label="Analytics" value={72} />
        <ProgressRow label="Activity" value={63} />
        <ProgressRow label="Completion" value={85} />
      </div>

      {/* ================= FOOTER ================= */}
      <div className="mt-8 rounded-xl border border-white/5 bg-white/5 p-4">
        <p className="text-xs text-gray-400">
          Performance improved compared to last week
        </p>
      </div>
    </aside>
  );
}

/* ================= SUB COMPONENTS ================= */

function KpiCard({
  title,
  value,
  change,
}: {
  title: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-[#111833] p-4">
      <p className="mb-1 text-xs text-gray-400">{title}</p>

      <div className="flex items-end justify-between">
        <span className="text-lg font-semibold">{value}</span>

        <span className="text-xs text-orange-400">{change}</span>
      </div>
    </div>
  );
}

function ProgressRow({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs text-gray-400">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="h-2 w-full rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-orange-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
