"use client";

import productImage from "@/assets/product-image.png";

import pyramidImage from "@/assets/pyramid.png";

import tubeImage from "@/assets/tube.png";

import Image from "next/image";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import { useRef, useState, useEffect } from "react";

import { PlayIcon } from "@heroicons/react/24/solid";



export const ProductShowcase = () => {

  const [currentWord, setCurrentWord] = useState(0);

  const words = ["powerful", "simple", "efficient", "smart"];

  const [isPlaying, setIsPlaying] = useState(false);



  useEffect(() => {

    const intervalId = setInterval(() => {

      setCurrentWord((prev) => (prev + 1) % words.length);

    }, 2000);

    return () => clearInterval(intervalId);

  }, [words.length]);



  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({

    target: sectionRef,

    offset: ["start end", "end start"],

  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);



  return (

    <section

      ref={sectionRef}

      className="bg-gradient-to-br from-white via-[#F5F5FF] to-[#E8EBFF] py-24 overflow-x-clip"

    >

      <div className="container">

        <div className="section-heading">

          <div className="flex justify-center">

            <div className="tag">Watch Demo</div>

          </div>

          <h2 className="section-title mt-5">

            See how{" "}

            <AnimatePresence mode="wait">

              <motion.span

                key={words[currentWord]}

                className="text-[#666ed2]"

                initial={{ y: 20, opacity: 0 }}

                animate={{ y: 0, opacity: 1 }}

                exit={{ y: -20, opacity: 0 }}

                transition={{ duration: 0.3 }}

              >

                {words[currentWord]}

              </motion.span>

            </AnimatePresence>

            {" "}XERO is

          </h2>

          <p className="section-description mt-5">

            Experience our AI-powered platform in action

          </p>

        </div>

        <div className="relative mt-10">

          <div className="absolute inset-0 bg-black/5 rounded-2xl" />

          <Image src={productImage} alt="Product Demo" className="rounded-2xl" />

          <motion.div

            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group"

          >

            <motion.button

              className="relative bg-white/90 hover:bg-white w-20 h-20 rounded-full flex items-center justify-center cursor-pointer shadow-xl z-10"

              whileHover={{ scale: 1.05 }}

              whileTap={{ scale: 0.95 }}

              onClick={() => setIsPlaying(!isPlaying)}

            >

              <PlayIcon className="h-8 w-8 text-[#666ed2]" />

              <motion.span

                className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-[#2D2654] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-syne"

              >

                Play me

              </motion.span>

            </motion.button>

            <motion.div

              className="absolute inset-0 rounded-full border-2 border-white/60"

              initial={{ opacity: 0.4, scale: 1 }}

              animate={{

                opacity: [0.4, 0],

                scale: [1, 1.8],

              }}

              transition={{

                duration: 2,

                repeat: Infinity,

                ease: "easeOut",

                times: [0, 1]

              }}

            />

            <motion.div

              className="absolute inset-0 rounded-full border-2 border-white/60"

              initial={{ opacity: 0.4, scale: 1 }}

              animate={{

                opacity: [0.4, 0],

                scale: [1, 1.8],

              }}

              transition={{

                duration: 2,

                repeat: Infinity,

                ease: "easeOut",

                delay: 0.5,

                times: [0, 1]

              }}

            />

            <motion.div

              className="absolute inset-0 rounded-full border-2 border-white/60"

              initial={{ opacity: 0.4, scale: 1 }}

              animate={{

                opacity: [0.4, 0],

                scale: [1, 1.8],

              }}

              transition={{

                duration: 2,

                repeat: Infinity,

                ease: "easeOut",

                delay: 1,

                times: [0, 1]

              }}

            />

          </motion.div>

          <motion.img

            src={pyramidImage.src}

            alt="Pyramid Image"

            height={262}

            width={262}

            className="hidden md:block absolute -right-36 -top-32"

            style={{

              translateY,

            }}

          />

          <motion.img

            src={tubeImage.src}

            alt="Tube image"

            height={248}

            width={248}

            className="hidden md:block absolute bottom-24 -left-36"

            style={{

              translateY,

            }}

          />

        </div>

      </div>

    </section>

  );

};
