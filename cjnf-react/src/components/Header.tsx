import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="logo">
            <span className="text-2xl font-bold">CJNF SOLUTIONS</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-blue-300">About</a></li>
              <li><a href="#services" className="hover:text-blue-300">Services</a></li>
              <li><a href="#portfolio" className="hover:text-blue-300">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
