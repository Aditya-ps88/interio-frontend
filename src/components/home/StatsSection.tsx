import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-terracotta/80 rounded-3xl p-8 text-card relative overflow-hidden"
          >
            {/* Decorative wave pattern */}
            <div className="absolute top-4 right-4 w-20 h-20 opacity-30">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M10,50 Q25,30 40,50 T70,50 T100,50" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M10,60 Q25,40 40,60 T70,60 T100,60" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M10,70 Q25,50 40,70 T70,70 T100,70" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            
            <p className="text-card/90 text-sm mb-6 font-medium">
              Explore Every Style.<br />
              Discover Every Space
            </p>
            
            <div className="flex gap-8 mt-8">
              <div>
                <p className="font-serif text-4xl font-bold">500+</p>
                <p className="text-card/80 text-sm mt-1">Furniture<br />Pamphlets</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold">50+</p>
                <p className="text-card/80 text-sm mt-1">Categories</p>
              </div>
            </div>
          </motion.div>

          {/* Who We Are Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-amber-50/80 rounded-3xl p-8"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Who <span className="text-green-600">We Are</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We craft sophisticated interior spaces where contemporary aesthetics meet thoughtful functionality.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-3">
              Let us transform your home into a luxurious sanctuary—where style, comfort, and personalized elegance harmoniously coexist.
            </p>
          </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-amber-50/60 rounded-3xl p-4 aspect-video overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop"
                alt="Interior design showcase"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="bg-amber-50/60 rounded-3xl p-4 aspect-video overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop"
                alt="Living room design"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;