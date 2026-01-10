import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString() + suffix);

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span className="font-mono">{display}</motion.span>;
}

export function AboutScene() {
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full bg-black text-white p-8 flex items-center justify-center overflow-hidden relative">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Column */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="space-y-12"
        >
          <div>
            <h2 className="text-sm text-neutral-500 uppercase tracking-[0.2em] mb-4">Az előadóról</h2>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Nem influencer,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Alkotó.
              </span>
            </h1>
          </div>

          <div className="space-y-6 text-xl text-neutral-300 font-light">
            <ExperienceItem title="Mikes Elsősegély" role="Social Media" delay={0.2} />
            <ExperienceItem title="Tabakó Fesztivál" role="Tartalomgyártás" delay={0.4} />
            <ExperienceItem title="MAKOSZ" role="Médiás munkacsoport" delay={0.6} />
          </div>
        </motion.div>

        {/* Stats Column */}
        <div className="grid grid-rows-2 gap-8">
            <StatCard 
                 label="Követő a nulláról" 
                 value={showStats ? 700 : 0} 
                 delay={0.8}
            />
             <StatCard 
                 label="Megtekintés 2024-2025-ben" 
                 value={showStats ? 1000000 : 0} 
                 suffix="+"
                 delay={1}
                 highlight
            />
        </div>
      </div>
    </div>
  );
}

function ExperienceItem({ title, role, delay }: { title: string; role: string; delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-4 group"
    >
      <div className="w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-white transition-colors" />
      <div>
        <span className="font-semibold text-white block">{title}</span>
        <span className="text-neutral-500 text-base">{role}</span>
      </div>
    </motion.div>
  );
}

function StatCard({ label, value, suffix = "", delay, highlight = false }: { label: string; value: number; suffix?: string; delay: number; highlight?: boolean }) {
     return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
                scale: 1, 
                opacity: 1,
                y: [0, -10, 0],
            }}
            transition={{ 
                delay, 
                type: "spring",
                y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 1 // Offset the float start
                }
            }}
            className={`p-10 rounded-3xl border ${highlight ? 'bg-neutral-900 border-neutral-800' : 'bg-transparent border-neutral-800'} relative overflow-hidden group hover:border-neutral-600 transition-colors cursor-default`}
        >
             {highlight && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-100" />
             )}

            <div className="relative z-10">
                <div className="text-6xl md:text-8xl font-bold tracking-tighter mb-2">
                    <Counter value={value} suffix={suffix} />
                </div>
                <div className="text-xl text-neutral-400 uppercase tracking-widest">{label}</div>
            </div>
        </motion.div>
     )
}
