import { Star } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { motion } from "motion/react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Community Manager @ TechHub",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc4MDkwNzQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "Orbit made it effortless to connect and collaborate with our global community. The interface is beautiful and the features are exactly what we needed.",
    },
    {
      name: "Michael Rodriguez",
      role: "Founder @ DevCommunity",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc4MDkwNzQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "We switched from Discord to Orbit and never looked back. The video quality is amazing and the moderation tools are top-notch.",
    },
    {
      name: "Emma Thompson",
      role: "Lead @ Creative Collective",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc4MDkwNzQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "The perfect platform for creative collaboration. Voice channels and screen sharing make brainstorming sessions feel like we're in the same room.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Loved by{" "}
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#22D3EE] bg-clip-text text-transparent">
              Communities
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            See what community leaders are saying about Orbit
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#22D3EE] text-[#22D3EE]" />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed">{testimonial.quote}</p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
