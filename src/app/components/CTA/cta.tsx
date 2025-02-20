'use client';

import { motion } from "framer-motion";

const CTA = () => {
  const calendlyUrl = "https://calendly.com/hello-choosevetra/30min";

  const openCalendly = () => {
    window.open(calendlyUrl, '_blank');
  };
    return (
      <section className="flex flex-col justify-center items-center h-[30vh] mx-4 my-12 sm:m-16 md:m-20 lg:m-28
            rounded-xl sm:rounded-2xl 
            text-center 
            bg-green-600 
            border border-black 
            shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
            outline-none">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Big Ideas. Big Stories. Bigger Impact
          </h2>
          <p className=" text-lg mb-6">Whether you&apos;re raising funding, scaling up, premiering a film, or rolling out an album— <strong>we make sure the world sees, hears, and remembers.</strong></p>
          <motion.a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-green-800 shadow-md hover:bg-green-900 text-white rounded-md transition-colors"
            >
              Talk To Us
            </motion.a>
        </div>
      </section>
    );
  };
  
  export default CTA;
  
  