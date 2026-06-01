const Pricing = () => {
  const plans = [
    {
      name: "Discovery Session",
      description: "Understand your needs and map out the right system before any build begins.",
      price: "$75",
      period: "per session",
      popular: false,
      features: [
        "30–60 minute consultation",
        "Workflow or business analysis",
        "System recommendations",
        "Next-step roadmap",
      ],
      cta: "Book a Session",
    },
    {
      name: "System Build",
      description: "Custom-built digital systems for productivity, operations, or online presence.",
      price: "From $1,000",
      period: "project-based",
      popular: true,
      features: [
        "Custom web or workflow system",
        "Task / process automation setup",
        "User-focused design",
        "Deployment & configuration",
        "Initial support period included",
      ],
      cta: "Start a Build",
    },
    {
      name: "Ongoing Support",
      description: "Maintenance, updates, and continued optimization after launch.",
      price: "$100",
      period: "/ month starting",
      popular: false,
      features: [
        "System maintenance",
        "Feature updates",
        "Bug fixes & improvements",
        "Priority support access",
      ],
      cta: "Get Support",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Pricing
        </h2>

        <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          Transparent starting points. Final scope and pricing are confirmed after your discovery session.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col ${
                plan.popular ? 'ring-4 ring-red-500 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-red-500 text-white text-center py-2 font-semibold text-sm tracking-wide">
                  MOST COMMON STARTING POINT
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-blue-900">{plan.name}</h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed min-h-[3rem]">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-500 ml-2 text-sm">{plan.period}</span>
                </div>

                <ul className="mb-8 space-y-3 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full py-3 px-6 rounded-lg font-semibold transition duration-300 text-center mt-auto ${
                    plan.popular
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-blue-900 hover:bg-blue-800 text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Not sure where to start? The $75 discovery session is the lowest-risk first step.
        </p>

      </div>
    </section>
  );
};

export default Pricing;
