// src/components/Hero.tsx

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-24 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">

          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-red-400 bg-red-950/40 px-3 py-1.5 rounded-full border border-red-900/50 inline-block mb-6 animate-pulse">
            Managed Business Systems & Automation
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
            CJNF <span className="text-blue-200">SYSTEMS</span>
          </h1>

          <h2 className="text-xl md:text-3xl font-medium mb-8 text-blue-200 max-w-2xl mx-auto leading-snug">
            Managed Business Systems & Operational Automation
          </h2>

          <div className="max-w-2xl mx-auto border-l-2 border-red-500/30 bg-blue-950/20 px-6 py-4 rounded-r-xl mb-8 text-left md:text-center md:border-l-0 md:bg-transparent md:p-0">

            <p className="text-lg md:text-2xl mb-4 font-bold text-white">
              Your business is losing time and revenue through missed follow-ups,
              manual work, and disconnected systems.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-blue-100">
              We design and deploy managed operational systems that automate lead
              capture, streamline customer communication, and replace fragmented
              workflows with structured, repeatable systems built for scale.
            </p>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center items-center max-w-md mx-auto sm:max-w-none">

            <a
              href="#contact"
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-8 py-3.5 rounded-lg font-semibold transition duration-300 text-center shadow-lg hover:shadow-xl min-w-[220px]"
            >
              Request System Review
            </a>

            <a
              href="#portfolio"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-blue-900 px-8 py-3.5 rounded-lg font-semibold transition duration-300 text-center shadow-sm min-w-[220px] border border-gray-100"
            >
              View Systems
            </a>

          </div>

          {/* Capability Strip */}
          <div className="pt-8 border-t border-blue-800/60 max-w-3xl mx-auto">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm text-blue-200 font-medium">

              <div className="flex items-center justify-center space-x-1.5">
                <span className="text-red-400 font-bold">✓</span>
                <span>Lead Automation</span>
              </div>

              <div className="flex items-center justify-center space-x-1.5">
                <span className="text-red-400 font-bold">✓</span>
                <span>Customer Tracking Systems</span>
              </div>

              <div className="flex items-center justify-center space-x-1.5">
                <span className="text-red-400 font-bold">✓</span>
                <span>Workflow Automation</span>
              </div>

              <div className="flex items-center justify-center space-x-1.5">
                <span className="text-red-400 font-bold">✓</span>
                <span>Scheduling Automation</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;