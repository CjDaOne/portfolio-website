// src/components/Contact.tsx
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    bottleneck: '',
    revenue: '',
    smsConsent: false,
    marketingConsent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle database or serverless API submission payload here
    console.log('Form Submitted:', formData);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Website Intake Form
        </h2>

        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Provide your operational parameters below to map your optimization landscape 
          and prepare your foundational discovery profile.
        </p>

        {/* Form Container Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input Group: Name & Company */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 text-sm text-gray-800 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Enter your company name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 text-sm text-gray-800 transition"
                />
              </div>
            </div>

            {/* Input Group: Phone & Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 text-sm text-gray-800 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Business Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 text-sm text-gray-800 transition"
                />
              </div>
            </div>

            {/* Operational Bottleneck Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                What is your primary operational bottleneck right now?
              </label>
              <select
                name="bottleneck"
                value={formData.bottleneck}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 text-sm text-gray-800 transition"
              >
                <option value="">Select an option</option>
                <option value="missed_calls">We are losing revenue to missed calls / slow lead response.</option>
                <option value="fragmented_scheduling">Our staff tracking and appointment scheduling are fragmented.</option>
                <option value="database_reactivation">We need to reactivate and monetize our existing customer database.</option>
                <option value="disconnected_tools">We have disconnected software tools causing manual administrative drain.</option>
              </select>
            </div>

            {/* Estimated Monthly Revenue Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                What is your current estimated monthly revenue?
              </label>
              <select
                name="revenue"
                value={formData.revenue}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 text-sm text-gray-800 transition"
              >
                <option value="">Select an option</option>
                <option value="under_10k">Under $10k / month</option>
                <option value="10k_50k">$10k – $50k / month</option>
                <option value="50k_100k">$50k – $100k / month</option>
                <option value="over_100k">$100k+ / month</option>
              </select>
            </div>

            {/* Compliance / A2P 10DLC Disclaimers */}
            <div className="space-y-4 pt-2 border-t border-gray-100">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="smsConsent"
                  name="smsConsent"
                  checked={formData.smsConsent}
                  onChange={handleChange}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-900 focus:ring-blue-900 flex-shrink-0"
                />
                <label htmlFor="smsConsent" className="text-xs text-gray-500 leading-normal">
                  By checking this box, I consent to receive non-marketing text messages from <strong>CJNF Solutions</strong> about <strong>CJNF Solutions/Systems</strong>. Message frequency varies, message & data rates may apply. Text HELP for assistance, reply STOP to opt out.
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="marketingConsent"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleChange}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-900 focus:ring-blue-900 flex-shrink-0"
                />
                <label htmlFor="marketingConsent" className="text-xs text-gray-500 leading-normal">
                  By checking this box, I consent to receive marketing and promotional messages including special offers, discounts, new product updates among others, from <strong>CJNF Solutions</strong> at the phone number provided. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.
                </label>
              </div>
            </div>

            {/* Action Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 text-center text-sm md:text-base"
              >
                Submit Operational Intake Profile
              </button>
            </div>

            {/* Footer Rules Legal Links */}
            <div className="text-center pt-2">
              <p className="text-xs text-blue-900 space-x-2 font-medium">
                <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                <span className="text-gray-300">|</span>
                <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
              </p>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

           