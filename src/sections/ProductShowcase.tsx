"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Play } from 'lucide-react';
import Image from "next/image";
import curve from "@/assets/curve.png";

export const ProductShowcase = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["powerful", "simple", "efficient", "smart"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [words.length]);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <motion.section
      ref={sectionRef}
      className="bg-white py-24 overflow-x-clip relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container">
        <div className="section-heading">
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <motion.div 
              className="group flex items-center gap-3 px-8 py-4
                         bg-white/10 backdrop-blur-[8px]
                         border border-white/30 rounded-[32px]
                         shadow-[0_8px_32px_-4px_rgba(6,36,36,0.1)]
                         after:absolute after:inset-0 
                         after:rounded-[32px] after:bg-gradient-to-b 
                         after:from-white/40 after:to-transparent 
                         after:opacity-50 after:-z-10
                         before:absolute before:inset-0 
                         before:rounded-[32px] 
                         before:bg-[#267c7c]/5
                         before:backdrop-blur-[8px]
                         before:-z-20
                         hover:bg-white/20
                         hover:border-white/40
                         hover:shadow-[0_16px_48px_-8px_rgba(6,36,36,0.2)]
                         hover:after:opacity-60
                         transition-all duration-300
                         cursor-pointer
                         relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="flex items-center justify-center w-8 h-8 
                          rounded-full bg-[#062424] text-white
                          shadow-[0_4px_12px_rgba(6,36,36,0.2)]"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Play className="w-4 h-4" fill="currentColor" />
              </motion.div>
              <span className="text-[#062424] font-medium text-lg">Watch Demo</span>
            </motion.div>
          </motion.div>

          <motion.h2 
            className="section-title mt-5 text-[#062424]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            See how{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={words[currentWord]}
                className="text-[#267c7c]"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
            {" "}XERO is
          </motion.h2>
        </div>

        <motion.div 
          className="relative mt-10 aspect-video w-full max-w-[95%] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="absolute inset-0 bg-[#267c7c]/5 backdrop-blur-[2px] rounded-2xl" />
          <iframe
            src="https://www.youtube.com/embed/JchV9uSk1Bo"
            title="Product Demo"
            className="w-full h-full rounded-2xl shadow-lg relative z-10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </div>

      {/* Curved corner decoration with animation */}
      <div className="absolute -bottom-5 right-10 w-[150px] overflow-hidden pointer-events-none z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            transform: 'rotate(180deg)'
          }}
        >
          <motion.div
            animate={{ 
              rotate: [-2, 2, -2],
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src={curve}
              alt="Corner decoration"
              width={150}
              height={150}
              className="w-full h-auto"
              style={{
                filter: 'drop-shadow(0 -5px 15px rgba(6,36,36,0.08))',
                transform: 'scaleX(-1)',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
