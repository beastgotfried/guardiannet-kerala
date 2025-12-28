"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  BarChart3, Map, Mountain, Users, AlertCircle, Activity,
  Cloud, Droplets, Wind, Thermometer, Radio, Satellite,
  TrendingUp, TrendingDown, Clock, AlertTriangle, CheckCircle2
} from "lucide-react";

const LIVE_METRICS = [
  { label: "Rainfall (24h)", value: 187, unit: "mm", max: 250, trend: "up", critical: true },
  { label: "Soil Moisture", value: 94, unit: "%", max: 100, trend: "up", critical: true },
  { label: "Wind Speed", value: 45, unit: "km/h", max: 100, trend: "stable", critical: false },
  { label: "Temperature", value: 22, unit: "°C", max: 40, trend: "down", critical: false },
];

const RISK_NODES = [
  { name: "Meppadi", level: "critical", lat: 11.68, lng: 76.13, population: 12500 },
  { name: "Chooralmala", level: "high", lat: 11.67, lng: 76.14, population: 8200 },
  { name: "Mundakkai", level: "moderate", lat: 11.69, lng: 76.12, population: 5600 },
  { name: "Kalpetta", level: "low", lat: 11.61, lng: 76.08, population: 28900 },
];

const ALERTS = [
  { type: "critical", message: "Landslide warning active for Meppadi sector", time: "2 min ago" },
  { type: "warning", message: "Soil saturation exceeding 90% threshold", time: "5 min ago" },
  { type: "info", message: "Ham radio network activated - Channel VU2KER", time: "12 min ago" },
];

function RealTimeChart() {
  const [data, setData] = useState<number[]>([40, 60, 45, 90, 100, 80, 50, 30, 40, 60, 75, 85]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1), Math.floor(Math.random() * 60) + 40];
        return newData;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-40 flex items-end gap-1">
      {data.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.5 }}
          className={`flex-1 rounded-t-sm ${h > 80 ? "bg-red-500/80" : h > 60 ? "bg-orange-500/60" : "bg-primary/50"}`}
        />
      ))}
    </div>
  );
}

function MetricCard({ metric, index }: { metric: typeof LIVE_METRICS[0]; index: number }) {
  const [value, setValue] = useState(metric.value);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(prev => {
        const change = (Math.random() - 0.5) * 4;
        return Math.max(0, Math.min(metric.max, prev + change));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [metric.max]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`p-4 rounded-2xl ${metric.critical ? "bg-red-500/10 border border-red-500/20" : "bg-white/5 border border-white/10"}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-widest text-foreground/40">{metric.label}</span>
        {metric.trend === "up" ? (
          <TrendingUp className={`w-4 h-4 ${metric.critical ? "text-red-400" : "text-green-400"}`} />
        ) : metric.trend === "down" ? (
          <TrendingDown className="w-4 h-4 text-blue-400" />
        ) : (
          <Activity className="w-4 h-4 text-yellow-400" />
        )}
      </div>
      <div className="flex items-end gap-2">
        <span className={`text-3xl font-bold ${metric.critical ? "text-red-400" : "text-white"}`}>
          {Math.round(value)}
        </span>
        <span className="text-sm text-foreground/40 mb-1">{metric.unit}</span>
      </div>
      <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(value / metric.max) * 100}%` }}
          className={`h-full rounded-full ${metric.critical ? "bg-red-500" : "bg-primary"}`}
        />
      </div>
    </motion.div>
  );
}

