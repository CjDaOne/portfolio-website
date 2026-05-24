const Hero = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full text-center">
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              CJNF SOLUTIONS
            </h1>

            <h2 className="text-2xl md:text-3xl mb-6">
              Software & Workflow Systems
            </h2>

            <p className="text-xl md:text-2xl mb-4 font-semibold text-blue-100">
              Building tools that improve productivity, structure, and digital wellness
            </p>

            <p className="text-lg mb-8 leading-relaxed">
              We design software and systems that help individuals and organizations
              organize tasks, rebuild routines, and improve daily function through
              structured, user-focused digital tools and consulting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
              <a
                href="/appointments"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 text-center"
              >
                Book a Consultation
              </a>

              <a
                href="#services"
                className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg font-semibold transition duration-300 text-center"
              >
                Explore Systems
              </a>
            </div>

            <p className="text-sm text-blue-200">
              ✓ Software Development ✓ Workflow Design ✓ Productivity Systems
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
