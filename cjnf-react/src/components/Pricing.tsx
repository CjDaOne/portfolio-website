// src/components/Pricing.tsx

const Pricing = () => {
  const plans = [
    {
      name: "Business Automation System",
      description:
        "A managed business operating system that captures leads, automates follow-up, centralizes communication, and streamlines scheduling.",
      price: "$497",
      period: "/ month",
      popular: false,
      features: [
        "Lead capture and customer management system",
        "Online appointment scheduling",
        "Automated email and SMS follow-up",
        "Missed-call text-back automation",
        "Centralized customer communication hub",
        "Managed platform hosting and maintenance",
        "Monthly system health review",
      ],
      cta: "Schedule an Operations Review",
    },
    {
      name: "Growth Automation System",
      description:
        "Custom operational workflows and automation systems designed to reduce manual work and support scalable business growth.",
      price: "$997",
      period: "/ month",
      popular: true,
      features: [
        "Everything in Business Automation System",
        "Custom workflow design and optimization",
        "Lead routing and intake automation",
        "Advanced follow-up sequences",
        "Third-party integrations & custom pipelines",
        "Custom data intake configurations",
        "Quarterly performance optimization",
        "Priority architectural support access",
      ],
      cta: "Request Strategy Session",
    },
    {
      name: "Healthcare Operations Suite",
      description:
        "Healthcare-focused operational systems designed to improve patient communication, intake processes, scheduling, and care coordination.",
      price: "Custom",
      period: "Tailored Scope",
      popular: false,
      features: [
        "Patient intake workflow design",
        "Scheduling and communication systems",
        "Virtual care workflow integration",
        "Healthcare-focused automation design",
        "Staff coordination workflows",
        "Custom implementation planning",
        "Dedicated consulting and support",
      ],
      cta: "Schedule Architecture Review",
    },
  ];

  const businessPains = [
    "Missed calls and lost lead volume",
    "Slow or inconsistent inquiry follow-up",
    "Appointment scheduling friction and no-shows",
    "Disorganized customer communication history",
    "Manual, repetitive administrative tasks",
    "Lack of structured operational transparency",
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Managed Business Systems
        </h2>

        <p className="text-xl text-center mb-8 text-gray-600 max-w-3xl mx-auto">
          Managed operational systems engineered to eliminate manual friction, 
          capture customer actions, and establish repeatable business architecture.
        </p>

        {/* Pain Points Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 mb-16 border border-gray-100">
          <h3 className="text-lg font-bold text-center text-gray-800 tracking-wide uppercase mb-6">
            Engineered for Operations Struggling With:
          </h3>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
            {businessPains.map((pain, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-sm md:text-base">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>{pain}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 ${
                plan.popular ? "ring-4 ring-red-500 relative md:-translate-y-2" : "border border-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="bg-red-500 text-white text-center py-2 font-semibold text-sm tracking-wide uppercase">
                  Optimal Architecture
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-blue-900">
                  {plan.name}
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed min-h-[4rem]">
                  {plan.description}
                </p>

                <div className="mb-6 flex items-baseline">
                  <span className="text-3xl font-bold text-gray-800">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-2 text-sm font-medium">
                    {plan.period}
                  </span>
                </div>

                <ul className="mb-8 space-y-3 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
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

                <a
                  href="#contact"
                  className={`block w-full py-3 px-6 rounded-lg font-semibold transition duration-300 text-center mt-auto ${
                    plan.popular
                      ? "bg-red-500 hover:bg-red-600 text-white shadow-md"
                      : "bg-blue-900 hover:bg-blue-800 text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Fee Panel */}
        <div className="max-w-4xl mx-auto mt-16 bg-blue-50 rounded-xl p-8 border-l-4 border-blue-900 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Foundational Implementation Framework
          </h3>

          <div className="text-2xl font-bold text-blue-900 mb-3">
            Starting at $1,500 <span className="text-sm font-normal text-gray-600">one-time deployment asset fee</span>
          </div>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            All deployments undergo a rigorous technical staging sequence. This fee directly offsets business process 
            discovery, API credential mapping, custom workflow construction, data pipeline validation, and intensive system onboarding support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;