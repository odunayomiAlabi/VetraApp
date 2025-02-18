"use client"

// src/components/Testimonials.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { fadeIn } from '../annimation/variants';

interface Testimonial {
    name: string;
    position: string;
    content: string;
  }
  

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const testimonials: Testimonial[] = [
    {
      name: "Dorwu Mawutor Prince",
      position: "CEO, Reelpoint",
      content:
        "In any industry, those who master collaboration dominate. Film marketing is no different. Partnering with Vetra wasn’t just working together—it was doubling down on strategy, execution, and results. When the right minds align, the impact speaks for itself. Looking forward to doing it again.",
    },
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      content: "In any industry, those who master collaboration dominate. Film marketing is no different. Partnering with Vetra wasn’t just working together—it was doubling down on strategy, execution, and results. When the right minds align, the impact speaks for itself. Looking forward to doing it again.",
    },
    {
      name: "Michael Brown",
      position: "Founder, CreativeHub",
      content:
        "In any industry, those who master collaboration dominate. Film marketing is no different. Partnering with Vetra wasn’t just working together—it was doubling down on strategy, execution, and results. When the right minds align, the impact speaks for itself. Looking forward to doing it again.",
    },
  ];


  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="bg-gray-50 px-4 sm:px-6 py-12 md:py-20 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Partners Say
        </h2>
        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="flex flex-col md:flex-row gap-6"
            >
               {testimonials.map((testimonial, index) => (
          <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-lg shadow flex-1"
        >
            {/* Image Above Text */}
            <div className="flex flex-col items-center gap-4 mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src="/Assets/ProfilePic.png"
                  alt={testimonial.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-gray-600 text-center">{testimonial.content}</p>
       </motion.div>
        ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;