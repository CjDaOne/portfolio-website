const Pricing = () => {
  const services = [
    {
      name: "Discovery Session",
      description: "Understand your needs and identify the right systems for your business or workflow",
      price: "$75",
      period: "per session",
      popular: false,
      features: [
        "30–60 minute consultation",
        "Workflow or business analysis",
        "System recommendations",
        "Next-step roadmap"
      ],
      cta: "Book Session"
    },
    {
      name: "System Build Package",
      description: "Custom-built digital systems for productivity, operations, or online presence",
      price: "From $1,000",
      period: "project-based",
      popular: true,
      features: [
        "Custom web or workflow system",
        "Task / process automation setup",
        "User-focused design",
        "Deployment & configuration",
        "Initial support period"
      ],
      cta: "Start Build"
    },
    {
      name: "Ongoing Support",
      description: "Maintenance, updates, and continued system optimization",
      price: "$100",
      period: "monthly starting",
      popular: false,
      features: [
        "System maintenance",
        "Feature updates",
        "Bug fixes & improvements",
        "Priority support access"
      ],
      cta: "Get Support"
    }
  ];

  const handleCTA = () => {
    const appointmentPage = document.getElementById('appointments');
    if (appointmentPage) {
      appointmentPage.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Services & Engagements
        </h2>

        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Structured services designed to help you build better systems, improve productivity, and streamline operations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 ${
                pkg.popular ? 'ring-4 ring-red-500 relative' : ''
              }`}
            >
              {pkg.popular && (
                <div className="bg-red-500 text-white text-center py-2 font-semibold text-sm">
                  RECOMMENDED STARTING POINT
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-blue-900">
                  {pkg.name}
                </h3>

                <p className="text-gray-600 mb-6 min-h-[3rem]">
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-800">
                    {pkg.price}
                  </span>
                  <span className="text-gray-600 ml-2">
                    / {pkg.period}
                  </span>
                </div>

                <ul className="mb-8 space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleCTA}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-300 ${
                    pkg.popular
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-blue-900 hover:bg-blue-800 text-white'
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Flexible Engagement Options
          </h3>

          <p className="text-gray-600 mb-6">
            Services are customized based on your needs after an initial consultation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <span className="bg-white px-4 py-2 rounded-lg shadow">
              Workflow Design
            </span>
            <span className="bg-white px-4 py-2 rounded-lg shadow">
              Productivity Systems
            </span>
            <span className="bg-white px-4 py-2 rounded-lg shadow">
              Custom Software
            </span>
            <span className="bg-white px-4 py-2 rounded-lg shadow">
              System Maintenance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
