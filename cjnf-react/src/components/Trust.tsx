// src/components/Trust.tsx

const Trust = () => {
  const pillars = [
    {
      icon: "fa-diagram-project",
      title: "Systems-Focused Design",
      description:
        "We structure frameworks around actual business architecture, ensuring seamless data flow across tracking hubs.",
    },
    {
      icon: "fa-layer-group",
      title: "Consolidated Platform Focus",
      description:
        "Drive clear execution actions without scattering your team across disconnected tools and messaging apps.",
    },
    {
      icon: "fa-chart-pie",
      title: "Functional Client Panels",
      description:
        "Complete visibility built straight into clean, lightweight portals designed for active operational metrics.",
    },
    {
      icon: "fa-sliders",
      title: "Progress Optimization",
      description:
        "Continuous engineering tweaks to ensure systems scale dynamically alongside expanding operations.",
    },
  ];

  return (
    <section id="trust" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Focused on clarity, efficiency, and real business results that optimize 
            your workflows and execution metrics.
          </p>
        </div>

        {/* 2x2 Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-100">
                <i className={`fas ${pillar.icon} text-lg`}></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* About Executive Panel */}
        <div className="max-w-4xl mx-auto bg-blue-50/60 rounded-xl p-8 border border-blue-100/80 shadow-sm">
          <h3 className="text-lg font-bold text-blue-950 mb-3 tracking-wide">
            About CJNF Solutions
          </h3>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              Founded by Carl'averis Jackson, <strong>CJNF Solutions</strong> builds custom software 
              architectures and operational automation sequences tailored explicitly for individuals and growing businesses. 
              We design and deploy systems that target root operational friction—eliminating bloated administration times 
              and expensive platform subscription packages that drag down profit margins.
            </p>
            <p>
              Instead of relying on rigid, off-the-shelf software models, we focus deeply on creating automated, 
              repeatable pipeline architecture built around your exact daily production parameters.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Trust;
