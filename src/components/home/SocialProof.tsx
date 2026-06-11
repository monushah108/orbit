import { Users, Globe, MessageSquare, Zap } from "lucide-react";
import { motion } from "motion/react";

export function SocialProof() {
  const stats = [
    { icon: Users, label: "Users", value: "50,000+" },
    { icon: Globe, label: "Communities", value: "5,000+" },
    { icon: MessageSquare, label: "Messages Sent", value: "1M+" },
    { icon: Zap, label: "Uptime", value: "99.9%" },
  ];

  return (
    <section className="py-16 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center space-y-3"
            >
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6C63FF]/20 to-[#8B5CF6]/20 border border-white/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-[#6C63FF]" />
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
