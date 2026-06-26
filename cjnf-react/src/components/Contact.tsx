// src/components/Contact.tsx
import { useEffect } from "react";

const Contact = () => {
  const FORM_ID = "X3e1f0lDskzFe1tTSznQ";

  useEffect(() => {
    // 1. Remove any old instances of the script to prevent duplicates
    const oldScript = document.getElementById("ghl-form-loader");
    if (oldScript) oldScript.remove();

    // 2. Create the native GHL form script element
    const script = document.createElement("script");
    script.id = "ghl-form-loader";
    script.src = `https://link.cjnfsolutions.com/js/form_embed.js?id=${FORM_ID}`;
    script.async = true;

    // 3. Append the script to the body to let it mount natively
    document.body.appendChild(script);

    return () => {
      // Cleanup script when navigating away
      const scriptToRemove = document.getElementById("ghl-form-loader");
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [FORM_ID]);

  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Schedule a Strategy Session
        </h2>

        <p className="text-blue-200 text-center mb-12 max-w-xl mx-auto">
          We review your current operations and identify where automation can
          reduce manual workload, improve response time, and increase customer
          follow-up consistency.
        </p>

        {/* Target Container for GHL Script Engine */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl p-6 min-h-[600px]">
          <div 
            className="ghl-form-target" 
            data-form-id={FORM_ID}
            id={`ghl-${FORM_ID}`}
          >
            {/* The native script wrapper will paint the form fields right here directly inside the HTML page layer */}
          </div>
        </div>

        {/* Trust Footer */}
        <div className="mt-12 pt-8 border-t border-blue-700 text-center">
          <p className="text-blue-200 text-sm mb-4">
            Response time: 24–48 hours • Limited onboarding capacity per month
          </p>

          <a
            href="mailto:solutions@cjnfsolutions.com"
            className="text-white font-medium hover:text-blue-200 transition text-base md:text-lg tracking-wide"
          >
            solutions@cjnfsolutions.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
