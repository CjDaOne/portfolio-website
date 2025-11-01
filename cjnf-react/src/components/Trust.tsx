export default function Trust() {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Clients Served' },
    { number: '100+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const benefits = [
    {
      icon: '🎯',
      title: 'Personalized Service',
      description: 'Tailored solutions designed specifically for your business needs'
    },
    {
      icon: '💼',
      title: 'Business-Focused',
      description: 'We understand small to medium business challenges and opportunities'
    },
    {
      icon: '⚡',
      title: 'Fast Turnaround',
      description: 'Quick deployment without compromising on quality or security'
    },
    {
      icon: '🛡️',
      title: 'Reliable Support',
      description: 'Ongoing maintenance and support to keep your business running smoothly'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Martinez',
      business: 'Martinez Accounting Services',
      quote: 'CJNF SOLUTIONS transformed our online presence. They handled everything from domain registration to our professional email setup. The personalized service made all the difference for our small firm.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      business: 'Chen Consulting Group',
      quote: 'Working with CJNF was seamless. They took the time to understand our business needs and delivered a comprehensive solution. The ongoing maintenance package gives us peace of mind.',
      rating: 5
    },
    {
      name: 'Jessica Thompson',
      business: 'Thompson Creative Studio',
      quote: 'As a small business owner, I needed a partner who could handle all our web services under one roof. CJNF delivered exactly that - professional, reliable, and always available when we need them.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Trusted by Small Businesses Like Yours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join dozens of satisfied clients who trust us with their digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition duration-300">
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-l-4 border-blue-900">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
