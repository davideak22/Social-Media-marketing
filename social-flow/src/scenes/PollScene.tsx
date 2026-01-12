import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const EVENTS = [
  { id: 'tabako', label: 'Tabakó', color: 'from-orange-500 to-red-600' },
  { id: 'base', label: 'Base', color: 'from-blue-500 to-cyan-500' },
  { id: 'mikes', label: 'Mikes Akadémia', color: 'from-purple-500 to-pink-500' },
];

function Counter({ to, suffix = '', finalLabel }: { to: number; suffix?: string; finalLabel?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const controls = animate(count, to, { 
      duration: 1.5, 
      ease: "easeOut",
      onComplete: () => setIsComplete(true)
    });
    return controls.stop;
  }, [count, to]);

  if (isComplete && finalLabel) {
    return <>{finalLabel}</>;
  }

  return (
    <>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </>
  );
}

import { usePresentationStore } from '../store/presentationStore';

export function PollScene() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const { setNavigationBlocked } = usePresentationStore();

  const handleReveal = (id: string) => {
    setRevealed(prev => {
      if (prev[id]) return prev;
      return { ...prev, [id]: true };
    });
  };

  useEffect(() => {
    // Check if all events are revealed
    const allRevealed = EVENTS.every(e => revealed[e.id]);
    setNavigationBlocked(!allRevealed);

    const handleKeyDown = (e: KeyboardEvent) => {
      const isNextKey = e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown';
      
      if (isNextKey && !allRevealed) {
        // Find the first unrevealed event
        const nextEvent = EVENTS.find(ev => !revealed[ev.id]);
        if (nextEvent) {
          e.stopPropagation(); // Prevent scene transition
          handleReveal(nextEvent.id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      setNavigationBlocked(false);
    };
  }, [revealed, setNavigationBlocked]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <div className="h-full w-full bg-neutral-950 text-white flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Ki hallott már ezekről?</h2>
        <p className="text-xl text-neutral-400">Kéz felnyújtás</p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {EVENTS.map((event) => (
          <motion.button
            key={event.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleReveal(event.id)}
            className="group relative h-80 rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden text-left p-8 transition-colors hover:border-neutral-600 w-full"
          >
            {/* Background Gradient on Reveal */}
            <div 
                className={`absolute inset-0 bg-gradient-to-br ${event.color} transition-opacity duration-1000 ${revealed[event.id] ? 'opacity-20' : 'opacity-0 group-hover:opacity-10'}`} 
            />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <motion.div 
                    initial={{ scale: 1 }}
                    animate={{ scale: revealed[event.id] ? 1.1 : 1 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Check className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold">{event.label}</h3>
              </div>
              
              <div className="flex items-end gap-2 text-white">
                 {/* Animated counter */}
                <span className={`text-5xl font-mono font-bold tracking-tighter transition-opacity duration-500 ${revealed[event.id] ? 'opacity-100' : 'opacity-30'}`}>
                   {revealed[event.id] ? (
                     <Counter to={100} suffix="%" finalLabel="sok" />
                   ) : (
                     "0%"
                   )}
                </span>
                <span className="text-sm text-neutral-500 mb-2">ismertség</span>
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
