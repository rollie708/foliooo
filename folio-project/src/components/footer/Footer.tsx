export const Footer = () => {
  return (
    <footer className="bg-[050B08] py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <svg
                className="w-8 h-8 text-[19C784]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </svg>
              <span className="text-2xl font-bold text-white">Folio</span>
            </div>
            <p className="text-[91A49A] text-base">
              An all-in-one trading and intelligence terminal for Robinhood Chain.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Overview</h4>
            <ul className="space-y-2 text-[91A49A] text-sm">
              <li>
                <a href="#overview" className="hover:text-[19C784] transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[19C784] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#terminal" className="hover:text-[19C784] transition-colors">
                  Terminal Preview
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[19C784] transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Features</h4>
            <ul className="space-y-2 text-[91A49A] text-sm">
              <li>
                <a href="#features" className="hover:text-[19C784] transition-colors">
                  Smart Token Discovery
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[19C784] transition-colors">
                  AI-Powered Market Scanner
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[19C784] transition-colors">
                  Whale Tracking
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[19C784] transition-colors">
                  Token Safety
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Roadmap</h4>
            <ul className="space-y-2 text-[91A49A] text-sm">
              <li>
                <a href="#roadmap" className="hover:text-[19C784] transition-colors">
                  Phase 01
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-[19C784] transition-colors">
                  Phase 02
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-[19C784] transition-colors">
                  Phase 03
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-[19C784] transition-colors">
                  Phase 04
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Community</h4>
            <ul className="space-y-2 text-[91A49A] text-sm">
              <li>
                <a href="#community" className="hover:text-[19C784] transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" rel="noopener" className="hover:text-[19C784] transition-colors">
                  X @FolioTrading
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener" className="hover:text-[19C784] transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[91A49A] text-sm">
            2026 Folio. Built for Robinhood Chain.
          </p>
          <div className="flex gap-4">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener"
              className="text-[91A49A] hover:text-[19C784] transition-colors text-sm"
            >
              X
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener"
              className="text-[91A49A] hover:text-[19C784] transition-colors text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};