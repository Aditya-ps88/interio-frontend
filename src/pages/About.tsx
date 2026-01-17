import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import StatsBar from "@/components/home/StatsBar";
import ValuesSection from "@/components/home/ValuesSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophySection />
        <StatsBar />
        <ValuesSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
