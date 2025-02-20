"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  position: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dorwu Mawutor Prince",
    position: "CEO, Reelpoint",
    content:
      "In any industry, those who master collaboration dominate. Film marketing is no different. Partnering with Vetra wasn't just working together—it was doubling down on strategy, execution, and results. When the right minds align, the impact speaks for itself. Looking forward to doing it again.",
  },
  {
    name: "Dorwu Mawutor Prince",
    position: "CEO, Reelpoint",
    content:
      "In any industry, those who master collaboration dominate. Film marketing is no different. Partnering with Vetra wasn't just working together—it was doubling down on strategy, execution, and results. When the right minds align, the impact speaks for itself. Looking forward to doing it again.",
  },
  {
    name: "Dorwu Mawutor Prince",
    position: "CEO, Reelpoint",
    content:
      "In any industry, those who master collaboration dominate. Film marketing is no different. Partnering with Vetra wasn't just working together—it was doubling down on strategy, execution, and results. When the right minds align, the impact speaks for itself. Looking forward to doing it again.",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 200 : -200,
  }),
  center: {
    opacity: 1,
    x: 0,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? 200 : -200,
    zIndex: 0,
  }),
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([
      (page + newDirection + testimonials.length) % testimonials.length,
      newDirection,
    ]);
  };

  return (
    <section className="px-4 py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-green-700 font-medium mb-2">What Our Partners Say</h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            You do&apos;t have to take our words for it...take theirs
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative overflow-hidden">
          <div className="mx-auto relative min-h-[400px] md:min-h-[300px]">
            <AnimatePresence initial={false} custom={direction}>
              <div className="flex justify-center items-start">
                {/* Left Testimonial */}
                <motion.div
                  key={`left-${page}`}
                  className="w-64 md:w-72 hidden md:block relative mx-4 p-6 bg-white rounded-lg shadow-lg transform -rotate-6"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 0.7, x: 0 }}
                  style={{ 
                    background: "linear-gradient(135deg, #f0f9f0 0%, #e6f7e6 100%)",
                    border: "1px solid #e0e0e0",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
                      <Image
                        src="/Assets/ProfilePic.png"
                        alt="Profile"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">{testimonials[(page + testimonials.length - 1) % testimonials.length].name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{testimonials[(page + testimonials.length - 1) % testimonials.length].position}</p>
                    <p className="text-xs text-gray-700 italic">
                      <span className="text-green-700 text-xl">&quot;</span>
                      {testimonials[(page + testimonials.length - 1) % testimonials.length].content.substring(0, 150)}...
                      <span className="text-green-700 text-xl">&quot;</span>
                    </p>
                  </div>
                </motion.div>

                {/* Main Testimonial */}
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full max-w-xl z-10 p-8 bg-white rounded-lg shadow-xl mx-auto relative"
                  style={{ 
                    background: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
                    border: "1px solid #d4e6d4",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                      <Image
                        src="/Assets/ProfilePic.png"
                        alt={testimonials[page].name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-xl">{testimonials[page].name}</h3>
                    <p className="text-sm text-gray-600 mb-6">{testimonials[page].position}</p>
                    <p className="text-lg text-gray-800 text-center italic">
                      <span className="text-green-700 text-3xl">&quot;</span>
                      {testimonials[page].content}
                      <span className="text-green-700 text-3xl">&quot;</span>
                    </p>
                  </div>
                </motion.div>

                {/* Right Testimonial */}
                <motion.div
                  key={`right-${page}`}
                  className="w-64 md:w-72 hidden md:block relative mx-4 p-6 bg-white rounded-lg shadow-lg transform rotate-6"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 0.7, x: 0 }}
                  style={{ 
                    background: "linear-gradient(135deg, #f0f9f0 0%, #e6f7e6 100%)",
                    border: "1px solid #e0e0e0",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
                      <Image
                        src="/Assets/ProfilePic.png"
                        alt="Profile"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">{testimonials[(page + 1) % testimonials.length].name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{testimonials[(page + 1) % testimonials.length].position}</p>
                    <p className="text-xs text-gray-700 italic">
                      <span className="text-green-700 text-xl">&quot;</span>
                      {testimonials[(page + 1) % testimonials.length].content.substring(0, 150)}...
                      <span className="text-green-700 text-xl">&quot;</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </AnimatePresence>

            <div className="absolute inset-y-1/2 flex justify-between w-full px-4 -mt-6">
              <button 
                onClick={() => paginate(-1)} 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition z-20"
                aria-label="Previous testimonial"
              >
                <span className="text-2xl text-gray-800">←</span>
              </button>
              <button 
                onClick={() => paginate(1)} 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition z-20"
                aria-label="Next testimonial"
              >
                <span className="text-2xl text-gray-800">→</span>
              </button>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setPage([index, index > page ? 1 : -1])}
                className={`mx-1 w-3 h-3 rounded-full transition-all duration-300 ${
                  index === page ? "bg-green-700 w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Decorative elements - leaf shapes */}
          {/* <div className="absolute -bottom-20 -left-16 w-64 h-64 rotate-45 bg-green-700 opacity-5 rounded-tr-full"></div>
          <div className="absolute -top-20 -right-16 w-64 h-64 -rotate-45 bg-green-700 opacity-5 rounded-bl-full"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;