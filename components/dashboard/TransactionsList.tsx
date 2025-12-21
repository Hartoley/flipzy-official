"use client";

import React from "react";
import { useRouter } from "next/navigation";

const transactions = [
  { name: "Netflix", amount: "$12.99", avatar: "N" },
  { name: "Starbucks", amount: "$5.75", avatar: "S" },
  { name: "Spotify", amount: "$9.99", avatar: "S" },
  { name: "Amazon", amount: "$120.50", avatar: "A" },
  { name: "Uber", amount: "$23.40", avatar: "U" },
  { name: "Apple Store", amount: "$299.00", avatar: "A" },
  { name: "Gym Membership", amount: "$45.00", avatar: "G" },
  { name: "Paypal Transfer", amount: "$150.00", avatar: "P" },
  { name: "Electric Bill", amount: "$87.65", avatar: "E" },
  { name: "Water Bill", amount: "$32.10", avatar: "W" },
];

export default function TransactionsList() {
  const router = useRouter();

  return (
    <div className="rounded-2xl border border-white/5 bg-[#111833] p-5">
      {/* ================= HEADER ================= */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-300">
          Dashboard Analytics
        </h3>

        <button
          className="text-xs text-gray-400 hover:text-gray-200"
          onClick={() => router.push("/transactions")}
        >
          See all
        </button>
      </div>

      {/* ================= LIST ================= */}
      <div className="space-y-3">
        {transactions.slice(0, 4).map((tx, index) => (
          <TransactionRow key={index} {...tx} />
        ))}
      </div>
    </div>
  );
}

/* ================= ROW ================= */
function TransactionRow({
  name,
  amount,
  avatar,
}: {
  name: string;
  amount: string;
  avatar: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl px-3 py-2 hover:bg-white/5">
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/10 text-sm font-medium text-orange-400">
          {avatar}
        </div>

        <span className="text-sm">{name}</span>
      </div>

      {/* RIGHT */}
      <span className="text-sm text-gray-300">{amount}</span>
    </div>
  );
}
