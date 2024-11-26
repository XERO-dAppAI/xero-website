"use client";

import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const pricingTiers = [
  {
    title: "Starter",
    monthlyPrice: 29,
    yearlyPrice: 290,
    buttonText: "Start Your Journey",
    popular: false,
    inverse: false,
    features: [
      "Single location tracking",
      "Up to 1,000 food items",
      "Basic waste monitoring",
      "Expiry date alerts",
      "Email support",
    ],
  },
  {
    title: "Growth",
    monthlyPrice: 79,
    yearlyPrice: 790,
    buttonText: "Scale With Us",
    popular: true,
    inverse: true,
    features: [
      "Up to 5 locations",
      "Up to 10,000 food items",
      "AI waste prediction",
      "Smart inventory alerts",
      "Demand forecasting",
      "Priority support",
      "API access",
    ],
  },
  {
    title: "Enterprise",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    buttonText: "Transform Your Business",
    popular: false,
    inverse: false,
    features: [
      "Unlimited locations",
      "Unlimited food items",
      "Custom AI models",
      "Dedicated support",
      "Advanced analytics",
      "Custom integrations",
      "SLA guarantee",
      "Onboarding assistance",
    ],
  },
];

interface AnimatedNumberProps {
  value: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 1000; // Animation duration in milliseconds
    const steps = 60; // Number of steps in the animation
    const stepDuration = duration / steps;
    const increment = (value - displayValue) / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setDisplayValue(prev => {
        const newValue = prev + increment;
        if (currentStep === steps) {
          return value;
        }
        return newValue;
      });

      if (currentStep === steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, displayValue]);

  return <span>{Math.round(displayValue)}</span>;
};

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Our Pricing</div>
          </div>
          <h2 className="section-title mt-8">Choose Your Plan</h2>
          <p className="section-description mt-5">
            Start reducing food waste today with our flexible pricing options
          </p>

          <div className="flex justify-center mt-8">
            <div className="bg-gray-100 p-1 rounded-full flex relative">
              <motion.div
                className="absolute bg-[#2D2654] h-full rounded-full"
                initial={false}
                animate={{
                  x: isYearly ? "100%" : "0%",
                }}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                style={{ width: "50%" }}
              />
              <button
                onClick={() => setIsYearly(false)}
                className={`relative z-10 px-8 py-2 rounded-full transition-colors ${
                  !isYearly ? "text-white" : "text-gray-500"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`relative z-10 px-8 py-2 rounded-full transition-colors ${
                  isYearly ? "text-white" : "text-gray-500"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({
            title,
            monthlyPrice,
            yearlyPrice,
            buttonText,
            popular,
            inverse,
            features,
          }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
              className={twMerge(
                "card relative cursor-pointer",
                inverse === true && "border-[#2D2654] bg-[#2D2654] text-white"
              )}
            >
              {popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2D2654] text-white px-4 py-1 rounded-full text-sm"
                >
                  Most Popular
                </motion.div>
              )}
              <div className="flex justify-between">
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50",
                    inverse === true && "text-white/60"
                  )}
                >
                  {title}
                </h3>
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  $<AnimatedNumber
                    value={monthlyPrice ? (isYearly ? yearlyPrice : monthlyPrice) : 0}
                  />
                </span>
                {monthlyPrice && (
                  <span className={twMerge(
                    "tracking-tight font-bold text-black/50",
                    inverse === true && "text-white"
                  )}>
                    /{isYearly ? 'year' : 'month'}
                  </span>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={twMerge(
                  "btn w-full mt-[30px]",
                  inverse === true ? "btn-pricing-highlight" : "btn-primary"
                )}
              >
                <span>{buttonText}</span>
              </motion.button>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature) => (
                  <li key={feature} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
