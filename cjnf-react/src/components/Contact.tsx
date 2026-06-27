// src/components/Contact.tsx
import { useEffect } from "react";

const FORM_ID = "X3e1f0lDskzFe1tTSznQ";

const Contact = () => {
  useEffect(() => {
    if (document.getElementById("ghl-form-script")) return;

    const script = document.createElement("script");
    script.id = "ghl-form-script";
    script.src = "https://link.cjnfsolutions.com/js/form_embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Don't remove it.
      // It only needs to be loaded once for the entire app.
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

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">

          <iframe
            src={`https://link.cjnfsolutions.com/widget/form/${FORM_ID}`}
            id={`inline-${FORM_ID}`}
            title="Website Intake Form"
            data-layout='{"id":"INLINE"}'
            data-form-id={FORM_ID}
            style={{
              width: "100%",
              height: "931px",
              border: "none",
              borderRadius: "8px",
            }}
          />

        </div>

      </div>
    </section>
  );
};

export default Contact;
