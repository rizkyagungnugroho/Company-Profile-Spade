"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Kiri: teks */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">About</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Spade Gaming Space</p>
            <p className="mb-4 font-semibold text-gray-800 dark:text-gray-200">
              Spade Gaming Space adalah pilihan tepat bagi para gamer yang mencari tempat bermain dengan fasilitas lengkap dan harga terjangkau di Jakarta.
            </p>
            <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-300">
              Spade Gaming Space merupakan warnet gaming yang menyediakan fasilitas seperti PC dengan spesifikasi tinggi, koneksi internet cepat, 
              dan kursi gaming ergonomis. Tempat ini cocok bagi para gamer yang ingin bermain game online dengan nyaman.
            </p>
          </div>

          {/* Kanan: gambar */}
          <div className="flex-shrink-0 w-64 h-80 relative rounded-lg overflow-hidden">
            <Image
              src="/assets/spade.jpg"
              alt="Portrait"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Section bawah: Play now */}
      <section className="relative bg-[#f9f9f9] dark:bg-[#121212] px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Play now
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-10">
            Rasakan pengalaman bermain terbaik dengan perangkat premium, koneksi stabil, dan lingkungan nyaman bersama komunitas kami.
          </p>

          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-black text-white dark:bg-white dark:text-black text-base px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              Book
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gray-200 text-black dark:bg-gray-800 dark:text-white text-base px-6 py-3 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
              Join Group
            </motion.button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
