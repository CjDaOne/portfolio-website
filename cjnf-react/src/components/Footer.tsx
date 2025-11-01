const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">CJNF SOLUTIONS</h3>
            <p className="text-gray-400 mb-2">
              Empowering businesses with robust online presence through affordable, reliable, and professional services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition duration-300">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition duration-300">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition duration-300">About</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:cjnfsolutions@gmail.com" className="hover:text-white transition duration-300">
                  cjnfsolutions@gmail.com
                </a>
              </li>
              <li>Remote Services Available</li>
              <li>Serving Businesses Nationwide</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} CJNF SOLUTIONS. All rights reserved. | Digital Consulting Firm
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
