const Hero = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">CJNF SOLUTIONS</h1>
            <h2 className="text-2xl md:text-3xl mb-6">Digital Consulting Firm</h2>
            <p className="text-xl mb-8">
              Empowering businesses with a robust online presence through affordable, reliable, and professional web services.
            </p>
            <a href="#services" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              Our Services
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/Jan_9_2023_7_18_53~4.jpg"
              alt="Profile picture of Carl'averis Jackson, Founder of CJNF Solutions"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
