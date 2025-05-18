"use client";

import { motion } from "framer-motion";

const PlayNowSection = () => {
  return (
    <section className="relative bg-[#f9f9f9] px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Play now
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-10">
          Rasakan pengalaman bermain terbaik dengan perangkat premium, koneksi stabil, dan lingkungan nyaman bersama komunitas kami.
        </p>

        <div className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-black text-white text-base px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Book
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gray-200 text-black text-base px-6 py-3 rounded-md hover:bg-gray-300 transition"
          >
            Join Group
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default PlayNowSection;
