import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, MapPin, MessageCircle, Zap } from "lucide-react";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden relative selection:bg-primary/20">
      
      {/* Background glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-amber-200/40 via-orange-300/20 to-yellow-100/40 blur-[100px] rounded-full mix-blend-multiply" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/30 via-transparent to-transparent" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[420px] bg-card rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-orange-900/5 relative z-10 border border-white/50 backdrop-blur-sm"
        data-testid="contact-card"
      >
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Header Area */}
          <div className="space-y-3 w-full flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold tracking-wide uppercase shadow-sm border border-orange-100"
            >
              <MapPin className="w-3.5 h-3.5" />
              For Nagpur Businesses
            </motion.div>
            
            <h2 className="text-sm font-bold text-muted-foreground tracking-tight uppercase">
              Local Business Growth Setup
            </h2>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-[1.15] tracking-tight">
              Your customers are searching online. <span className="text-primary">Are they finding you?</span>
            </h1>
            
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-[320px]">
              We help local businesses get more calls through a website, Google presence, and WhatsApp lead system.
            </p>
          </div>

          {/* Highlight Strip */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-full bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 rounded-2xl p-4 border border-orange-200/50 shadow-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]" />
            <div className="flex items-center justify-center gap-2 text-orange-800 font-bold relative z-10">
              <Zap className="w-5 h-5 text-orange-500 fill-orange-500" />
              <span>⚡ LIVE in 5 Days</span>
            </div>
          </motion.div>

          {/* Benefit Icons */}
          <div className="grid grid-cols-3 gap-2 w-full pt-2">
            {[
              { icon: Globe, label: "Website" },
              { icon: MapPin, label: "Google Visibility" },
              { icon: MessageCircle, label: "WhatsApp Leads" }
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1), duration: 0.4 }}
                className="flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-secondary/50 border border-secondary"
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-foreground text-center leading-tight">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Loss Aversion */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="w-full py-2"
          >
            <p className="text-sm font-medium text-foreground bg-red-50/50 text-red-900/80 p-3 rounded-xl border border-red-100/50">
              <span className="font-semibold text-red-700">Every day without online visibility</span> = customers going to competitors.
            </p>
          </motion.div>

          {/* CTAs */}
          <div className="w-full flex flex-col gap-3 pt-2">
            <motion.a
              href="https://YOUR-LANDING-PAGE-LINK.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-view-growth-page"
              className="group relative w-full flex items-center justify-center gap-2 bg-gradient-to-br from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-2xl py-4 px-6 font-bold text-lg shadow-[0_8px_20px_-6px_rgba(249,115,22,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(249,115,22,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
              animate={{ 
                boxShadow: ["0px 8px 20px -6px rgba(249,115,22,0.4)", "0px 8px 25px -4px rgba(249,115,22,0.6)", "0px 8px 20px -6px rgba(249,115,22,0.4)"] 
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              View Growth Page
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              href="https://wa.me/91YOURNUMBER?text=Hi%2C%20I%20want%20to%20grow%20my%20business%20online"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-chat-whatsapp"
              className="w-full flex items-center justify-center gap-2 bg-white hover:bg-green-50 text-green-700 border-2 border-green-100 rounded-2xl py-3 px-6 font-semibold text-sm transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-green-100" />
              💬 Chat on WhatsApp
            </motion.a>
          </div>

          {/* Footer Area */}
          <div className="w-full flex flex-col items-center gap-3 pt-4 border-t border-border/60">
            <p className="text-xs text-muted-foreground text-center max-w-[280px] leading-relaxed">
              Built for pandits, tiffin services, shops & local service providers in Nagpur.
            </p>
            
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-700 text-xs font-bold">
              🔥 Only 5 businesses onboarded this week.
            </div>

            <div className="flex items-center justify-center gap-2 mt-2 text-[10px] font-medium text-muted-foreground/60 uppercase tracking-widest">
              <span>Website</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span>Google</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span>WhatsApp Leads</span>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Home />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
