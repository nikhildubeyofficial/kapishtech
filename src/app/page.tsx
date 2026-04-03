"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Smartphone, Palette, Zap, Target, Sparkles, Headset, Quote } from "lucide-react";

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
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[100px] opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_30%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Design. Develop. Deliver.
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Building Digital Products <br />
              That Drive <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400">Real Business Growth</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              We design and develop high-performance websites and applications that help startups and businesses grow faster, smarter, and stronger in the digital world.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transform hover:-translate-y-1">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-8 py-4 rounded-xl transition-all backdrop-blur-sm hover:-translate-y-1">
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. ABOUT SECTION (Moved slightly up for flow) */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 rounded-[40px] bg-[#0a0a0a] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Are</span></h2>
                <div className="text-slate-400 text-lg leading-relaxed space-y-6">
                  <p>Kapish Technologies is a growing tech startup focused on building modern digital solutions for businesses.</p>
                  <p>We combine creativity, technology, and strategy to deliver products that not only look great but also perform exceptionally.</p>
                  <p className="font-semibold text-indigo-300">Our mission is to help businesses establish a strong digital presence and scale with confidence.</p>
                </div>
              </div>
              <div className="aspect-square rounded-[40px] border border-white/10 bg-black/50 backdrop-blur-xl flex items-center justify-center relative shadow-[0_20px_50px_rgba(79,70,229,0.15)]">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-500 text-8xl font-extrabold opacity-80">KT</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">Do</span></h2>
            <p className="text-slate-400 text-xl">We deliver modern digital solutions tailored to your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Website Development", desc: "We build fast, responsive, and visually stunning websites that convert visitors into customers." },
              { icon: Smartphone, title: "App Development", desc: "From idea to launch, we create scalable and user-friendly mobile and web applications." },
              { icon: Palette, title: "UI/UX Design", desc: "We design intuitive and engaging user experiences that keep users coming back." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-10 rounded-[40px] bg-[#0a0a0a] border border-white/5 hover:border-indigo-500/30 transition-all hover:-translate-y-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              >
                <div className="w-16 h-16 rounded-[24px] bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-[100%] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-400">Kapish Technologies?</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: Zap, title: "Fast & Reliable Delivery" },
              { icon: Target, title: "Business-Focused Solutions" },
              { icon: Sparkles, title: "Creative & Modern Designs" },
              { icon: Headset, title: "Dedicated Support" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-8 p-8 rounded-[40px] bg-black border border-white/5 hover:bg-white/[0.02] transition-colors shadow-2xl"
              >
                <div className="w-16 h-16 shrink-0 rounded-3xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white">{feature.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO SECTION */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">Work</span></h2>
            <p className="text-slate-400 text-xl">A glimpse of the projects we’ve crafted with precision and creativity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                  <div className="w-32 h-32 rounded-full border-4 border-white/10 border-t-white/30 animate-spin-slow" />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                      <ArrowRight className="w-8 h-8 -rotate-45" />
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-3 block">{item.cat}</span>
                  <h3 className="text-2xl font-bold group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/portfolio" className="inline-flex items-center gap-3 text-indigo-400 font-bold hover:text-indigo-300 transition-colors text-lg">
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Clients Say</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { 
                text: "Kapish Technologies transformed our online presence with a stunning website.",
                author: "Sarah Jenkins", role: "Startup Founder" 
              },
              { 
                text: "Professional, fast, and highly creative team. Highly recommended!",
                author: "Mark Torres", role: "Marketing Director" 
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 md:p-12 rounded-[40px] bg-black border border-white/5 relative shadow-2xl group hover:-translate-y-2 transition-transform"
              >
                <Quote className="absolute top-8 right-10 w-16 h-16 text-white/[0.03] group-hover:text-indigo-500/10 transition-colors" />
                <p className="text-xl md:text-2xl font-medium text-slate-300 leading-relaxed mb-8 relative z-10 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.author}</h4>
                    <span className="text-slate-400 text-sm">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 md:p-24 rounded-[40px] bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-white/10 text-center relative overflow-hidden backdrop-blur-sm shadow-[0_20px_50px_rgba(79,70,229,0.15)]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15)_0%,transparent_70%)]" />
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">
              Let’s Build Something <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">Amazing Together</span>
            </h2>
            <p className="text-slate-300 text-xl md:text-2xl max-w-2xl mx-auto mb-12 relative z-10">
              Have an idea? Let’s turn it into a powerful digital product.
            </p>
            <Link href="/contact" className="relative z-10 inline-flex justify-center items-center gap-3 bg-white text-black font-extrabold px-10 py-5 rounded-full hover:bg-slate-200 transition-all transform hover:-translate-y-1 text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]">
              Start Your Project <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
