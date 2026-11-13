import { motion } from "framer-motion";
import {
  TrendingUp,
  Zap,
  Route,
  Shield,
  Chart,
  Users,
  Folder,
  Terminal,
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: keyof typeof import("lucide-react");
  href?: string;
}

const iconMap: Record<string, any> = {
  TrendingUp,
  Zap,
  Route,
  Shield,
  Chart,
  Users,
  Folder,
  Terminal,
};

export const FeaturesSection = () => {
  const features = [
    {
      title: "Smart Token Discovery",
      description:
        "Find emerging tokens and monitor market activity across Robinhood Chain. Our intelligent discovery system scans the ecosystem for new opportunities.",
      icon: "TrendingUp",
      href: "#features",
    },
    {
      title: "AI-Powered Market Scanner",
      description:
        "Identify unusual market activity and explain potential opportunities using on-chain signals. AI analysis of volume, liquidity and wallet patterns.",
      icon: "Zap",
      href: "#features",
    },
    {
      title: "Whale Tracking",
      description:
        "Monitor large wallets, transactions and accumulation patterns. Track smart money movements across the network in real-time.",
      icon: "Route",
      href: "#features",
    },
    {
      title: "Token Safety",
      description:
        "Analyze contract permissions, liquidity and suspicious token activity. Identify potential risks before trading.",
      icon: "Shield",
      href: "#features",
    },
    {
      title: "Advanced Trading Charts",
      description:
        "Explore market movements with advanced charting tools and indicators. Multi-timeframe analysis with technical studies.",
      icon: "Chart",
      href: "#features",
    },
    {
      title: "Copy Trading",
      description:
        "Discover and follow wallet strategies with configurable limits and safeguards. Preview strategies before committing.",
      icon: "Users",
      href: "#features",
    },
    {
      title: "Portfolio Analytics",
      description:
        "Monitor holdings, performance and trading history. Complete portfolio view with analytics and insights.",
      icon: "Folder",
      href: "#features",
    },
    {
      title: "Unified Trading",
      description:
        "Bring token discovery, market analysis and trading execution together in one place. One terminal for all your trading needs.",
      icon: "Terminal",
      href: "#features",
    },
  ];

  return (
    <section className="py-24 bg-[0A1510]" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[19C784]/20 text-[19C784] text-sm mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Premium Features
          </h2>
          <p className="text-[91A49A] text-lg max-w-2xl mx-auto mt-4">
            Everything you need to discover, analyze and trade on Robinhood Chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="group rounded-2xl bg-[0A1510] p-6 border border-white/10 hover:border-[19C784]/20 transition-all duration-300 group-hover:border-[83E6B5]"
              >
                <div className="w-12 h-12 rounded-xl bg-[050B08] flex items-center justify-center mb-5 group-hover:bg-[19C784] transition-colors">
                  <IconComponent className="w-6 h-6 text-[83E6B5]" />
                </div>

                <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>

                <p className="text-[91A49A] text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};