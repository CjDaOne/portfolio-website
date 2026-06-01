export default function Trust() {
  const benefits = [
    {
      icon: "🧠",
      title: "Systems-Focused Design",
      description:
        "We build around how people actually think and work — not just how software looks on a demo screen.",
    },
    {
      icon: "⚙️",
      title: "Consultation Before Code",
      description:
        "Every project starts with understanding your actual workflow. We don't write a line of code until the problem is clear.",
    },
    {
      icon: "📊",
      title: "Function Over Flash",
      description:
        "Usability, clarity, and long-term stability take priority. If a feature doesn't serve you, it doesn't ship.",
    },
    {
      icon: "🔁",
      title: "Ongoing Optimization",
      description:
        "Systems evolve. We provide support and iteration so your tools stay useful as your needs change.",
    },
  ];

  return (
    <section id="trust" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Focused on clarity, structure, and practical tools that improve how work and daily life are managed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition duration-300"
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* About the founder */}
        <div className="max-w-3xl mx-auto bg-blue-50 rounded-xl p-8 border-l-4 border-blue-900">
          <h3 className="text-xl font-bold mb-3 text-gray-800">About CJNF Solutions</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded by Carl'averis Jackson, CJNF Solutions builds custom software and workflow
            systems for individuals and small businesses. The focus is on tools that actually get used
            — structured, practical, and built around real operational needs rather than trend-chasing.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Services are delivered remotely, with an appointment-driven consultation model that ensures
            every project starts with a clear understanding of the problem being solved.
          </p>
        </div>

      </div>
    </section>
  );
}
