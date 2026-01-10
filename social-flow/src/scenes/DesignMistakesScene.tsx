import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { RefreshCcw, AlertTriangle } from 'lucide-react';

export function DesignMistakesScene() {
  const [chaosLevel, setChaosLevel] = useState(0);

  // Mismatched styles for the chaos effect
  const styles = [
    { font: 'font-sans', color: 'text-white', bg: 'bg-neutral-900', rotate: 0, scale: 1 },
    { font: 'font-serif', color: 'text-yellow-400', bg: 'bg-blue-900', rotate: 2, scale: 1.1 },
    { font: 'font-mono', color: 'text-red-500', bg: 'bg-green-100', rotate: -3, scale: 0.9 },
    { font: 'font-["Comic_Sans_MS"]', color: 'text-purple-600', bg: 'bg-pink-200', rotate: 5, scale: 1.2 },
  ];

  const mistakes = [
    "Minden poszt más stílus",
    "Túl sok font",
    "Túl sok szín",
    "„Majd jó lesz így is”",
    "Trend másolása gondolkodás nélkül"
  ];

  const currentStyle = styles[Math.min(chaosLevel, styles.length - 1)];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-neutral-950 text-white relative overflow-hidden transition-all duration-500">
      
      <div className="max-w-4xl w-full text-center space-y-12">
        <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-8"
            animate={{ 
                color: chaosLevel > 1 ? '#ef4444' : '#ffffff',
                rotate: chaosLevel * 2
            }}
        >
          {chaosLevel === 0 ? "Kezdő Designer Hibák" : "KAOSZ =/= KREATIVITÁS"}
        </motion.h1>

        <div className="grid gap-4">
            {mistakes.map((mistake, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ 
                        opacity: chaosLevel >= index ? 1 : 0,
                        x: chaosLevel >= index ? 0 : -50,
                        rotate: chaosLevel > index + 2 ? (Math.random() * 10 - 5) : 0,
                        scale: chaosLevel > index + 2 ? 1.1 : 1,
                    }}
                    className={`p-4 rounded-xl border border-neutral-800 ${chaosLevel > index + 2 ? 'bg-red-500/20 border-red-500' : 'bg-neutral-900'}`}
                >
                     <p className={`text-xl ${chaosLevel > index + 1 ? styles[index % styles.length].font : 'font-sans'}`}>
                        {mistake}
                     </p>
                </motion.div>
            ))}
        </div>

        {/* Control Button */}
        <div className="pt-8 flex justify-center gap-4">
            <button
                onClick={() => setChaosLevel(prev => Math.min(prev + 1, mistakes.length + 2))}
                className="px-6 py-3 bg-neutral-800 rounded-full hover:bg-neutral-700 transition flex items-center gap-2"
                disabled={chaosLevel >= mistakes.length + 2}
            >
                <AlertTriangle size={20} />
                Rontsd el
            </button>

             <button
                onClick={() => setChaosLevel(0)}
                className="px-6 py-3 bg-white text-black rounded-full hover:bg-neutral-200 transition flex items-center gap-2"
            >
                <RefreshCcw size={20} />
                Tisztázás
            </button>
        </div>
      </div>

      <AnimatePresence>
        {chaosLevel >= mistakes.length + 2 && (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            >
                <h1 className="text-6xl md:text-9xl font-black text-white text-center">
                    A KÁOSZ<br />
                    <span className="text-red-500">NEM</span><br />
                    KREATIVITÁS
                </h1>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
