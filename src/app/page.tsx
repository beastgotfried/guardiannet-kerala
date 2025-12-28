"use client";

import { Hero } from "@/components/guardian/Hero";
import { InteractiveMap } from "@/components/guardian/InteractiveMap";
import { AssetGrid } from "@/components/guardian/AssetGrid";
import { KSDMADashboard } from "@/components/guardian/KSDMADashboard";
import { AIAssistant } from "@/components/guardian/AIAssistant";
import { VerificationPortal } from "@/components/guardian/VerificationPortal";
import { Shield, Menu, Github, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <div className="noise-overlay" />
        
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            scrolled 
              ? "bg-background/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20" 
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                  <Shield className="w-6 h-6" />
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">GuardianNet</span>
                <span className="hidden sm:inline text-xs text-foreground/40 ml-2 font-mono">Kerala Edition</span>
              </div>
            </motion.div>
            
            <div className="hidden md:flex items-center gap-1">
              {["Technology", "Kerala Context", "KSDMA", "About"].map((item) => (
                <motion.a 
                  key={item}
                  href="#" 
                  className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/60 hover:text-foreground hover:bg-white/5 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.a>
              ))}
              <div className="w-px h-6 bg-white/10 mx-2" />
              <motion.button 
                onClick={() => setIsPortalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Volunteer
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/5"
              >
                <div className="container mx-auto px-4 py-6 space-y-2">
                  {["Technology", "Kerala Context", "KSDMA", "About"].map((item) => (
                    <a 
                      key={item}
                      href="#" 
                      className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground/60 hover:text-foreground hover:bg-white/5 transition-all"
                    >
                      {item}
                    </a>
                  ))}
                  <button 
                    onClick={() => {
                      setIsPortalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm text-center mt-4"
                  >
                    Volunteer Now
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        <Hero />
        <InteractiveMap />
        <AssetGrid />
        <KSDMADashboard />
        <AIAssistant />

        <VerificationPortal 
          isOpen={isPortalOpen} 
          onClose={() => setIsPortalOpen(false)} 
        />

        <footer className="py-24 border-t border-white/5 bg-gradient-to-t from-secondary/20 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 topographic-bg opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
              <div className="max-w-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground">
                    <Shield className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold">GuardianNet</span>
                    <p className="text-xs text-foreground/40 font-mono">Kerala Edition</p>
                  </div>
                </div>
                <p className="text-foreground/40 leading-relaxed mb-6">
                  Hyper-local resilience for the Western Ghats. Built to ensure that the nearest help 
                  is always connected, even when the grid fails.
                </p>
                <p className="text-sm text-primary font-medium italic">
                  "The drone pilot next door. The excavator operator down the street."
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16">
                <div>
                  <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-foreground/60">Platform</h4>
                  <ul className="space-y-4 text-sm text-foreground/40">
                    {["Asset Mapping", "Mesh Networking", "Skill Verification", "Camp Management"].map((item) => (
                      <li key={item}>
                        <a href="#" className="hover:text-primary transition-colors">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-foreground/60">Regions</h4>
                  <ul className="space-y-4 text-sm text-foreground/40">
                    {["Wayanad", "Idukki", "Palakkad", "Kozhikode", "Malappuram"].map((item) => (
                      <li key={item}>
                        <a href="#" className="hover:text-primary transition-colors">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-foreground/60">Resources</h4>
                  <ul className="space-y-4 text-sm text-foreground/40">
                    {["Documentation", "API Access", "KSDMA Portal", "Emergency Contacts"].map((item) => (
                      <li key={item}>
                        <a href="#" className="hover:text-primary transition-colors">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6 text-xs text-foreground/30">
                <span>© 2025 GuardianNet</span>
                <a href="#" className="hover:text-foreground/60 transition-colors">Privacy</a>
                <a href="#" className="hover:text-foreground/60 transition-colors">Terms</a>
              </div>
              <div className="flex items-center gap-4">
                <motion.a 
                  href="#" 
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
