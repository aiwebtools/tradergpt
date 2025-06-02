import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle, ChevronRight, PlayCircle, MessageCircle, Star, User, ChevronDown, ChevronUp, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Disclaimer",
      description: "For simulation purposes only. This is not financial or trading advice.",
      duration: 10000,
    });
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <AlertDialog open={showDisclaimer} onOpenChange={setShowDisclaimer}>
        <AlertDialogContent className="bg-cyber-black border border-neon-green/20">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-neon-green">Important Disclaimer</AlertDialogTitle>
            <AlertDialogDescription className="text-cyber-light">
              This is a simulation tool only. Nothing presented here constitutes financial or trading advice.
              By clicking "I Agree", you acknowledge that you understand this is for educational purposes only.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction 
              className="bg-neon-green/10 text-neon-green border border-neon-green hover:bg-neon-green/20"
              onClick={() => setShowDisclaimer(false)}
            >
              I Agree
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Header />
      
      {/* Hero Section */}
      <section className="pt-36 md:pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Small Disclaimer Notice */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="p-4 rounded-lg bg-cyber-gray/30 border border-neon-green/20 text-center">
              <p className="text-sm text-cyber-light">
                <Info className="w-4 h-4 inline mr-2" />
                For informational, educational, and research purposes only. Not financial advice.
              </p>
            </div>
          </div>

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

      {/* Testimonials Section */}
      <section className="py-16 bg-cyber-gray/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">
            Trader <span className="text-neon-green">Success Stories</span>
          </h2>
          <p className="text-center text-cyber-light mb-12 max-w-2xl mx-auto">
            See what our users are saying about their experience with Trader GPT
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-cyber-black border border-neon-green/20 hover:border-neon-green/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cyber-gray flex items-center justify-center">
                    <User className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-cyber-light text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-neon-green' : 'text-cyber-gray'}`} 
                      fill={i < testimonial.rating ? '#39FF14' : 'none'} 
                    />
                  ))}
                </div>
                <p className="text-cyber-light italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">
            Frequently Asked <span className="text-neon-green">Questions</span>
          </h2>
          <p className="text-center text-cyber-light mb-12 max-w-2xl mx-auto">
            Everything you need to know about Trader GPT
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-neon-green/20 rounded-lg bg-cyber-gray/50 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-cyber-gray/80 hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <Info className="w-5 h-5 text-neon-green flex-shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-cyber-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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

const testimonials = [
  {
    name: "Alex Thompson",
    title: "Simulation Trader",
    rating: 5,
    quote: "Trader GPT's analysis helped me understand market patterns I would have missed on my own. Great simulation tool for learning!"
  },
  {
    name: "Sarah Chen",
    title: "Trading Educator",
    rating: 5,
    quote: "I use Trader GPT to teach my students about different market strategies. The signals are clear and the reasoning is educational."
  },
  {
    name: "Michael Rodriguez",
    title: "Finance Student",
    rating: 4,
    quote: "Perfect companion for learning to trade. I appreciate how it explains the reasoning behind each signal in the simulation."
  }
];

const faqs = [
  {
    question: "Is Trader GPT offering real financial advice?",
    answer: "No, Trader GPT is a simulation tool designed for educational purposes only. It should not be used for making real financial decisions or as a substitute for professional financial advice."
  },
  {
    question: "How accurate are the trading signals?",
    answer: "The signals are based on historical data analysis and AI pattern recognition in our simulation environment. While they aim to be educational, they should not be relied upon for actual trading decisions."
  },
  {
    question: "Can I use Trader GPT for my real investment portfolio?",
    answer: "Trader GPT is explicitly not designed for use with real investments. It is a simulation and educational tool only. Always consult with qualified financial professionals before making investment decisions."
  },
  {
    question: "How often are the market signals updated?",
    answer: "In our simulation environment, market signals are updated frequently to provide a realistic learning experience. The specific timing depends on the market and asset class being analyzed."
  },
  {
    question: "What technical indicators does Trader GPT use?",
    answer: "Trader GPT incorporates a variety of technical indicators including RSI, MACD, Bollinger Bands, moving averages, and volume analysis to provide comprehensive educational market insights."
  }
];

export default Index;
