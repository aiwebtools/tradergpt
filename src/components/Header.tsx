
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-black/80 backdrop-blur-lg border-b border-neon-green/20">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between">
          <Link to="/" className="flex flex-col md:flex-row items-center gap-2">
            <div className="text-2xl font-bold text-white">
              <span className="text-neon-green">TRADER</span> GPT
            </div>
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyber-light opacity-75 hover:opacity-100 transition-opacity"
            >
              Presented by AiWebTools.Ai
            </a>
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-xs text-cyber-light/60 bg-cyber-gray/30 px-3 py-1 rounded-full">
              For simulation purposes only
            </p>
            <a
              href="https://chatgpt.com/g/g-Spg0j0GHd-trader-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-2 bg-neon-green/10 text-neon-green border border-neon-green rounded-full hover:bg-neon-green/20 transition-all duration-300 animate-glow-pulse flex items-center justify-center gap-2"
            >
              USE TRADER GPT
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-2 bg-neon-purple/10 text-neon-purple border border-neon-purple rounded-full hover:bg-neon-purple/20 transition-all duration-300 text-center"
            >
              More AI Tools
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
