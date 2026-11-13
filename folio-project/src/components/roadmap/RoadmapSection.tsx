import { motion } from "framer-motion";

export const RoadmapSection = () => {
  const phases = [
    {
      title: "Phase 01 — Foundation",
      subtitle: "Platform architecture and infrastructure",
      items: [
        "Platform architecture",
        "Robinhood Chain integration",
        "Market data infrastructure",
        "Wallet connectivity",
      ],
    },
    {
      title: "Phase 02 — Trading Terminal",
      subtitle: "Core trading experience",
      items: [
        "Trading interface",
        "Advanced charts",
        "Token discovery",
        "Portfolio dashboard",
      ],
    },
    {
      title: "Phase 03 — Market Intelligence",
      subtitle: "AI and analytics tools",
      items: [
        "AI scanner",
        "Whale tracking",
        "Token safety analysis",
        "Market alerts",
      ],
    },
    {
      title: "Phase 04 — Advanced Tools",
      subtitle: "Enhanced capabilities",
      items: [
        "Copy trading",
        "Advanced wallet analytics",
        "Enhanced portfolio insights",
        "Mobile application",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[0A1510]" id="roadmap">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[19C784]/20 text-[19C784] text-sm mb-4">
            Product Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Planned Development Milestones
          </h2>
          <p className="text-[91A49A] text-lg max-w-2xl mx-auto mt-4">
            Roadmap showing planned development phases for Folio.
          </p>
        </div>

        <div className="space-y-6">
          {phases.map((phase, phaseIndex) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: phaseIndex * 0.15, duration: 0.6 }}
              className="rounded-2xl bg-[050B08] p-6 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[19C784] flex items-center justify-center flex-shrink-0">
                  <span className="text-[050B08] font-bold text-sm">{phaseIndex + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-1">{phase.title}</h3>
                  <p className="text-[91A49A] text-sm">{phase.subtitle}</p>
                </div>
              </div>

              <ul className="list-disc list-inside text-[91A49A] text-sm">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};