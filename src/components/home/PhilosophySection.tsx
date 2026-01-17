import { motion } from "framer-motion";
import philosophyImage from "@/assets/philosophy-room.jpg";

const PhilosophySection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-card rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-lg"
      >
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6">
              Our Philosophy
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Our philosophy is to redefine modern living by blending contemporary 
              aesthetics with thoughtful functionality. We craft sophisticated interior 
              spaces where style, comfort, and personalized elegance harmoniously coexist 
              to transform your house into a tranquil retreat and a timeless luxurious sanctuary.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <img
              src={philosophyImage}
              alt="Elegant interior design"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PhilosophySection;
