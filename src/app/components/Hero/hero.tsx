"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, slideIn } from '../annimation/variants';

const Hero = () => {
  return (
    <section className="px-4 sm:px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideIn}
            className="text-center md:text-left"
          >
            <span className="text-green-600 text-sm">By Better Marketing Team</span>
            <h1 className="text-4xl font-bold mt-2 mb-4">
              For Startups, Scaleups, and Storytellers Who Refuse
            </h1>
            <p className="text-gray-600 mb-6">
              Your startup, firm, or creative project might be brilliant, but 
              without the right strategy, it's just another drop in an ocean of 
              noise. We help you avoid that.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-600 text-white rounded-md"
            >
              Talk To Us
            </motion.button>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="order-first md:order-last"
          >
             <Image
                              src="/Assets/BusinessPlan.png"
                              alt="BusinessPlan"
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;