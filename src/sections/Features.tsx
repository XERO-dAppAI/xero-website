'use client';

import { motion } from "framer-motion";
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
      icon: <FaLink className="w-6 h-6 text-[#666ed2]" />,
      title: "IRC-2 Standard",
      description: "Built on Internet Computer's robust IRC-2 standard, ensuring secure and seamless transactions."
    },
    {
      icon: <FaWater className="w-6 h-6 text-[#666ed2]" />,
      title: "Liquidity Pool",
      description: "40% of XEROW COIN allocated to liquidity pools, maintaining strong market stability."
    },
    {
      icon: <FaSeedling className="w-6 h-6 text-[#666ed2]" />,
      title: "Eco Rewards",
      description: "30% dedicated to rewarding businesses achieving verified food waste reduction targets."
    },
    {
      icon: <FaLock className="w-6 h-6 text-[#666ed2]" />,
      title: "Vesting Schedule",
      description: "Strategic coin release schedule ensuring long-term ecosystem sustainability."
    },
    {
      icon: <FaChartBar className="w-6 h-6 text-[#666ed2]" />,
      title: "Governance",
      description: "XEROW COIN holders shape protocol decisions through decentralized voting."
    },
    {
      icon: <FaRecycle className="w-6 h-6 text-[#666ed2]" />,
      title: "Burn Mechanism",
      description: "Automatic coin burn tied to platform milestones, increasing scarcity over time."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Tokenomics</div>
          </div>
          <h2 className="section-title mt-5">
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
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#666ed2]/20 transition-colors group"
            >
              <motion.div 
                className="bg-[#666ed2]/10 p-3 rounded-xl w-fit mb-4 group-hover:bg-[#666ed2]/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-syne mb-2 text-[#2D2654]">
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
