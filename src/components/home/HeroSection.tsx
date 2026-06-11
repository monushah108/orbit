import { Play, MessageCircle, Users, Video, Radio } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#6C63FF]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Where Communities{" "}
                <span className="bg-gradient-to-r from-[#6C63FF] to-[#22D3EE] bg-clip-text text-transparent">
                  Come to Life
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-xl">
                Create spaces, meet people, chat instantly, join voice channels, and connect through
                high-quality video conversations—all in one platform.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6] rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-[#6C63FF]/25">
                Get Started Free
              </button>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#1a1f2e] to-[#0B0F19] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <MessageCircle className="w-4 h-4" />
                      <span>general-chat</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#8B5CF6]" />
                        <div className="flex-1">
                          <p className="text-sm text-white/90">Hey everyone! 👋</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#6C63FF]" />
                        <div className="flex-1">
                          <p className="text-sm text-white/90">Welcome to Orbit!</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Users className="w-4 h-4" />
                      <span>Online</span>
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#8B5CF6]" />
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Radio className="w-4 h-4" />
                      <span>Voice Room</span>
                    </div>
                    <div className="flex gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#22D3EE]" />
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Video className="w-4 h-4" />
                      <span>Video Call</span>
                    </div>
                    <div className="flex gap-2">
                      {[1, 2].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#22D3EE]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-[#6C63FF]/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#22D3EE]/20 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
