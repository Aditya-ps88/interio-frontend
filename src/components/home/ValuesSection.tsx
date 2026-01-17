import { motion } from "framer-motion";
import { Settings, Waves, Sparkles } from "lucide-react";

const values = [
  {
    title: "Timeless Elegance",
    description: "Creating personalized elegance that transcends passing trends and remains relevant for years",
    icon: null,
    gradient: true,
  },
  {
    title: "Thoughtful Functionality",
    description: "Blending contemporary aesthetics with practical utility to enhance every aspect of your daily life.",
    icon: Settings,
    gradient: false,
  },
  {
    title: "Curated Tranquility",
    description: "Designing light-filled, luxurious sanctuaries that serve as a calming retreat from the world.",
    icon: Waves,
    gradient: false,
  },
  {
    title: "Modern Innovation",
    description: "Redefining the modern home by unlocking its true potential through fresh design and high-quality craftsmanship.",
    icon: Sparkles,
    gradient: false,
  },
];

const ValuesSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-serif text-3xl md:text-4xl text-primary text-center mb-12"
      >
        Our Values
      </motion.h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`
              value-card-curve bg-card p-6 md:p-8 text-center shadow-md hover-scale
              ${value.gradient ? "relative overflow-hidden" : ""}
            `}
          >
            {value.gradient && (
              <div className="absolute top-0 left-0 right-0 h-24 stats-gradient rounded-t-full" />
            )}
            
            {value.icon && (
              <div className="flex justify-center mb-4">
                <value.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              </div>
            )}
            
            <h3 className={`font-serif text-sm md:text-base font-semibold text-primary mb-3 ${value.gradient ? "relative z-10 mt-16" : ""}`}>
              {value.title}
            </h3>
            
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
