"use client";

import { motion } from "framer-motion";
import { FaShippingFast, FaStar, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast size={28} />,
    title: "Fast Delivery",
    desc: "We deliver products quickly and safely to your doorstep.",
  },
  {
    icon: <FaStar size={28} />,
    title: "Best Quality",
    desc: "We ensure high-quality and verified products for customers.",
  },
  {
    icon: <FaHeadset size={28} />,
    title: "24/7 Support",
    desc: "Our support team is always available to help you anytime.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why Choose Us
          </h2>

          <p className="text-slate-500 mt-2">
            We provide the best shopping experience for you
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="text-slate-500 mt-3 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
