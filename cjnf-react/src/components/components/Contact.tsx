import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', service: '', budget: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-400 placeholder-gray-400";

  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-blue-200 text-center mb-12 max-w-xl mx-auto">
          All services are by appointment only. Ready to build something? Send a message below and we'll reach out to schedule your discovery session.
        </p>

        <div className="max-w-2xl mx-auto">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email <span className="text-red-400">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Service + Budget */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">Service Needed <span className="text-red-400">*</span></label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="Discovery Session ($75)">Discovery Session ($75)</option>
                  <option value="Custom Software / Web App">Custom Software / Web App</option>
                  <option value="Workflow System Design">Workflow System Design</option>
                  <option value="Productivity / Wellness Platform">Productivity / Wellness Platform</option>
                  <option value="System Maintenance & Support">System Maintenance & Support</option>
                  <option value="Not sure — need guidance">Not sure — need guidance</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">Approximate Budget <span className="text-blue-300 font-normal">(optional)</span></label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Prefer not to say</option>
                  <option value="Under $500">Under $500</option>
                  <option value="$500 – $1,000">$500 – $1,000</option>
                  <option value="$1,000 – $2,500">$1,000 – $2,500</option>
                  <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Tell Us About Your Project <span className="text-red-400">*</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="What problem are you trying to solve? What does your current workflow look like? The more detail, the faster we can help."
                className={inputClass}
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="text-green-300 text-center bg-green-900/30 rounded-lg p-3">
                ✓ Message sent. We'll be in touch shortly.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-red-300 text-center bg-red-900/30 rounded-lg p-3">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-red-500 hover:bg-red-600 text-white px-10 py-3 rounded-lg font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-blue-700">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <a
                href="mailto:cjnfsolutions@gmail.com"
                className="text-blue-200 hover:text-white transition flex items-center gap-2"
              >
                <i className="fas fa-envelope"></i>
                cjnfsolutions@gmail.com
              </a>
              <div className="flex gap-5 text-2xl">
                <a href="https://facebook.com/i12tSolutions/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://github.com/CjDaOne?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/CjDaOne" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/cjnf.solutions" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
