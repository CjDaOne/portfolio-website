// src/components/Portfolio.tsx

const Portfolio = () => {
  const project = {
    title: "SereneMind Care Operations System",
    tagline: "Deployed Care Workflow & Automation Infrastructure",
    description:
      "A deployed operational system designed to replace fragmented intake processes, manual documentation, and disconnected client tracking. Built to centralize communication, automate administrative workflows, and improve reliability across service environments.",
    image: "/images/serene-mind-app-screenshot.png",
    tags: [
      "Workflow Automation System",
      "Secure Data Handling",
      "Offline-Resilient Design",
      "Intake & Scheduling Automation",
    ],
    tagColors: [
      "bg-blue-100 text-blue-800",
      "bg-green-100 text-green-800",
      "bg-indigo-100 text-indigo-800",
      "bg-purple-100 text-purple-800",
    ],
    liveUrl: "https://serene-mind-app-two.vercel.app/",
    codeUrl: "https://github.com/CjDaOne?tab=repositories",
  };

  const operationalHighlights = [
    {
      metric: "Administrative Load",
      detail:
        "Automates intake tracking, documentation flow, and client routing to reduce manual administrative work.",
    },
    {
      metric: "Operational Reliability",
      detail:
        "Maintains consistent system performance across concurrent users and high-frequency workflow activity.",
    },
    {
      metric: "Workflow Continuity",
      detail:
        "Preserves active sessions and workflow state during connectivity interruptions to prevent lost progress or data.",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Deployed System Case Study
        </h2>

        <p className="text-xl text-center mb-16 text-gray-600 max-w-3xl mx-auto">
          Example of a production-ready operational system designed to replace
          manual workflows with automated, structured business processes.
        </p>

        <div className="max-w-5xl mx-auto bg-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-12 gap-0">
            {/* Visual Panel */}
            <div className="lg:col-span-5 bg-gray-900 min-h-[300px] flex items-center justify-center p-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-2xl opacity-90 border border-gray-800"
              />
            </div>

            {/* Content Panel */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest text-blue-900 uppercase block mb-2">
                  Live System Deployment
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-blue-700 font-medium text-sm md:text-base mb-6">
                  {project.tagline}
                </p>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* System Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-md text-xs font-semibold ${
                        project.tagColors[idx] ||
                        "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Impact Section */}
                <div className="border-t border-gray-200 pt-6 space-y-4 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                    Operational Outcomes
                  </h4>

                  <div className="grid md:grid-cols-3 gap-4">
                    {operationalHighlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 rounded-lg border border-gray-100 flex flex-col justify-between min-h-[110px]"
                      >
                        <div>
                          <span className="text-xs font-bold text-blue-900 block mb-1">
                            {highlight.metric}
                          </span>
                          <p className="text-xs text-gray-600 leading-snug">
                            {highlight.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 items-center pt-4 border-t border-gray-100 text-sm font-semibold">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg transition text-center min-w-[180px]"
                >
                  View Live System
                </a>

                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition px-5 py-2.5 rounded-lg text-center border border-gray-200 hover:border-gray-300 bg-white min-w-[180px]"
                >
                  View System Implementation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;