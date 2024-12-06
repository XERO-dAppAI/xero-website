'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaCrown, FaCoins, FaStore, FaUsers, FaRocket, FaLeaf } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  icon: JSX.Element;
}

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is XERO?",
      answer: (
        <div className="space-y-2">
          <p>XERO helps food businesses reduce waste, boost profits, and operate sustainably using AI and blockchain. 🍎🔗</p>
        </div>
      ),
      icon: <FaLeaf className="w-5 h-5" />
    },
    {
      question: "Why does XERO use ICP blockchain?",
      answer: (
        <div className="space-y-3">
          <p>ICP is the perfect fit for XERO because:</p>
          <ul className="space-y-2 list-none">
            <li className="flex items-center gap-2">
              <span className="text-[#5f9898]">🚀</span> 
              <span>Speed: Handles millions of transactions effortlessly.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#5f9898]">🔒</span> 
              <span>Transparency: Tamper-proof, fully traceable data.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#5f9898]">🌍</span> 
              <span>Eco-Friendly: Perfect for sustainable solutions.</span>
            </li>
          </ul>
        </div>
      ),
      icon: <FaRocket className="w-5 h-5" />
    },
    {
      question: "What is Dynamic Pricing?",
      answer: (
        <div className="space-y-2">
          <p>Dynamic Pricing replaces old-school price tags! 🏷️ Prices adjust automatically based on demand or expiration dates, saving waste and maximizing profits. 💡</p>
        </div>
      ),
      icon: <FaStore className="w-5 h-5" />
    },
    {
      question: "What are XERO-Leagues?",
      answer: (
        <div className="space-y-2">
          <p>XERO-Leagues are fun challenges where businesses and individuals compete to save food, earn rewards 🏆, and climb leaderboards!</p>
        </div>
      ),
      icon: <FaCrown className="w-5 h-5" />
    },
    {
      question: "What is the XEROW Coin?",
      answer: (
        <div className="space-y-3">
          <p>XEROW Coin is our digital currency. Use it to:</p>
          <ul className="space-y-2 list-none">
            <li className="flex items-center gap-2">
              <span className="text-[#5f9898]">🌟</span>
              <span>Unlock premium features.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#5f9898]">💳</span>
              <span>Pay for services.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#5f9898]">🛒</span>
              <span>Shop in our upcoming marketplace.</span>
            </li>
          </ul>
        </div>
      ),
      icon: <FaCoins className="w-5 h-5" />
    },
    {
      question: "Can individuals use XERO?",
      answer: (
        <div className="space-y-3">
          <p>Absolutely!</p>
          <ul className="space-y-2 list-none">
            <li className="flex items-start gap-2">
              <span className="text-[#5f9898] mt-1">💼</span>
              <span>For Businesses: Optimize operations, reduce waste, and boost profits.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5f9898] mt-1">👤</span>
              <span>For Individuals: Play games, join challenges, and earn rewards for saving food.</span>
            </li>
          </ul>
        </div>
      ),
      icon: <FaUsers className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="tag text-[#062424] border-[#062424]/20">
              FAQ
            </div>
          </div>
          <h2 className="section-title text-[#062424] font-syne">
            <span className="text-[#062424]">Frequently</span>{" "}
            <span className="text-[#062424]">Asked</span>{" "}
            <span className="text-[#062424]">Questions</span>
          </h2>
          <p className="section-description mt-5 text-[#062424]/80">
            Everything you need to know about XERO
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence>
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-4"
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 bg-white rounded-2xl border border-[#062424]/10 hover:border-[#062424]/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="p-2 rounded-xl bg-[#062424]/5 text-[#062424]"
                      animate={{ rotate: openIndex === index ? 360 : 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-lg font-medium text-[#062424] text-left">
                      {item.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#062424]"
                  >
                    <FaChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <motion.div 
                        className="p-6 bg-[#062424]/5 rounded-2xl mt-2"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-[#062424]/80 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle at center, #062424 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </section>
  );
}; 