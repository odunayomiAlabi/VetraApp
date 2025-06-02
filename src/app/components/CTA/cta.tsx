'use client';

import { motion } from "framer-motion";

const CTA = () => {
  const calendlyUrl = "https://appt.link/meet-with-vetra-team-Mbh6BNuf/web-conference";

  return (
    <section className="relative flex flex-col justify-center items-center 
                       h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[30vh]
                       mx-4 my-8 sm:my-12 md:my-16 lg:m-20 xl:m-28
                       py-10 sm:py-12 md:py-16
                       rounded-xl sm:rounded-2xl 
                       text-center 
                       bg-green-400 
                       border border-black 
                       shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                       overflow-hidden
                       outline-none">
      {/* Background circles */}
      <div className="absolute w-64 h-64 rounded-full bg-green-300 opacity-50 -top-32 -left-32"></div>
      <div className="absolute w-56 h-56 rounded-full bg-green-300 opacity-50 -bottom-20 -right-20"></div>
      <div className="absolute w-40 h-40 rounded-full bg-green-300 opacity-50 top-1/4 right-8"></div>
      
      <div className="relative z-10 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 text-center text-black">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">
          Big Ideas. Big Stories. Bigger Impact
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6">
          We make sure the world sees, hears, and remembers.
        </p>
        <motion.a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center  sm:px-6 sm:py-3 
                   bg-[#FFCC68] border-2 border-black
                   text-black text-sm sm:text-base font-medium
                  px-6 py-3  rounded-lg
                       shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                       overflow-hidden
                       outline-none"
        >
          Let&apos;s talk <span className="ml-2">→</span>
        </motion.a>
      </div>
    </section>
  );
};

export default CTA;