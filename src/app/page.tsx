import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Brain,
  PenTool,
  Briefcase,
  Boxes,
  CloudCog,
  CheckCircle2,
} from "lucide-react";

const services = [
  { icon: Code2, title: "Web Development", description: "React, Next.js, and Node.js products built for speed and scale." },
  { icon: Smartphone, title: "Mobile Apps", description: "Flutter and React Native apps with smooth, reliable user journeys." },
  { icon: Brain, title: "AI/ML Solutions", description: "Automation and model-driven workflows that unlock smarter operations." },
  { icon: PenTool, title: "UI/UX Design", description: "Research-led product design focused on clarity, trust, and conversion." },
  { icon: Briefcase, title: "IT Consulting", description: "Technology strategy and digital transformation guidance for growth." },
  { icon: Boxes, title: "Custom Software", description: "Tailored business platforms designed around your exact workflows." },
  { icon: CloudCog, title: "Cloud & DevOps", description: "AWS, CI/CD, and deployment automation for resilient delivery." },
];

const processSteps = [
  ["1", "Discovery", "Business goals and scope alignment."],
  ["2", "Design", "UX flows and visual prototypes."],
  ["3", "Development", "Scalable product engineering."],
  ["4", "Testing", "QA and performance validation."],
  ["5", "Launch", "Go-live, monitor, and optimize."],
];

