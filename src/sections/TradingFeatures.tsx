'use client';

import { motion } from "framer-motion";

const features = [
  {
    title: "Optimized Trading Decisions",
    description: "AI algorithms analyze vast amounts of data, identify patterns, and make predictions to optimize trading decisions.",
    number: "1"
  },
  {
    title: "Adaptive Performance",
    description: "Machine learning models adapt to changing market conditions and continuously improve by learning from historical data.",
    number: "2"
  },
  {
    title: "Automated Trading",
    description: "AI automates trading strategies, executes trades at optimal times, and manages risk more effectively.",
    number: "3"
  },
  {
    title: "Informed Decisions with NLP",
    description: "Natural language processing (NLP) processes news, social media sentiment, and other unstructured data to inform trading decisions.",
    number: "4"
  }
];

export const TradingFeatures = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">AI Trading</div>
          </div>
          <h2 className="section-title mt-5">
            Advanced Trading Features
          </h2>
          <p className="section-description mt-5">
            Leverage AI-powered tools for smarter trading decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F8F9FF] p-8 rounded-3xl relative group hover:bg-[#F0F2FF] transition-colors"
            >
              <span className="text-[#666ed2]/20 text-8xl font-bold absolute right-8 bottom-8">
                {feature.number}
              </span>
              <div className="relative z-10">
                <h3 className="text-2xl font-syne text-[#2D2654] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-raleway">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 