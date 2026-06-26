"use client";

import products from "@/data/products";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const productVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Featured Products
          </h2>
          <p className="text-slate-500 mt-2">Handpicked items for you</p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7"
        >
          {products.slice(0, 3).map((product) => (
            <motion.div
              key={product.id}
              variants={productVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 line-clamp-1">
                  {product.title}
                </h3>

                <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                  {product.shortDescription}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-xl font-bold text-blue-600">
                    ${product.price}
                  </p>

                  <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
