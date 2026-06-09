// src/components/Portfolio.tsx

const Portfolio = () => {
  const studies = [
    {
      industry: "Automated Lead Capture",
      title: "The Missed-Call Revenue Leak",
      metric: "Sub-60s Response",
      impact: "Captured 22% more inbound opportunities within 30 days.",
      breakdown: "Replaced manual voicemail routing with a dead-simple, zero-latency automated SMS fallback loop that triggers the moment a field call goes unanswered."
    },
    {
      industry: "Database Reactivation",
      title: "Dormant Pipeline Monetization",
      metric: "$14k in 72 Hours",
      impact: "Generated immediate operational cash flow from cold lead blocks.",
      breakdown: "Deployed structured re-engagement sequence logic across an un-segmented legacy database of 1,200 profiles without manual staff dialing."
    },
    {
      industry: "System Centralization",
      title: "Multi-Platform Consolidation",
      metric: "35% Tool Overhead Cut",
      impact: "Eliminated fragmented subscriptions and data synchronization lag.",
      breakdown: "Migrated disconnected scheduling software, standalone pipelines, and isolated communication nodes into a single unified infrastructure layer."
    },
    {
      industry: "Lead Nurture Loops",
      title: "Immediate Nurture Sequencing",
      metric: "4x Conversion Spike",
      impact: "Eliminated manual multi-day follow-up overhead entirely.",
      breakdown: "Engineered automated conditional messaging logic that tracks user behavior and schedules optimized text/email touches to maximize intake actions."
    },
    {
      industry: "Reputation Engineering",
      title: "Automated Review Multiplier",
      metric: "+140% Google Authority",
      impact: "Scaled local organic search visibility without administrative oversight.",
      breakdown: "Integrated automated post-fulfillment feedback loops that systematically prompt verified clients for public reviews via SMS immediately after service completion."
    },
    {
      industry: "Scheduling Infrastructure",
      title: "No-Show Protection System",
      metric: "Drop Under 4%",
      impact: "Recovered lost calendar slots and optimized technician velocity.",
      breakdown: "Deployed a multi-step reminder framework featuring automated confirmation requests, digital calendar links, and responsive cancellation logic triggers."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase block mb-2">
            Ecosystem Performance Metrics
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proven Architectural Outcomes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Verified operational capabilities scaled across our primary white-labeled business automation infrastructure networks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {studies.map((study, idx) => (
            <div 
              key={idx} 
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 shadow-xl group"
            >
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-3">
                  {study.industry}
                </span>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
                  {study.title}
                </h3>
                <div className="text-2xl font-black text-green-400 my-4 tracking-tight">
                  {study.metric}
                </div>
                <p className="text-sm text-gray-200 font-semibold mb-3 leading-snug">
                  {study.impact}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-700/60 pt-4 mt-2">
                  {study.breakdown}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3.5 rounded-lg font-semibold transition duration-300 inline-block shadow-lg uppercase tracking-wider text-sm"
          >
            Deploy This Infrastructure
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;