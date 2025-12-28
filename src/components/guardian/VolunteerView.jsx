
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, MapPin, Radio, Battery, AlertTriangle, Navigation, CheckCircle2, Info, Activity, X } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export const VolunteerView = ({ onClose }) => {
  const { t } = useLanguage();
  const [status, setStatus] = useState("standby"); // standby, alerting, mission, accepted
  const [battery, setBattery] = useState(88);
  const [missionData, setMissionData] = useState({
    location: "Chooralmala, Wayanad (Zone 4)",
    task: "🚁 Aerial Surveillance Required",
    equipment: "🔋 Bring Drone (Thermal Camera)",
    victims: "14 People trapped",
    coordinates: [11.6750, 76.1400],
    distance: "1.2km"
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setBattery(prev => Math.max(0, prev - 1));
    }, 30000);

    if (status === "standby") {
      const timer = setTimeout(() => {
        setStatus("alerting");
        setTimeout(() => setStatus("mission"), 1500);
      }, 4000);
      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }

    return () => clearInterval(interval);
  }, [status]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="w-full max-w-[380px] h-[750px] bg-black border-2 border-[#39FF14]/20 rounded-[3rem] overflow-hidden relative shadow-[0_0_50px_rgba(57,255,20,0.1)] flex flex-col font-sans"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20 flex items-center justify-center gap-1">
          <div className="w-8 h-1 bg-white/10 rounded-full" />
        </div>

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

        <div className="px-6 py-2 border-b border-[#39FF14]/10 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#39FF14]">Guardian App</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-white/5 rounded-full"
          >
            <X className="w-4 h-4 text-[#39FF14]/40" />
          </button>
        </div>

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
                <h3 className="text-[#39FF14] font-mono text-sm mb-2 animate-pulse uppercase">
                  {language === 'en' ? 'Scanning for emergency signals...' : language === 'hi' ? 'आपातकालीन संकेतों की खोज...' : 'അടിയന്തര സിഗ്നലുകൾക്കായി തിരയുന്നു...'}
                </h3>
                <p className="text-white/40 text-[10px] font-mono uppercase tracking-tighter">
                  STATUS: STANDBY - WAYANAD SECTOR
                </p>
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
                <h2 className="text-[#FF0000] text-3xl font-black italic tracking-tighter mb-2 uppercase">
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
                exit={{ opacity: 0, scale: 0.9 }}
                className="h-full flex flex-col p-6"
              >
                <div className="bg-[#FF0000]/10 border-2 border-[#FF0000]/30 rounded-3xl p-5 mb-6 relative overflow-hidden">
                  <div className="absolute top-3 right-3 flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-ping" />
                  </div>
                  <h4 className="text-[#FF0000] font-black text-xs uppercase mb-4 flex items-center gap-2 tracking-widest">
                    🚨 Critical Mission
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#FF0000]/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#FF0000]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/40 font-mono uppercase">{t.volunteer.mission.target}</p>
                        <p className="text-white text-sm font-bold">{missionData.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#FF0000]/20 flex items-center justify-center flex-shrink-0">
                        <Activity className="w-5 h-5 text-[#FF0000]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/40 font-mono uppercase">URGENCY</p>
                        <p className="text-white text-sm font-bold">{missionData.victims}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#FF0000]/20 flex items-center justify-center flex-shrink-0">
                        <Navigation className="w-5 h-5 text-[#FF0000]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/40 font-mono uppercase">TASK</p>
                        <p className="text-white text-sm font-bold">{missionData.task}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#39FF14]/10 flex items-center justify-center">
                      <Info className="w-4 h-4 text-[#39FF14]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 font-mono uppercase">REQUIREMENTS</p>
                      <p className="text-white text-[11px] font-bold">{missionData.equipment}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto space-y-3">
                  <motion.button 
                    onClick={() => setStatus("accepted")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#39FF14] text-black font-black py-5 rounded-2xl flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(57,255,20,0.3)] text-base uppercase"
                  >
                    <CheckCircle2 className="w-6 h-6" />
                    ACCEPT MISSION
                  </motion.button>
                  <motion.button 
                    onClick={onClose}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white/5 text-white/40 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 text-sm border border-white/5 uppercase"
                  >
                    REJECT / UNAVAILABLE
                  </motion.button>
                </div>
              </motion.div>
            )}

            {status === "accepted" && (
              <motion.div 
                key="accepted"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col"
              >
                <div className="bg-red-600 p-3 text-center animate-pulse">
                   <p className="text-white font-black text-sm tracking-tighter uppercase">
                     {missionData.victims} - {t.volunteer.mission.accepted}
                   </p>
                </div>

                <div className="flex-1 relative bg-zinc-900 overflow-hidden">
                  <div className="absolute inset-0 opacity-40">
                    <div className="absolute inset-0 topographic-bg" />
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <path d="M10,90 Q50,10 90,40" stroke="#39FF14" strokeWidth="0.5" fill="none" strokeDasharray="2,2" />
                      <circle cx="10" cy="90" r="2" fill="#39FF14" />
                      <circle cx="90" cy="40" r="3" fill="#FF0000" className="animate-pulse" />
                    </svg>
                  </div>

                  <div className="absolute top-4 left-4 right-4 space-y-2">
                    <div className="bg-black/80 backdrop-blur-md border border-[#39FF14]/30 rounded-xl p-3 flex justify-between items-center">
                      <div>
                        <p className="text-[8px] text-white/40 font-mono uppercase tracking-widest">ETA TO SITE</p>
                        <p className="text-[#39FF14] text-lg font-black">4 MIN</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] text-white/40 font-mono uppercase tracking-widest">{t.volunteer.mission.distance}</p>
                        <p className="text-white text-lg font-black">{missionData.distance}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                          <Navigation className="w-6 h-6 text-[#39FF14] rotate-45" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] text-white/40 font-mono uppercase">Instruction</p>
                          <p className="text-white font-bold leading-tight">Proceed to Zone 4 Recovery Point</p>
                        </div>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-[#39FF14]"
                          animate={{ width: ["20%", "80%"] }}
                          transition={{ duration: 10, repeat: Infinity }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-black border-t border-white/10">
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#39FF14] text-black font-black py-4 rounded-xl flex items-center justify-center gap-2 mb-3 uppercase"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    I HAVE ARRIVED
                  </motion.button>
                  <motion.button 
                    onClick={onClose}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white/5 text-white/40 font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-xs border border-white/5 uppercase"
                  >
                    {t.volunteer.exit}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-4 border-t border-[#39FF14]/10 bg-white/5 flex justify-center">
          <div className="w-32 h-1 bg-white/20 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};
