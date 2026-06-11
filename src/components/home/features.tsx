import { MessageCircle, Radio, Video, Globe, Shield, Lock } from "lucide-react";
import { motion } from "motion/react";

export function Features() {
  const features = [
    {
      icon: MessageCircle,
      title: "Real-Time Chat",
      description: "Instant messaging with lightning-fast delivery.",
      gradient: "from-[#6C63FF] to-[#8B5CF6]",
    },
    {
      icon: Radio,
      title: "Voice Channels",
      description: "Drop into conversations anytime.",
      gradient: "from-[#8B5CF6] to-[#22D3EE]",
    },
    {
      icon: Video,
      title: "HD Video Calls",
      description: "Crystal-clear communication with friends.",
      gradient: "from-[#22D3EE] to-[#6C63FF]",
    },
    {
      icon: Globe,
      title: "Community Spaces",
      description: "Create public or private communities.",
      gradient: "from-[#6C63FF] to-[#22D3EE]",
    },
    {
      icon: Shield,
      title: "Smart Moderation",
      description: "Powerful tools to keep communities healthy.",
      gradient: "from-[#8B5CF6] to-[#6C63FF]",
    },
    {
      icon: Lock,
      title: "Secure Authentication",
      description: "Google login and secure account protection.",
      gradient: "from-[#22D3EE] to-[#8B5CF6]",
    },
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#22D3EE] bg-clip-text text-transparent">
              Stay Connected
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/0 to-[#22D3EE]/0 group-hover:from-[#6C63FF]/5 group-hover:to-[#22D3EE]/5 rounded-2xl transition-all duration-300" />

              <div className="relative space-y-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
