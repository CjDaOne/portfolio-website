import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show an alert
    alert('Thank you for your message! (Note: This is a demo form - messages are not actually sent)');
  };

  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="mt-12 text-center">
            <div className="flex justify-center space-x-6">
              <a href="https://facebook.com/i12tSolutions/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://github.com/CjDaOne?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-300">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
