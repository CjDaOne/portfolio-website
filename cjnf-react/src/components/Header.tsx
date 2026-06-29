// src/components/Header.tsx
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">

          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/images/logo no background.png"
              alt="CJNF Solutions logo"
              className="h-10 w-auto transition-transform group-hover:scale-105"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <span className="text-xl font-bold tracking-wide">
              CJNF <span className="text-blue-200">SOLUTIONS</span>
            </span>
          </a>

          {/* Desktop Navigation Link Matrix */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6 text-sm font-medium">
              <li><a href="#services" className="hover:text-blue-300 transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-blue-300 transition">Systems</a></li>
              <li><a href="#pricing" className="hover:text-blue-300 transition">Pricing</a></li>
              <li><a href="#contact" className="hover:text-blue-300 transition">Contact</a></li>
              <li>
                <a
                  href="#contact"
                  className="bg-red-500 hover:bg-red-600 px-4 py-2.5 rounded-lg text-white font-semibold transition shadow-md block text-center text-xs uppercase tracking-wider"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation Trigger Button */}
          <button
            className="md:hidden text-white focus:outline-none p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Fluid Mobile Menu Layer */}
        {menuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-blue-700/60">
            <ul className="flex flex-col space-y-4 pt-4 text-base font-medium">
              <li><a href="#services" className="block hover:text-blue-300 transition py-1" onClick={() => setMenuOpen(false)}>Services</a></li>
              <li><a href="#portfolio" className="block hover:text-blue-300 transition py-1" onClick={() => setMenuOpen(false)}>Systems</a></li>
              <li><a href="#pricing" className="block hover:text-blue-300 transition py-1" onClick={() => setMenuOpen(false)}>Pricing</a></li>
              <li><a href="#contact" className="block hover:text-blue-300 transition py-1" onClick={() => setMenuOpen(false)}>Contact</a></li>
              <li className="pt-2">
                <a
                  href="#contact"
                  className="block bg-red-500 hover:bg-red-600 px-4 py-3 rounded-lg text-white font-bold transition text-center uppercase tracking-wider text-sm shadow-md"
                  onClick={() => setMenuOpen(false)}
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
