"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahim Uddin",
    role: "Regular Customer",
    image: "https://i.pravatar.cc/150?img=12",
    message:
      "Amazing service and fast delivery. Product quality exceeded my expectations. Will definitely buy again.",
  },
  {
    name: "Karim Hasan",
    role: "Verified Buyer",
    image: "https://i.pravatar.cc/150?img=32",
    message:
      "Affordable pricing with premium quality. Customer support was also very responsive and helpful.",
  },
  {
    name: "Sadia Khan",
    role: "Happy Customer",
    image: "https://i.pravatar.cc/150?img=47",
    message:
      "I love the smooth shopping experience. Everything feels well organized and easy to use.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-gray-500 mb-12">
          Real feedback from real buyers who trust our service
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md p-6 text-left border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="rounded-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">{item.message}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
