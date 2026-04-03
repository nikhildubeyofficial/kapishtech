"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
  { id: 1, title: "FinVault Dashboard", category: "Web", color: "from-blue-600/20 to-indigo-600/20", icon: "🏦" },
  { id: 2, title: "ShopFlow Mobile", category: "App", color: "from-purple-600/20 to-pink-600/20", icon: "🛒" },
  { id: 3, title: "DataPulse Analytics", category: "UI", color: "from-emerald-600/20 to-teal-600/20", icon: "📊" },
  { id: 4, title: "MediCare Portal", category: "Web", color: "from-emerald-800/20 to-emerald-600/20", icon: "🏥" },
  { id: 5, title: "FoodDash Delivery", category: "App", color: "from-orange-600/20 to-amber-600/20", icon: "🍔" },
  { id: 6, title: "SoundWave UI", category: "UI", color: "from-violet-600/20 to-fuchsia-600/20", icon: "🎵" },
];

const filters = ["All", "Web", "App", "UI"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    proj => activeFilter === "All" || proj.category === activeFilter
  );

  return (
    <div className="py-20 min-h-screen">
      <section className="container mx-auto px-6 max-w-7xl text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Portfolio</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Explore the digital experiences we've crafted — from websites and apps to complete brand experiences.
        </motion.p>
      </section>

      <section className="container mx-auto px-6 max-w-7xl mb-24">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeFilter === filter 
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25" 
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
              )}
            >
              {filter === "All" ? "All Projects" : filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative rounded-[40px] overflow-hidden border border-white/10 bg-[#0a0a0a] cursor-pointer shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl opacity-40 mix-blend-overlay filter blur-[1px]">{item.icon}</div>
                  <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm z-10">
                    <span className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                      <ArrowRight className="w-6 h-6 -rotate-45" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 block">{item.category}</span>
                  <h3 className="text-xl font-bold group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 text-center border-t border-white/10"
        >
          <h2 className="text-3xl font-bold mb-6">Want to Be Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">Next Success Story?</span></h2>
          <Link href="/contact" className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
