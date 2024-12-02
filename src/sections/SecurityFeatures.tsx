'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Code, Cpu, Palette, Terminal } from 'lucide-react';
import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.png";
import banner3 from "@/assets/banner3.png";
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

export const SecurityFeatures = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const founders = [
    {
      image: banner1,
      name: "Janice Gathoga",
      title: "Team Lead of XERO",
      skills: [
        { icon: <Code className="w-5 h-5" />, text: "Frontend Developer" },
        { icon: <Palette className="w-5 h-5" />, text: "Graphic Designer" },
        { icon: <Terminal className="w-5 h-5" />, text: "Blockchain Developer" }
      ]
    },
    {
      image: banner2,
      name: "Judith Karuku",
      title: "Backend Lead of XERO",
      skills: [
        { icon: <Terminal className="w-5 h-5" />, text: "Backend Developer" },
        { icon: <Cpu className="w-5 h-5" />, text: "AI Engineer" },
        { icon: <Code className="w-5 h-5" />, text: "Software Engineer" }
      ]
    },
    {
      image: banner3,
      name: "Blockchain Queens",
      title: "Connect With Us",
      socials: [
        { 
          icon: <FaXTwitter className="w-5 h-5" />, 
          text: "@JaniceGathoga",
          link: "https://x.com/JaniceGathoga"
        },
        { 
          icon: <FaXTwitter className="w-5 h-5" />, 
          text: "@JudithKaru97166",
          link: "https://x.com/JudithKaru97166"
        }
      ]
    }
  ];

  useEffect(() => {
    // Increased rotation time to 15s (from 12s)
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % founders.length);
      }, 15000); // 15s for each full cycle
      
      return () => clearInterval(interval);
    }, 6000); // Wait for first slide's animations to complete

    return () => clearTimeout(timer);
  }, [founders.length]);

  // Preload all images
  useEffect(() => {
    founders.forEach(founder => {
      const img = document.createElement('img');
      img.src = (founder.image as StaticImageData).src;
    });
  }, []);

  return (
    <section className="bg-white py-24">
      {/* Hidden preload images */}
      <div className="hidden">
        {founders.map((founder, index) => (
          <Image
            key={index}
            src={founder.image}
            alt=""
            width={1}
            height={1}
            priority={true}
          />
        ))}
      </div>

      <div className="container">
        <div className="grid md:grid-cols-[1fr,1fr] gap-24 items-center">
          {/* Left side - Text Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[42px] leading-[1.2] font-bold text-[#062424] mb-8 font-krona"
            >
              The visionaries who saw beyond the waste.
              <br />
              <br />
              Meet the founders.
            </motion.h2>
          </div>

          {/* Right side - Image and Text Slider */}
          <div className="relative aspect-square rounded-[32px] overflow-hidden bg-[#062424]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  duration: 1.2
                }}
                className="absolute inset-0"
              >
                <Image
                  src={founders[currentSlide].image}
                  alt={founders[currentSlide].name}
                  fill
                  className="object-cover"
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  loading="eager"
                />
                {/* Overlay with founder details */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#062424] via-[#062424]/70 to-transparent p-8 flex flex-col justify-end"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-white text-2xl font-bold mb-3 font-krona">
                      {founders[currentSlide].name}
                    </h3>
                    <p className="text-white/90 text-lg mb-6 font-raleway">
                      {founders[currentSlide].title}
                    </p>
                  </motion.div>

                  <div className="space-y-4">
                    {founders[currentSlide].socials ? (
                      // Social links for the team slide
                      founders[currentSlide].socials.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-4 text-white/90 hover:text-white transition-colors"
                        >
                          <div className="p-2.5 rounded-full bg-[#062424] hover:bg-[#0a3636] transition-colors">
                            {social.icon}
                          </div>
                          <span className="font-raleway text-base">{social.text}</span>
                        </motion.a>
                      ))
                    ) : (
                      // Skills for individual founder slides
                      founders[currentSlide].skills.map((skill, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-4 text-white/90"
                        >
                          <div className="p-2.5 rounded-full bg-[#062424]">
                            {skill.icon}
                          </div>
                          <span className="font-raleway text-base">{skill.text}</span>
                        </motion.div>
                      ))
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}; 