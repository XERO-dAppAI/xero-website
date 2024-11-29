'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Brain, Lock, BarChart3, Workflow, LineChart, Server } from 'lucide-react';
import { useState, useEffect } from 'react';

const integrations = [
  {
    icon: <Server className="w-8 h-8 text-white group-hover:text-[#062424] transition-colors" />,
    name: "Real-Time Inventory Insights",
    description: "Track your stock effortlessly and receive alerts for expiring items."
  },
  {
    icon: <Brain className="w-8 h-8 text-white group-hover:text-[#062424] transition-colors" />,
    name: "AI-Powered Demand Forecasting",
    description: "Predict customer needs with data-driven insights for optimal restocking."
  },
  {
    icon: <Lock className="w-8 h-8 text-white group-hover:text-[#062424] transition-colors" />,
    name: "Dynamic Pricing Adjustments",
    description: "Adjust prices dynamically based on product lifecycle and demand."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-white group-hover:text-[#062424] transition-colors" />,
    name: "Blockchain-Based Transparency",
    description: "Secure your data with tamper-proof, blockchain-verified records."
  },
  {
    icon: <Workflow className="w-8 h-8 text-white group-hover:text-[#062424] transition-colors" />,
    name: "Customer Buying Patterns",
    description: "Analyze customer behavior to refine your marketing and inventory plans."
  },
  {
    icon: <LineChart className="w-8 h-8 text-white group-hover:text-[#062424] transition-colors" />,
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
              className="bg-[#062424] p-6 rounded-2xl group hover:bg-[#0a3636] transition-colors"
            >
              <div className="bg-[#0a3636] p-3 rounded-xl w-fit mb-4 group-hover:bg-[#0e4848] transition-colors">
                {integration.icon}
              </div>
              <h3 className="text-white text-lg font-krona-one mb-2">
                {integration.name}
              </h3>
              <p className="text-white/60 text-sm">
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
    <section className="bg-white pt-12">
      <div className="container">
        <div className="grid md:grid-cols-[1fr,1fr] gap-24 items-start">
          {/* Left side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="tag font-krona text-[#062424]"
            >
              Our Features
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[54px] leading-[1.2] font-bold font-krona mt-6 text-[#062424]"
            >
              We Xero down food waste for{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[currentWord]}
                  className="inline-block text-[#c9b759] font-krona"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 mt-6 text-lg font-raleway"
            >
              XERO seamlessly integrates with the Internet Computer Protocol, providing secure, scalable, and decentralized food waste management.
            </motion.p>
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
