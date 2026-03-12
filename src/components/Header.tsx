
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-black/80 backdrop-blur-lg border-b border-neon-green/20">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="text-xl md:text-2xl font-bold text-white">
              <span className="text-neon-green">TRADER</span> GPT
            </div>
            <a
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block text-xs text-cyber-light opacity-75 hover:opacity-100 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              Presented by AiWebTools.Ai
            </a>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <p className="text-xs text-cyber-light/60 bg-cyber-gray/30 px-3 py-1.5 rounded-full max-w-[280px] text-center">
              For simulation only; not financial or trading advice.
            </p>
            <a
              href="https://chatgpt.com/g/g-Spg0j0GHd-trader-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-neon-green/10 text-neon-green border border-neon-green rounded-full hover:bg-neon-green/20 transition-all duration-300 animate-glow-pulse flex items-center gap-2 whitespace-nowrap text-sm"
            >
              USE TRADER GPT
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-neon-purple/10 text-neon-purple border border-neon-purple rounded-full hover:bg-neon-purple/20 transition-all duration-300 whitespace-nowrap text-sm"
            >
              More AI Tools
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-neon-green hover:bg-neon-green/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 pb-2 border-t border-neon-green/10 pt-4 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-200">
            <a
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyber-light opacity-75 sm:hidden"
            >
              Presented by AiWebTools.Ai
            </a>
            <p className="text-xs text-cyber-light/60 bg-cyber-gray/30 px-3 py-2 rounded-full text-center">
              For simulation only; not financial or trading advice.
            </p>
            <a
              href="https://chatgpt.com/g/g-Spg0j0GHd-trader-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-3 bg-neon-green/10 text-neon-green border border-neon-green rounded-full hover:bg-neon-green/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              USE TRADER GPT
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-3 bg-neon-purple/10 text-neon-purple border border-neon-purple rounded-full hover:bg-neon-purple/20 transition-all duration-300 text-center text-sm"
              onClick={() => setMenuOpen(false)}
            >
              More AI Tools
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
