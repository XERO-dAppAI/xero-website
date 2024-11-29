'use client';

import { motion, useAnimate } from "framer-motion";
import { useEffect } from 'react';
import { 
  FaLink, 
  FaWater, 
  FaSeedling, 
  FaLock, 
  FaChartBar, 
  FaRecycle 
} from 'react-icons/fa';

export const Features = () => {
  const coinFeatures = [
    {
      icon: <FaLink className="w-6 h-6 text-[#C5B358] group-hover:text-white transition-colors duration-300" />,
      title: "IRC-2 Standard",
      description: "Built on Internet Computer's robust IRC-2 standard, ensuring secure and seamless transactions."
    },
    {
      icon: <FaWater className="w-6 h-6 text-[#C5B358] group-hover:text-white transition-colors duration-300" />,
      title: "Liquidity Pool",
      description: "40% of XEROW COIN allocated to liquidity pools, maintaining strong market stability."
    },
    {
      icon: <FaSeedling className="w-6 h-6 text-[#C5B358] group-hover:text-white transition-colors duration-300" />,
      title: "Eco Rewards",
      description: "30% dedicated to rewarding businesses achieving verified food waste reduction targets."
    },
    {
      icon: <FaLock className="w-6 h-6 text-[#C5B358] group-hover:text-white transition-colors duration-300" />,
      title: "Vesting Schedule",
      description: "Strategic coin release schedule ensuring long-term ecosystem sustainability."
    },
    {
      icon: <FaChartBar className="w-6 h-6 text-[#C5B358] group-hover:text-white transition-colors duration-300" />,
      title: "Governance",
      description: "XEROW COIN holders shape protocol decisions through decentralized voting."
    },
    {
      icon: <FaRecycle className="w-6 h-6 text-[#C5B358] group-hover:text-white transition-colors duration-300" />,
      title: "Burn Mechanism",
      description: "Automatic coin burn tied to platform milestones, increasing scarcity over time."
    }
  ];

  const controls = Array(6).fill(null).map(() => useAnimate());

  useEffect(() => {
    const animateIcons = async () => {
      for (let i = 0; i < controls.length; i++) {
        const [scope, animate] = controls[i];
        
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
  }, []);

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
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#062424]/20 transition-colors group"
            >
              <motion.div 
                ref={controls[index][0]}
                className="relative p-3 rounded-xl w-fit mb-4 overflow-hidden backdrop-blur-sm"
                style={{
                  background: 'rgba(197, 179, 88, 0.1)',
                  border: '1px solid rgba(197, 179, 88, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(197, 179, 88, 0.1)',
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  background: 'rgba(6, 36, 36, 0.9)',
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  {feature.icon}
                </div>
              </motion.div>
              <h3 className="text-xl font-syne mb-2 text-[#062424]">
                {feature.title}
              </h3>
              <p className="text-gray-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
