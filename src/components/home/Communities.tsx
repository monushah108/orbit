import { Users } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { motion } from "motion/react";

export function Communities() {
  const communities = [
    {
      name: "Gaming",
      members: "12.5K",
      image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMGNvbG9yZnVsJTIwbGlnaHRzfGVufDF8fHx8MTc4MDkwNzQ3NHww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-[#6C63FF] to-[#8B5CF6]",
    },
    {
      name: "Developers",
      members: "8.3K",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZ3xlbnwxfHx8fDE3ODA5MDc0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-[#22D3EE] to-[#6C63FF]",
    },
    {
      name: "Anime",
      members: "15.2K",
      image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGphcGFuZXNlJTIwY3VsdHVyZXxlbnwxfHx8fDE3ODA5MDc0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-[#8B5CF6] to-[#22D3EE]",
    },
    {
      name: "Startups",
      members: "6.7K",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwdGVhbXxlbnwxfHx8fDE3ODA5MDc0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-[#6C63FF] to-[#22D3EE]",
    },
    {
      name: "Education",
      members: "9.1K",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzgwOTA3NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-[#8B5CF6] to-[#6C63FF]",
    },
    {
      name: "Music",
      members: "11.4K",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3ODA5MDc0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-[#22D3EE] to-[#8B5CF6]",
    },
  ];

  return (
    <section id="communities" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Build Your Own{" "}
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#22D3EE] bg-clip-text text-transparent">
              Digital World
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Join thriving communities or create your own space for your passions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={community.image}
                  alt={community.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${community.gradient} opacity-40`} />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{community.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Users className="w-4 h-4" />
                    <span>{community.members} members</span>
                  </div>
                </div>

                <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${community.gradient} hover:opacity-90 transition-opacity`}>
                  Join Community
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
