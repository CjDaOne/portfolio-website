const Portfolio = () => {
  const deployments = [
    {
      title: "Revenue Recovery & Missed-Call Automation",
      category: "Operational Systems",
      description: "An automated communication system engineered to catch missed calls, instantly text back lost leads, and initiate fallback engagement sequences.",
      metrics: "98% immediate lead engagement within 60 seconds",
      tags: ["Lead Capture", "SMS Gateways", "Automated Pipelines"],
    },
    {
      title: "Unified Staff Coordination & Scheduling Matrix",
      category: "Workflow Automation",
      description: "A centralized system eliminating fragmented calendar apps and manual tracking by synchronizing real-time provider schedules and reducing no-shows.",
      metrics: "40% administrative labor drain reduction",
      tags: ["Calendar Engines", "Data Staging", "Internal Workflows"],
    },
    {
      title: "Patient Intake & Care Coordination Suite",
      category: "Healthcare Operations",
      description: "A structured digital staging pipeline designed for smooth patient intake data processing, virtual care documentation, and caregiver communication routing.",
      metrics: "Eliminated text-clogged manual tracking sheets",
      tags: ["Intake Engineering", "Data Security Controls", "Asset Portals"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Engineered System Deployments</h2>
        <p className="text-xl text-center mb-16 text-gray-600 max-w-3xl mx-auto">
          Review the structural architectures and operational pipelines we deploy to neutralize manual friction and secure repeatable revenue tracking.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {deployments.map((system, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col justify-between">
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 inline-block mb-4">
                  {system.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{system.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{system.description}</p>
                <div className="bg-gray-50 rounded-lg p-3.5 border border-gray-100">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">System Core Benchmark</div>
                  <div className="text-sm font-semibold text-blue-900 flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    {system.metrics}
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 flex flex-wrap gap-2">
                {system.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
