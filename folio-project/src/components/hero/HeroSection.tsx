import { motion, animate } from "framer-motion";

export const HeroSection = () => {
  const animateGradient = {
    backgroundPosition: ["0% 50%", "100% 50%"],
    transition: { duration: 15, easing: "ease-in-out" },
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-[050B08] pt-20">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
          style={{ background: "linear-gradient(135deg, #0A1510 0%, #050B08 100%) " }}
          animate={animateGradient}
        />
      </div>

      {/* Status badge */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[19C784]/20 text-[19C784] text-sm">
          <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
          </svg>
          COMING SOON TO ROBINHOOD CHAIN
        </span>
      </div>

      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - text content */}
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[0A1510] border border-white/10 text-[91A49A] text-sm mb-6">
              Discover. Analyze. Trade.
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Everything You Need<br />
              to Navigate the Market
            </h1>

            <p className="text-[91A49A] text-lg mb-8 max-w-xl">
              Discover emerging tokens, track smart wallets, analyze market activity and execute trades through one unified trading terminal built for Robinhood Chain.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-3 bg-[19C784] text-[050B08] font-medium rounded-full hover:bg-[83E6B5] transition-colors"
              >
                Explore the Terminal
              </button>
              <button
                className="px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-[0A1510] transition-colors"
              >
                Join the Community
              </button>
            </div>
          </div>

          {/* Right side - terminal preview */}
          <div className="relative">
            {/* Terminal card */}
            <div className="relative rounded-2xl bg-[0A1510] p-6 shadow-xl overflow-hidden">
              <div className="relative">
                {/* Terminal header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 rounded bg-[19C784] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[050B08]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    </svg>
                  </div>
                  <span className="text-[91A49A] text-sm ml-3">Folio Terminal v0.1</span>
                </div>

                {/* Main trading view */}
                <div className="h-64 bg-[111821] rounded-xl overflow-hidden mb-6">
                  <div className="h-full bg-gradient-to-b from-[111821] to-[0A1510]">
                    {/* Chart area */}
                    <div className="h-full relative">
                      {/* Price line */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-[19C784] opacity-50" />
                      {/* Volume bars */}
                      <div className="absolute bottom-0 left-2 w-2 bg-[83E6B5] opacity-60 rounded-t md:w-1.5" style={{ animation: "pulse 2s infinite" }} />
                      <div className="absolute left-6 bottom-2 w-2 bg-[83E6B5] opacity-60 rounded-t" style={{ animation: "pulse 2s infinite 0.2s" }} />
                      <div className="absolute left-10 bottom-3 w-2 bg-[83E6B5] opacity-60 rounded-t" style={{ animation: "pulse 2s infinite 0.4s" }} />
                    </div>
                  </div>
                </div>

                {/* Token list */}
                <div className="h-40 bg-[111821] overflow-y-auto rounded-b-xl scrollbar-hide">
                  <div className="p-4">
                    <div className="flex items-center gap-3 text-sm text-[91A49A] pb-2 border-b">
                      <span className="w-24 font-medium">Token</span>
                      <span className="w-14 text-right font-medium">Price</span>
                      <span className="w-14 text-right font-medium">24h</span>
                      <span className="w-12 text-right font-medium">Volume</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[91A49A] pb-2 border-b">
                      <span>BTC/USDT</span>
                      <span>$67,421</span>
                      <span className="text-[83E6B5]">+2.3%</span>
                      <span>$12.4B</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[91A49A] pb-2 border-b">
                      <span>ETH/USDT</span>
                      <span>$3,842</span>
                      <span className="text-[83E6B5]">-1.1%</span>
                      <span>$8.9B</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[91A49A] pb-2 border-b">
                      <span>SOL/USDT</span>
                      <span>$198.5</span>
                      <span className="text-[83E6B5]">+5.7%</span>
                      <span>$3.2B</span>
                    </div>
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-sm text-[83E6B5]">
                    <span>24h Volume:</span>
                    <span>$45.2B</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[83E6B5]">
                    <span>BTC:</span>
                    <span>$67,421</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};