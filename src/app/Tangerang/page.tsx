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
              Spade GamingSpace Karawaci (Tangerang)
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
 {[
  {
    title: "REGULAR PC",
    image: "/assets/pcgaming.png",
    specs: [
      "Monitor: MSI OPTIX 144HZ",
      "Processor: INTEL CORE I5 GEN 9",
      "RAM: 16 GB",
    ],
  },
  {
    title: "VIP PC",
    image: "/assets/pcgaming.png",
    specs: [
      "Monitor: SAMSUNG ODYSSEY 165HZ",
      "Processor: INTEL CORE I9 GEN 9",
      "RAM: 16 GB",
    ],
  },
  {
    title: "Arena PC",
    image: "/assets/pcgaming.png",
    specs: [
      "Monitor: SAMSUNG ODYSSEY 240HZ",
      "Processor: INTEL CORE I5 GEN 12",
      "RAM: 32 GB",
    ],
  },
].map(({ title, image, specs }) => (
  <motion.div
    key={title}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl font-bold mb-2 border-b-2 border-gray-300 dark:border-gray-700 inline-block pb-1">
      {title}
    </h2>
    <p className="text-gray-600 dark:text-gray-400 mb-4">
      Smooth and play everytime
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
        {specs.map((spec, index) => (
          <li key={index} className="border-b pb-1 border-gray-200 dark:border-gray-700">
            {spec}
          </li>
        ))}
      </ul>
      <div className="w-full h-64 md:h-80 relative rounded-xl shadow-lg overflow-hidden">
        <img
          src={image}
          alt={`${title} setup`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </motion.div>
))}

      </section>

      {/* 🗺️ Map Cabang Kemanggisan */}
      <section className="px-4 py-3 mb-7">
        <div className="max-w-6xl mx-auto">
          <MapIframe location="Spade Gaming Karawaci, Tangerang" />
        </div>
      </section>
    </main>
  );
}
