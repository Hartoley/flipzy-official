"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: "🏠" },
  { label: "Payments", href: "/dashboard/payments", icon: "💸" },
  { label: "Transfers", href: "/dashboard/transfers", icon: "🔁" },
  { label: "Cards", href: "/dashboard/cards", icon: "💳" },
  { label: "Loans", href: "/dashboard/loans", icon: "📄" },
  { label: "Analytics", href: "/dashboard/analytics", icon: "📊" },
  { label: "Settings", href: "/dashboard/settings", icon: "⚙️" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-[200px] bg-[#0e1325] px-4 py-6 text-white  border-b border-white/5 ">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-2 px-2">
        <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center font-bold">
          F
        </div>
        <span className="text-lg font-semibold">Flipzy</span>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                ${
                  isActive
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-gray-400 hover:bg-white/5"
                }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
