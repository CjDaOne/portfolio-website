export default function Trust() {
  const stats = [
    { number: "Focused", label: "Systems Built for Real Use" },
    { number: "Structured", label: "Consultation-Driven Approach" },
    { number: "Practical", label: "Workflow-Based Solutions" },
    { number: "Reliable", label: "Ongoing System Support" },
  ];

  const benefits = [
    {
      icon: "🧠",
      title: "Systems-Focused Design",
      description:
        "We design tools and workflows around how people actually think, work, and recover focus—not just aesthetics.",
    },
    {
      icon: "⚙️",
      title: "Structured Problem Solving",
      description:
        "Every project begins with understanding your process, not just building software blindly.",
    },
    {
      icon: "📊",
      title: "Function Over Flash",
      description:
        "We prioritize usability, clarity, and long-term stability over unnecessary complexity.",
    },
    {
      icon: "🔁",
      title: "Ongoing Optimization",
      description:
        "Systems evolve. We provide support and iteration so your tools stay useful as your needs change.",
    },
  ];

  const testimonials = [
    {
      name: "Client Feedback (Pilot Systems Work)",
      business: "Workflow & Productivity Implementation",
      quote:
        "The system helped restructure how I organize my day and reduced the friction in managing tasks. It feels less overwhelming and more actionable.",
      rating: 5,
    },
    {
      name: "Early User",
      business: "Task & Routine System",
      quote:
        "What stood out was how simple it was to restart after falling off my routine. It doesn’t punish you for inconsistency.",
      rating: 5,
    },
    {
      name: "Consultation Client",
      business: "Process & Workflow Review",
      quote:
        "The consultation helped me see where my workflow was breaking down and how to fix it with a more structured system.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Building Systems People Actually Use
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Focused on clarity, structure, and practical tools that improve how work and daily life are managed.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition duration-300"
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-l-4 border-blue-900"
            >
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.business}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
