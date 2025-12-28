"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, CheckCircle, User, Phone, 
  CreditCard, Award, QrCode, Loader2,
  X, Briefcase, Fingerprint, Search,
  ArrowRight, ShieldCheck, MapPin,
  Calendar, Check, Download, Share2, AlertCircle
} from "lucide-react";
import registryData from "../../lib/data/verified_registry.json";

const SKILL_CATEGORIES = [
  { id: "drone", label: "Drone Operator", icon: "🛸", org: "DGCA" },
  { id: "medical", label: "Trauma Surgeon", icon: "🏥", org: "IMA" },
  { id: "machinery", label: "JCB/Excavator Operator", icon: "🚜", org: "RTO" },
  { id: "ham", label: "Ham Radio", icon: "📡", org: "KSDMA" },
  { id: "unskilled", label: "Kudumbashree Volunteer", icon: "👩", org: "Kudumbashree" },
];

export function VerificationPortal({ isOpen, onClose }) {
  const [step, setStep] = useState("form"); // form, connecting, validating, success, error
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    skill: "drone",
    idNumber: ""
  });
  const [verifiedUser, setVerifiedUser] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const startVerification = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.idNumber) return;
    
    setStep("connecting");
    
    // Simulate lookup in our registry
    setTimeout(() => {
      setStep("validating");
      
      const found = registryData.find(u => 
        u.id.toLowerCase() === formData.idNumber.toLowerCase() ||
        u.name.toLowerCase().includes(formData.fullName.toLowerCase())
      );

      setTimeout(() => {
        if (found) {
          setVerifiedUser(found);
          setStep("success");
        } else {
          setStep("error");
        }
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-slate-600 p-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight uppercase">KSDMA Volunteer Registry</h2>
              <p className="text-[10px] text-white/60 uppercase tracking-widest font-mono">Kerala State Disaster Management Authority</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {step === "form" && (
              <motion.form 
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={startVerification}
                className="space-y-5"
              >
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                    <User className="w-3 h-3" /> Full Name
                  </label>
                  <input 
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter as per Govt ID"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                    <Phone className="w-3 h-3" /> Mobile Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">+91</span>
                    <input 
                      required
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="WhatsApp linked number"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                      <Briefcase className="w-3 h-3" /> Skill Category
                    </label>
                    <select 
                      name="skill"
                      value={formData.skill}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-800 bg-white"
                    >
                      {SKILL_CATEGORIES.map(s => (
                        <option key={s.id} value={s.id}>{s.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                      <CreditCard className="w-3 h-3" /> ID / License No.
                    </label>
                    <input 
                      required
                      name="idNumber"
                      value={formData.idNumber}
                      onChange={handleInputChange}
                      placeholder="License/Govt ID"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-800"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-slate-600 hover:bg-slate-700 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-slate-200 transition-all active:scale-[0.98]"
                  >
                    Verify Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest leading-relaxed">
                    By verifying, you agree to be called for emergency duties by KSDMA district collectors.
                  </p>
                </div>
              </motion.form>
            )}

            {(step === "connecting" || step === "validating") && (
              <motion.div 
                key="simulation"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-8"
              >
                <div className="relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="w-24 h-24 rounded-full border-4 border-slate-100 border-t-emerald-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {step === "connecting" ? (
                      <Search className="w-8 h-8 text-slate-400 animate-pulse" />
                    ) : (
                      <Fingerprint className="w-8 h-8 text-emerald-500" />
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-800">
                    {step === "connecting" ? "Database Connection" : "Security Validation"}
                  </h3>
                  <p className="text-slate-500 animate-pulse">
                    {step === "connecting" 
                      ? "Connecting to Kerala State Database..." 
                      : "Validating License & Biometrics..."}
                  </p>
                </div>

                <div className="w-full max-w-xs h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: step === "connecting" ? "50%" : "90%" }}
                    className="h-full bg-emerald-500"
                  />
                </div>
              </motion.div>
            )}

            {step === "success" && (
                <motion.div 
                  key="id-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Success Animation */}
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"
                    >
                      <CheckCircle className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-800">Verification Successful</h3>
                    <p className="text-sm text-slate-500">Official registry entry found and validated.</p>
                  </div>

                  {/* Digital ID Card */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-slate-600 rounded-2xl blur opacity-25" />
                    <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
                      {/* ID Header */}
                      <div className="bg-slate-600 p-4 text-white flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-5 h-5 text-emerald-400" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Official Responder ID</span>
                        </div>
                        <div className="px-2 py-0.5 rounded bg-emerald-500 text-[8px] font-bold uppercase tracking-wider">
                          Verified
                        </div>
                      </div>

                      <div className="p-6 flex gap-6">
                        <div className="w-24 h-24 rounded-xl bg-slate-100 flex-shrink-0 flex items-center justify-center border border-slate-200">
                          <User className="w-12 h-12 text-slate-300" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <p className="text-[8px] uppercase tracking-widest text-slate-400 font-bold">Full Name</p>
                            <p className="text-sm font-bold text-slate-800 uppercase">{verifiedUser?.name || formData.fullName}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <p className="text-[8px] uppercase tracking-widest text-slate-400 font-bold">Role / Skill</p>
                              <p className="text-[10px] font-bold text-slate-800 uppercase">
                                {SKILL_CATEGORIES.find(s => s.id === (verifiedUser?.skill || formData.skill))?.label}
                              </p>
                            </div>
                            <div>
                              <p className="text-[8px] uppercase tracking-widest text-slate-400 font-bold">Organization</p>
                              <p className="text-[10px] font-bold text-slate-800 uppercase">
                                {verifiedUser?.org || "KSDMA"}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4 pt-1">
                            <div>
                              <p className="text-[8px] uppercase tracking-widest text-slate-400 font-bold">District</p>
                              <p className="text-[10px] font-bold text-slate-700">Wayanad</p>
                            </div>
                            <div>
                              <p className="text-[8px] uppercase tracking-widest text-slate-400 font-bold">Exp Date</p>
                              <p className="text-[10px] font-bold text-slate-700">12/2026</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="p-2 border border-slate-100 rounded-lg bg-slate-50">
                            <QrCode className="w-16 h-16 text-slate-800" />
                          </div>
                          <p className="text-[6px] text-center mt-1 text-slate-400 font-mono">ID: {verifiedUser?.id || formData.idNumber}</p>
                        </div>
                      </div>

                      {/* Verified Stamp */}
                      <div className="absolute bottom-6 right-20 rotate-[-20deg] opacity-20 pointer-events-none">
                        <div className="border-8 border-emerald-600/30 rounded-2xl px-6 py-2 text-emerald-600/40 font-black text-4xl uppercase tracking-tighter flex items-center gap-2">
                          <CheckCircle className="w-8 h-8" />
                          Verified
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-bold hover:bg-slate-50 transition-all">
                      <Download className="w-4 h-4" /> Save to Device
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 text-white text-sm font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100">
                      <Share2 className="w-4 h-4" /> Share ID
                    </button>
                  </div>
                </motion.div>
              )}

              {step === "error" && (
                <motion.div 
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <AlertCircle className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-800">Verification Failed</h3>
                    <p className="text-slate-500 max-w-xs mx-auto text-sm">
                      Could not find a matching record in the {SKILL_CATEGORIES.find(s => s.id === formData.skill)?.org} official registry.
                    </p>
                  </div>
                  <button 
                    onClick={() => setStep("form")}
                    className="px-8 py-3 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-900 transition-all"
                  >
                    Try Again
                  </button>
                </motion.div>
              )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
