import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Domain Name Registration",
      price: "$40 annually",
      description: "Secure your online presence with annual domain registration."
    },
    {
      title: "Web Hosting",
      price: "$240 annually",
      description: "Reliable hosting services to keep your website accessible 24/7."
    },
    {
      title: "Website Development",
      price: "$1000 per project",
      description: "Custom web design and development, including content creation and licensing."
    },
    {
      title: "Business Email Setup",
      price: "$216 annually",
      description: "Professional email accounts linked to your domain."
    },
    {
      title: "Website Maintenance",
      price: "$100 monthly",
      description: "Ongoing support to ensure your site remains updated and functional."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <p className="text-xl text-center mb-12 text-gray-600">
          CJNF SOLUTIONS offers a comprehensive range of web services designed for small to medium-sized businesses.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">{service.title}</h3>
              <p className="text-red-500 font-bold mb-4">{service.price}</p>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-lg text-gray-700">
          We deliver personalized service with a focus on affordability and reliability.
        </p>
      </div>
    </section>
  );
};

export default Services;
