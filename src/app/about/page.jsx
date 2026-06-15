"use client";

import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaShoppingBag,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function AboutPage() {
  const features = [
    {
      icon: <FaShoppingBag size={32} />,
      title: "Quality Products",
      description:
        "We provide carefully selected products with premium quality and reliability.",
    },
    {
      icon: <FaShippingFast size={32} />,
      title: "Fast Delivery",
      description: "Get your favorite products delivered quickly and securely.",
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: "Secure Shopping",
      description:
        "Your shopping experience is protected with secure authentication and safe transactions.",
    },
    {
      icon: <FaHeadset size={32} />,
      title: "24/7 Support",
      description:
        "Our support team is always available to assist you whenever needed.",
    },
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-5 py-24 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold">About Revenio Shop</h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
            Revenio Shop is a modern e-commerce platform designed to provide a
            simple, secure, and enjoyable shopping experience for customers
            across different categories.
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200"
              alt="About Us"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-blue-600 font-semibold uppercase">
              Who We Are
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Building Better Online Shopping Experiences
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Our mission is to connect customers with high-quality products
              through a modern and user-friendly shopping platform. We focus on
              delivering value, trust, and convenience while ensuring a smooth
              browsing experience.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              This project was built using Next.js, Tailwind CSS, Firebase
              Authentication, and modern frontend development practices to
              demonstrate a professional e-commerce application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-5 pb-20">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold"
          >
            Why Choose Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 mt-3"
          >
            Everything you need for a seamless shopping experience.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>

              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-5"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">500+</h3>
              <p className="text-gray-600 mt-2">Products</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">1K+</h3>
              <p className="text-gray-600 mt-2">Customers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">98%</h3>
              <p className="text-gray-600 mt-2">Satisfaction</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
              <p className="text-gray-600 mt-2">Support</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-5 text-center"
        >
          <h2 className="text-4xl font-bold">Start Shopping Today</h2>

          <p className="mt-4 text-gray-600">
            Discover amazing products and enjoy a modern shopping experience
            with Revenio Shop.
          </p>

          <a
            href="/items"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
          >
            Explore Products
          </a>
        </motion.div>
      </section>
    </main>
  );
}
