"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Keunggulan() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center dark:bg-[#111] rounded-3xl">
        {/* Left: Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Keunggulan di Spade
          </h2>

          <div className="space-y-5 mb-8">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">Anti Lag</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Body text for whatever you'd like to expand on the main point.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">Equipment terbaik</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">Group Community</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Body text for whatever you'd like to add more to the main point. It provides details, explanations, and context.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="px-5 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition">
              Book now
            </button>
            <button className="px-5 py-2 border border-gray-400 dark:border-gray-500 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white transition">
              Join Group
            </button>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
          className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-sm"
        >
          <Image
            src="/assets/kemanggisan.png"
            alt="Keunggulan Spade"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
