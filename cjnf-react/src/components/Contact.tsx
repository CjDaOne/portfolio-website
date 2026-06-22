// src/components/Contact.tsx
import { useEffect } from "react";

const Contact = () => {
  const FORM_ID = "X3e1f0lDskzFe1tTSznQ";

  useEffect(() => {
    // Dynamically inject the GHL form embed script to ensure proper resizing and tracking
    const scriptId = "ghl-form-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement("script");
      script.src = "https://link.cjnfsolutions.com/js/form_embed.js";
      script.id = scriptId;
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Optional cleanup if you want to keep the DOM clean when component unmounts
      // document.body.removeChild(script);
    };
  }, []);

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

        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl p-6">
          <iframe
            src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
            style={{ width: "100%", height: "100%", minHeight: "600px", border: "none", borderRadius: "8px" }}
            id={`inline-${FORM_ID}`}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 0"
            data-height="1233"
            data-layout-iframe-id={`inline-${FORM_ID}`}
            data-form-id={FORM_ID}
            title="Strategy Intake Form"
          />
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

