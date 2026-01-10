import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
// Replace these imports with your actual asset paths
import inspirationImg from '../assets/The_North_Face.png'; // Example
import resultImg from '../assets/harmadikakademia.png';           // Example

export function LogoComparisonScene() {
  return (
    <div className="h-full w-full bg-neutral-950 text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-neutral-950 to-neutral-950" />

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
            
            {/* Source / Inspiration */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center text-center space-y-6"
            >
                {/* Image Container */}
                <div className="w-64 h-64 rounded-3xl bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden relative">
                    {/* Placeholder Logic: Use img if available, else fallback text/icon */}
                    <img src={inspirationImg} alt="Inspiráció" className="w-full h-full object-contain filter invert opacity-80" onError={(e) => e.currentTarget.style.display = 'none'} />
                    <div className="absolute inset-0 flex items-center justify-center -z-10 text-neutral-600 font-mono text-sm">
                        IMG: assets/inspiration.png
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2">Inspiráció</h3>
                    <p className="text-neutral-400">Geometriai formák, stabilitás.</p>
                </div>
            </motion.div>

            {/* Connection */}
            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-col items-center justify-center"
            >
                <div className="p-4 rounded-full bg-blue-500/10 text-blue-500">
                    <ArrowRight size={40} />
                </div>
                <span className="mt-4 text-xs uppercase tracking-widest text-blue-400 font-bold">Transzformáció</span>
            </motion.div>

            {/* Result / Final */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="flex flex-col items-center text-center space-y-6"
            >
                <div className="relative w-64 h-64 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.3)] overflow-hidden">
                     <img src={resultImg} alt="Végeredmény" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                     <div className="absolute inset-0 flex items-center justify-center -z-10 text-white/50 font-mono text-sm">
                        IMG: assets/result.png
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2">Végeredmény</h3>
                    <p className="text-neutral-400">Dinamika, energia, "Social Flow".</p>
                </div>
            </motion.div>

        </div>

        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }} 
            className="absolute bottom-12 text-center max-w-3xl px-4 z-50 bg-neutral-950/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5"
        >
            <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-md">Miért számít?</h2>
            <p className="text-xl text-white leading-relaxed drop-shadow-md">
                Nem az a cél, hogy lemásold a formát, hanem hogy <span className="text-blue-400 font-bold">megértsd az üzenetet</span> és a saját nyelvedre fordítsd.
            </p>
        </motion.div>
    </div>
  );
}
