'use client';

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.png";
import banner3 from "@/assets/banner3.png";
import banner4 from "@/assets/banner4.png";
import { useState, useEffect } from "react";

const slides = [
  {
    image: banner1,
    title: "35% Less Food Waste",
    description: "At XERO, we help businesses zero down food waste, making sustainability profitable and management effortless."
  },
  {
    image: banner2,
    title: "$2M+ Annual Savings",
    description: "A lot of food is wasted due to surplus inventory in stores and supermarkets. With XERO's AI predictions, businesses can optimize their stock levels and reduce waste significantly."
  },
  {
    image: banner3,
    title: "45% Time Saved",
    description: "Customers no longer have to manually check individual product expiry dates. With our dynamic price tags, they can make informed decisions based on automated price adjustments."
  },
  {
    image: banner4,
    title: "28% More Revenue",
    description: "We help restaurants and fast food chains understand customer meal preferences, enabling better menu planning and reducing food waste through data-driven insights."
  }
];

export const Analytics = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4943);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Analytics</div>
          </div>
          <h2 className="section-title mt-5 font-syne">
            Xero's Numbers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Left side - Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover rounded-3xl"
                  width={600}
                  height={500}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right side - Text Content */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-syne mb-6">
                  <span className="text-[#666ed2]">
                    {slides[currentSlide].title}
                  </span>
                </h2>
                <p className="text-xl text-gray-600 font-raleway">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="flex gap-2 mt-8">
              {slides.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-2 rounded-full cursor-pointer ${
                    index === currentSlide ? 'w-8 bg-[#666ed2]' : 'w-2 bg-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
