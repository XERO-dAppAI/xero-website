'use client';

import { motion, useAnimate } from "framer-motion";
import { useEffect, useState, useMemo } from 'react';
import { 
  FaLink, 
  FaWater, 
  FaSeedling, 
  FaLock, 
  FaChartBar, 
  FaRecycle 
} from 'react-icons/fa';

export const Features = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  // Create individual hooks for each control
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scope3, animate3] = useAnimate();
  const [scope4, animate4] = useAnimate();
  const [scope5, animate5] = useAnimate();
  const [scope6, animate6] = useAnimate();

  // Memoize the controls array
  const controls = useMemo(() => [
    { scope: scope1, animate: animate1 },
    { scope: scope2, animate: animate2 },
    { scope: scope3, animate: animate3 },
    { scope: scope4, animate: animate4 },
    { scope: scope5, animate: animate5 },
    { scope: scope6, animate: animate6 }
  ], [
    scope1, animate1,
    scope2, animate2,
    scope3, animate3,
    scope4, animate4,
    scope5, animate5,
    scope6, animate6
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateIcons = async () => {
      for (let i = 0; i < controls.length; i++) {
        const { scope, animate } = controls[i];
        
        await animate(scope.current, 
          { 
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0],
          }, 
          { 
            duration: 1.5,
            delay: 0.2,
          }
        );
      }

      setTimeout(animateIcons, 1000);
    };

    animateIcons();
    return () => {};
  }, [controls]);

  const coinFeatures = [
    {
      icon: <FaLink className="w-6 h-6 text-[#5f9898] group-hover:text-white transition-colors duration-300" />,
      title: "IRC-2 Standard",
      description: "Built on Internet Computer's robust IRC-2 standard, ensuring secure and seamless transactions."
    },
    {
      icon: <FaWater className="w-6 h-6 text-[#5f9898] group-hover:text-white transition-colors duration-300" />,
      title: "Liquidity Pool",
      description: "40% of XEROW COIN allocated to liquidity pools, maintaining strong market stability."
    },
    {
      icon: <FaSeedling className="w-6 h-6 text-[#5f9898] group-hover:text-white transition-colors duration-300" />,
      title: "Eco Rewards",
      description: "30% dedicated to rewarding businesses achieving verified food waste reduction targets."
    },
    {
      icon: <FaLock className="w-6 h-6 text-[#5f9898] group-hover:text-white transition-colors duration-300" />,
      title: "Vesting Schedule",
      description: "Strategic coin release schedule ensuring long-term ecosystem sustainability."
    },
    {
      icon: <FaChartBar className="w-6 h-6 text-[#5f9898] group-hover:text-white transition-colors duration-300" />,
      title: "Governance",
      description: "XEROW COIN holders shape protocol decisions through decentralized voting."
    },
    {
      icon: <FaRecycle className="w-6 h-6 text-[#5f9898] group-hover:text-white transition-colors duration-300" />,
      title: "Burn Mechanism",
      description: "Automatic coin burn tied to platform milestones, increasing scarcity over time."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag text-[#062424] border-[#062424]/20">
              Tokenomics
            </div>
          </div>
          <h2 className="section-title mt-5 text-[#062424]">
            Sneak Peak Of Xerow Coin
          </h2>
          <p className="section-description mt-5">
            A token built on the Internet Computer's IRC-2 standard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {coinFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                p-8 rounded-[32px] bg-white/40 backdrop-blur-[2px]
                border border-white/50 group transition-all duration-500
                hover:shadow-[0_8px_32px_0_rgba(95,152,152,0.2)]
                ${activeCard === index ? 'shadow-[0_8px_32px_0_rgba(95,152,152,0.25)]' : ''}
                relative overflow-hidden
              `}
            >
              {/* Glowing effect */}
              <div 
                className={`
                  absolute inset-0 bg-gradient-to-r from-transparent via-[#5f9898]/10 to-transparent
                  transition-opacity duration-1000 pointer-events-none
                  ${activeCard === index ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                  transform: 'translateX(-100%)',
                  animation: activeCard === index ? 'shine 2s ease-in-out' : 'none',
                }}
              />

              {/* Card content */}
              <motion.div 
                ref={controls[index].scope}
                className="relative p-3 rounded-xl w-fit mb-4 overflow-hidden"
                style={{
                  background: 'rgba(95, 152, 152, 0.1)',
                  border: '1px solid rgba(95, 152, 152, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(95, 152, 152, 0.1)',
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  background: 'rgba(6, 36, 36, 0.9)',
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative z-10">
                  {feature.icon}
                </div>
              </motion.div>
              <h3 className="text-xl font-syne mb-4 text-[#062424]">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};
