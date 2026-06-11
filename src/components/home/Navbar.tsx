import { Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

export function Navbar() {
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);
  const navY = useTransform(scrollY, [0, 100], [0, 0]);

  return (
    <motion.nav
      style={{ opacity: navOpacity, y: navY }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0B0F19]/80 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#8B5CF6] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold">Orbit</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm text-white/70 hover:text-white transition-colors">
              Home
            </a>
            <a href="#features" className="text-sm text-white/70 hover:text-white transition-colors">
              Features
            </a>
            <a href="#communities" className="text-sm text-white/70 hover:text-white transition-colors">
              Communities
            </a>
            <a href="#pricing" className="text-sm text-white/70 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#blog" className="text-sm text-white/70 hover:text-white transition-colors">
              Blog
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2 text-sm text-white/90 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="px-5 py-2 text-sm bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6] rounded-lg hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
