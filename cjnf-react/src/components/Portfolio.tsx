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
        {/* E-commerce Platform */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <i className="fas fa-shopping-cart text-4xl text-white"></i>
          </div>
        <div className="p-6">
          <h4 className="text-xl font-semibold mb-2 text-gray-800">E-commerce Platform</h4>
          <p className="text-gray-600 mb-4">Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.</p>
          <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Node.js</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">MongoDB</span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Stripe</span>
              </div>
              <div className="flex space-x-3">
              <a href="https://github.com/CjDaOne?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-github"></i> Code
            </a>
            <a href="#" className="text-green-600 hover:text-green-800">
              <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
          </div>
          </div>
          </div>

          {/* Task Management App */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
              <i className="fas fa-tasks text-4xl text-white"></i>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Task Management App</h4>
              <p className="text-gray-600 mb-4">Collaborative project management tool with real-time updates, team collaboration, and progress tracking.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Vue.js</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Firebase</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Tailwind</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Socket.io</span>
              </div>
              <div className="flex space-x-3">
                <a href="https://github.com/CjDaOne?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-github"></i> Code
                </a>
                <a href="#" className="text-green-600 hover:text-green-800">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Restaurant Website */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
              <i className="fas fa-utensils text-4xl text-white"></i>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Restaurant Website</h4>
              <p className="text-gray-600 mb-4">Modern restaurant website with online ordering, menu management, and customer reservation system.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Next.js</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">PostgreSQL</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Prisma</span>
                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm">Stripe</span>
              </div>
              <div className="flex space-x-3">
                <a href="https://github.com/CjDaOne?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-github"></i> Code
                </a>
                <a href="#" className="text-green-600 hover:text-green-800">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Real Estate Platform */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="h-48 bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center">
              <i className="fas fa-home text-4xl text-white"></i>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Real Estate Platform</h4>
              <p className="text-gray-600 mb-4">Property listing platform with advanced search, virtual tours, and agent management system.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Express</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">MongoDB</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Mapbox</span>
              </div>
              <div className="flex space-x-3">
                <a href="https://github.com/CjDaOne?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-github"></i> Code
                </a>
                <a href="#" className="text-green-600 hover:text-green-800">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Educational Platform */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
              <i className="fas fa-graduation-cap text-4xl text-white"></i>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Educational Platform</h4>
              <p className="text-gray-600 mb-4">Online learning management system with course creation, student progress tracking, and interactive content.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Angular</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Django</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">PostgreSQL</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">AWS</span>
              </div>
              <div className="flex space-x-3">
                <a href="https://github.com/CjDaOne?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-github"></i> Code
                </a>
                <a href="#" className="text-green-600 hover:text-green-800">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Dashboard */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="h-48 bg-gradient-to-r from-pink-500 to-red-600 flex items-center justify-center">
              <i className="fas fa-chart-line text-4xl text-white"></i>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Social Media Dashboard</h4>
              <p className="text-gray-600 mb-4">Analytics dashboard for social media management with automated posting, engagement tracking, and reporting.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Vue.js</span>
                <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-sm">TypeScript</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Chart.js</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">Python</span>
              </div>
              <div className="flex space-x-3">
                <a href="https://github.com/CjDaOne?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-github"></i> Code
                </a>
                <a href="#" className="text-green-600 hover:text-green-800">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
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
