'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Brain, Lock, BarChart3, Workflow, LineChart, Server, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const integrations = [
  {
    icon: <Server className="w-8 h-8 text-white group-hover:text-white/90 transition-colors" />,
    name: "Real-Time Inventory Insights",
    description: "Track your stock effortlessly and receive alerts for expiring items."
  },
  {
    icon: <Brain className="w-8 h-8 text-white group-hover:text-white/90 transition-colors" />,
    name: "AI-Powered Demand Forecasting",
    description: "Predict customer needs with data-driven insights for optimal restocking."
  },
  {
    icon: <Lock className="w-8 h-8 text-white group-hover:text-white/90 transition-colors" />,
    name: "Dynamic Pricing Adjustments",
    description: "Adjust prices dynamically based on product lifecycle and demand."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-white group-hover:text-white/90 transition-colors" />,
    name: "Blockchain-Based Transparency",
    description: "Secure your data with tamper-proof, blockchain-verified records."
  },
  {
    icon: <Workflow className="w-8 h-8 text-white group-hover:text-white/90 transition-colors" />,
    name: "Customer Buying Patterns",
    description: "Analyze customer behavior to refine your marketing and inventory plans."
  },
  {
    icon: <LineChart className="w-8 h-8 text-white group-hover:text-white/90 transition-colors" />,
    name: "Smart Automation",
    description: "Automated ordering and inventory management systems."
  }
];

interface ScrollingColumnProps {
  direction?: "up" | "down";
  startIndex: number;
  endIndex: number;
}

const ScrollingColumn: React.FC<ScrollingColumnProps> = ({ direction = "up", startIndex, endIndex }) => (
  <div className="relative overflow-hidden h-[600px]">
    <motion.div
      animate={{
        y: direction === "up" ? [0, -1035] : [-1035, 0]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
      }}
      className="space-y-4"
    >
      {[...Array(3)].map((_, setIndex) => (
        <div key={setIndex} className="space-y-4">
          {integrations.slice(startIndex, endIndex).map((integration, index) => (
            <motion.div
              key={`${setIndex}-${index}`}
              className="bg-[#5f9898] p-6 rounded-2xl group hover:bg-[#4d7a7a] transition-colors"
            >
              <div className="relative p-3 rounded-xl w-fit mb-4 overflow-hidden group-hover:bg-[#5f9898]/20 transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1)',
                }}
              >
                {integration.icon}
              </div>
              <h3 className="text-white text-lg font-krona-one mb-2">
                {integration.name}
              </h3>
              <p className="text-white/80 text-sm">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </div>
      ))}
    </motion.div>
  </div>
);

export const Integrations = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = [
    "restaurants",
    "supermarkets",
    "food chains",
    "groceries"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <section className="bg-white pt-24">
      <div className="container">
        <div className="grid md:grid-cols-[1fr,1fr] gap-24 items-start">
          {/* Left side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, translateY: -2 }}
              transition={{ 
                duration: 0.2,
                scale: {
                  type: "spring",
                  stiffness: 300,
                }
              }}
              className="inline-flex items-center gap-3 rounded-[40px] cursor-pointer
                         relative group overflow-hidden"
              style={{
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: `
                  0 4px 24px -1px rgba(0, 0, 0, 0.1),
                  0 2px 8px -1px rgba(0, 0, 0, 0.06),
                  inset 0 1px 0 0 rgba(255, 255, 255, 0.8),
                  inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)
                `,
                border: '1px solid rgba(255, 255, 255, 0.4)',
              }}
            >
              {/* Enhanced gradient overlay with animation */}
              <motion.div 
                className="absolute inset-0 opacity-60"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  background: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)',
                  filter: 'blur(4px)',
                  backgroundSize: '200% 100%',
                }}
              />
              
              {/* Subtle bottom shadow */}
              <div 
                className="absolute inset-x-0 bottom-0 h-1/2 opacity-20"
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.1))',
                }}
              />
              
              {/* Content */}
              <motion.div 
                className="relative flex items-center gap-3"
                whileHover={{ gap: 4 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="flex items-center justify-center w-9 h-9 
                            rounded-full bg-[#062424]
                            shadow-[0_2px_8px_rgba(6,36,36,0.15)]"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
                <motion.span 
                  className="text-[#062424] font-medium text-base"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  Our Features
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[54px] leading-[1.2] font-bold font-krona mt-8"
            >
              <span className="text-[#062424]">We</span>{" "}
              <span className="text-[#062424]">Xero</span>{" "}
              <span className="text-[#062424]">down food waste for</span>{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[currentWord]}
                  className="inline-block text-[#5f9898] font-krona"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
            </motion.h2>
          </div>

          {/* Right side - Two Column Scrolling Cards */}
          <div className="grid grid-cols-2 gap-4">
            <ScrollingColumn direction="up" startIndex={0} endIndex={3} />
            <ScrollingColumn direction="down" startIndex={3} endIndex={6} />
          </div>
        </div>
      </div>
    </section>
  );
};
