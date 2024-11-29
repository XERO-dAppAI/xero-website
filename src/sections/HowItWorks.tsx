'use client';

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import glass2 from "@/assets/glass2.png";

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
        ? 'text-[#c9b759] opacity-30 scale-110 drop-shadow-[0_0_30px_rgba(201,183,89,0.7)]'
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
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="container relative">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag font-krona text-[#062424]">Process</div>
          </div>
          <h2 className="section-title mt-5 text-[#062424] font-krona">
            How XERO Works
          </h2>
          <p className="section-description mt-5 text-gray-500 font-raleway">
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
              className="group relative"
            >
              <div 
                className={`
                  relative h-[340px] p-10 rounded-[32px]
                  bg-white/40 backdrop-blur-[2px]
                  border border-white/50
                  flex flex-col transition-all duration-500 
                  hover:bg-white/50
                  hover:shadow-[0_8px_32px_0_rgba(6,36,36,0.1)]
                  ${activeNumber === number ? 'shadow-[0_8px_32px_0_rgba(6,36,36,0.15)]' : ''}
                  before:absolute before:inset-0 
                  before:rounded-[32px] 
                  before:bg-[#062424]/[0.02]
                  before:pointer-events-none
                  after:absolute after:inset-0 
                  after:rounded-[32px] 
                  after:bg-gradient-to-b 
                  after:from-white/50 
                  after:to-transparent 
                  after:opacity-50
                  after:pointer-events-none
                `}
                style={{
                  backdropFilter: 'blur(2px)',
                  WebkitBackdropFilter: 'blur(2px)',
                }}
              >
                <div className={getNumberClass(number)}>{number}</div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-[28px] font-medium text-[#062424] mb-6 font-krona">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed font-raleway">
                    {description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.7,
                y: [0, -15, 0],
                x: [0, 10, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{ 
                opacity: { duration: 1, delay: 0.5 },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                x: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute right-20 bottom-32"
            >
              <Image
                src={glass2}
                alt="Glass decoration"
                width={300}
                height={300}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HowItWorks }; 