"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, MapPin, Radio, Battery, AlertTriangle, Navigation, CheckCircle2, Info } from "lucide-react";

export const VolunteerView = ({ onClose }) => {
  const [status, setStatus] = useState("standby"); // standby, alerting, mission
  const [battery, setBattery] = useState(88);

  useEffect(() => {
    // Battery drain simulation
    const interval = setInterval(() => {
      setBattery(prev => Math.max(0, prev - 1));
    }, 30000);

    // Simulation Trigger
    const timer = setTimeout(() => {
      setStatus("alerting");
      // Simulate haptic/notification sound feel through UI pulse
      setTimeout(() => setStatus("mission"), 1500);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="w-full max-w-[380px] h-[700px] bg-black border-2 border-[#39FF14]/20 rounded-[3rem] overflow-hidden relative shadow-[0_0_50px_rgba(57,255,20,0.1)] flex flex-col"
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20 flex items-center justify-center gap-1">
          <div className="w-8 h-1 bg-white/10 rounded-full" />
        </div>

        {/* Status Bar */}
        <div className="p-6 pt-8 flex justify-between items-center text-[10px] font-mono text-[#39FF14]/60">
          <div className="flex items-center gap-2">
            <span>12:44</span>
            <span className="flex gap-0.5">
              <div className="w-1 h-2 bg-[#39FF14]" />
              <div className="w-1 h-2 bg-[#39FF14]" />
              <div className="w-1 h-2 bg-[#39FF14]" />
              <div className="w-1 h-1 bg-[#39FF14]/20 mt-1" />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Radio className="w-3 h-3 animate-pulse" />
            <span>MESH ACTIVE</span>
            <div className="flex items-center gap-1">
              <span>{battery}%</span>
              <Battery className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="px-6 py-2 border-b border-[#39FF14]/10 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#39FF14]">Guardian App</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-white/5 rounded-full"
          >
            <Shield className="w-4 h-4 text-[#39FF14]/40" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait">
            {status === "standby" && (
              <motion.div 
                key="standby"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center p-8 text-center"
              >
                <div className="relative mb-8">
                  <motion.div 
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border-2 border-[#39FF14]"
                  />
                  <div className="w-24 h-24 rounded-full border-2 border-[#39FF14]/30 flex items-center justify-center relative">
                    <Radio className="w-10 h-10 text-[#39FF14]" />
                  </div>
                </div>
                <h3 className="text-[#39FF14] font-mono text-sm mb-2 animate-pulse">
                  SCANNING FOR EMERGENCY SIGNALS...
                </h3>
                <p className="text-white/40 text-[10px] font-mono uppercase tracking-tighter">
                  STATUS: STANDBY - WAYANAD SECTOR
                </p>
                
                <div className="mt-12 grid grid-cols-2 gap-4 w-full">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <p className="text-[8px] text-white/40 mb-1 font-mono">NEAREST ASSETS</p>
                    <p className="text-[#39FF14] font-bold">12</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <p className="text-[8px] text-white/40 mb-1 font-mono">NETWORK STRENGTH</p>
                    <p className="text-[#39FF14] font-bold">94%</p>
                  </div>
                </div>
              </motion.div>
            )}

            {status === "alerting" && (
              <motion.div 
                key="alerting"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  backgroundColor: ["rgba(255,0,0,0)", "rgba(255,0,0,0.2)", "rgba(255,0,0,0)"]
                }}
                transition={{ 
                  backgroundColor: { repeat: Infinity, duration: 0.5 }
                }}
                className="h-full flex flex-col items-center justify-center p-8 text-center"
              >
                <AlertTriangle className="w-20 h-20 text-[#FF0000] mb-6" />
                <h2 className="text-[#FF0000] text-3xl font-black italic tracking-tighter mb-2">
                  MISSION INCOMING
                </h2>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className="h-full bg-[#FF0000]"
                  />
                </div>
              </motion.div>
            )}

            {status === "mission" && (
              <motion.div 
                key="mission"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col p-6"
              >
                <div className="bg-[#FF0000]/10 border-2 border-[#FF0000]/30 rounded-2xl p-4 mb-6 relative overflow-hidden">
                  <div className="absolute top-2 right-2 flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] animate-ping" />
                  </div>
                  <h4 className="text-[#FF0000] font-bold text-xs uppercase mb-3 flex items-center gap-2">
                    🚨 Mission Received
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#FF0000]/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-[#FF0000]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/40 font-mono">LOCATION</p>
                        <p className="text-white text-sm font-bold">Chooralmala, Wayanad (Zone 4)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#FF0000]/20 flex items-center justify-center flex-shrink-0">
                        <Navigation className="w-4 h-4 text-[#FF0000]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/40 font-mono">TASK</p>
                        <p className="text-white text-sm font-bold">🚁 Aerial Surveillance Required</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#FF0000]/20 flex items-center justify-center flex-shrink-0">
                        <Info className="w-4 h-4 text-[#FF0000]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/40 font-mono">EQUIPMENT REQUIRED</p>
                        <p className="text-white text-sm font-bold">🔋 Bring Drone (Thermal Camera)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-auto mb-8">
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#39FF14] text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    ACCEPT MISSION
                  </motion.button>
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-5 h-5" />
                    NAVIGATE (MAP)
                  </motion.button>
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#FF0000] text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2"
                  >
                    🆘 SOS / I NEED HELP
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Bar */}
        <div className="p-4 border-t border-[#39FF14]/10 bg-white/5 flex justify-center">
          <div className="w-32 h-1 bg-white/20 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};
