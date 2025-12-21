"use client";

import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Sample transactions
const transactions: Transaction[] = [
  {
    name: "Salary",
    amount: "$3000",
    avatar: "S",
    date: "2025-01-05",
    type: "incoming",
  },
  {
    name: "Netflix",
    amount: "$12.99",
    avatar: "N",
    date: "2025-01-10",
    type: "outgoing",
  },
  {
    name: "Starbucks",
    amount: "$5.75",
    avatar: "S",
    date: "2025-01-20",
    type: "outgoing",
  },
  {
    name: "Amazon",
    amount: "$120.50",
    avatar: "A",
    date: "2025-02-05",
    type: "outgoing",
  },
  {
    name: "Freelance",
    amount: "$800",
    avatar: "F",
    date: "2025-02-12",
    type: "incoming",
  },
  {
    name: "Uber",
    amount: "$23.40",
    avatar: "U",
    date: "2025-02-15",
    type: "outgoing",
  },
  {
    name: "Apple Store",
    amount: "$299.00",
    avatar: "A",
    date: "2025-03-12",
    type: "outgoing",
  },
  {
    name: "Bonus",
    amount: "$500",
    avatar: "B",
    date: "2025-03-15",
    type: "incoming",
  },
  {
    name: "Gym Membership",
    amount: "$45.00",
    avatar: "G",
    date: "2025-03-20",
    type: "outgoing",
  },
  {
    name: "Paypal Transfer",
    amount: "$150.00",
    avatar: "P",
    date: "2025-04-01",
    type: "incoming",
  },
  {
    name: "Electric Bill",
    amount: "$87.65",
    avatar: "E",
    date: "2025-04-10",
    type: "outgoing",
  },
  {
    name: "Water Bill",
    amount: "$32.10",
    avatar: "W",
    date: "2025-04-12",
    type: "outgoing",
  },
];

interface Transaction {
  name: string;
  amount: string;
  avatar: string;
  date: string;
  type: "incoming" | "outgoing";
}

// =================== Helper: Aggregate monthly incoming/outgoing ===================
const getMonthlyTransactions = (transactions: Transaction[]) => {
  const monthlyTotals: Record<string, { incoming: number; outgoing: number }> =
    {};

  transactions.forEach((tx) => {
    const numericAmount = parseFloat(
      tx.amount.replace("$", "").replace(",", "")
    );
    const month = new Date(tx.date).toLocaleString("default", {
      month: "short",
    });

    if (!monthlyTotals[month])
      monthlyTotals[month] = { incoming: 0, outgoing: 0 };
    if (tx.type === "incoming") monthlyTotals[month].incoming += numericAmount;
    if (tx.type === "outgoing") monthlyTotals[month].outgoing += numericAmount;
  });

  return Object.keys(monthlyTotals).map((month) => ({
    name: month,
    incoming: monthlyTotals[month].incoming,
    outgoing: monthlyTotals[month].outgoing,
  }));
};

const chartData = getMonthlyTransactions(transactions);

// =================== Component ===================
export default function BankingChart() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111833] p-6 text-white shadow-lg">
      {/* ================= HEADER ================= */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-300">
          Incoming vs Outgoing
        </h3>
        <button className="text-xs text-gray-400 hover:text-gray-200">
          View Report
        </button>
      </div>

      {/* ================= CHART ================= */}
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 10, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid stroke="#222" strokeDasharray="4 4" />

            <XAxis
              dataKey="name"
              stroke="#888"
              tick={{ fill: "#aaa", fontSize: 12 }}
              axisLine={{ stroke: "#444" }}
            />
            <YAxis
              stroke="#888"
              tick={{ fill: "#aaa", fontSize: 12 }}
              axisLine={{ stroke: "#444" }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0e1325",
                border: "1px solid #333",
                color: "#fff",
              }}
              itemStyle={{ color: "#fff" }}
            />

            <Legend
              wrapperStyle={{ color: "#aaa", fontSize: 12 }}
              verticalAlign="top"
              align="right"
            />

            {/* Incoming line */}
            <Line
              type="monotone"
              dataKey="incoming"
              stroke="#00ffcc"
              strokeWidth={3}
              dot={{ r: 4, stroke: "#00ffcc", strokeWidth: 2 }}
              activeDot={{
                r: 6,
                stroke: "#00ffcc",
                strokeWidth: 3,
                fill: "#fff",
              }}
            />

            {/* Outgoing line */}
            <Line
              type="monotone"
              dataKey="outgoing"
              stroke="#FFA500"
              strokeWidth={3}
              dot={{ r: 4, stroke: "#FFA500", strokeWidth: 2 }}
              activeDot={{
                r: 6,
                stroke: "#FFA500",
                strokeWidth: 3,
                fill: "#fff",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
