import React, { useState } from "react";

export default function FlipzyHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed bg-[#06090fa9] top-0 left-0 w-full z-50 backdrop-blur-md px-4 sm:px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        {/* Replace with your logo */}
        <img src="/images/logo.png" alt="Flipzy Logo" className="h-10 w-auto" />
        <span className="text-white text-xl font-semibold">Flipzy</span>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8 text-white text-sm">
        <a href="#" className="hover:text-orange-400 transition">
          Benefits
        </a>
        <a href="#" className="hover:text-orange-400 transition">
          Products
        </a>
        <a href="#" className="hover:text-orange-400 transition">
          Pricing
        </a>
        <a href="#" className="hover:text-orange-400 transition">
          Reviews
        </a>
        <a href="#" className="hover:text-orange-400 transition">
          FAQ
        </a>
        <a href="#" className="hover:text-orange-400 transition">
          Contacts
        </a>
      </nav>

      {/* CTA */}
      <div className="hidden md:block">
        <button className="px-5 py-2 rounded-full border border-white/30 text-white text-sm backdrop-blur-md hover:bg-white/10 transition">
          Open an Account
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed right-0 h-full w-64 bg-black z-30 text-white p-6 flex flex-col gap-6 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between bg-black  items-center mb-4">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <a href="#" className="hover:text-orange-400 transition">
          Benefits
        </a>
        <a href="#" className="hover:text-orange-400 transition">
          Products
        </a>
        <a href="#" className="hover:text-orange-400 transition">
          Pricing
        </a>
        <a href="#" className="hover:text-orange-400 transition">
          Reviews
        </a>
        <a href="#" className="hover:text-orange-400 transition">
          FAQ
        </a>
        <a href="#" className="hover:text-orange-400 transition">
          Contacts
        </a>

        <button className="mt-4 px-5 py-2 rounded-full border border-white/30 text-white backdrop-blur-md hover:bg-white/10 transition">
          Open an Account
        </button>
      </div>
    </header>
  );
}
