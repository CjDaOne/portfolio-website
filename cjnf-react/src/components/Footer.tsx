const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12 border-t border-blue-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          <div>
            <span className="text-xl font-bold tracking-wide block mb-3">
              CJNF <span className="text-blue-200">SOLUTIONS</span>
            </span>
            <p className="text-xs text-blue-100/70 leading-relaxed max-w-sm">
              CJNF Solutions LLC designs, implements, and maintains <strong>CJNF Systems</strong>—our proprietary, managed business software architectures and automated pipelines built for scalable operations.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-blue-100/80">
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Deployments</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white transition">Discovery Intake</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-3">Contact Information</h4>
            <ul className="space-y-2 text-sm text-blue-100/80">
              <li><a href="mailto:contact@cjnfsolutions.com" className="hover:text-white transition">contact@cjnfsolutions.com</a></li>
              <li className="text-xs text-blue-100/60 pt-2 leading-normal">
                Dayton, Ohio<br />
                Enterprise Consulting & System Architecture
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-blue-900/60 flex flex-col sm:flex-row justify-between items-center text-xs text-blue-100/50 gap-4">
          <p>&copy; {new Date().getFullYear()} CJNF Solutions LLC. All rights reserved.</p>
          <div className="space-x-4 font-medium">
            <a href="/privacy-policy.html" className="hover:text-white transition underline">Privacy Policy</a>
            <a href="/terms-of-service.html" className="hover:text-white transition underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
