// src/components/Contact.tsx
import React, { useState } from 'react';

export default function WebsiteIntakeForm() {
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
    // Handle submission logic (e.g., API route to database)
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Enter your company name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>

        {/* Business Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Business Email *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>

        {/* Bottleneck Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What is your primary operational bottleneck right now?
          </label>
          <select
            name="bottleneck"
            value={formData.bottleneck}
            onChange={handleChange}
            className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-800"
          >
            <option value="">Select an option</option>
            <option value="missed_calls">We are losing revenue to missed calls / slow lead response.</option>
            <option value="fragmented_scheduling">Our staff tracking and appointment scheduling are fragmented.</option>
            <option value="database_reactivation">We need to reactivate and monetize our existing customer database.</option>
            <option value="disconnected_tools">We have disconnected software tools causing manual administrative drain.</option>
          </select>
        </div>

        {/* Estimated Revenue Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What is your current estimated monthly revenue?
          </label>
          <select
            name="revenue"
            value={formData.revenue}
            onChange={handleChange}
            className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-800"
          >
            <option value="">Select an option</option>
            <option value="under_10k">Under $10k / month</option>
            <option value="10k_50k">$10k – $50k / month</option>
            <option value="50k_100k">$50k – $100k / month</option>
            <option value="over_100k">$100k+ / month</option>
          </select>
        </div>

        {/* Consent Checkboxes */}
        <div className="space-y-4 pt-2">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="smsConsent"
              name="smsConsent"
              checked={formData.smsConsent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="smsConsent" className="text-xs text-gray-500 leading-normal">
              By checking this box, I consent to receive non-marketing text messages from <strong>CJNF Solutions</strong> about <strong>CJNF Solutions/Systems</strong>. Message frequency varies, message & data rates may apply. Text HELP for assistance, reply STOP to opt out.
            </label>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="marketingConsent"
              name="marketingConsent"
              checked={formData.marketingConsent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="marketingConsent" className="text-xs text-gray-500 leading-normal">
              By checking this box, I consent to receive marketing and promotional messages including special offers, discounts, new product updates among others, from <strong>CJNF Solutions</strong> at the phone number provided. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-[#1b61f3] hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md shadow-sm transition duration-150 ease-in-out text-sm"
          >
            Submit
          </button>
        </div>

        {/* Footer Links */}
        <div className="text-center pt-2">
          <p className="text-xs text-blue-600 space-x-1">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <span className="text-gray-300">|</span>
            <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
          </p>
        </div>

      </form>
    </div>
  );
}

     
              