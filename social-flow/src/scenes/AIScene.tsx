import { motion } from 'framer-motion';
import { Bot, User, Brain, Heart, Sparkles, Fingerprint } from 'lucide-react';
import { useState, useEffect } from 'react';

export function AIScene() {
  const [scanPosition, setScanPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanPosition(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full bg-neutral-950 flex relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="w-full h-full grid grid-cols-2 relative z-10">
        
        {/* Left: AI Side */}
        <div className="h-full flex flex-col items-center justify-center border-r border-neutral-800 bg-blue-950/10 p-12">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-32 h-32 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-12 border border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.2)]"
            >
                <Bot size={64} className="text-blue-400" />
            </motion.div>
            
            <h2 className="text-4xl font-mono font-bold text-blue-400 mb-8 decoration-clone">AI (Eszköz)</h2>
            
            <div className="space-y-6 w-full max-w-sm">
                <FeatureItem icon={Brain} text="Ötletelés" color="text-blue-300" />
                <FeatureItem icon={Sparkles} text="Szövegírás" color="text-blue-300" />
                <FeatureItem icon={Bot} text="Inspiráció" color="text-blue-300" />
            </div>
        </div>

        {/* Right: Human Side */}
        <div className="h-full flex flex-col items-center justify-center bg-purple-950/10 p-12">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-32 h-32 rounded-full bg-purple-500/20 flex items-center justify-center mb-12 border border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.2)]"
            >
                <User size={64} className="text-purple-400" />
            </motion.div>
            
            <h2 className="text-4xl font-serif italic text-purple-400 mb-8">Ember (Lélek)</h2>
            
            <div className="space-y-6 w-full max-w-sm">
                <FeatureItem icon={Heart} text="Érzelem" color="text-purple-300" />
                <FeatureItem icon={History} text="Pillanat" color="text-purple-300" />
                <FeatureItem icon={Fingerprint} text="Hitelesség" color="text-purple-300" />
            </div>
        </div>
      </div>

      {/* Scanning Line Animation */}
      <motion.div 
        className="absolute top-0 bottom-0 w-1 bg-white/50 blur-sm z-20"
        animate={{ left: ["0%", "100%", "0%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      />

      {/* Central Message */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-950 border border-neutral-800 px-8 py-4 rounded-full z-30 shadow-2xl">
        <h1 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
            AI segít, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">ember dönt.</span>
        </h1>
      </div>

    </div>
  );
}

import { History } from 'lucide-react'; // Import missing icon

function FeatureItem({ icon: Icon, text, color }: { icon: any, text: string, color: string }) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800"
        >
            <Icon size={24} className={color} />
            <span className={`text-xl ${color}`}>{text}</span>
        </motion.div>
    )
}
