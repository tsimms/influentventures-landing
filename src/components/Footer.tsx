import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Influent Ventures</h3>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-blue-300">About</a></li>
              <li><a href="#" className="hover:text-blue-300">How It Works</a></li>
              <li><a href="#" className="hover:text-blue-300">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-300">FAQ</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-blue-300">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">Email: info@influent.ventures</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Influent Ventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;