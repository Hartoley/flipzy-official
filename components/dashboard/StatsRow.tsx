import React from "react";
import StatsCard from "./StatsCard";

const stats = [
  { value: "6206", label: "Total Payments", progress: 72 },
  { value: "3:00", label: "Avg. Time", progress: 45 },
  { value: "€310", label: "Revenue", progress: 68 },
  { value: "85%", label: "Success Rate", progress: 85 },
];

export default function StatsRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatsCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          progress={stat.progress}
        />
      ))}
    </div>
  );
}
