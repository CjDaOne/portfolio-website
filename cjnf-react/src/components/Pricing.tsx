const Pricing = () => {
  const packages = [
    {
      name: "Starter Package",
      description: "Perfect for individuals and small businesses getting started online",
      price: "$1,496",
      period: "first year",
      popular: false,
      features: [
        "Domain Registration ($40/year)",
        "Web Hosting ($240/year)",
        "Website Development ($1,000)",
        "Basic Support"
      ],
      cta: "Get Started"
    },
    {
      name: "Business Package",
      description: "Ideal for growing businesses needing professional presence",
      price: "$2,696",
      period: "first year",
      popular: true,
      features: [
        "Domain Registration ($40/year)",
        "Web Hosting ($240/year)",
        "Website Development ($1,000)",
        "Business Email Setup ($216/year)",
        "3 Months Website Maintenance ($300)",
        "Priority Support"
      ],
      cta: "Most Popular"
    },
    {
      name: "Enterprise Package",
      description: "Complete solution for established businesses",
      price: "$3,896",
      period: "first year",
      popular: false,
      features: [
        "Domain Registration ($40/year)",
        "Web Hosting ($240/year)",
        "Website Development ($1,000)",
        "Business Email Setup ($216/year)",
        "12 Months Website Maintenance ($1,200)",
        "Advanced Security Features",
        "24/7 Premium Support"
      ],
      cta: "Contact Us"
    }
  ];

  const handleCTA = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Service Packages
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Choose the perfect package for your business. All packages include our commitment to quality and reliability.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 ${
                pkg.popular ? 'ring-4 ring-red-500 relative' : ''
              }`}
            >
              {pkg.popular && (
                <div className="bg-red-500 text-white text-center py-2 font-semibold text-sm">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-blue-900">{pkg.name}</h3>
                <p className="text-gray-600 mb-6 min-h-[3rem]">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">{pkg.price}</span>
                  <span className="text-gray-600 ml-2">/ {pkg.period}</span>
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
          <h3 className="text-2xl font-bold mb-4 text-gray-800">À La Carte Services</h3>
          <p className="text-gray-600 mb-6">Need individual services? We offer flexible pricing:</p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <span className="bg-white px-4 py-2 rounded-lg shadow">Domain: $40/year</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow">Hosting: $240/year</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow">Development: $1,000</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow">Email: $216/year</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow">Maintenance: $100/month</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
