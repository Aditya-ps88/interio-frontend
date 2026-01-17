import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import featuredImage from "@/assets/featured-1.jpg";

const FeaturedProjectSection = () => {
  return (
    <section className="py-8 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
              Tranquil Modern<br />
              Dining Retreat
            </h2>
            
            <p className="text-terracotta text-sm md:text-base leading-relaxed mb-8">
              A sleek, light-filled dining area with floor-to-ceiling windows and views of lush greenery. 
              Soft wood floors, minimal furnishings, and muted tones create a calming, elegant atmosphere.
            </p>
            
            <Link to="/explore">
              <Button
                variant="outline"
                className="rounded-3xl px-8 py-5 text-sm font-medium border-terracotta/30 hover:bg-terracotta/10 hover-scale"
              >
                Portfolio
              </Button>
            </Link>
          </div>

          {/* Image with Glass Overlay */}
          <div className="relative">
            {/* Decorative glass curve */}
            <div className="absolute -top-4 -left-4 w-32 h-32 glass rounded-full z-10" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-0 rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={featuredImage}
                alt="Modern dining room with greenery views"
                className="w-full h-64 md:h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProjectSection;