"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 transition-all duration-300">
      <div className={cn(
        "w-[95%] max-w-6xl transition-all duration-500 rounded-[32px] overflow-hidden",
        scrolled 
          ? "bg-[#050505]/70 backdrop-blur-xl border border-white/10 shadow-2xl" 
          : "bg-transparent"
      )}>

        {/* Top utility bar - disappears or shrinks on scroll */}
        <div className={cn(
          "flex justify-between items-center px-6 py-2 border-b border-white/5 transition-all duration-500 overflow-hidden",
          scrolled ? "h-0 opacity-0 py-0 border-transparent" : "h-[40px] opacity-100"
        )}>
          <div className="flex gap-4 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            <span>Kapish Technologies</span>
          </div>
          <div className="flex gap-6 text-xs font-medium text-slate-300">
            <Link href="/contact" className="hover:text-white transition-colors">Client Portal</Link>
            <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1">
              <User className="w-3 h-3" /> Login
            </Link>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={cn(
          "flex items-center justify-between px-6 transition-all duration-500",
          scrolled ? "py-3" : "py-4 bg-[#0a0b1e]/40 backdrop-blur-md rounded-[32px] border border-white/5"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-bold text-white text-sm">
              K
            </div>
            <span className="font-bold text-lg tracking-tight text-white hidden sm:block">
              KapishTech
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-all hover:text-white group",
                    isActive ? "text-white" : "text-slate-400"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300",
                    isActive ? "bg-white opacity-100 scale-100" : "bg-transparent opacity-0 scale-0 group-hover:bg-slate-500 group-hover:opacity-100 group-hover:scale-100"
                  )} />
                </Link>
              );
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block z-50">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-slate-200 transition-colors"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-2xl pt-32 pb-6 px-6 flex flex-col justify-between md:hidden"
          >
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-semibold",
                    pathname === link.href ? "text-white" : "text-slate-500"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full justify-center items-center gap-2 bg-white text-black font-bold text-lg px-8 py-4 rounded-full"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
