"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function StartupSwipeLoader({ children }: { children: React.ReactNode }) {
  const [startSwipe, setStartSwipe] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const swipeTimer = setTimeout(() => setStartSwipe(true), 1600); // waktu sebelum swipe
    const doneTimer = setTimeout(() => setDone(true), 2300); // waktu selesai total

    return () => {
      clearTimeout(swipeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {!done && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo Zoom-in */}
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1.4, opacity: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              <Image
                src="/assets/logo.png" // Ganti sesuai logomu
                alt="Logo"
                width={100}
                height={100}
                priority
              />
            </motion.div>

            {/* Swipe putih dari bawah */}
            {startSwipe && (
              <motion.div
                className="absolute bottom-0 left-0 w-full h-full bg-white z-50"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Web utama */}
      {done && children}
    </>
  );
}
