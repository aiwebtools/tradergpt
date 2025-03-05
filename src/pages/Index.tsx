import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle, ChevronRight, PlayCircle } from "lucide-react";

const Index = () => {
  const [videoPlaying, setVideoPlaying] = useState(true);

  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-36 md:pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-neon-green">TRADER</span> GPT
            </h1>
            <p className="text-xl text-cyber-light mb-8">
              Advanced AI-powered trading signals and real-time market analysis
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <a
                href="https://chatgpt.com/g/g-Spg0j0GHd-trader-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-neon-green/10 text-neon-green border border-neon-green rounded-full hover:bg-neon-green/20 transition-all duration-300 animate-neon-border flex items-center gap-2"
              >
                Start Trading Now
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(57,255,20,0.2)] mb-16">
            <div className="relative aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/Izs80Fak4hQ?autoplay=1&mute=0&controls=1&quality=hd1080`}
                title="Trader GPT Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-cyber-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-neon-green">Trader GPT</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-cyber-black/50 border border-neon-green/20 hover:border-neon-green/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-cyber-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-cyber-gray border border-neon-purple/30">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-neon-purple flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Legal Disclaimer</h3>
                  <p className="text-cyber-light">
                    Trader GPT is a simulation AI tool for informational and research purposes only. 
                    The information provided should not be construed as professional trading advice. 
                    Users acknowledge that they will not rely on this tool for real-life trading 
                    decisions. Past performance does not guarantee future results. Trading involves 
                    substantial risk and may result in the loss of your invested capital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const features = [
  {
    title: "Real-Time Analysis",
    description: "Access live market data and instant technical analysis for informed trading decisions.",
  },
  {
    title: "Advanced Indicators",
    description: "Comprehensive technical indicators including RSI, MACD, and Bollinger Bands.",
  },
  {
    title: "Smart Signals",
    description: "Get clear buy, sell, or hold signals with detailed reasoning and confidence levels.",
  },
];

export default Index;
