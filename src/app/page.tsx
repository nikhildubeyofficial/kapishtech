"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Smartphone, Palette, Zap, Shield, Target, Lightbulb } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[100px] opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_30%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Welcome to the Future of Digital
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Building Digital Products <br />
              That <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400">Drive Growth</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              We craft stunning websites, powerful apps, and exceptional user experiences that help businesses scale and succeed in the digital landscape.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transform hover:-translate-y-1">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-8 py-4 rounded-xl transition-all backdrop-blur-sm">
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-900/50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services That <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Empower</span> Your Business</h2>
            <p className="text-slate-400 text-lg">From idea to execution, we deliver end-to-end digital solutions tailored to your unique needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Website Development", desc: "High-performance, responsive websites built with cutting-edge technologies that convert visitors into customers." },
              { icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile applications that deliver seamless experiences across all devices." },
              { icon: Palette, title: "UI/UX Design", desc: "User-centered designs that are visually stunning and intuitive, driving engagement and retention." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-[40px] bg-slate-900 border border-white/5 hover:border-indigo-500/30 transition-all hover:bg-slate-800/80 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-400">Projects</span></h2>
            <p className="text-slate-400 text-lg">A glimpse into the diverse digital experiences we've crafted for our clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "FinVault Dashboard", cat: "Web App", color: "from-blue-600/20 to-indigo-600/20" },
              { title: "ShopFlow Mobile", cat: "iOS & Android", color: "from-purple-600/20 to-pink-600/20" },
              { title: "DataPulse Analytics", cat: "UI/UX Design", color: "from-emerald-600/20 to-teal-600/20" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-[40px] overflow-hidden border border-white/10 bg-[#0a0a0a] cursor-pointer shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${item.color} flex items-center justify-center relative`}>
                  {/* Mock Abstract Content */}
                  <div className="w-32 h-32 rounded-full border-4 border-white/10 border-t-white/30 animate-spin-slow" />
                  
                  <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                      <ArrowRight className="w-5 h-5 -rotate-45" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 block">{item.cat}</span>
                  <h3 className="text-lg font-bold group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Brands <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">Trust Us</span></h2>
            <p className="text-slate-400 text-lg">We combine technical expertise with creative vision to deliver results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Zap, title: "Rapid Delivery", desc: "Agile workflows ensure your project launches on time without compromising quality." },
              { icon: Target, title: "Results-Driven", desc: "Every pixel and line of code is designed to maximize conversions and user engagement." },
              { icon: Shield, title: "Secure & Scalable", desc: "Built with enterprise-grade security and architecture that scales with your growth." },
              { icon: Lightbulb, title: "Innovation First", desc: "We leverage the latest technologies and design trends to keep you ahead of the curve." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 md:p-8 rounded-[40px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-slate-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 rounded-[40px] bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-white/10 text-center relative overflow-hidden backdrop-blur-sm shadow-[0_20px_50px_rgba(79,70,229,0.15)]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">Your Idea?</span></h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Transform your vision into reality. Partner with us to create a digital experience that sets you apart from the competition.
            </p>
            <Link href="/contact" className="inline-flex justify-center items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-all transform hover:-translate-y-1">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
