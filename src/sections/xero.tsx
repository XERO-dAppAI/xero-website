'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import heroTitle from "@/assets/hero-title.png";
import glassSpiral from "@/assets/glass-spiral.png";
import { FaTelegramPlane, FaGithub } from 'react-icons/fa';

export const Xero = () => {
  return (
    <section className="h-screen bg-white relative overflow-hidden flex flex-col">
      {/* Social Media Icons with Glass Sidebar */}
      <div className="absolute left-8 top-[45%] -translate-y-1/2 z-50 max-h-[calc(100vh-200px)]">
        {/* Glass Container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative p-0.5 rounded-full"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          }}
        >
          {/* Icons Container */}
          <div className="flex flex-col gap-6 items-center py-4 px-3">
            <motion.a
              href="https://t.me/xerow_ai"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3 
              }}
              className="w-8 h-8 rounded-full bg-[#062424] flex items-center justify-center text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <FaTelegramPlane size={14} />
            </motion.a>
            
            <motion.a
              href="https://twitter.com/xerow_ai"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.4 
              }}
              className="w-8 h-8 rounded-full bg-[#062424] flex items-center justify-center text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <svg 
                viewBox="0 0 24 24" 
                width="14" 
                height="14" 
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </motion.a>
            
            <motion.a
              href="https://github.com/orgs/XERO-dAppAI/repositories"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5 
              }}
              className="w-8 h-8 rounded-full bg-[#062424] flex items-center justify-center text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <FaGithub size={14} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Background spiral with enhanced motion */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.15, 0.95, 1],
          rotate: [0, 3, -3, 0],
          x: [0, 25, -25, 0],
          y: [0, -25, 25, 0],
        }}
        transition={{ 
          opacity: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          },
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          },
          y: {
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
        style={{
          filter: 'blur(2px)',
        }}
      >
        <Image
          src={glassSpiral}
          alt="Spiral Background"
          className="w-full h-full object-cover"
          priority
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* Add a subtle gradient overlay with reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="w-full max-w-[1400px] mx-auto px-4 relative">
          {/* XERO text */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex justify-center items-center"
          >
            <div className="w-[700px] md:w-[1000px] relative">
              <Image
                src={heroTitle}
                alt="XERO"
                className="w-full h-auto"
                priority
                width={1200}
                height={400}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 