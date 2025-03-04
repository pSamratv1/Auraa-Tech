import React from "react";
import { motion } from "framer-motion";

const HeroSectionContent = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-600 text-white overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-[url('/path-to-your-image.jpg')] bg-cover bg-center opacity-20"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Elevate Your Business with{" "}
          <span className="text-yellow-400">Powerful Digital Marketing</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-200"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We help businesses grow with expert strategies, cutting-edge
          analytics, and high-performing campaigns.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionContent;
