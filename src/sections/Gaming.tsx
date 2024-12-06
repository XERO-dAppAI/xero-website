'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaCoins, FaTrophy, FaGamepad, FaStar, FaShare } from 'react-icons/fa';
import game1 from "@/assets/game1.png";
import game2 from "@/assets/game2.png";
import game3 from "@/assets/game3.png";
import game4 from "@/assets/game4.png";
import game5 from "@/assets/game5.png";

interface Card {
  title: string;
  image: any;
  bgColor: string;
  description: string;
  icon: JSX.Element;
}

const Gaming = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards: Card[] = [
    {
      title: "Earn XERO Coins",
      image: game1,
      bgColor: "rgba(95, 152, 152, 0.8)",
      description: "Earn XERO coins whenever you complete challenges and level up!",
      icon: <FaCoins className="w-6 h-6" />
    },
    {
      title: "Complete Challenges",
      image: game2,
      bgColor: "rgba(6, 36, 36, 0.9)",
      description: "Take on exciting challenges and prove your skills!",
      icon: <FaTrophy className="w-6 h-6" />
    },
    {
      title: "Anime Gaming",
      image: game3,
      bgColor: "rgba(95, 152, 152, 0.8)",
      description: "Our anime-themed games keep you wanting to play more!",
      icon: <FaGamepad className="w-6 h-6" />
    },
    {
      title: "Earn Rewards",
      image: game4,
      bgColor: "rgba(6, 36, 36, 0.9)",
      description: "Complete quests and earn exclusive rewards!",
      icon: <FaStar className="w-6 h-6" />
    },
    {
      title: "Share & Earn",
      image: game5,
      bgColor: "rgba(95, 152, 152, 0.8)",
      description: "Share with friends and earn bonus rewards!",
      icon: <FaShare className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [cards.length]);

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Floating Background Text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute whitespace-nowrap text-[200px] font-bold text-[#062424]/5 font-syne"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          XERO LEAGUE XERO LEAGUE XERO LEAGUE
        </motion.div>
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className="section-heading text-center mb-20">
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="tag text-[#062424] border-[#062424]/20">
              Gaming
            </div>
          </motion.div>
          <motion.h2 
            className="section-title mt-5 text-[#062424]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            XERO League
          </motion.h2>
          <motion.p 
            className="section-description mt-5 text-[#5f9898]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join the next generation of gaming where every move counts and every achievement is rewarded.
          </motion.p>
        </div>

        {/* Scrolling Cards */}
        <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            {cards.map((card, index) => {
              const position = (index - currentIndex + cards.length) % cards.length;
              const isActive = position === 0;
              
              return (
                <motion.div
                  key={card.title}
                  className="absolute w-[450px] h-[600px] rounded-[32px] overflow-hidden cursor-pointer"
                  style={{
                    backgroundColor: card.bgColor,
                  }}
                  initial={{ 
                    x: 1500,
                    scale: 0.75,
                    opacity: 0
                  }}
                  animate={{ 
                    x: position * 500 - 500,
                    scale: isActive ? 1 : 0.75,
                    opacity: isActive ? 1 : 0.6,
                    zIndex: cards.length - Math.abs(position),
                  }}
                  exit={{ 
                    x: -1500,
                    scale: 0.75,
                    opacity: 0
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: isActive ? 1.05 : 0.8 }}
                >
                  <div className="relative w-full h-full group">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                      sizes="(max-width: 768px) 100vw, 450px"
                      quality={90}
                    />
                    
                    {/* Glass overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-all duration-300
                               backdrop-blur-[2px]"
                    />

                    {/* Content */}
                    <motion.div 
                      className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-xl bg-[#062424] text-white">
                            {card.icon}
                          </div>
                          <h3 className="text-2xl font-bold font-syne text-white">{card.title}</h3>
                        </div>
                        <p className="text-white/90 font-raleway leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export { Gaming }; 