"use client";

import { Bell, Search, ChevronDown, Menu } from "lucide-react";

type TopbarProps = {
  onMenuClick?: () => void;
};

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="relative z-30 flex h-[64px] items-center justify-between border-b border-white/5 px-4 lg:px-6">
      {/* LEFT */}
      <div className="flex items-center gap-3">
        {/* Hamburger (mobile only) */}
        <button
          onClick={onMenuClick}
          className="lg:hidden rounded-lg p-2 text-gray-300 hover:bg-white/5"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        {/* Search */}
        <div className="hidden sm:flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-gray-400">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-sm outline-none placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">
        {/* Notifications */}
        <button className="relative rounded-xl bg-white/5 p-2 text-gray-300 hover:bg-white/10">
          <Bell size={18} />
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-orange-500" />
        </button>

        {/* User */}
        <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-gray-200">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 font-semibold">
            S
          </div>
          <span className="hidden sm:block">Sekinat</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
      </div>
    </header>
  );
}
