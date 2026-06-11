import { Communities } from "@/components/home/Communities";
import { CTASection } from "@/components/home/CTASection";
import { Features } from "@/components/home/Features";
import { Footer } from "@/components/home/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { Navbar } from "@/components/home/Navbar";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { SocialProof } from "@/components/home/SocialProof";
import { Testimonials } from "@/components/home/Testimonials";
import { VideoCallShowcase } from "@/components/home/VideoCallShowcase";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <Features />
      <ProductShowcase />
      <Communities />
      <VideoCallShowcase />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
