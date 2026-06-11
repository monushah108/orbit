import { Video, Mic, MonitorUp, Users, Smile, MoreVertical } from "lucide-react";
import { motion } from "motion/react";

export function VideoCallShowcase() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B5CF6]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Face-to-Face from{" "}
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#22D3EE] bg-clip-text text-transparent">
              Anywhere
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Crystal-clear video calls with screen sharing and real-time collaboration
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
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "Sarah", color: "from-[#6C63FF] to-[#8B5CF6]" },
                  { name: "Alex", color: "from-[#22D3EE] to-[#6C63FF]" },
                  { name: "Jordan", color: "from-[#8B5CF6] to-[#22D3EE]" },
                  { name: "Taylor", color: "from-[#6C63FF] to-[#22D3EE]" },
                  { name: "Morgan", color: "from-[#8B5CF6] to-[#6C63FF]" },
                  { name: "You", color: "from-[#22D3EE] to-[#8B5CF6]" },
                ].map((participant, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-video bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${participant.color} opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${participant.color}`} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{participant.name}</span>
                        <div className="flex items-center gap-1">
                          <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Mic className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                        <Mic className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                        <Video className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                        <MonitorUp className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                      <Users className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                      <Smile className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>

                  <button className="px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors">
                    Leave Call
                  </button>
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
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-8 -left-8 w-32 h-32 bg-[#8B5CF6]/20 rounded-full blur-3xl"
          />
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
            className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#22D3EE]/20 rounded-full blur-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
