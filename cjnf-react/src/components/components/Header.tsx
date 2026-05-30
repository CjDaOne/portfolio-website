import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a href="#about" className="flex items-center gap-3">
            <img
              src="/images/logo no background.png"
              alt="CJNF Solutions logo"
              className="h-10 w-auto"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <span className="text-xl font-bold tracking-wide">CJNF SOLUTIONS</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6 text-sm md:text-base">
              <li><a href="#services" className="hover:text-blue-300 transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-blue-300 transition">Work</a></li>
              <li><a href="#pricing" className="hover:text-blue-300 transition">Pricing</a></li>
              <li><a href="#contact" className="hover:text-blue-300 transition">Contact</a></li>
              <li>
                <a
                  href="#contact"
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white font-semibold transition"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden mt-4 pb-2 border-t border-blue-700">
            <ul className="flex flex-col space-y-3 pt-4 text-base">
              <li><a href="#services" className="block hover:text-blue-300 transition" onClick={() => setMenuOpen(false)}>Services</a></li>
              <li><a href="#portfolio" className="block hover:text-blue-300 transition" onClick={() => setMenuOpen(false)}>Work</a></li>
              <li><a href="#pricing" className="block hover:text-blue-300 transition" onClick={() => setMenuOpen(false)}>Pricing</a></li>
              <li><a href="#contact" className="block hover:text-blue-300 transition" onClick={() => setMenuOpen(false)}>Contact</a></li>
              <li>
                <a
                  href="#contact"
                  className="inline-block bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white font-semibold transition"
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
