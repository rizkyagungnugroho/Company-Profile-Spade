"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const branches = [
  {
    title: "Karawaci (Tangerang)",
    description: "Nikmati suasana cozy di cabang kami yang terletak di jantung Karawaci.",
    image: "/assets/kemanggisan.png",
    link: "/Tangerang", // 👈 Ditambahkan
  },
  {
    title: "Kemanggisan (Jakarta Barat)",
    description: "Temukan pengalaman baru dengan rasa dan atmosfer yang istimewa.",
    image: "/assets/kemanggisan.png",
    link: "/jakartaBarat", // 👈 Ditambahkan
  },
  {
    title: "Mampang (Jakarta Selatan)",
    description: "Tempat nongkrong nyaman dengan vibes khas Jakarta Selatan.",
    image: "/assets/kemanggisan.png",
    link: "/jakartaSelatan", // 👈 Ditambahkan
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function BranchCards() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10 text-center">
        Cabang
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {branches.map((branch, index) => (
          <Link key={index} href={branch.link}>
            <motion.div
              className="bg-white dark:bg-[#111] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="relative w-full h-52">
                <Image
                  src={branch.image}
                  alt={branch.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {branch.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">
                  {branch.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
