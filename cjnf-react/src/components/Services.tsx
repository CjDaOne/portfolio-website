// src/components/Services.tsx

const Services = () => {
  const coreServices = [
    {
      icon: "fa-satellite-dish",
      title: "Lead Capture & Response Automation",
      description:
        "Replace slow, manual inbox tracking with instant response architecture. We deploy automated text-back systems for missed calls and synchronize intake forms to prevent immediate customer churn.",
      capabilities: ["Missed-call text-back triggers", "Speed-to-lead pipelines", "Centralized SMS/Email hubs"],
    },
    {
      icon: "fa-network-wired",
      title: "Custom Operational Workflows",
      description:
        "Eliminate the administrative drain caused by disconnected software tools. We bridge your application gaps, engineer automated lead routing sequences, and create repeatable tracking pipelines.",
      capabilities: ["API credential mapping", "Data intake configuration", "Automated scheduling matrix"],
    },
    {
      icon: "fa-heartbeat",
      title: "Healthcare Operations Engineering",
      description:
        "Engineered for care providers transitioning away from fragmented documentation. We build intake workflows, virtual care integration paths, and staff communication panels to streamline clinical oversight.",
      capabilities: ["Patient intake design", "Caregiver coordination portals", "Structured data staging"],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Operational Infrastructure Architecture
        </h2>

        <p className="text-xl text-center mb-16 text-gray-600 max-w-3xl mx-auto">
          We design, build, and maintain the underlying digital frameworks that 
          remove manual friction, secure pipeline visibility, and protect your margins.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {coreServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Icon Frame */}
              <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6 border border-blue-100">
                <i className={`fas ${service.icon} text-xl`}></i>
              </div>

              {/* Service Details */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Specific Technical Capabilities Checklist */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Core Architectural Elements
                </h4>
                <ul className="space-y-2">
                  {service.capabilities.map((cap, capIdx) => (
                    <li key={capIdx} className="flex items-center text-xs font-medium text-gray-700">
                      <svg className="w-3.5 h-3.5 text-blue-900 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                      </svg>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
