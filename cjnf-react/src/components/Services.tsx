const Services = () => {
  const services = [
    {
      icon: "fa-search",
      title: "Discovery & Systems Consultation",
      price: "Starting at $75",
      description:
        "A focused session to understand your goals, identify workflow challenges, and design the right digital or operational systems to support your needs.",
      features: [
        "Workflow and needs assessment",
        "System improvement recommendations",
        "Actionable roadmap",
      ],
    },
    {
      icon: "fa-code",
      title: "Custom Software & Web Applications",
      price: "From $1,000 — project-based",
      description:
        "Bespoke digital systems designed to improve productivity, organization, and operational efficiency for individuals and businesses.",
      features: [
        "Custom web applications",
        "Task and workflow systems",
        "Productivity-focused design",
        "Deployment & configuration",
      ],
    },
    {
      icon: "fa-brain",
      title: "Productivity & Wellness Platform Development",
      price: "Included in project scope",
      description:
        "Structured tools that support focus, routine building, and functional recovery through digital systems and thoughtful UX design.",
      features: [
        "Task management systems",
        "Routine and habit structures",
        "Wellness-oriented UX design",
      ],
    },
    {
      icon: "fa-wrench",
      title: "System Maintenance & Optimization",
      price: "From $100/month",
      description:
        "Ongoing support, updates, and improvements to ensure your systems remain reliable, secure, and effective over time.",
      features: [
        "Bug fixes and updates",
        "Performance improvements",
        "Feature enhancements",
        "Priority support access",
      ],
    },
    {
      icon: "fa-server",
      title: "Digital Infrastructure Setup",
      price: "Included when required",
      description:
        "Technical setup required to support your systems — deployment, hosting configuration, and foundational digital infrastructure.",
      features: [
        "Deployment setup",
        "Hosting configuration",
        "Secure system architecture",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Systems & Services
        </h2>

        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          We design and build structured digital systems that improve productivity,
          organization, and long-term operational clarity.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-blue-900 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-900 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <i className={`fas ${service.icon}`}></i>
                </span>
                <h3 className="text-lg font-semibold text-blue-900 leading-tight">
                  {service.title}
                </h3>
              </div>

              <p className="text-red-500 font-bold text-lg mb-3">
                {service.price}
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-sm flex-grow">
                {service.description}
              </p>

              <ul className="space-y-2 mt-auto">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 inline-block"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