export function KSDMADashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [time, setTime] = useState<string>("--:--:--");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date().toLocaleTimeString('en-IN', { hour12: false }));
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-IN', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getRiskColor = (level: string) => {
    switch (level) {
      case "critical": return "bg-red-500";
      case "high": return "bg-orange-500";
      case "moderate": return "bg-yellow-500";
      default: return "bg-green-500";
    }
  };

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Satellite className="w-4 h-4 animate-pulse" />
                <span>KSDMA Integration</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">Control Center</h2>
              <p className="text-foreground/50 leading-relaxed">
                Real-time topographical visualization and predictive risk modeling for the Western Ghats. 
                Elevation-aware routing and camp management integration.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/40 flex items-center gap-2">
                <Mountain className="w-4 h-4" />
                Risk Nodes
              </h3>
              {RISK_NODES.map((node, i) => (
                <motion.div
                  key={node.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedNode(selectedNode === node.name ? null : node.name)}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${
                    selectedNode === node.name 
                      ? "bg-white/10 border border-white/20" 
                      : "bg-white/5 border border-transparent hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${getRiskColor(node.level)} ${node.level === "critical" ? "animate-pulse" : ""}`} />
                      <span className="font-bold">{node.name}</span>
                    </div>
                    <span className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${
                      node.level === "critical" ? "bg-red-500/20 text-red-400" :
                      node.level === "high" ? "bg-orange-500/20 text-orange-400" :
                      node.level === "moderate" ? "bg-yellow-500/20 text-yellow-400" :
                      "bg-green-500/20 text-green-400"
                    }`}>
                      {node.level}
                    </span>
                  </div>
                  {selectedNode === node.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="pt-3 mt-3 border-t border-white/10 grid grid-cols-2 gap-3 text-xs"
                    >
                      <div>
                        <span className="text-foreground/40">Coordinates</span>
                        <p className="font-mono">{node.lat}°N, {node.lng}°E</p>
                      </div>
                      <div>
                        <span className="text-foreground/40">Population</span>
                        <p className="font-mono">{node.population.toLocaleString()}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-8"
          >
            <div className="glass-card rounded-3xl p-1 overflow-hidden">
              <div className="bg-black/60 rounded-[22px] overflow-hidden border border-white/5">
                <div className="p-4 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-black/40 to-transparent">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-xs font-mono uppercase tracking-widest opacity-60">Live Feed</span>
                    </div>
                    <div className="h-4 w-px bg-white/10" />
                    <span className="text-xs font-mono text-foreground/40">
                      {time} IST
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-foreground/40">Meppadi Sector 04</span>
                    <div className="p-1 rounded bg-white/5">
                      <Radio className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs uppercase tracking-widest text-foreground/40 flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" /> Rainfall Intensity (Real-time)
                      </h5>
                      <span className="text-[10px] px-2 py-1 rounded-full bg-red-500/20 text-red-400 font-bold">LIVE</span>
                    </div>
                    <RealTimeChart />
                    
                    <div className="p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-red-400 font-bold mb-1">Landslide Warning Active</p>
                          <p className="text-xs text-red-400/70">Soil saturation at 94%. Immediate activation of Hub-03 recommended. All assets on standby.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h5 className="text-xs uppercase tracking-widest text-foreground/40 flex items-center gap-2">
                      <Map className="w-4 h-4" /> Topographical Risk Map
                    </h5>
                    <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 overflow-hidden">
                      <div className="absolute inset-0 topographic-bg opacity-30" />
                      
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                        <defs>
                          <radialGradient id="criticalGlow">
                            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient id="highGlow">
                            <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        
                        {[10, 20, 30, 40, 50].map((i) => (
                          <motion.path
                            key={i}
                            d={`M5 ${50 + i} Q 25 ${40 + i * 0.5}, 50 ${50 + i * 0.3} T 95 ${50 + i}`}
                            fill="none"
                            stroke="white"
                            strokeOpacity="0.1"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: i * 0.1 }}
                          />
                        ))}

                        <motion.circle
                          cx="35" cy="40"
                          r="15"
                          fill="url(#criticalGlow)"
                          animate={{ r: [15, 18, 15] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        />
                        <circle cx="35" cy="40" r="4" fill="#ef4444" />
                        
                        <circle cx="60" cy="55" r="10" fill="url(#highGlow)" />
                        <circle cx="60" cy="55" r="3" fill="#f97316" />
                        
                        <circle cx="75" cy="35" r="2" fill="#eab308" />
                        <circle cx="25" cy="65" r="2" fill="#22c55e" />

                        <motion.line
                          x1="35" y1="40" x2="60" y2="55"
                          stroke="#ef4444"
                          strokeWidth="1"
                          strokeDasharray="4 2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </svg>

                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                        <div className="flex gap-3">
                          {[
                            { color: "bg-red-500", label: "Critical" },
                            { color: "bg-orange-500", label: "High" },
                            { color: "bg-yellow-500", label: "Moderate" },
                            { color: "bg-green-500", label: "Low" },
                          ].map((item) => (
                            <div key={item.label} className="flex items-center gap-1">
                              <div className={`w-2 h-2 rounded-full ${item.color}`} />
                              <span className="text-[8px] text-foreground/40">{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {LIVE_METRICS.map((metric, i) => (
                      <MetricCard key={metric.label} metric={metric} index={i} />
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <h5 className="text-xs uppercase tracking-widest text-foreground/40 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> System Alerts
                  </h5>
                  <div className="space-y-2">
                    {ALERTS.map((alert, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`flex items-center gap-3 p-3 rounded-xl ${
                          alert.type === "critical" ? "bg-red-500/10 border border-red-500/20" :
                          alert.type === "warning" ? "bg-yellow-500/10 border border-yellow-500/20" :
                          "bg-white/5 border border-white/10"
                        }`}
                      >
                        {alert.type === "critical" ? (
                          <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                        ) : alert.type === "warning" ? (
                          <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        )}
                        <span className="flex-1 text-sm">{alert.message}</span>
                        <span className="text-[10px] text-foreground/40 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {alert.time}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
