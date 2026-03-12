
import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyber-black/80 border-t border-neon-green/20 pt-8 md:pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://chatgpt.com/g/g-Spg0j0GHd-trader-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-light hover:text-neon-green transition-colors text-sm"
              >
                USE TRADER GPT
              </a>
              <a
                href="https://aiwebtools.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-light hover:text-neon-green transition-colors text-sm"
              >
                More AI Tools
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Legal</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://openai.com/policies/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-light hover:text-neon-green transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="https://aiwebtools.lovable.app/disclaimers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-light hover:text-neon-green transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Contact</h3>
            <div className="flex flex-col gap-2">
              <a
                href="tel:4758008096"
                className="text-cyber-light hover:text-neon-green transition-colors text-sm"
              >
                (475) 800-8096
              </a>
              <a
                href="mailto:Contact@ai-webtools.com"
                className="text-cyber-light hover:text-neon-green transition-colors text-sm break-all"
              >
                Contact@ai-webtools.com
              </a>
            </div>
          </div>
          
          <div className="col-span-2 md:col-span-1 md:text-right flex md:block items-center justify-center">
            <a
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-neon-green/10 text-neon-green border border-neon-green rounded-full hover:bg-neon-green/20 transition-all duration-300 text-sm"
            >
              More AI Tools
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-neon-green/20 pt-4 md:pt-6 mt-4 md:mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <a
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-light hover:text-neon-green transition-colors text-xs md:text-sm text-center"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
            <a
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyber-light opacity-75 hover:opacity-100 transition-opacity"
            >
              Presented by AiWebTools.Ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
