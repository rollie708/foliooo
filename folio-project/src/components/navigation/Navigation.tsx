import { ReactComponent as FolioLogo } from "../../public/folio-logo.svg";
import Link from "next/link";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "#overview", label: "Overview" },
    { href: "#features", label: "Features" },
    { href: "#terminal", label: "Terminal Preview" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#roadmap", label: "Roadmap" },
  ];

  const communityLink = { href: "#community", label: "Community" };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[050B08]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FolioLogo width={32} height={32} />
          <span className="text-2xl font-bold text-white">Folio</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[91A49A] hover:text-[19C784] transition-colors text-sm font-medium"
              onClick:={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#community" className="text-[91A49A] hover:text-[19C784] transition-colors text-sm font-medium">
            {communityLink.label}
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M3 12l2-2m0 0l7-7M5 10l2-2M7 14l2-2M9 18l2-2M11 6l2-2M13 14l2-2M15 10l2-2M17 18l2-2" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[0A1510]/90 backdrop-blur-xl">
          <div className="flex flex-col h-full p-6">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-2xl text-white hover:text-[19C784] mb-4 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#community"
              href="/community"
              className="text-2xl text-white hover:text-[19C784] mt-4 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};