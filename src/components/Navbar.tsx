"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] h-16 bg-[#0A2540]">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-12 max-md:px-5">
        <Link href="/" className="font-sora text-[28px] font-bold leading-none text-white">
          Kapish<span className="text-[#E8761A]">Tech</span>
        </Link>

        <nav className="hidden items-center gap-8 min-[769px]:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden min-[769px]:block">
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-[8px] bg-[#E8761A] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#D4621A]"
          >
            Get Started
          </Link>
        </div>

        <button
          className="text-white min-[769px]:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#0A2540] min-[769px]:hidden">
          <nav className="mx-auto flex w-full max-w-[1280px] flex-col gap-3 px-5 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-1 inline-flex w-fit items-center rounded-[8px] bg-[#E8761A] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#D4621A]"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