export default function Home() {
  return (
    <div>
      <section id="home" className="relative overflow-hidden bg-[linear-gradient(135deg,#0A2540_0%,#1E3A8A_100%)] section-pad text-white">
        <div className="absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-[rgba(232,118,26,0.06)]" />
        <div className="site-shell hero-grid grid grid-cols-2 items-center gap-12">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.6px] text-white/90">
              <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-[#E8761A]" />
              Trusted Digital Partner
            </div>
            <h1 className="font-sora text-[48px] font-bold leading-[1.15] tracking-[-0.5px] text-white max-md:text-[32px]">
              Built on <span className="text-white">Values.</span>
              <br />
              Powered by Technology
            </h1>
            <p className="mt-5 max-w-[480px] text-[17px] leading-[1.7] text-[rgba(255,255,255,0.7)]">
              We design, build, and scale digital products that help businesses grow from ambitious startups to established enterprises.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 max-[480px]:flex-col">
              <Link href="/#contact" className="btn-orange inline-flex items-center gap-2 rounded-[8px] px-5 py-3 text-sm font-semibold text-white max-[480px]:w-full max-[480px]:justify-center">
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link
                href="/#portfolio"
                className="inline-flex items-center rounded-[8px] border-[1.5px] border-[rgba(255,255,255,0.4)] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white max-[480px]:w-full max-[480px]:justify-center"
              >
                View Our Work
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] p-5">
            <div className="grid grid-cols-2 gap-3">
              {[
                ["50+", "Projects"],
                ["30+", "Clients"],
                ["7+", "Services"],
                ["99%", "Satisfaction"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.05)] p-3">
                  <span className="font-sora block text-[26px] font-bold text-[#E8761A] leading-none">{value}</span>
                  <span className="mt-1 block text-sm text-white/85">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "Node.js", "AI/ML", "Flutter", "AWS", "UI/UX"].map((tag) => (
                <span key={tag} className="rounded-full border border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.08)] px-3 py-1 text-xs text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E2E8F0] bg-white py-5">
        <div className="site-shell flex items-center gap-6 max-[480px]:overflow-x-auto max-[480px]:whitespace-nowrap">
          <span className="text-[12px] uppercase tracking-[0.5px] text-[#94A3B8]">Trusted by</span>
          <div className="flex items-center gap-6 font-sora text-[14px] font-semibold text-[#CBD5E1]">
            <span>TechCorp</span>
            <span>BuildNation</span>
            <span>FinEdge</span>
            <span>NovaSoft</span>
            <span>GrowthLab</span>
          </div>
        </div>
      </section>

      <section id="about" className="section-pad bg-white">
        <div className="site-shell about-grid grid grid-cols-2 items-center gap-16">
          <div className="relative h-[360px] overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-[linear-gradient(135deg,#EFF6FF,#DBEAFE)]">
            <div className="absolute left-6 top-6 grid h-[68px] w-[68px] grid-cols-2 gap-1.5 rounded-xl bg-white/70 p-2">
              <span className="rounded bg-[#0A2540]" />
              <span className="rounded bg-[#1E3A8A]" />
              <span className="rounded bg-[#1E3A8A]" />
              <span className="rounded bg-[#0A2540]" />
            </div>
            <div className="absolute bottom-6 right-6 h-24 w-24 bg-[radial-gradient(#93C5FD_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
          </div>

          <div>
            <span className="inline-flex rounded-full bg-[rgba(30,58,138,0.08)] px-3 py-1 text-[12px] font-bold uppercase tracking-[0.6px] text-[#1E3A8A]">
              About Us
            </span>
            <h2 className="font-sora mt-4 text-[34px] font-bold text-[#0F172A] max-md:text-[30px]">We Build Products That Matter</h2>
            <p className="mt-3 max-w-[580px] text-[16px] leading-[1.7] text-[#475569]">
              Kapish Technologies is a full-service Indian digital product company helping startups, mid-size businesses, and enterprise teams build software with confidence. We combine strategy, design, development, and support to deliver measurable outcomes.
            </p>
            <div className="mt-6 space-y-4">
              {[
                ["Integrity First", "Values-led collaboration and transparent execution in every engagement."],
                ["Speed Without Compromise", "Fast delivery with engineering rigor and production-ready quality."],
                ["Long-term Partnership", "We stay aligned to your roadmap, from launch to scale."],
              ].map(([title, description]) => (
                <div key={title} className="flex gap-3">
                  <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-[10px] bg-[rgba(30,58,138,0.08)]">
                    <CheckCircle2 size={16} className="text-[#1E3A8A]" />
                  </span>
                  <div>
                    <h3 className="font-sora text-[15px] font-semibold text-[#0A2540]">{title}</h3>
                    <p className="text-[13px] text-[#64748B]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad bg-[#F1F5F9]">
        <div className="site-shell">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[rgba(30,58,138,0.08)] px-3 py-1 text-[12px] font-bold uppercase tracking-[0.6px] text-[#1E3A8A]">Services</span>
            <h2 className="font-sora mt-4 text-[34px] font-bold text-[#0F172A] max-md:text-[30px]">Services Built for Scale</h2>
          </div>

          <div className="services-grid grid grid-cols-4 gap-5">
            {services.map((service) => (
              <article key={service.title} className="kapish-card flex min-h-[224px] flex-col rounded-2xl border border-[#E2E8F0] bg-white px-[22px] py-[28px]">
                <span className="mb-4 inline-flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-[linear-gradient(135deg,#0A2540,#1E3A8A)] text-white">
                  <service.icon size={20} />
                </span>
                <h3 className="font-sora text-[16px] font-semibold text-[#0A2540]">{service.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-[#475569]">{service.description}</p>
                <Link href="/#contact" className="mt-auto pt-4 text-[13px] font-semibold text-[#E8761A]">
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="site-shell">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[rgba(30,58,138,0.08)] px-3 py-1 text-[12px] font-bold uppercase tracking-[0.6px] text-[#1E3A8A]">Why Choose Us</span>
            <h2 className="font-sora mt-4 text-[34px] font-bold text-[#0F172A] max-md:text-[30px]">Built for Confidence and Growth</h2>
          </div>
          <div className="why-grid grid grid-cols-3 gap-5">
            {[
              ["01", "Startup Speed", "We move fast without cutting corners."],
              ["02", "Enterprise Trust", "Processes built for scale and compliance."],
              ["03", "End-to-End", "Design to deploy, all under one roof."],
              ["04", "Transparent Pricing", "No surprises, ever."],
              ["05", "Indian Excellence", "World-class talent with honest cost."],
              ["06", "Post-Launch Support", "We stay after the ship date."],
            ].map(([num, title, desc]) => (
              <article key={num} className="relative rounded-2xl border border-[#E2E8F0] bg-white px-[26px] py-[32px]">
                <span className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[linear-gradient(180deg,#1E3A8A,#0A2540)]" />
                <p className="font-sora text-[36px] font-bold leading-none text-[#E2E8F0]">{num}</p>
                <h3 className="font-sora mt-3 text-[16px] font-semibold text-[#0A2540]">{title}</h3>
                <p className="mt-2 text-[13px] text-[#64748B]">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F1F5F9]">
        <div className="site-shell">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[rgba(30,58,138,0.08)] px-3 py-1 text-[12px] font-bold uppercase tracking-[0.6px] text-[#1E3A8A]">Our Process</span>
            <h2 className="font-sora mt-4 text-[34px] font-bold text-[#0F172A] max-md:text-[30px]">How We Work</h2>
          </div>
          <div className="process-grid relative grid grid-cols-5 gap-6">
            <div className="absolute left-[8%] right-[8%] top-7 hidden h-[2px] bg-[linear-gradient(90deg,#E2E8F0,#1E3A8A,#E2E8F0)] min-[769px]:block" />
            {processSteps.map(([num, title, desc]) => {
              const active = num === "3";
              return (
                <article key={num} className="relative text-center">
                  <div
                    className={`mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full border-2 font-sora text-[16px] font-semibold ${
                      active
                        ? "border-[#E8761A] bg-[linear-gradient(135deg,#E8761A,#B85C20)] text-white"
                        : "border-[#E2E8F0] bg-white text-[#94A3B8]"
                    }`}
                  >
                    {num}
                  </div>
                  <h3 className="font-sora text-[13px] font-semibold text-[#0A2540]">{title}</h3>
                  <p className="mt-1 text-[12px] text-[#94A3B8]">{desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-pad bg-white">
        <div className="site-shell">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[rgba(30,58,138,0.08)] px-3 py-1 text-[12px] font-bold uppercase tracking-[0.6px] text-[#1E3A8A]">Case Studies</span>
            <h2 className="font-sora mt-4 text-[34px] font-bold text-[#0F172A] max-md:text-[30px]">Portfolio Highlights</h2>
          </div>

          <div className="portfolio-grid grid grid-cols-3 gap-5">
            {[
              {
                title: "FinEdge Dashboard",
                description: "Fintech web app",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
                tags: ["React", "Node.js", "UI/UX"],
              },
              {
                title: "ShopNova App",
                description: "E-commerce mobile app",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=300&fit=crop",
                tags: ["Flutter", "Firebase"],
              },
              {
                title: "MediSync AI",
                description: "Healthcare AI platform",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=300&fit=crop",
                tags: ["Python", "ML", "AWS"],
              },
            ].map((project) => (
              <article key={project.title} className="portfolio-card overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-all duration-200">
                <img src={project.image} alt={project.title} className="h-[190px] w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-sora text-[18px] font-semibold text-[#0A2540]">{project.title}</h3>
                  <p className="text-[13px] text-[#64748B]">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-[5px] bg-[#F1F5F9] px-2 py-1 text-[11px] text-[#475569]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F1F5F9]">
        <div className="site-shell">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[rgba(30,58,138,0.08)] px-3 py-1 text-[12px] font-bold uppercase tracking-[0.6px] text-[#1E3A8A]">Testimonials</span>
            <h2 className="font-sora mt-4 text-[34px] font-bold text-[#0F172A] max-md:text-[30px]">What Clients Say</h2>
          </div>

          <div className="testimonials-grid grid grid-cols-3 gap-5">
            {[
              ["KapishTech transformed our roadmap into a scalable product faster than expected.", "Rajesh M.", "CTO, FinEdge", "RM"],
              ["From UX to deployment, the team felt like co-founders who deeply understood speed.", "Priya S.", "Founder, ShopNova", "PS"],
              ["Excellent engineering discipline and strong support after launch.", "Arjun D.", "PM, MediSync", "AD"],
            ].map(([text, name, role, initials]) => (
              <article key={name} className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
                <p className="font-[Georgia,serif] text-[36px] leading-none text-[#E8761A]">&ldquo;</p>
                <p className="mt-2 text-[14px] italic leading-[1.7] text-[#475569]">{text}</p>
                <p className="mt-3 text-[13px] text-[#E8761A]">★★★★★</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0A2540] font-sora text-xs text-white">{initials}</span>
                  <div>
                    <p className="font-semibold text-[#0F172A]">{name}</p>
                    <p className="text-[12px] text-[#64748B]">{role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="section-pad bg-white">
        <div className="site-shell">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[rgba(30,58,138,0.08)] px-3 py-1 text-[12px] font-bold uppercase tracking-[0.6px] text-[#1E3A8A]">Team</span>
            <h2 className="font-sora mt-4 text-[34px] font-bold text-[#0F172A] max-md:text-[30px]">Founding Leadership</h2>
          </div>

          <div className="team-grid mx-auto grid max-w-[700px] grid-cols-2 gap-5">
            {[
              {
                name: "Kapish",
                role: "Founder & CEO",
                bio: "Visionary builder with a passion for tech and people.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&face",
                ring: "bg-[linear-gradient(135deg,#0A2540,#1E3A8A)]",
              },
              {
                name: "[Second Co-founder]",
                role: "CTO",
                bio: "Full-stack architect who ships fast and thinks long-term.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&face",
                ring: "bg-[linear-gradient(135deg,#0A2540,#1E3A8A)]",
              },
            ].map((member) => (
              <article key={member.name} className="mx-auto w-full max-w-[320px] rounded-2xl border border-[#E2E8F0] bg-white p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(10,37,64,0.1)]">
                <div className={`mx-auto mb-4 grid h-[88px] w-[88px] place-items-center rounded-full p-[3px] ${member.ring}`}>
                  <img src={member.image} alt={member.name} className="h-full w-full rounded-full object-cover" />
                </div>
                <h3 className="font-sora text-[18px] font-semibold text-[#0A2540]">{member.name}</h3>
                <p className="text-[13px] font-semibold text-[#1E3A8A]">{member.role}</p>
                <p className="mt-2 text-[13px] text-[#64748B]">{member.bio}</p>
                <div className="mt-4 flex justify-center gap-2">
                  {["Li", "Tw", "Gh"].map((item) => (
                    <button key={item} type="button" className="grid h-[34px] w-[34px] place-items-center rounded-[8px] border border-[#E2E8F0] text-xs text-[#475569] transition-all duration-200 hover:bg-[#0A2540] hover:text-white">
                      {item}
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad bg-[linear-gradient(135deg,#0A2540,#1E3A8A)] text-white">
        <div className="site-shell text-center">
          <h2 className="font-sora text-[38px] font-bold tracking-[-0.3px] text-white max-md:text-[30px]">Ready to Build Something Great?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[16px] text-white/75">Tell us about your project. We will get back within 24 hours.</p>

          <form className="mx-auto mt-6 flex max-w-[760px] flex-wrap justify-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-[260px] flex-1 rounded-xl border-[1.5px] border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] px-4 py-3 text-sm text-white placeholder:text-[rgba(255,255,255,0.4)] outline-none transition-colors duration-200 focus:border-[#E2E8F0]"
            />
            <button type="submit" className="rounded-[8px] bg-[#E8761A] px-5 py-3 font-sora text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#D4621A]">
              Send Message
            </button>
          </form>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {[
              "Email: hello@kapishtech.com",
              "Phone: +91 98765 43210",
              "Location: India",
            ].map((item) => (
              <span key={item} className="rounded-full border border-[rgba(255,255,255,0.15)] px-3 py-1 text-xs text-white/60">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
