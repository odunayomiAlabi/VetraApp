// src/components/Footer.tsx

import Image from "next/image";

const Footer = () => {
    const resources = [
      { name: "Blog", href: "/blog" },
      { name: "Support", href: "/support" }
    ];
  
    const useCases = [
      { name: "Startups", href: "/startups" },
      { name: "Enterprise", href: "/enterprise" }
    ];
  
    return (
      <footer className="bg-gray-900 text-white px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex justify-between items-center py-5 text-white">
             <div className="flex items-center">
                       <Image
                         src="/Assets/logo.png"
                         alt="Logo"
                         height={190}
                         width={360}
                         className="w-full h-full object-cover"
                       />
                       <p className="text-700 font-bold text-white">etra</p>
                     </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
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
                    className="text-gray-400 hover:text-white transition-colors"
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
                <a href="mailto:hello@vera.com" className="hover:text-white transition-colors">
                  hello@vera.com
                </a>
                <p className="mt-2">
                <a href="https://calendly.com/your-username" className="hover:text-white transition-colors">
                  Vetra.com
                </a>
                </p>
              </p>
            </address>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Vetra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  