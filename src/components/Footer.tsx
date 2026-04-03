import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-indigo-500/20">
                K
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                Kapish<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-400">Tech</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm font-medium">
              We Build What Your Business Needs. Turning Ideas Into Digital Reality. Design. Develop. Deliver.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white hover:border-transparent transition-all">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white hover:border-transparent transition-all">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white hover:border-transparent transition-all">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white hover:border-transparent transition-all">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-wider">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-slate-400 hover:text-white text-sm transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-wider">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white text-sm transition-colors">App Development</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white text-sm transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-wider">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="mailto:office.kapishtech@gmail.com" className="text-slate-400 hover:text-white text-sm transition-colors">office.kapishtech@gmail.com</a></li>
              <li><a href="tel:+919098309221" className="text-slate-400 hover:text-white text-sm transition-colors">+91 90983 09221</a></li>
              <li className="text-slate-400 text-sm">India</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>Kapish Technologies &copy; 2026. Building modern digital solutions for businesses worldwide.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
