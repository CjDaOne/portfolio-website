// src/components/Hero.tsx

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-12 pb-16 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">

          {/* Core Focus Tag Pill */}
          <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-950/40 px-4 py-1.5 rounded-full border border-red-900/50 inline-block mb-4 md:mb-6">
            Enterprise Architecture & Workflows
          </span>

          {/* Primary Company Brand Name */}
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-2 md:mb-4 text-white">
            CJNF <span className="text-blue-200">SOLUTIONS</span>
          </h1>

          {/* High-Impact Value Proposition Subtitle */}
          <h2 className="text-lg md:text-3xl font-medium mb-6 md:mb-8 text-blue-200 max-w-2xl mx-auto leading-snug">
            Engineered Business Systems & Operational Automation
          </h2>

          {/* Central Problem Statement Block */}
          <div className="max-w-2xl mx-auto border-l-2 border-red-500/30 bg-blue-950/20 px-5 py-4 rounded-r-xl mb-6 md:mb-10 text-left md:text-center md:border-l-0 md:bg-transparent md:p-0">
            <p className="text-base md:text-2xl mb-3 font-bold text-white leading-snug">
              Your business is losing margin and market response speed through missed follow-ups, 
              repetitive manual friction, and disconnected software tools.
            </p>

            <p className="text-sm md:text-lg leading-relaxed text-blue-100">
              We design, deploy, and manage dedicated operational systems that automate lead capture, 
              centralize critical customer communication, and replace administrative drag with 
              repeatable, scalable infrastructure.
            </p>
          </div>

          {/* Action Buttons - Now visible above the fold on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10 md:mb-14 justify-center items-center max-w-md mx-auto sm:max-w-none">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-8 py-3.5 rounded-lg font-semibold transition duration-300 text-center shadow-lg hover:shadow-xl min-w-[220px] text-sm md:text-base"
            >
              Schedule Operations Review
            </a>

            <a
              href="#portfolio"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-blue-900 px-8 py-3.5 rounded-lg font-semibold transition duration-300 text-center shadow-sm min-w-[220px] border border-gray-100 text-sm md:text-base"
            >
              View Deployments
            </a>
          </div>

          {/* Core Technical Capability Strip */}
          <div className="pt-6 border-t border-blue-800/60 max-w-3xl mx-auto hidden sm:block">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm text-blue-200 font-medium">
              
              <div className="flex items-center justify-center space-x-1.5">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
                <span>Lead Automation</span>
              </div>

              <div className="flex items-center justify-center space-x-1.5">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
                <span>Customer Tracking</span>
              </div>

              <div className="flex items-center justify-center space-x-1.5">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
                <span>Pipeline Workflows</span>
              </div>

              <div className="flex items-center justify-center space-x-1.5">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
                <span>Scheduling Matrix</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
