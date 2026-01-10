 import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
// Replace with actual 1:1 aspect ratio assets
import version1Img from '../assets/version1_placeholder.png';
import latestImg from '../assets/latest_placeholder.png';

export function VersionHistoryScene() {
  return (
    <div className="h-full w-full bg-neutral-950 text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-neutral-950 to-neutral-950" />

        <div className="relative z-10 text-center mb-12">
             <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-bold mb-4"
             >
                A fejlődés útja
             </motion.h2>
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-items-center relative z-10">
            
            {/* Version 1 */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center space-y-6"
            >
                <div className="relative group">
                    <div className="w-80 h-80 rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden flex items-center justify-center relative">
                         <img src={version1Img} alt="Első verzió" className="w-full h-full object-contain p-4 opacity-70 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100" onError={(e) => e.currentTarget.style.display = 'none'} />
                         <div className="absolute inset-0 flex items-center justify-center -z-10 text-neutral-700 font-mono text-sm">
                            IMG: assets/version1.png
                        </div>
                    </div>
                    {/* Year Label */}
                    <div className="absolute -top-4 -left-4 bg-neutral-800 text-neutral-400 px-4 py-1 rounded-full text-sm font-mono border border-neutral-700">
                        2024
                    </div>
                </div>
                <div>
                     <h3 className="text-2xl font-bold mb-2 text-neutral-400">Első Verzió</h3>
                     <p className="text-neutral-500">Kezdeti próbálkozás</p>
                </div>
            </motion.div>

            {/* Latest Version */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col items-center space-y-6"
            >
                <div className="relative group">
                    {/* Glowing effect for latest */}
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="w-80 h-80 rounded-3xl bg-neutral-900 border border-neutral-700 overflow-hidden flex items-center justify-center relative shadow-2xl">
                         <img src={latestImg} alt="Legújabb verzió" className="w-full h-full object-contain p-4" onError={(e) => e.currentTarget.style.display = 'none'} />
                         <div className="absolute inset-0 flex items-center justify-center -z-10 text-neutral-700 font-mono text-sm">
                            IMG: assets/latest.png
                        </div>
                    </div>
                     {/* Year Label */}
                     <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-mono shadow-lg shadow-blue-900/50">
                        2025 (Jelenleg)
                    </div>
                </div>
                 <div>
                     <h3 className="text-2xl font-bold mb-2 text-white">Jelenlegi Verzió</h3>
                     <p className="text-blue-400">Letisztult, tudatos tervezés</p>
                </div>
            </motion.div>

        </div>
        
        {/* Connection Arrow Overlay */}
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 hidden md:flex"
        >
             <ArrowRight size={64} className="text-neutral-800" />
        </motion.div>
    </div>
  );
}
