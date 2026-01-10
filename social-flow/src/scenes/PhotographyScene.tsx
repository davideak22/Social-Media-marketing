import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Camera, Grid, Maximize, Aperture, Focus } from 'lucide-react';
import cameraFeedImg from '../assets/20251213093618_DeakDavid.jpg';

export function PhotographyScene() {
  const [showGrid, setShowGrid] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {

    const handleKeyDown = (e: KeyboardEvent) => {
        // Space or Enter triggers the "Capture" / Focus toggle
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation(); // Stop SceneController from navigating
            setIsFocused(prev => !prev);
        }
    };
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, []);

  return (
    <div className="h-full w-full bg-black relative overflow-hidden flex items-center justify-center">
      
      {/* "World" Content - Placeholder for camera feed or cinematic photo */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
        style={{ 
            backgroundImage: `url(${cameraFeedImg})`,
            filter: isFocused ? 'brightness(0.8) blur(0px)' : 'brightness(0.4) blur(10px)',
            transform: isFocused ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      
      {/* UI Overlay (Viewfinder) */}
      <div className="absolute inset-8 border-2 border-white/50 rounded-lg pointer-events-none z-10 flex flex-col justify-between p-8">
            {/* Top Bar */}
            <div className="flex justify-between items-start text-white/80 font-mono text-sm pointer-events-auto">
                <div className="flex gap-4">
                    <span className="bg-red-600 px-2 rounded animate-pulse">REC</span>
                    <span>1/50</span>
                    <span>F2.8</span>
                    <span>ISO 800</span>
                </div>
                <div className="flex gap-4">
                     <button onClick={() => setShowGrid(!showGrid)} className="hover:text-white transition"><Grid size={20} opacity={showGrid ? 1 : 0.5} /></button>
                     <Maximize size={20} />
                </div>
            </div>

            {/* Grid Overlay */}
            {showGrid && (
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-30">
                     <div className="border-r border-white/50" />
                     <div className="border-r border-white/50" />
                     <div />
                     <div className="border-t border-white/50 col-span-3" />
                     <div className="col-span-3" />
                     <div className="border-t border-white/50 col-span-3" />
                </div>
            )}

            {/* Focus Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {!isFocused && (
                     <motion.div 
                        initial={{ scale: 1.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="border border-yellow-400 w-24 h-24 rounded-sm"
                     />
                )}
                {isFocused && (
                     <motion.div 
                        initial={{ scale: 1.2, opacity: 1, borderColor: '#22c55e' }}
                        animate={{ scale: 1, opacity: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="border-2 border-green-500 w-24 h-24 rounded-sm"
                     />
                )}
            </div>

            {/* Bottom Bar */}
            <div className="flex justify-between items-end text-white text-shadow pointer-events-auto">
                 <div className="max-w-md">
                    <h1 className="text-4xl font-bold mb-2 text-white">Fotózás</h1>
                    <p className="text-xl text-neutral-300">Nem a kamera a lényeg.</p>
                 </div>

                 <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsFocused(!isFocused)}
                    className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center hover:bg-white/10 transition-colors"
                 >
                    <div className="w-12 h-12 rounded-full bg-white" />
                 </motion.button>
            </div>
      </div>
      
       {/* Tips Overlay */}
       <div className="absolute right-12 top-1/2 -translate-y-1/2 space-y-4 pointer-events-none">
            <Tip label="Érzelmek" active={isFocused} delay={0.1} />
            <Tip label="Dinamika" active={isFocused} delay={0.2} />
            <Tip label="Történet" active={isFocused} delay={0.3} />
       </div>
    </div>
  );
}

function Tip({ label, active, delay }: { label: string, active: boolean, delay: number }) {
    return (
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: active ? 0 : 50, opacity: active ? 1 : 0 }}
            transition={{ delay }}
            className="bg-black/50 backdrop-blur px-4 py-2 rounded-lg border-l-2 border-green-500 text-white font-bold text-right"
        >
            {label}
        </motion.div>
    )
}
