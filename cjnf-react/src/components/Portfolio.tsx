const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Portfolio</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <img
            src="/images/DAJ0.jpg"
            alt="Web development project example"
            className="rounded-lg shadow-lg w-full"
            loading="lazy"
          />
          <img
            src="/images/webDev1.png"
            alt="Website design showcase"
            className="rounded-lg shadow-lg w-full"
            loading="lazy"
          />
        </div>
        <p className="text-xl text-center mb-6 text-gray-600">
          Explore our portfolio of web development projects, showcasing custom designs, responsive layouts, and innovative solutions for businesses. From e-commerce sites to corporate landing pages, we deliver quality and functionality.
        </p>
        <div className="text-center">
          <a
            href="https://github.com/CjDaOne?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 inline-block"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
