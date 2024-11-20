'use client';

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { CustomCursor } from "@/components/CustomCursor";

const HowItWorks = () => {
  const [activeNumber, setActiveNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNumber((prev) => (prev % 4) + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getNumberClass = (number: number) => {
    return `absolute right-8 bottom-6 text-[100px] font-bold leading-none transition-all duration-1000
      ${activeNumber === number 
        ? 'text-[#666ed2] opacity-20 scale-110 drop-shadow-[0_0_30px_rgba(102,110,210,0.7)]' 
        : 'text-[#666666]/[0.03]'
      }`;
  };

  const steps = [
    { 
      number: 1, 
      title: "Sign Up", 
      description: "Sign up securely with our internet identity verification system to ensure data privacy and regulatory compliance."
    },
    { 
      number: 2, 
      title: "Connect", 
      description: "Integrate with your existing POS, inventory, and supply chain management systems for seamless data flow."
    },
    { 
      number: 3, 
      title: "AI Analysis", 
      description: "Our AI begins analyzing your historical data to identify waste patterns and optimization opportunities."
    },
    { 
      number: 4, 
      title: "Automation", 
      description: "XERO implements automated waste reduction strategies and tracks results through our blockchain-verified system."
    }
  ];

  return (
    <section className="bg-white py-24 relative cursor-none">
      <CustomCursor />
      <div className="container cursor-none">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Process</div>
          </div>
          <h2 className="section-title mt-5">
            How XERO Works
          </h2>
          <p className="section-description mt-5">
            Get started with our intelligent waste reduction platform in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          <div className="hidden md:block" />

          {steps.map(({ number, title, description }) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (number - 1) * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`bg-[#F8F9FF] p-10 rounded-[32px] relative h-[340px] flex flex-col transition-all duration-500
                ${activeNumber === number ? 'shadow-[0_0_30px_rgba(102,110,210,0.1)]' : ''}`}
              >
                <div className={getNumberClass(number)}>{number}</div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-[28px] font-medium text-[#2D2654] mb-6">
                    {title}
                  </h3>
                  <p className="text-[#666666] text-lg leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export { HowItWorks }; 