'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { PopupWidget, PopupModal } from 'react-calendly';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const calendlyUrl = "https://calendly.com/your-username";

  // Menu options
  const menuOptions = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Blog",
      url: "/blog",
    },
    {
      text: "Contact Us",
      url: calendlyUrl,
      isButton: true,  // Mark this one as a button to differentiate it
    },
  ];

  return (
    <nav className="min-h-[4rem] w-[65vw] max-w-[1900px] mx-auto flex items-center justify-between p-[0_2rem] gap-[2rem] rounded-lg bg-white shadow-[0px_4px_9.9px_4px_rgba(164,164,164,0.12)]">
      <div className="max-w-6xl w-full px-4 sm:px-6">
        <div className="flex justify-between items-center py-5">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <Image
              src="/Assets/logo.png"
              alt="Logo"
              height={190}
              width={360}
              className="w-full h-full object-cover"
            />
            <p className="text-gray-700 font-bold">etra</p>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuOptions.map((option, index) => (
              option.isButton ? (
                <button
                  key={index}
                  className="px-4 py-2 text-white bg-green-700 rounded-md hover:bg-green-800"
                  onClick={() => window.location.href = option.url}  // Redirect to Calendly or other URL
                >
                  {option.text}
                </button>
              ) : (
                <Link
                  key={index}
                  href={option.url}
                  className="text-gray-700 hover:text-gray-900"
                >
                  {option.text}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
            <div className="px-4 py-3 space-y-3">
              {menuOptions.map((option, index) => (
                option.isButton ? (
                  <button
                    key={index}
                    className="w-full px-4 py-2 text-white bg-green-700 rounded-md hover:bg-green-800"
                    onClick={() => {
                      window.location.href = option.url;
                      setIsOpen(false); // Close the menu when clicked
                    }}
                  >
                    {option.text}
                  </button>
                ) : (
                  <Link
                    key={index}
                    href={option.url}
                    className="block text-gray-700 hover:text-gray-900"
                    onClick={() => setIsOpen(false)} // Close the menu when clicked
                  >
                    {option.text}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
