
import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyber-black/80 border-t border-neon-green/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://chatgpt.com/g/g-Spg0j0GHd-trader-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-light hover:text-neon-green transition-colors"
              >
                USE TRADER GPT
              </a>
              <a
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-light hover:text-neon-green transition-colors"
              >
                More AI Tools
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://openai.com/policies/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-light hover:text-neon-green transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://aiwebtools.ai/terms-of-services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-light hover:text-neon-green transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <div className="flex flex-col gap-2">
              <a
                href="tel:4758008096"
                className="text-cyber-light hover:text-neon-green transition-colors"
              >
                (475) 800-8096
              </a>
              <a
                href="mailto:Contact@ai-webtools.com"
                className="text-cyber-light hover:text-neon-green transition-colors"
              >
                Contact@ai-webtools.com
              </a>
            </div>
          </div>
          
          <div className="md:text-right">
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neon-green/10 text-neon-green border border-neon-green rounded-full hover:bg-neon-green/20 transition-all duration-300"
            >
              More AI Tools
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-neon-green/20 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-light hover:text-neon-green transition-colors"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
            <a
              href="https://www.aiwebtools.ai"
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
