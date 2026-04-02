"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Server, LineChart, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code,
    title: "Website Development",
    desc: "We build fast, responsive, and conversion-optimized websites using the latest technologies and best practices.",
    features: ["Custom responsive design", "React / Next.js development", "SEO optimization", "Performance tuning", "CMS integration"]
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile applications that deliver seamless experiences and drive user engagement.",
    features: ["iOS & Android apps", "React Native / Flutter", "API integration", "Push notifications", "App store deployment"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-centered design that balances aesthetics with usability, creating memorable digital experiences.",
    features: ["User research & wireframes", "High-fidelity prototypes", "Design systems", "Usability testing", "Brand identity"]
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Robust, scalable server-side architectures that power your applications with reliability and speed.",
    features: ["Node.js / Python APIs", "Database design", "Cloud deployment", "Authentication & security", "Microservices architecture"]
  },
  {
    icon: LineChart,
    title: "Digital Strategy",
    desc: "Strategic consulting to help you navigate the digital landscape and make data-driven decisions for growth.",
    features: ["Market analysis", "Technology consulting", "Product roadmapping", "Growth optimization", "Analytics & insights"]
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    desc: "Ongoing support and maintenance to keep your digital products running smoothly and up-to-date.",
    features: ["24/7 monitoring", "Bug fixes & updates", "Performance monitoring", "Security patches", "Feature enhancements"]
  }
];

export default function Services() {
  return (
    <div className="py-20 overflow-hidden">
      <section className="container mx-auto px-6 max-w-7xl text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Comprehensive digital solutions designed to accelerate your business growth and digital transformation.
        </motion.p>
      </section>

      <section className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[40px] bg-[#0a0a0a] border border-white/5 hover:border-indigo-500/30 transition-all group shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-6 min-h-[80px]">{service.desc}</p>
              
              <ul className="space-y-3">
                {service.features.map((feat, fidx) => (
                  <li key={fidx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 md:p-16 rounded-[40px] bg-slate-900/50 border border-white/10 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(79,70,229,0.15)]"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Solution?</span></h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss your specific requirements and build something perfect for you.
          </p>
          <Link href="/contact" className="inline-block bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-slate-200 transition-colors">
            Let's Talk
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
