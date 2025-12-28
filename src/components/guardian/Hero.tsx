
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, MapPin, Zap, Mountain, Wifi, Users, ChevronDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/hooks/use-language";

interface HeroProps {
  onGetStarted?: () => void;
  onViewMap?: () => void;
}

function ParticleField() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

function TerrainLines() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 600" preserveAspectRatio="none">
      {Array.from({ length: 15 }, (_, i) => (
        <motion.path
          key={i}
          d={`M0 ${200 + i * 25} Q 250 ${150 + i * 20 + Math.sin(i) * 30}, 500 ${200 + i * 25} T 1000 ${200 + i * 25}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: i * 0.1 }}
        />
      ))}
    </svg>
  );
}

export function Hero({ onGetStarted, onViewMap }: HeroProps) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const STATS = [
    { icon: Users, value: "2,847", label: t.hero.stats.responders, suffix: "+" },
    { icon: Mountain, value: "12", label: t.hero.stats.districts, suffix: "" },
    { icon: Wifi, value: "98.7", label: t.hero.stats.uptime, suffix: "%" },
  ];

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
      
      <ParticleField />
      <TerrainLines />

      <motion.div 
        style={{ y, opacity }}
        className="container px-4 mx-auto relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-sm font-medium mb-8">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-foreground/80">GuardianNet: Kerala Edition</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-xs font-bold">LIVE</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
              {t.hero.title1}
            </span>
            <br />
            <span className="relative">
              <span className="text-primary italic">{t.hero.title2}</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/50 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {t.hero.subtitle}
            <span className="text-primary font-medium">{t.hero.subtitleHighlight}</span>.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.button 
              onClick={onGetStarted}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(120, 200, 120, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-lg flex items-center gap-3 shadow-xl shadow-primary/20"
            >
              {t.hero.getStarted}
              <Zap className="w-5 h-5" />
            </motion.button>
            <motion.button 
              onClick={onViewMap}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-2xl glass-card font-bold text-lg flex items-center gap-3 hover:bg-white/10 transition-all"
            >
              <MapPin className="w-5 h-5" />
              {t.hero.viewMap}
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center group hover:border-primary/30 transition-all"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-3xl font-bold mb-1">
                  {stat.value}<span className="text-primary">{stat.suffix}</span>
                </p>
                <p className="text-xs text-foreground/40 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-foreground/30"
          >
            <span className="text-xs uppercase tracking-widest">{t.hero.scroll}</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
