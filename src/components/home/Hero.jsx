"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Find Products That Match Your Lifestyle
          </h1>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Discover quality products at fair prices with fast and reliable
            delivery.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 relative z-10">
            <Link
              href="/items"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl font-medium shadow-md text-center"
            >
              Shop Now
            </Link>

            <Link
              href="/items/add"
              className="border border-gray-300 hover:border-gray-400 transition text-gray-700 px-6 py-3 rounded-xl font-medium text-center"
            >
              Add New Product
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <div className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Hero Image"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
