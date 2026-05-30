const Portfolio = () => {
  const projects = [
    {
      title: "LOWRY SASSY CREATIONZ",
      description: "Custom product catalog and booking site for a boutique brand, showcasing fashion products with an elegant, mobile-first design.",
      image: "/images/lowry-sassy-creationz-screenshot.png",
      tags: ["React", "CSS3", "JavaScript", "Responsive"],
      tagColors: ["blue", "green", "purple", "yellow"],
      liveUrl: "https://frabjous-daffodil-a8243b.netlify.app/",
      codeUrl: "https://github.com/CjDaOne?tab=repositories",
    },
    {
      title: "Hardwicks Wood Candles",
      description: "E-commerce-ready product showcase for a handmade candle shop, featuring clean product layouts and seamless Netlify deployment.",
      image: "/images/hardwicks-wood-candles-screenshot.png",
      tags: ["HTML5", "CSS3", "JavaScript", "Netlify"],
      tagColors: ["blue", "green", "indigo", "orange"],
      liveUrl: "https://hardwicks-wood-candles.netlify.app/",
      codeUrl: "https://github.com/CjDaOne?tab=repositories",
    },
    {
      title: "Serene Mind App",
      description: "Full-stack PWA for mental wellness with AI-powered journaling, mood tracking, and offline-first architecture.",
      image: "/images/serene-mind-app-screenshot.png",
      tags: ["Next.js 15", "Google Gemini", "PWA", "React 19"],
      tagColors: ["blue", "green", "yellow", "indigo"],
      liveUrl: "https://serene-mind-app-two.vercel.app/",
      codeUrl: "https://github.com/CjDaOne?tab=repositories",
    },
  ];

  const tagColorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800",
    yellow: "bg-yellow-100 text-yellow-800",
    indigo: "bg-indigo-100 text-indigo-800",
    orange: "bg-orange-100 text-orange-800",
    pink: "bg-pink-100 text-pink-800",
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Our Work
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          A sample of projects built for real clients — from boutique retail to wellness applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 rounded text-xs font-medium ${tagColorMap[project.tagColors[idx]] || "bg-gray-100 text-gray-800"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm font-medium">
                  <span
                    className="text-blue-700 hover:text-blue-900 transition"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.codeUrl, '_blank'); }}
                  >
                    <i className="fab fa-github mr-1"></i> Code
                  </span>
                  <span className="text-green-700 hover:text-green-900 transition">
                    <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/CjDaOne?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 inline-block"
          >
            <i className="fab fa-github mr-2"></i>View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
