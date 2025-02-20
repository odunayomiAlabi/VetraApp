"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { staggerContainer } from '../annimation/variants';

interface Feature {
    number: number;
    title: string;
    description: string;
  }
  

const WhyChooseUs = () => {
    const features: Feature[] = [
        {
          number: 1,
          title: "We Speak Startup & Storytelling Fluently",
          description:
            "You don’t need another agency that ‘kinda gets it.’ We live in both worlds—the fast-paced chaos of building something new and the art of making people care.",
        },
        {
          number: 2,
          title: "We Make People Feel",
          description:
            "Attention isn’t enough. If your audience doesn’t feel something, they won’t act. We craft stories that connect, campaigns that resonate, and launches that leave an imprint",
        },
        {
          number: 3,
          title: "We Mix Strategy with Execution",
          description:
            "This isn’t a ‘throw ideas around’ kind of place. We build, we test, we optimise—and we deliver. Every single time.",
        },
      ];
    
  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="px-4 sm:px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.img
            src="/Assets/image2.png?w/600/400"
            alt="Team meeting"
            className="rounded-lg w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
          <div>
            <motion.h2 
              className="text-3xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-center text-1xl text-green-600 font-bold mb-2">
          Why Choose Vetra? 
        </p>
        <h2 className="text-3xl text-center font-bold mb-8">
          We are the bridge between creative marketing and storytelling
        </h2>

            </motion.h2>
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {features.map((feature) => (
                <motion.div 
                  key={feature.number} 
                  className="flex gap-4"
                  variants={featureVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0">
                    {feature.number}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;