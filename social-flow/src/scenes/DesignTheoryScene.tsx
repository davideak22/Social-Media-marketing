import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const STAGES = [
  {
    id: 'neutral',
    font: 'font-sans', // Using Inter/Tailwind default
    color: 'text-white',
    bg: 'bg-neutral-950',
    label: '1. Semleges',
    desc: 'Információ átadása, érzés nélkül.'
  },
  {
    id: 'cute',
    font: 'font-["Pacifico"]', // Needs custom font in index.css
    color: 'text-pink-400',
    bg: 'bg-pink-950/30',
    label: '2. Cuki, játékos',
    desc: 'Kedvesség, ártatlanság, romantika.'
  },
  {
    id: 'creepy',
    font: 'font-["Creepster"]', // Needs custom font in index.css
    color: 'text-red-500',
    bg: 'bg-red-950/30',
    label: '3. Creepy',
    desc: 'Félelem, veszély, megszállottság.'
  }
];

export function DesignTheoryScene() {
  const [stageIndex, setStageIndex] = useState(0);
  const currentStage = STAGES[stageIndex];

  const nextStage = () => {
    setStageIndex((prev) => (prev + 1) % STAGES.length);
  };

  return (
    <motion.div 
      className={`h-full w-full flex flex-col items-center justify-center p-8 transition-colors duration-700 ease-in-out ${currentStage.bg}`}
      onClick={nextStage}
    >
      <div className="absolute top-8 text-neutral-500 uppercase tracking-widest text-sm">
        Kattints a váltáshoz
      </div>

      <div className="text-center space-y-12 max-w-5xl w-full">
        <h2 className="text-neutral-400 text-xl md:text-2xl font-light">
           Ugyanaz a szöveg, más érzés:
        </h2>

        <div className="h-64 flex items-center justify-center">
            <AnimatePresence mode="wait">
            <motion.h1
                key={currentStage.id}
                initial={{ opacity: 0, scale: 0.9, rotateX: 90 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotateX: -90 }}
                transition={{ duration: 0.5 }}
                className={`text-6xl md:text-9xl ${currentStage.font} ${currentStage.color} text-center leading-tight`}
            >
                Mindig az<br/>enyém leszel
            </motion.h1>
            </AnimatePresence>
        </div>

        <motion.div 
            key={currentStage.id + "-desc"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2"
        >
             <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm font-mono mb-4">
                {currentStage.label}
             </div>
             <p className="text-xl text-neutral-400">
                {currentStage.desc}
             </p>
        </motion.div>
      </div>

      <div className="absolute bottom-12 flex gap-4">
         {STAGES.map((s, i) => (
             <button 
                key={s.id}
                onClick={(e) => { e.stopPropagation(); setStageIndex(i); }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === stageIndex ? 'bg-white w-8' : 'bg-white/20 hover:bg-white/50'}`}
             />
         ))}
      </div>
    </motion.div>
  );
}
