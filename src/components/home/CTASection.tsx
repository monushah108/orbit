import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/20 via-[#8B5CF6]/20 to-[#22D3EE]/20" />
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C63FF]/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22D3EE]/30 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <Sparkles className="w-4 h-4 text-[#22D3EE]" />
          <span className="text-sm">Join 50,000+ users already on Orbit</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Start Building Your{" "}
          <span className="bg-gradient-to-r from-[#6C63FF] to-[#22D3EE] bg-clip-text text-transparent">
            Community Today
          </span>
        </h2>

        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
          Create spaces, meet people, and stay connected from anywhere. Get started in seconds.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="group px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6] rounded-xl hover:opacity-90 transition-all shadow-lg shadow-[#6C63FF]/25 flex items-center gap-2">
            <span>Create Community</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-colors">
            Join Orbit
          </button>
        </div>

        <p className="text-sm text-white/50 mt-8">Free forever. No credit card required.</p>
      </motion.div>
    </section>
  );
}
