"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { staggerContainer } from '../annimation/variants';

interface Feature {
    number: string;
    title: string;
    description: string;
  }
  

const WhyChooseUs = () => {
    const features: Feature[] = [
        {
          number: '01',
          title: "We Speak Startup & Storytelling Fluently",
          description:
            "You don’t need another agency that ‘kinda gets it.’ We live in both worlds—the fast-paced chaos of building something new and the art of making people care.",
        },
        {
          number: '02',
          title: "We Make People Feel",
          description:
            "Attention isn’t enough. If your audience doesn’t feel something, they won’t act. We craft stories that connect, campaigns that resonate, and launches that leave an imprint",
        },
        {
          number: '03',
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
  const numberColors = [ ' text-[#056839]', 'text-[#E79800]',  'text-[#FFAC5F]'];

  return (
    <section className="px-4 sm:px-6 py-12 md:py-20 bg-[#FFFEF0]">
      <div className="max-w-6xl mx-auto">
      <motion.h2 
              className="text-3xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-center text-xl text-green-600 font-bold mb-2">
          Why Choose Vetra? 
        </p>
        <h2 className="text-3xl text-center font-bold mb-8">
          We are the bridge between creative marketing and storytelling
        </h2>

            </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.img
            src="/Assets/Vetra 4.png?w/600/400"
            alt="Team meeting"
            className="rounded-lg w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
          <div>
       
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.number} 
                  className=" gap-4"
                  variants={featureVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className={`w-8 h-8 text-4xl font-bold  flex items-center justify-center
                                        ${numberColors[index % numberColors.length]}`}>
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