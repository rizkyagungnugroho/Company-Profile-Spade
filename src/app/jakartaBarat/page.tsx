"use client";
import { motion } from "framer-motion";
import MapIframe from "@/components/MapIframe";

export default function Home() {
  return (
    <main className="font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative">
        <div
          className="w-full h-[40vh] md:h-[60vh] bg-center bg-cover relative"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1494322296366-b46227baa318?q=80&w=2075&auto=format&fit=crop')",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-start p-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-5xl font-bold text-white mb-2"
            >
              Spade GamingSpace Kemanggisan (Jakarta Barat)
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white mb-4"
            >
              Rasakan pengalaman bermain yang terbaik di Spade
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-white dark:bg-gray-200 text-black px-6 py-2 rounded-lg shadow-md hover:shadow-xl transition"
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </section>

      {/* PC Options */}
      <section className="p-6 space-y-16 max-w-6xl mx-auto">
        {/* Premium PC */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-2 border-b-2 border-gray-300 dark:border-gray-700 inline-block pb-1">
            Premium PC
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Smooth and play everytime
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Monitor: MSI OPTIX 144Hz</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Processor: Intel Core i5 Gen 9</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">RAM: 16 GB</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Keyboard: Fantech K611</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Mouse: Logitech G102</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Headset: Rexus Vonix F55</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Chair: Gaming Chair Medium Back</li>
            </ul>
            <div className="w-full h-64 md:h-80 relative rounded-xl shadow-lg overflow-hidden">
              <img
                src="/assets/pcgaming.png"
                alt="Premium PC"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* VIP PC */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-2 border-b-2 border-gray-300 dark:border-gray-700 inline-block pb-1">
            VIP PC
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Powerful and immersive gaming setup
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Monitor: ASUS TUF VG27AQ 165Hz</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Processor: Intel Core i7 Gen 11</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">RAM: 32 GB</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Keyboard: Razer Cynosa</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Mouse: Razer DeathAdder V2</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Headset: HyperX Cloud Stinger</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Chair: Secretlab TITAN Evo</li>
            </ul>
            <div className="w-full h-64 md:h-80 relative rounded-xl shadow-lg overflow-hidden">
              <img
                src="/assets/pcgaming.png"
                alt="VIP PC"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Arena PC */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-2 border-b-2 border-gray-300 dark:border-gray-700 inline-block pb-1">
            Arena PC
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Team battle experience with maximum performance
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Monitor: BENQ ZOWIE XL2546 240Hz</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Processor: AMD Ryzen 7 5800X</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">RAM: 32 GB DDR4</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Keyboard: SteelSeries Apex 7</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Mouse: Logitech G Pro X Superlight</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Headset: SteelSeries Arctis 5</li>
              <li className="border-b pb-1 border-gray-200 dark:border-gray-700">Chair: Anda Seat Kaiser 3</li>
            </ul>
            <div className="w-full h-64 md:h-80 relative rounded-xl shadow-lg overflow-hidden">
              <img
                src="/assets/pcgaming.png"
                alt="Arena PC"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Cafe Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-2 border-b-2 border-gray-300 dark:border-gray-700 inline-block pb-1">
            Cafe
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Eat and drink accompany gaming with Spade
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li>Mie goreng</li>
              <li>Nasi goreng</li>
              <li>Aneka gorengan</li>
              <li>And many more</li>
            </ul>
            <div className="w-full h-64 md:h-80 relative rounded-xl shadow-lg overflow-hidden">
              <img
                src="/assets/cafe1.jpg"
                alt="Cafe Food"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 🗺️ Map Cabang Kemanggisan */}
      <section className="px-4 py-3 mb-7">
        <div className="max-w-6xl mx-auto">
          <MapIframe location="Spade Gaming Kemanggisan, Jakarta Barat" />
        </div>
      </section>
    </main>
  );
}
