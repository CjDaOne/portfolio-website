// src/components/Contact.tsx
import { useMemo } from "react";

const Contact = () => {
  const FORM_ID = "YOUR_REAL_FORM_ID";

  const formUrl = useMemo(
    () => `https://link.cjnfsolutions.com/widget/form/${FORM_ID}`,
    [FORM_ID]
  );

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
            src={formUrl}
            style={{ width: "100%", border: "none" }}
            id={`inline-${FORM_ID}`}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-form-id={FORM_ID}
            title="Strategy Intake Form"
            className="w-full min-h-[500px]"
          />
        </div>

        {/* Trust Footer */}
        <div className="mt-12 pt-8 border-t border-blue-700 text-center">
          <p className="text-blue-200 text-sm mb-4">
            Response time: 24–48 hours • Limited onboarding capacity per month
          </p>

          <a
            href="mailto:cjnfsolutions@gmail.com"
            className="text-white font-medium hover:text-blue-200 transition text-base md:text-lg tracking-wide"
          >
            cjnfsolutions@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
```
