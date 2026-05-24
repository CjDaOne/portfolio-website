const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              CJNF SOLUTIONS
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Building software, workflow systems, and structured digital tools
              designed to improve productivity, organization, and operational clarity.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Navigation
            </h3>

            <ul className="space-y-2">

              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#trust"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Results
                </a>
              </li>

              <li>
                <a
                  href="/appointments"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Book Consultation
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <ul className="space-y-2 text-gray-400">

              <li>
                <a
                  href="mailto:cjnfsolutions@gmail.com"
                  className="hover:text-white transition duration-300"
                >
                  cjnfsolutions@gmail.com
                </a>
              </li>

              <li>
                Remote Services Available
              </li>

              <li>
                Appointment-Based Consultations
              </li>

              <li>
                Serving Clients Nationwide
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center">

          <p className="text-gray-400 text-sm">
            &copy; {currentYear} CJNF SOLUTIONS LLC. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Software • Workflow Systems • Structured Digital Solutions
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
