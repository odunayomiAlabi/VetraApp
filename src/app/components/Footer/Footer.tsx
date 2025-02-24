// src/components/Footer.tsx

import Image from "next/image";

const Footer = () => {
  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "Talk to Us", href: "/talk" },
    { name: "Terms", href: "/terms" },
  ];

  const useCases = [
    { name: "Startups", href: "" },
    { name: "Scale-ups", href: "" },
    { name: "Filmmakers", href: "" },
    { name: "Music Executives", href: "" },
  ];

  return (
    <footer className="bg-green-800 text-white px-4 sm:px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex justify-between items-center py-5 text-white">
          <div className="flex items-center">
            <Image
              src="/Assets/logomark green.png"
              alt="Logo"
              height={50}
              width={150}
              className="w-auto h-auto max-w-[150px] max-h-[50px] object-contain"
            />
            <p className="text-700 font-bold text-white">etra</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 ">Resources</h4>
          <ul className="space-y-2 text-white">
            {resources.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-white hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Use Cases</h4>
          <ul className="space-y-2">
            {useCases.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-white hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <address className="text-gray-400 not-italic">
            {/* <p>1234 Marketing Street</p>
              <p>Creative City, ST 12345</p> */}
            <p className="mt-2">
              <a
                href="mailto:Hello@choosevetra.com"
                className="hover:text-white transition-colors text-white text-300"
              >
                Hello@choosevetra.com
              </a>
              <p className="mt-2">
                <a
                  href="www.choosevetra.com"
                  className="hover:text-grey-400 transition-colors text-white text-300"
                >
                  www.choosevetra.com
                </a>
              </p>
            </p>
          </address>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 mb-10 pt-10 ">
        <div className="text-center text-white text-sm">
          <p>&copy; {new Date().getFullYear()} Vetra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
