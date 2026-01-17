import { motion } from "framer-motion";

const StatsBar = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 -mt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="stats-gradient rounded-full py-5 px-8 md:px-16 flex justify-center items-center gap-8 md:gap-16 max-w-3xl mx-auto"
      >
        <div className="text-center">
          <span className="font-serif text-3xl md:text-4xl font-bold text-card">500+</span>
          <span className="text-card/90 text-sm md:text-base ml-2">Furniture Pamphlets</span>
        </div>
        
        <div className="w-px h-8 bg-card/30" />
        
        <div className="text-center">
          <span className="font-serif text-3xl md:text-4xl font-bold text-card">50+</span>
          <span className="text-card/90 text-sm md:text-base ml-2">Categories</span>
        </div>
      </motion.div>
    </section>
  );
};

export default StatsBar;
