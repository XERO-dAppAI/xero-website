'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Card {
  title: string;
  subtitle: string;
  features: string[];
  monthlyPrice: number;
  yearlyPrice: number;
  bgColor: string;
}

const AnimatedPrice = ({ value }: { value: number }) => {
  return (
    <div className="flex items-baseline gap-2">
      {value.toString().split('').map((digit, index) => (
        <motion.span
          key={`${index}-${digit}`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="inline-block"
        >
          {digit}
        </motion.span>
      ))}
    </div>
  );
};

const FlowingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isYearly, setIsYearly] = useState(false);

  const cards: Card[] = [
    {
      title: "XERO Basic",
      subtitle: "Perfect for small businesses",
      features: [
        "Single location tracking",
        "Up to 1,000 food items",
        "Basic waste monitoring",
        "Expiry date alerts",
        "Email support"
      ],
      monthlyPrice: 3,
      yearlyPrice: 30,
      bgColor: "#f6fcfb",
    },
    {
      title: "XERO Plus",
      subtitle: "Scale with us",
      features: [
        "Up to 5 locations",
        "Up to 10,000 food items",
        "AI waste prediction",
        "Smart inventory alerts",
        "Demand forecasting",
        "Priority support",
        "API access"
      ],
      monthlyPrice: 7,
      yearlyPrice: 70,
      bgColor: "#5f9898",
    },
    {
      title: "XERO Ultra",
      subtitle: "Transform your business",
      features: [
        "Unlimited locations",
        "Unlimited food items",
        "Custom AI models",
        "Dedicated support",
        "Advanced analytics",
        "SLA guarantee"
      ],
      monthlyPrice: 15,
      yearlyPrice: 150,
      bgColor: "#062424",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [cards.length]);

  const getICPPrice = (usdPrice: number) => {
    return (usdPrice / 12).toFixed(2);
  };

  return (
    <section className="bg-white py-6 relative overflow-hidden min-h-screen">
      <div className="container relative">
        <div className="relative h-[700px] flex items-center justify-center">
          <AnimatePresence initial={false}>
            {cards.map((card, index) => {
              const position = (index - currentIndex + cards.length) % cards.length;
              const isActive = position === 0;
              
              return (
                <motion.div
                  key={card.title}
                  className="absolute w-full max-w-[400px]"
                  style={{
                    backgroundColor: card.bgColor,
                    borderRadius: "32px",
                    height: "550px",
                    transformOrigin: "center bottom",
                  }}
                  initial={{ 
                    scale: 0.9, 
                    opacity: 0, 
                    y: 100, 
                    rotate: 5, 
                    zIndex: 0 
                  }}
                  animate={{ 
                    scale: isActive ? 1 : 0.92,
                    opacity: isActive ? 1 : 0.5,
                    y: isActive ? 0 : -30 * position,
                    x: isActive ? 0 : 20 * position,
                    rotate: isActive ? 0 : 5 * position,
                    zIndex: cards.length - position,
                  }}
                  exit={{ 
                    scale: 0.8, 
                    opacity: 0, 
                    y: -100, 
                    rotate: -5, 
                    zIndex: 0 
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.8
                  }}
                >
                  <div className="p-12 h-full flex flex-col">
                    <div className="space-y-6">
                      <div>
                        <h2 
                          className="text-4xl font-bold font-krona leading-tight mb-2"
                          style={{ color: card.bgColor === '#f6fcfb' ? '#1a6363' : '#FFFFFF' }}
                        >
                          {card.title}
                        </h2>
                        <p 
                          className="text-xl opacity-90 font-raleway"
                          style={{ color: card.bgColor === '#f6fcfb' ? '#1a6363' : '#FFFFFF' }}
                        >
                          {card.subtitle}
                        </p>
                      </div>

                      <div 
                        className="text-3xl font-bold font-krona"
                        style={{ color: card.bgColor === '#f6fcfb' ? '#1a6363' : '#FFFFFF' }}
                      >
                        <motion.div
                          key={isYearly ? 'yearly' : 'monthly'}
                          className="flex items-baseline gap-2"
                        >
                          <AnimatedPrice 
                            value={isYearly ? card.yearlyPrice : card.monthlyPrice} 
                          />
                          <span className="text-lg font-normal opacity-80">ICP</span>
                          <span className="text-base font-normal opacity-80">
                            /{isYearly ? 'year' : 'month'}
                          </span>
                        </motion.div>
                      </div>

                      <ul className="space-y-4 font-raleway">
                        {card.features.map((feature, i) => (
                          <motion.li 
                            key={i}
                            className="flex items-center gap-2"
                            style={{ color: card.bgColor === '#f6fcfb' ? '#1a6363' : '#FFFFFF' }}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <span className="text-lg">✓</span>
                            <span className="opacity-90">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
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

export { FlowingText }; 