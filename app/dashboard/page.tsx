import StatsRow from "@/components/dashboard/StatsRow";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import RightPanel from "@/components/dashboard/RightPanel";
import TransactionsList from "@/components/dashboard/TransactionsList";

export default function Page() {
  return (
    <div className="flex h-screen bg-[#0b1020] text-white">
      {/* MAIN DASHBOARD */}
      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        <DashboardHeader />
        <StatsRow />

        <div className="grid grid-cols-2 gap-6">
          <TransactionsList />
          {/* Placeholder for charts */}
          <div className="rounded-2xl border border-white/5 bg-[#111833]" />
        </div>
      </main>

      {/* RIGHT PANEL */}
      <RightPanel />
    </div>
  );
}
