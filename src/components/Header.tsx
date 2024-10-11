import React from 'react';
import { Rocket } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Rocket className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">Influent Ventures</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a></li>
            <li><a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;