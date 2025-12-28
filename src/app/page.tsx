"use client";

import { Hero } from "@/components/guardian/Hero";
import { InteractiveMap } from "@/components/guardian/InteractiveMap";
import { AssetGrid } from "@/components/guardian/AssetGrid";
import { KSDMADashboard } from "@/components/guardian/KSDMADashboard";
import { AIAssistant } from "@/components/guardian/AIAssistant";
import { VerificationPortal } from "@/components/guardian/VerificationPortal";
import { VolunteerView } from "@/components/guardian/VolunteerView";
import { Shield, Menu, Github, ExternalLink, X, Users, Briefcase, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isLandslideTriggered, setIsLandslideTriggered] = useState(false);
  const [isVolunteerViewOpen, setIsVolunteerViewOpen] = useState(false);
  const [showVolunteerInfo, setShowVolunteerInfo] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | null, id: string) => {
    if (e) e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              {[
                { name: "Technology", id: "technology" },
                { name: "KSDMA", id: "ksdma" },
                { name: "Kerala Context", id: "#" },
                { name: "About", id: "#" }
              ].map((item) => (
                <motion.a 
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => item.id !== "#" && scrollToSection(e, item.id)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/60 hover:text-foreground hover:bg-white/5 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
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
                  {[
                    { name: "Technology", id: "technology" },
                    { name: "KSDMA", id: "ksdma" },
                    { name: "Kerala Context", id: "#" },
                    { name: "About", id: "#" }
                  ].map((item) => (
                    <a 
                      key={item.name}
                      href={`#${item.id}`} 
                      onClick={(e) => {
                        if (item.id !== "#") {
                          scrollToSection(e, item.id);
                          setMobileMenuOpen(false);
                        }
                      }}
                      className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground/60 hover:text-foreground hover:bg-white/5 transition-all"
                    >
                      {item.name}
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

        <Hero 
          onGetStarted={() => setIsPortalOpen(true)}
          onViewMap={() => scrollToSection(null, "map")}
        />
        <InteractiveMap onLandslideTrigger={setIsLandslideTriggered} />

        <AnimatePresence>
          {isLandslideTriggered && (
            <motion.section 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="py-12 bg-secondary/10 relative overflow-hidden"
            >
              <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 glass-card p-8 rounded-[2.5rem] border-primary/20 shadow-[0_0_50px_rgba(var(--primary),0.1)]">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold italic tracking-tight">Active Response Units</h3>
                        <p className="text-foreground/60 text-sm font-mono">Real-time Volunteer Deployment Status</p>
                      </div>
                    </div>
                    <p className="text-foreground/60 max-w-xl mb-6 leading-relaxed">
                      Landslide detected in <span className="text-red-400 font-bold">Meppadi-Chooralmala</span> sector. 
                      Volunteers are categorized into specialized strike teams. Access the mobile interface to receive direct assignments.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <motion.button
                        onClick={() => setShowVolunteerInfo(!showVolunteerInfo)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
                      >
                        {showVolunteerInfo ? "Hide Deployment Zones" : "View Deployment Zones"}
                        <Zap className={`w-4 h-4 ${showVolunteerInfo ? "rotate-180" : ""} transition-transform`} />
                      </motion.button>
                      <motion.button
                        onClick={() => setIsVolunteerViewOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-black flex items-center gap-3 shadow-lg shadow-primary/20 animate-bounce"
                      >
                        <Briefcase className="w-5 h-5" />
                        DEMO VOLUNTEER MOBILE APP
                      </motion.button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {showVolunteerInfo && (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4"
                      >
                        {[
                          { zone: "Zone A", area: "Chooralmala", task: "Rescue", gear: "Drones, Excavators", color: "red" },
                          { zone: "Zone B", area: "Mundakkai", task: "Medical", gear: "Trauma Kits, OT Units", color: "orange" },
                          { zone: "Zone C", area: "Meppadi", task: "Relief", gear: "Logistics, Ham Radio", color: "blue" },
                          { zone: "Zone D", area: "Kalpetta", task: "Base Ops", gear: "Satellite Comms", color: "green" }
                        ].map((item) => (
                          <div key={item.zone} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">{item.zone}</span>
                              <div className={`w-2 h-2 rounded-full bg-${item.color}-500`} />
                            </div>
                            <h4 className="font-bold text-sm mb-1">{item.area}</h4>
                            <p className="text-[10px] text-primary font-mono uppercase mb-1">{item.task} Team</p>
                            <p className="text-[10px] text-foreground/40 italic">Gear: {item.gear}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        <AssetGrid />
        <KSDMADashboard />
        <AIAssistant />

        <VerificationPortal 
          isOpen={isPortalOpen} 
          onClose={() => setIsPortalOpen(false)} 
        />

        <AnimatePresence>
          {isVolunteerViewOpen && (
            <VolunteerView onClose={() => setIsVolunteerViewOpen(false)} />
          )}
        </AnimatePresence>

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
