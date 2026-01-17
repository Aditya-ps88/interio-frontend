import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProjectSection from "@/components/home/FeaturedProjectSection";
import ValuesSection from "@/components/home/ValuesSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedProjectSection />
        <ValuesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
