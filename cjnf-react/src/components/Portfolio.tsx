const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">About CJNF SOLUTIONS</h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded by Carl'averis Jackson, CJNF SOLUTIONS empowers businesses with a robust online presence through affordable, reliable, and professional web services. We are dedicated to helping small to medium-sized businesses across various industries thrive in the digital landscape.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">What Sets Us Apart</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-800">Personalized Service</h4>
                <p className="text-gray-700">Tailored solutions that align with your unique business goals and brand identity.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-800">Comprehensive Packages</h4>
                <p className="text-gray-700">Full-service offerings from design to deployment, ensuring a seamless experience.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-800">Remote Flexibility</h4>
                <p className="text-gray-700">Services delivered remotely for maximum convenience and accessibility.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-800">Timely Delivery</h4>
                <p className="text-gray-700">Professional project management tools ensure on-time, quality results.</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Our Work</h3>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* LOWRY SASSY CREATIONZ */}
        <a href="https://frabjous-daffodil-a8243b.netlify.app/" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
        <div className="h-48 overflow-hidden">
        <img src="/images/lowry-sassy-creationz-screenshot.png" alt="LOWRY SASSY CREATIONZ project screenshot" className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
        <h4 className="text-xl font-semibold mb-2 text-gray-800">LOWRY SASSY CREATIONZ</h4>
        <p className="text-gray-600 mb-4">A custom product catalog and booking site for a boutique brand, showcasing fashion products with an elegant design.</p>
        <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">CSS3</span>
        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">JavaScript</span>
        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Responsive</span>
        </div>
        <div className="flex space-x-3">
        <span className="text-blue-600" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open('https://github.com/CjDaOne?tab=repositories', '_blank'); }}>
        <i className="fab fa-github"></i> Code
        </span>
        <span className="text-green-600" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open('https://frabjous-daffodil-a8243b.netlify.app/', '_blank'); }}>
        <i className="fas fa-external-link-alt"></i> Live Demo
        </span>
        </div>
        </div>
        </a>

        {/* Hardwicks Wood Candles */}
        <a href="https://hardwicks-wood-candles.netlify.app/" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
        <div className="h-48 overflow-hidden">
        <img src="/images/hardwicks-wood-candles-screenshot.png" alt="Hardwicks Wood Candles project screenshot" className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
        <h4 className="text-xl font-semibold mb-2 text-gray-800">Hardwicks Wood Candles</h4>
        <p className="text-gray-600 mb-4">E-commerce-ready product showcase built for a handmade candle shop, featuring beautiful wood-scented products.</p>
        <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">HTML5</span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">CSS3</span>
        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">JavaScript</span>
        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Netlify</span>
        </div>
        <div className="flex space-x-3">
        <span className="text-blue-600" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open('https://github.com/CjDaOne?tab=repositories', '_blank'); }}>
        <i className="fab fa-github"></i> Code
        </span>
        <span className="text-green-600" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open('https://hardwicks-wood-candles.netlify.app/', '_blank'); }}>
        <i className="fas fa-external-link-alt"></i> Live Demo
        </span>
        </div>
        </div>
        </a>

        {/* CJNF SOLUTIONS */}
        <a href="https://cjnfsolutions.online/" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
        <div className="h-48 overflow-hidden">
        <img src="/images/cjnf-solutions.jpg" alt="CJNF SOLUTIONS project screenshot" className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
        <h4 className="text-xl font-semibold mb-2 text-gray-800">CJNF SOLUTIONS</h4>
        <p className="text-gray-600 mb-4">In-progress developer networking tool to find and match with collaborators, built with modern web technologies.</p>
        <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">TypeScript</span>
        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Vite</span>
        <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm">Tailwind</span>
        </div>
        <div className="flex space-x-3">
        <span className="text-blue-600" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open('https://github.com/CjDaOne?tab=repositories', '_blank'); }}>
        <i className="fab fa-github"></i> Code
        </span>
        <span className="text-green-600" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open('https://cjnfsolutions.online/', '_blank'); }}>
        <i className="fas fa-external-link-alt"></i> Live Demo
        </span>
        </div>
        </div>
        </a>

        {/* Serene Mind App */}
        <a href="https://serene-mind-app-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
        <div className="h-48 overflow-hidden">
        <img src="/images/serene-mind-app-screenshot.png" alt="Serene Mind App project screenshot" className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
        <h4 className="text-xl font-semibold mb-2 text-gray-800">Serene Mind App</h4>
        <p className="text-gray-600 mb-4">A full-stack PWA for mental wellness with AI-powered journaling, mood tracking, and offline-first architecture.</p>
        <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Next.js 15</span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Google Gemini</span>
        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">PWA</span>
        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">React 19</span>
        </div>
        <div className="flex space-x-3">
        <span className="text-blue-600" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open('https://github.com/CjDaOne?tab=repositories', '_blank'); }}>
        <i className="fab fa-github"></i> Code
        </span>
        <span className="text-green-600" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open('https://serene-mind-app-two.vercel.app/', '_blank'); }}>
        <i className="fas fa-external-link-alt"></i> Live Demo
        </span>
        </div>
        </div>
        </a>
        </div>

        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 mb-4">
            These projects showcase our expertise in full-stack development, modern frameworks, and scalable architectures.
            Each solution is tailored to meet specific business needs and deliver exceptional user experiences.
          </p>
          <a
            href="https://github.com/CjDaOne?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 inline-block"
          >
            <i className="fab fa-github mr-2"></i>
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
