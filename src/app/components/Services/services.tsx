"use client"

import { motion } from 'framer-motion';
import { fadeIn, scaleIn, staggerContainer } from '../annimation/variants';
import Image from 'next/image'


interface ServiceCard {
    title: string;
    color: string;
    border: string;
    items: string[];
    image: string;
  }
  

const Services = () => {
    const services: ServiceCard[] = [
        {
            title: "For Startups & Scaleups",
            color: "bg-[#ffcc68]",
            border: "border border-black  shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
            items: ["Position your brand to standout, not just fit in", "Build marketing campaigns that drive customer, investor and industry buzz", "Turn data into actionable strategies that fuel growth"],
            image: "/Assets/vetra 6.png",
          },
          {
            title: "For Film & Entertainment",
            color: "bg-[#056839] text-white", 
            border: "border border-black  shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]", 
        items: ["Create campaigns that makes your film impossible to ignore", "Build pre-release hype that translates to real box office numbers", "Execute rollouts that don't just market films, but turn them into moments"],
            image: "/Assets/vetra 8.png",
          },
          {
            title: "For Music & Media",
            color: "bg-[#ffac5f]", 
            border: "border border-black  shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
            items: ["Design artist and album campaigns that actually move culture", "Engage your fans across platforms, and keep them hooked to your music", "Make your music more than sound- make it a movement."],
            image: "/Assets/vetra 7.png", 
          },
      ];
    
    
  return (
    <section className="bg-gray-50 px-4 sm:px-6 py-12 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeIn}>
          <h2 className="text-center text-xl font-bold mb-2 text-[#056839]  p-2">What We Do</h2>
          <p className="text-center text-2xl font-bold  mb-4">
            Services We Can Help You With
          </p>
          <p className="text-center text-gray-600 mb-7 p-2">We don’t just market. We launch. We amplify. We turn brands into movements and stories into culture.</p>

        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl ${service.color} border ${service.border}`}
            >
             <div className="relative w-full bg-white h-48 mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                   <span className="w-1 h-1 bg-gray-400 mx-3 rounded-full" />
                    <span >{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;