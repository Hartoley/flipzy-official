"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#3b3f5c]">
      <div className="flex h-screen w-full bg-[#0e1325] overflow-hidden">
        {/* ===== DESKTOP SIDEBAR ===== */}
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>

        {/* ===== MOBILE SIDEBAR OVERLAY ===== */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <div className="absolute top-0 left-0 z-50 w-full bg-[#0e1325]">
              <Sidebar onClose={() => setSidebarOpen(false)} />
            </div>
          </div>
        )}

        {/* ===== MAIN ===== */}
        <div className="flex flex-1 flex-col">
          <Topbar onMenuClick={() => setSidebarOpen(true)} />

          <main className="flex-1 overflow-y-auto px-4 lg:px-6 pb-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
