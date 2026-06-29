const Pricing = () => {
  const tiers = [
    {
      name: "Business Automation System",
      price: "$497",
      period: "/ month",
      featured: false,
      features: ["Fixed Pipeline Setup", "Missed-Call Text Back", "Central Customer Panel", "Standard Webforms"],
      cta: "Schedule Operations Review",
    },
    {
      name: "Revenue Recovery System",
      price: "$897",
      period: "/ month",
      featured: true,
      features: ["Advanced Data Staging", "Database Reactivation Sequences", "Automated Lead Routing", "Full System Integrations"],
      cta: "Deploy Architecture",
    },
    {
      name: "Healthcare Operations Suite",
      price: "Custom",
      period: " quote",
      featured: false,
      features: ["Patient Intake Systems", "Caregiver Synchronization", "Structured Reporting Matrix", "Dedicated Infrastructure Support"],
      cta: "Schedule Architecture Review",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Managed Business Systems</h2>
        <p className="text-xl text-center mb-16 text-gray-600 max-w-3xl mx-auto">
          Managed operational platforms engineered to eliminate manual workflows, capture customer response volume, and protect revenue.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border flex flex-col justify-between transition ${
                tier.featured ? 'border-red-500 shadow-xl relative scale-105 z-10' : 'border-gray-200 shadow-sm'
              }`}
            >
              <div>
                {tier.featured && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Optimal Value
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                  <span className="text-gray-500 text-sm">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 font-bold mr-2.5">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#contact"
                className={`w-full py-3 px-4 rounded-lg font-bold text-center text-sm transition ${
                  tier.featured ? 'bg-red-500 text-white hover:bg-red-600 shadow-md' : 'bg-blue-900 text-white hover:bg-blue-800'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
