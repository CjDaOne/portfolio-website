const Hero = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            CJNF SOLUTIONS
          </h1>

          <h2 className="text-2xl md:text-3xl mb-6 text-blue-200">
            Custom Software & Workflow Systems
          </h2>

          <p className="text-xl md:text-2xl mb-4 font-semibold text-blue-100">
            You have a process that's broken, manual, or missing entirely.
            We build the system to fix it.
          </p>

          <p className="text-lg mb-8 leading-relaxed text-blue-100">
            From task management tools to full web applications, CJNF Solutions
            designs and builds structured digital systems for individuals and small
            businesses — focused on clarity, usability, and long-term function.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <a
              href="#contact"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 text-center"
            >
              Book a Free Consultation
            </a>
            <a
              href="#portfolio"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg font-semibold transition duration-300 text-center"
            >
              See Our Work
            </a>
          </div>

          <p className="text-sm text-blue-300">
            ✓ Custom Web Apps &nbsp;✓ Workflow Design &nbsp;✓ Productivity Systems &nbsp;✓ Ongoing Support
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
