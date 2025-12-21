import React from "react";

const transactions = [
  {
    name: "Paymenty",
    amount: "$2,897",
    avatar: "P",
  },
  {
    name: "Pockegat",
    amount: "$5,687",
    avatar: "G",
  },
  {
    name: "Condship",
    amount: "$2,057",
    avatar: "C",
  },
  {
    name: "Mortly",
    amount: "$0.00",
    avatar: "M",
  },
  {
    name: "Aniergasing",
    amount: "$1,077",
    avatar: "A",
  },
];

export default function TransactionsList() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111833] p-5">
      {/* ================= HEADER ================= */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-300">
          Dashboard Analytics
        </h3>

        <button className="text-xs text-gray-400 hover:text-gray-200">
          See all
        </button>
      </div>

      {/* ================= LIST ================= */}
      <div className="space-y-3">
        {transactions.map((tx, index) => (
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
