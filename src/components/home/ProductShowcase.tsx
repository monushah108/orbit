import { MessageCircle, Hash, Users, Radio, Bell, Settings } from "lucide-react";
import { motion } from "motion/react";

export function ProductShowcase() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6C63FF]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            A Platform Built for{" "}
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#22D3EE] bg-clip-text text-transparent">
              Connection
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Experience seamless communication with our beautifully designed interface
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0B0F19] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="flex">
              <div className="w-64 bg-[#0B0F19] border-r border-white/10 p-4 space-y-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-white/40 px-2 mb-2">
                    <Hash className="w-3 h-3" />
                    <span>CHANNELS</span>
                  </div>
                  <div className="space-y-1">
                    {["general", "announcements", "random", "voice-chat"].map((channel) => (
                      <div
                        key={channel}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                      >
                        <Hash className="w-4 h-4 text-white/40" />
                        <span className="text-sm text-white/60">{channel}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-white/40 px-2 mb-2">
                    <Radio className="w-3 h-3" />
                    <span>VOICE</span>
                  </div>
                  <div className="space-y-1">
                    {["Lounge", "Gaming Room"].map((room) => (
                      <div
                        key={room}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                      >
                        <Radio className="w-4 h-4 text-white/40" />
                        <span className="text-sm text-white/60">{room}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Hash className="w-5 h-5 text-white/60" />
                    <span className="font-semibold">general</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-white/40 hover:text-white/60 cursor-pointer transition-colors" />
                    <Users className="w-5 h-5 text-white/40 hover:text-white/60 cursor-pointer transition-colors" />
                    <Settings className="w-5 h-5 text-white/40 hover:text-white/60 cursor-pointer transition-colors" />
                  </div>
                </div>

                <div className="flex-1 p-6 space-y-4">
                  {[
                    { user: "Sarah", message: "Hey team! Just pushed the new features 🚀", color: "from-[#6C63FF] to-[#8B5CF6]" },
                    { user: "Alex", message: "Looking great! Testing it now", color: "from-[#22D3EE] to-[#6C63FF]" },
                    { user: "Jordan", message: "The new UI is amazing! Love the dark mode", color: "from-[#8B5CF6] to-[#22D3EE]" },
                  ].map((msg, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${msg.color} flex-shrink-0`} />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">{msg.user}</span>
                          <span className="text-xs text-white/40">2:34 PM</span>
                        </div>
                        <p className="text-sm text-white/80">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 p-4">
                  <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
                    <MessageCircle className="w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      placeholder="Message #general"
                      className="flex-1 bg-transparent text-sm outline-none text-white/80 placeholder:text-white/40"
                    />
                  </div>
                </div>
              </div>

              <div className="w-56 bg-[#0B0F19] border-l border-white/10 p-4">
                <div className="space-y-1">
                  <div className="text-xs text-white/40 mb-3">MEMBERS — 24</div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="relative">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#8B5CF6]" />
                          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0B0F19]" />
                        </div>
                        <span className="text-sm text-white/60">Member {i}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-8 -right-8 w-32 h-32 bg-[#6C63FF]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#22D3EE]/20 rounded-full blur-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
