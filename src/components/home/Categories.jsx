"use client";

import { motion } from "framer-motion";
import { FaMobileAlt, FaLaptop, FaTshirt } from "react-icons/fa";

const categories = [
  { name: "Electronics", icon: <FaLaptop size={26} /> },
  { name: "Fashion", icon: <FaTshirt size={26} /> },
  { name: "Mobile", icon: <FaMobileAlt size={26} /> },
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
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const Categories = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-5">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Shop by Category</h2>
        <p className="text-slate-500 mt-2">Explore products by your interest</p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition cursor-pointer"
          >
            {/* Icon */}
            <div className="flex justify-center text-blue-600 mb-4">
              {cat.icon}
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-slate-800">{cat.name}</h3>

            {/* Small text */}
            <p className="text-sm text-slate-500 mt-2">
              Browse {cat.name.toLowerCase()} products
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Categories;
