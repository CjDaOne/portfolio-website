const Services = () => {
  const services = [
    {
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
      title: "Custom Software & Workflow Systems",
      price: "Project-based pricing",
      description:
        "Bespoke digital systems designed to improve productivity, organization, and operational efficiency for individuals and businesses.",
      features: [
        "Custom web applications",
        "Task and workflow systems",
        "Productivity-focused design",
      ],
    },
    {
      title: "Productivity & Wellness Platform Development",
      price: "Included in project scope",
      description:
        "Development of structured tools that support focus, routine building, and functional recovery through digital systems and thoughtful UX design.",
      features: [
        "Task management systems",
        "Routine and habit structures",
        "Wellness-oriented UX design",
      ],
    },
    {
      title: "System Maintenance & Optimization",
      price: "From $100/month",
      description:
        "Ongoing support, updates, and improvements to ensure your systems remain reliable, secure, and effective over time.",
      features: [
        "Bug fixes and updates",
        "Performance improvements",
        "Feature enhancements",
      ],
    },
    {
      title: "Digital Infrastructure Setup",
      price: "Included when required",
      description:
        "Technical setup required to support your systems, including deployment, hosting configuration, and foundational digital infrastructure.",
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

        <p className="text-xl text-center mb-12 text-gray-700 max-w-3xl mx-auto">
          We design and build structured digital systems that improve productivity,
          organization, and long-term operational clarity.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-blue-900"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                {service.title}
              </h3>

              <p className="text-red-500 font-bold text-xl mb-4">
                {service.price}
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 flex items-start"
                  >
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center border-l-4 border-blue-900">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Why Work With CJNF Solutions?
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">
                Systems-Focused Approach
              </h4>
              <p className="text-gray-700">
                We focus on how your workflows, tools, and processes actually function—not just how they look.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-blue-900 mb-2">
                Structured Engagement Model
              </h4>
              <p className="text-gray-700">
                Work begins with consultation and evolves into clearly scoped, outcome-driven systems.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-blue-900 mb-2">
                Scalable Digital Solutions
              </h4>
              <p className="text-gray-700">
                Built to grow with you—whether you're an individual improving focus or an organization scaling operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
