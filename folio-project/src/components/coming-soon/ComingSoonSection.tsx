import { motion } from "framer-motion";

export const ComingSoonSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[050B08] to-[0A1510]" id="coming-soon">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[19C784]/20 text-[19C784] text-sm mb-6">
            Coming Soon
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tracking-tight">
            The Next Generation of Trading Starts Here
          </h2>
          <p className="text-[91A49A] text-lg md:text-xl max-w-2xl mx-auto mt-6">
            Folio is building a smarter way to discover, analyze and trade on Robinhood Chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto">
          <div>
            <p className="text-[91A49A] text-base mb-6">
              Stay updated with the latest news and development progress.
            </p>

            <button
              className="w-full px-6 py-3 bg-[19C784] text-[050B08] font-medium rounded-full hover:bg-[83E6B5] transition-colors"
            >
              Join Our Community
            </button>
          </div>

          <div>
            <div className="flex justify-center gap-4">
              <button
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-[0A1510] transition-colors"
                aria-label="Follow Folio on X"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12h5.373l9 5h-5.372l-7.08 4.1a16.128 16.128 0 0 0 6.953 2.059l9.925-.687a1.5 1.5 0 0 0 1.088-.222l.45-4.826A16.175 16.175 0 0 0 24 12c0-6.627-5.373-12-12-12z" />
                  <path d="M12 1L3 5v6c0 5.553 3.84 10.74 9 11.5 5.56-1.04 9-6.27 9-11.5V5l-9-4z" />
                </svg>
              </button>
              <button
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-[0A1510] transition-colors"
                aria-label="Follow Folio on X"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 5.25a6.75 6.75 0 1 1 0 13.5 6.75 6.75 0 0 1 0-13.5zm5.22 2.065-2.17 2.64a1.75 1.75 0 0 0 .44 2.25H9.533a1.75 1.75 0 0 0-.437-1.8zM12 9.583a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5zm-6.066 1.833a.75.75 0 0 1 .527.273l1.44 1.832a.75.75 0 0 1-.803.78l-1.44-1.832a.75.75 0 0 1-.526-.272zm6.832.056a.75.75 0 0 1 .222.655l-.986 1.25a.75.75 0 0 1-.684.25H15.75a.75.75 0 0 1-.683-.25l-.986-1.25a.75.75 0 0 1.055-.656zM2.25 12a9.75 9.75 0 1 1 9.75 9.75A9.75 9.75 0 0 1 2.25 12zm9.538 2.342-.606.774.482 1.98.952-.667a.75.75 0 0 1-.087-1.088l-.746.985-.986-1.25a.75.75 0 0 1-.087-1.088l.482-1.98.482-1.98-.606-.774z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[19C784]/20 text-[19C784] text-sm">
            COMING SOON
          </span>
        </div>
      </div>
    </section>
  );
};