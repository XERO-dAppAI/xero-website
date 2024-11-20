'use client';

import { motion } from "framer-motion";
import {
  Brain,
  Lock,
  BarChart3,
  Workflow,
  LineChart,
  Server
} from 'lucide-react';

const features = [
  {
    icon: <Server className="w-8 h-8 text-[#666ed2]" />,
    title: "Real-Time Tracking",
    description: "Monitor inventory levels and expiry dates in real-time across all locations."
  },
  {
    icon: <Brain className="w-8 h-8 text-[#666ed2]" />,
    title: "AI Predictions",
    description: "Leverage machine learning to predict demand and optimize stock levels."
  },
  {
    icon: <Lock className="w-8 h-8 text-[#666ed2]" />,
    title: "Secure Data",
    description: "Enterprise-grade security with blockchain-verified data integrity."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-[#666ed2]" />,
    title: "Analytics Dashboard",
    description: "Comprehensive analytics to track waste reduction and cost savings."
  },
  {
    icon: <Workflow className="w-8 h-8 text-[#666ed2]" />,
    title: "Smart Automation",
    description: "Automated ordering and inventory management based on AI insights."
  },
  {
    icon: <LineChart className="w-8 h-8 text-[#666ed2]" />,
    title: "Performance Metrics",
    description: "Track KPIs and ROI with detailed performance reporting."
  }
];

export const Features = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Features</div>
          </div>
          <h2 className="section-title mt-5">
            Everything you need to reduce food waste
          </h2>
          <p className="section-description mt-5">
            Comprehensive tools powered by AI and blockchain technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#666ed2]/20 transition-colors group"
            >
              <div className="bg-[#666ed2]/10 p-3 rounded-xl w-fit mb-4 group-hover:bg-[#666ed2]/20 transition-colors">
                {feature.icon}
              </div>
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
