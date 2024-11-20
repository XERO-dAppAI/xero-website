'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import globeImage from "@/assets/globe.png";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-[#666ed2] p-8 overflow-auto">
      {/* Close Button */}
      <motion.button
        onClick={() => router.back()}
        className="absolute top-8 right-8 w-12 h-12 bg-[#7882E0] rounded-full flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <X className="text-white" size={24} />
      </motion.button>

      <div className="max-w-7xl mx-auto relative min-h-screen">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/80 text-lg font-syne mb-8"
        >
          ABOUT US
        </motion.div>

        {/* Globe Image - Centered and Animated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.15,
            rotate: 360 
          }}
          transition={{ 
            opacity: { duration: 1 },
            rotate: { 
              duration: 50, 
              repeat: Infinity, 
              ease: "linear" 
            }
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            zIndex: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <div className="relative w-[120%] aspect-square">
            <Image
              src={globeImage}
              alt="Global Network"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl text-white font-syne leading-tight max-w-3xl mb-24"
          >
            From strategy to execution, we offer a streamlined platform to manage all your food waste reduction initiatives in one place.
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-16 text-white/80 mt-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-syne text-white text-xl mb-4">Our Mission</h2>
              <p className="font-raleway">
                is to empower food businesses with AI-driven tools they need to efficiently reduce waste and maximize profitability through sustainable practices
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="font-syne text-white text-xl mb-4">Our Vision</h2>
              <p className="font-raleway">
                to become the leading platform that enables food businesses of all sizes to effortlessly track, manage, and eliminate food waste through blockchain technology
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 