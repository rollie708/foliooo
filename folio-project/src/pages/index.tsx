import { Navigation } from "@/components/navigation/Navigation";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { HowItWorksSection } from "@/components/how-it-works/HowItWorksSection";
import { RoadmapSection } from "@/components/roadmap/RoadmapSection";
import { ComingSoonSection } from "@/components/coming-soon/ComingSoonSection";
import { Footer } from "@/components/footer/Footer";
import { TerminalDemo } from "@/components/terminal/TerminalDemo";

export const HomePage = () => {
  return (
    <main>
      <Navigation />

      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RoadmapSection />
      <ComingSoonSection />
      <TerminalDemo />
      <Footer />
    </main>
  );
};