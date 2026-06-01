const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-4">CJNF SOLUTIONS</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Building software, workflow systems, and structured digital tools
              designed to improve productivity, organization, and operational clarity.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition">Work</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              <li><a href="#trust" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="mailto:cjnfsolutions@gmail.com" className="hover:text-white transition">
                  cjnfsolutions@gmail.com
                </a>
              </li>
              <li>Remote Services — Nationwide</li>
              <li>Appointment-Based Consultations</li>
            </ul>
            <div className="flex gap-4 mt-4 text-lg">
              <a href="https://facebook.com/i12tSolutions/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="https://github.com/CjDaOne?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://twitter.com/CjDaOne" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com/cjnf.solutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} CJNF SOLUTIONS LLC. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Software · Workflow Systems · Structured Digital Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
