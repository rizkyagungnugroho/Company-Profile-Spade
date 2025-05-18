"use client";
import Image from "next/image";
import { Monitor, Gamepad2, Coffee } from "lucide-react";
import { motion } from "framer-motion";

const branches = [
  {
    title: "PC Gaming",
    description: "Nikmati suasana cozy di cabang kami yang terletak di jantung Karawaci.",
    image: "/assets/pcgaming.png",
    icon: <Monitor className="w-5 h-5 text-indigo-500" />,
  },
  {
    title: "Playstation 4",
    description: "Temukan pengalaman baru dengan rasa dan atmosfer yang istimewa.",
    image: "/assets/ps.png",
    icon: <Gamepad2 className="w-5 h-5 text-rose-500" />,
  },
  {
    title: "Cafe",
    description: "Tempat nongkrong nyaman dengan vibes khas Jakarta Selatan.",
    image: "/assets/cafe.png",
    icon: <Coffee className="w-5 h-5 text-amber-500" />,
  },
];

// Variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Jenis() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {branches.map((branch, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={branch.image}
                alt={branch.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-gray-100 p-2 rounded-full">
                  {branch.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 tracking-tight">
                  {branch.title}
                </h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {branch.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
