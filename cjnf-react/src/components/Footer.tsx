// src/components/Footer.tsx

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Brand Identity */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-wide">
              CJNF <span className="text-blue-400">SYSTEMS</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
              Designing and deploying managed operational blueprints that automate lead 
              capture, streamline communication loops, and eliminate administrative drag.
            </p>
          </div>

          {/* Navigation Matrix */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Navigation</h3>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition">Systems</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Verification Touchpoints */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm font-medium">
              <li>
                <a href="mailto:cjnfsolutions@gmail.com" className="hover:text-white transition text-blue-400">
                  cjnfsolutions@gmail.com
                </a>
              </li>
              <li>Remote Services — Nationwide</li>
              <li>Appointment-Based Implementations</li>
            </ul>
            <div className="flex gap-4 mt-4 text-xl">
              <a href="https://facebook.com/i12tSolutions/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="https://github.com/CjDaOne?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://twitter.com/CjDaOne" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com/cjnf.solutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

        </div>

        {/* Corporate Base Segment */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs tracking-wide">
            &copy; {currentYear} CJNF SOLUTIONS LLC. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-1 uppercase tracking-widest font-semibold">
            Managed Business Systems · Workflow Automation · Operational Infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;