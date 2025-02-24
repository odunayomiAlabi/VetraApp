'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  
  // Calendly URL
  const calendlyUrl = "https://calendly.com/hello-choosevetra/30min"; 
  
  // Close the menu when clicking outside
  const handleCloseMenu = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <>
      {/* Overlay for mobile side menu */}
      {isSideMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={handleCloseMenu}
        ></div>
      )}
      
      <nav className="min-h-[4rem] w-[65vw] max-w-[1900px] mx-auto my-4 flex items-center justify-between p-[0_2rem] gap-[2rem] rounded-lg bg-white shadow-[0px_4px_9.9px_4px_rgba(164,164,164,0.12)] relative z-10">
        <div className="max-w-6xl w-full px-4 sm:px-6">
          <div className="flex justify-between items-center py-5">
            {/* Logo and Brand Name */}
            <div className="flex items-center">
              <Image
                src="/Assets/logomark green.png"
                alt="Logo"
                height={50}
                width={30}
                className="w-full h-full object-cover"
              />
              <p className="text-gray-700 font-bold">etra</p>
            </div>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center justify-center   border border-black 
                       shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                       overflow-hidden
                       outline-none"
              onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
              aria-label="Toggle menu"
            >
              {isSideMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            {/* Desktop menu - restructured to have 3 sections */}
            <div className="hidden md:flex flex-1 justify-between items-center">
              {/* Empty div for spacing */}
              <div className="flex-1"></div>
              
              {/* Center navigation links */}
              <div className="flex items-center gap-6 justify-center flex-1">
                <Link href="/" className="text-gray-700 hover:text-green-700">Home</Link>
                <Link href="/blog" className="text-gray-700 hover:text-green-700">Blog</Link>
              </div>
              
              {/* Contact button at the end */}
              <div className="flex-1 flex justify-end">
                <a 
                  href={calendlyUrl}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="  bg-green-800 text-white py-2 px-4 rounded-md border-2 border-green-900 shadow-md hover:bg-green-900 transition-colors flex items-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Side Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsSideMenuOpen(false)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex flex-col px-4 py-6 space-y-6">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-green-700 text-lg font-medium flex items-center"
            onClick={() => setIsSideMenuOpen(false)}
          >
            Home
          </Link>
          
          <Link 
            href="/blog" 
            className="text-gray-700 hover:text-green-700 text-lg font-medium flex items-center"
            onClick={() => setIsSideMenuOpen(false)}
          >
            Blog
          </Link>
          
          <a 
            href={calendlyUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 text-white bg-green-700 rounded-md hover:bg-green-800 transition-colors text-center mt-4"
            onClick={() => setIsSideMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;