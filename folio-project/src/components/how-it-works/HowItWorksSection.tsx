import { motion } from "framer-motion";

export const HowItWorksSection = () => {
  const steps = [
    {
      title: "DISCOVER",
      subtitle: "Explore emerging tokens",
      description:
        "Identify new tokens entering the market, track trending assets, and monitor emerging opportunities across Robinhood Chain.",
      accentColor: "19C784",
    },
    {
      title: "ANALYZE",
      subtitle: "Review charts and data",
      description:
        "Analyze price charts, review wallet activity, check liquidity, and examine token safety indicators to make informed decisions.",
      accentColor: "83E6B5",
    },
    {
      title: "TRADE",
      subtitle: "Execute through one terminal",
      description:
        "Execute trades and monitor your portfolio through one unified terminal. Manage your positions from discovery to execution.",
      accentColor: "19C784",
    },
  ];

  return (
    <section className="py-24 bg-[050B08]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[19C784]/20 text-[19C784] text-sm mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Three Simple Steps
          </h2>
          <p className="text-[91A49A] text-lg max-w-2xl mx-auto mt-4">
            Discover. Analyze. Trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index === 0 ? -50 : index === 1 ? 50 : 0, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="{step.accentColor}"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    d="M12 2v6m0 0v6m0 -6h6m-6 0H6m0 0v12m-12 0l3-3l9 3l-3 3l9-3m-3-9l3 3m-3 3l-9-3m3-3l9 3m-9 3l-3-3"
                    stroke="{step.accentColor}"
                    strokeWidth={2}
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>

              <p className="text-[91A49A] text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};