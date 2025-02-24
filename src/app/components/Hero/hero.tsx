"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, slideIn } from '../annimation/variants';

const Hero = () => {
  // Calendly URL - replace with your actual Calendly link
  const calendlyUrl = "https://calendly.com/hello-choosevetra/30min";

  // Function to open Calendly
  const openCalendly = () => {
    window.open(calendlyUrl, '_blank');
  };

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
            {/* <span className="text-green-600 text-sm">By Better Marketing Team</span> */}
            <h1 className="text-4xl font-bold mt-0 mb-8">
              For Startups, Scaleups, and Storytellers Who Refuse To Be Ignored
            </h1>
            <p className="text-gray-600  mb-6">
              Your startup, firm, or creative project might be brilliant, but 
              without the right strategy, it&apos;s just another drop in an ocean of 
              noise. We help you avoid that.
            </p>
            <motion.a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-green-800 shadow-md hover:bg-green-900 text-white rounded-md transition-colors
                       shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                       overflow-hidden
                       outline-none"
            >
              Talk To Us
            </motion.a>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="order-first md:order-last"
          >
            <Image
              src="/Assets/Vetra 5.png"
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