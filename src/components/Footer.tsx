import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A2540] pt-16 text-white/60">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <div className="footer-grid grid grid-cols-4 gap-10 pb-10">
          <div>
            <Link href="/" className="font-sora text-2xl font-bold text-white">
              Kapish<span className="text-[#E8761A]">Tech</span>
            </Link>
            <p className="mt-3 text-sm">Built on Values. Powered by Technology</p>
            <p className="mt-2 max-w-sm text-sm">
              Full-service digital product partner for startups, mid-size companies, and enterprises.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-sora text-[13px] font-semibold uppercase tracking-[0.5px] text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#services" className="transition-colors hover:text-white">Web Development</Link></li>
              <li><Link href="/#services" className="transition-colors hover:text-white">Mobile Apps</Link></li>
              <li><Link href="/#services" className="transition-colors hover:text-white">AI / ML Solutions</Link></li>
              <li><Link href="/#services" className="transition-colors hover:text-white">Cloud & DevOps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-sora text-[13px] font-semibold uppercase tracking-[0.5px] text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#about" className="transition-colors hover:text-white">About</Link></li>
              <li><Link href="/#team" className="transition-colors hover:text-white">Team</Link></li>
              <li><Link href="#" className="transition-colors hover:text-white">Blog</Link></li>
              <li><Link href="#" className="transition-colors hover:text-white">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-sora text-[13px] font-semibold uppercase tracking-[0.5px] text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@kapishtech.com" className="transition-colors hover:text-white">hello@kapishtech.com</a></li>
              <li><a href="tel:+919876543210" className="transition-colors hover:text-white">+91 98765 43210</a></li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-4 text-sm md:flex-row md:items-center md:justify-between">
          <p>© 2025 Kapish Technologies. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="transition-colors hover:text-white">Privacy Policy</Link>
            <span>·</span>
            <Link href="#" className="transition-colors hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
