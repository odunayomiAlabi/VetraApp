'use client'

// src/components/FAQ.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { fadeIn, staggerContainer } from '../annimation/variants';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}
  
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqs: FAQItem[] = [
    {
      question: "How does the agency work?",
      answer: "Think of us as your creative and strategic partner. Whether you're a startup looking for brand positioning, a filmmaker preparing for a release, or an artist rolling out an album, we handle everything from strategy to execution. ",
    },
    {
      question: "Do you only work with startups?",
      answer: "Nope! While we love working with startups and scaleups, we're just as passionate about storytelling in film, music, and media. If you have a brand, a project, or a story that needs an audience, we're your people.",
    },
    {
      question: "What services do you offer?",
      answer: (
        <>
          {/* <p>It depends on the scope of the project. We offer everything from one-time campaigns to long-term brand-building.</p> */}
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>For startups & scaleups:</strong> Brand strategy, marketing campaigns, go-to-market plans, growth strategies.            </li>
            <li><strong>For film & TV:</strong> Pre-release hype, marketing campaigns, audience engagement, festival & premiere strategy.</li>
            <li><strong>For music & media:</strong>Album rollouts, artist branding, fan engagement, creative direction.            </li>
          </ul>
        </>
      ),
    },
    {
      question: "What's your pricing like?",
      answer: "It depends on the scope of the project. We offer everything from one-time campaigns to long-term brand-building. ",
    },
    {
      question: "How do we get started?",
      answer: "Simple. Send us a message, and let's talk.",
    },
  ];

  // Function to render answer content (handles both string and ReactNode)
  const renderAnswer = (answer: string | React.ReactNode) => {
    if (typeof answer === 'string') {
      return <p className="text-gray-600">{answer}</p>;
    }
    return answer;
  };

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
          You&apos;ve Got Questions? We&apos;ve Got Answers.
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
              className="border border-green-600 rounded-lg overflow-hidden text-white"
            >
              <motion.button
                // whileHover={{ backgroundColor: "green", color: "white" }}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-4 text-left flex justify-between items-center bg-green-600"
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
                    className="px-4 pb-4 text-black"
                  >
                    {renderAnswer(faq.answer)}
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