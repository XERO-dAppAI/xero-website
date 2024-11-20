"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    text: "XERO has transformed how we manage inventory across our 200+ locations. We've reduced food waste by 42% and saved over $2M annually.",
    imageSrc: avatar1.src,
    name: "Robert Anderson",
    username: "Operations Director, Whole Foods Market",
  },
  {
    text: "The AI predictions are incredibly accurate. We've optimized our fresh produce ordering and cut waste by 35% across all our stores.",
    imageSrc: avatar2.src,
    name: "Emily Martinez",
    username: "Supply Chain Manager, Trader Joe's",
  },
  {
    text: "As a high-volume restaurant chain, XERO's real-time tracking has been invaluable. Our food cost is down 28% since implementation.",
    imageSrc: avatar3.src,
    name: "Michael Chen",
    username: "Executive Chef, The Cheesecake Factory",
  },
  {
    text: "XERO's platform helped us achieve our 2023 sustainability goals. We've prevented over 100,000 lbs of food waste in just six months.",
    imageSrc: avatar4.src,
    name: "Sarah Johnson",
    username: "Sustainability Lead, Kroger",
  },
  {
    text: "The dynamic pricing feature has revolutionized how we handle perishables. Markdown losses are down 45% year over year.",
    imageSrc: avatar5.src,
    name: "David Miller",
    username: "Regional Manager, Costco Wholesale",
  },
  {
    text: "Perfect for our farm-to-table concept. We've improved inventory accuracy to 98% and reduced over-ordering significantly.",
    imageSrc: avatar6.src,
    name: "Isabella Romano",
    username: "Owner, Eataly USA",
  },
  {
    text: "XERO's blockchain tracking gives us complete supply chain visibility. We've optimized our cold chain and reduced spoilage by 40%.",
    imageSrc: avatar7.src,
    name: "James Wilson",
    username: "Supply Chain Director, Walmart",
  },
  {
    text: "The ROI was immediate. We've saved $50K monthly in food costs across our restaurant group since implementing XERO.",
    imageSrc: avatar8.src,
    name: "Thomas Chang",
    username: "CFO, Darden Restaurants",
  },
  {
    text: "Game-changer for our fresh departments. Waste reduction and better inventory turns have boosted our bottom line significantly.",
    imageSrc: avatar9.src,
    name: "Rachel Kim",
    username: "Operations VP, Target",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].map((_, setIndex) => (
        <React.Fragment key={`set-${setIndex}`}>
          {props.testimonials.map(({ text, imageSrc, name, username }, index) => (
            <div key={`testimonial-${setIndex}-${index}`} className="card">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const NewMembersButton = () => {
  const [activeAvatars, setActiveAvatars] = useState([avatar1, avatar2, avatar3, avatar4, avatar5]);
  const avatarsRef = useRef([avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveAvatars(currentAvatars => {
        const newAvatars = [...currentAvatars];
        const randomIndex = Math.floor(Math.random() * newAvatars.length);
        const newAvatar = avatarsRef.current.find(avatar => !currentAvatars.includes(avatar));
        if (newAvatar) {
          newAvatars[randomIndex] = newAvatar;
        }
        return newAvatars;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center mt-8">
      <motion.div
        className="relative flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100"
        whileHover={{ scale: 1.02 }}
        animate={{
          boxShadow: [
            "0 4px 12px rgba(102, 110, 210, 0.1)",
            "0 4px 20px rgba(102, 110, 210, 0.4)",
            "0 4px 12px rgba(102, 110, 210, 0.1)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity
          }
        }}
      >
        <div className="flex -space-x-4">
          {activeAvatars.map((avatar, index) => (
            <motion.div
              key={`${index}-${avatar.src}`}
              initial={{ scale: 0, x: -20 }}
              animate={{ scale: 1, x: 0 }}
              exit={{ scale: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src={avatar.src}
                alt={`Member ${index + 1}`}
                width={40}
                height={40}
                className="rounded-full border-4 border-white shadow-sm"
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-[#666ed2]/10"
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
        <motion.span
          className="text-[#2D2654] font-medium text-lg ml-2"
          animate={{
            opacity: [1, 0.7, 1],
            scale: [1, 1.02, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          400+ businesses reducing waste. Join us!
        </motion.span>
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users say</h2>
          <NewMembersButton />
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
