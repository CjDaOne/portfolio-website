// src/components/Services.tsx

const Services = () => {
  const services = [
    {
      icon: "fa-search",
      title: "Operational Diagnostic & Systems Blueprinting",
      price: "Strategic Alignment",
      description:
        "A deep-dive technical assessment of your current workflow bottlenecks. We map your data paths and design a custom architectural blueprint to eliminate manual drag.",
      features: [
        "Data-flow & bottleneck analysis",
        "System integration roadmap",
        "Automation potential reporting",
      ],
    },
    {
      icon: "fa-robot",
      title: "Lead Capture & Communication Automation",
      price: "High-ROI Implementation",
      description:
        "Deploy automated lead capture structures that stop revenue leaks. Includes automated missed-call text-back, centralized inbox routing, and instant text/email follow-ups.",
      features: [
        "Missed-call text-back loops",
        "Instant multi-channel notifications",
        "Centralized lead routing panels",
        "Automated calendar booking links",
      ],
    },
    {
      icon: "fa-server",
      title: "CRM Architecture & Custom Data Pipelines",
      price: "Enterprise Structure",
      description:
        "Migrate fragmented client tracking into a unified database environment. Custom field mapping, automated pipeline stages, and clean third-party API data syncs.",
      features: [
        "White-labeled CRM deployments",
        "Custom data fields & pipeline stages",
        "Cross-platform API pipeline hooks",
        "Strict secure data handling",
      ],
    },
    {
      icon: "fa-code",
      title: "Custom Operational Software Components",
      price: "Bespoke System Scale",
      description:
        "For workflows that off-the-shelf software cannot solve. We develop responsive, secure web tools designed to process custom data intake or proprietary company workflows.",
      features: [
        "Custom operational dashboard views",
        "Offline-resilient data handling",
        "Bespoke client intake logic models",
        "Full application hosting deployment",
      ],
    },
    {
      icon: "fa-shield-alt",
      title: "Managed Infrastructure & System Optimization",
      price: "Ongoing Management Plans",
      description:
        "Continuous oversight, priority maintenance, and regular refinement of your deployed automation systems to ensure peak operational uptime.",
      features: [
        "API webhook monitoring & fixes",
        "Workflow logic optimization",
        "Database performance scaling",
        "Priority technical support access",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Managed Systems & Capabilities
        </h2>

        <p className="text-xl text-center mb-16 text-gray-600 max-w-3xl mx-auto">
          We design, build, and deploy automated operational architecture that eliminates 
          administrative load, secures client tracking, and scales business capacity.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-blue-900 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-50 text-blue-900 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 border border-blue-100">
                    <i className={`fas ${service.icon} text-lg`}></i>
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm font-semibold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded inline-block mb-4">
                  {service.price}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2.5 border-t border-gray-100 pt-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-xs md:text-sm text-gray-700 flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3.5 rounded-lg font-semibold transition duration-300 inline-block shadow-lg hover:shadow-xl text-sm uppercase tracking-wider"
          >
            Initiate System Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;