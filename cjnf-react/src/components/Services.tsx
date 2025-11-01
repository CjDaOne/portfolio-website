const Services = () => {
  const services = [
    {
      title: "Domain Name Registration",
      price: "$40 annually",
      description: "Secure your online identity with a professional domain name. We handle the entire registration process, ensuring your business claims its unique space on the web. Perfect for small businesses establishing their first digital footprint.",
      features: ["One year registration", "Domain privacy protection", "Easy renewal process"]
    },
    {
      title: "Web Hosting",
      price: "$240 annually",
      description: "Reliable, high-performance hosting that keeps your website accessible 24/7. Our hosting solutions are optimized for speed and security, giving your customers a seamless experience while you focus on growing your business.",
      features: ["99.9% uptime guarantee", "Fast loading speeds", "Secure SSL certificates"]
    },
    {
      title: "Website Development",
      price: "$1,000 per project",
      description: "Custom-built websites tailored to your business needs. From concept to launch, we create professional, responsive websites that convert visitors into customers. Includes content creation, image licensing, and modern design.",
      features: ["Mobile-responsive design", "SEO optimization", "Content & imagery included"]
    },
    {
      title: "Business Email Setup",
      price: "$216 annually",
      description: "Professional email addresses that build trust with your customers. Stand out with branded email accounts (you@yourbusiness.com) that enhance your credibility and separate your business from personal communications.",
      features: ["Custom domain emails", "Professional setup", "Secure & reliable"]
    },
    {
      title: "Website Maintenance",
      price: "$100 monthly",
      description: "Keep your website running smoothly with ongoing support and updates. We handle technical issues, security patches, content updates, and performance monitoring so you can focus on what matters most—running your business.",
      features: ["Regular updates", "Security monitoring", "Technical support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Comprehensive Web Solutions</h2>
        <p className="text-xl text-center mb-3 text-gray-700 max-w-3xl mx-auto">
          Designed specifically for small to medium-sized businesses ready to thrive online
        </p>
        <p className="text-lg text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          From your first domain to ongoing maintenance, we provide everything you need in one affordable, personalized package.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-blue-900">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">{service.title}</h3>
              <p className="text-red-500 font-bold text-2xl mb-4">{service.price}</p>
              <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center border-l-4 border-blue-900">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Why Choose CJNF SOLUTIONS?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Personalized Service</h4>
              <p className="text-gray-700">Direct communication with your developer. No call centers, no ticket systems—just real, personalized support.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Comprehensive Packages</h4>
              <p className="text-gray-700">Everything you need in one place. From domains to development to maintenance, we've got you covered.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Affordable & Reliable</h4>
              <p className="text-gray-700">Transparent pricing designed for small businesses. No hidden fees, no surprises—just quality service you can count on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
