import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Rocket className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">Influent Ventures</span>
        </div>
        {isMobile ? (
          <div>
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            {isMenuOpen && (
              <nav className="absolute top-16 left-0 right-0 bg-white shadow-md">
                <ul className="flex flex-col items-center py-4">
                  <li className="py-2"><a href="#how-it-works" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>How It Works</a></li>
                  <li className="py-2"><a href="#pricing" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>Pricing</a></li>
                  <li className="py-2"><a href="#faq" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>FAQ</a></li>
                </ul>
              </nav>
            )}
          </div>
        ) : (
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;