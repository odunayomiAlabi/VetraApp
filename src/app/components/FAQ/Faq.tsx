'use client'

// src/components/FAQ.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { fadeIn, staggerContainer } from '../annimation/variants';


interface FAQItem {
    question: string;
    answer: string;
  }
  
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqs: FAQItem[] = [
    {
      question: "How does the agency work?",
      answer: "Think of us as your creative and strategic partner. Whether you’re a startup looking for brand positioning, a filmmaker preparing for a release, or an artist rolling out an album, we handle everything from strategy to execution. ",
    },
    {
      question: "Do you only work with startups?",
      answer: "Nope! While we love working with startups and scaleups, we’re just as passionate about storytelling in film, music, and media. If you have a brand, a project, or a story that needs an audience, we’re your people.",
    },
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of marketing services...",
    },
    {
      question: "What's your pricing like?",
      answer: "It depends on the scope of the project. We offer everything from one-time campaigns to long-term brand-building.",
    },
    {
      question: "How do we get started?",
      answer: "Simple. Send us a message, and let’s talk.",
    },
  ];






  return (
    <section className="px-4 sm:px-6 py-12 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-2">FAQs</h2>
        <p className="text-center text-gray-600 mb-12">
          You've Got Questions? We've Got Answers.
        </p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-4 bg-green color-white"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="border border-green-600 rounded-lg overflow-hidden"
            >
              <motion.button
                whileHover={{ backgroundColor: "green" }}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-4 text-left flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQ;