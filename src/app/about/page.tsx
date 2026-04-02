"use client";

import { motion } from "framer-motion";
import { Rocket, Eye, Sparkles, Handshake, Lightbulb, Target } from "lucide-react";

export default function About() {
  return (
    <div className="py-20 overflow-hidden">
      {/* Page Header */}
      <section className="container mx-auto px-6 max-w-7xl text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">Kapish Technologies</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto"
        >
          We're a team of passionate builders, designers, and strategists on a mission to create extraordinary digital experiences.
        </motion.p>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square rounded-3xl bg-slate-900 border border-white/10 relative overflow-hidden flex items-center justify-center p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(79,70,229,0.2),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(124,58,237,0.15),transparent_50%)]" />
            <span className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500/50 to-purple-500/50 relative z-10">
              KT
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">The Future</span></h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>Founded with a vision to bridge the gap between technology and business growth, Kapish Technologies is a modern digital agency specializing in world-class digital products.</p>
              <p>We believe great technology should be accessible to every business. Our team combines deep technical expertise with creative design thinking to deliver solutions that aren't just functional — they're extraordinary.</p>
              <p>From promising startups to established enterprises, we partner with ambitious brands to turn their digital vision into reality. Every project we take on is treated as our own.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-slate-900/50 border border-white/5"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To empower businesses with innovative digital solutions that drive measurable growth. We're committed to delivering premium quality work that exceeds expectations and creates a lasting impact in the digital landscape.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-10 rounded-3xl bg-slate-900/50 border border-white/5"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              To become the most trusted technology partner for businesses worldwide. We envision a future where every business has access to top-tier digital products that help them compete, perform, and thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Values</span></h2>
          <p className="text-slate-400">The principles that guide everything we do.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Sparkles, title: "Excellence", desc: "We never settle for good enough. Every detail matters, and we obsess over quality." },
            { icon: Handshake, title: "Collaboration", desc: "We work alongside our clients as true partners, ensuring transparent communication." },
            { icon: Lightbulb, title: "Innovation", desc: "We embrace new technologies and creative approaches to solve complex problems." },
            { icon: Target, title: "Impact", desc: "We measure our success by the tangible results we deliver for our clients' growth." }
          ].map((value, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <value.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-slate-400">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
