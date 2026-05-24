const Header = () => {
  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="logo">
            <span className="text-2xl font-bold tracking-wide">
              CJNF SOLUTIONS
            </span>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center space-x-6 text-sm md:text-base">

              <li>
                <a href="#services" className="hover:text-blue-300">
                  Services
                </a>
              </li>

              <li>
                <a href="#trust" className="hover:text-blue-300">
                  Results
                </a>
              </li>

              <li>
                <a href="#pricing" className="hover:text-blue-300">
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="/appointments"
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white font-semibold transition"
                >
                  Book Consultation
                </a>
              </li>

            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
