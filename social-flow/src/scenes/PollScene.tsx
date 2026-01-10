import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check } from 'lucide-react';

const EVENTS = [
  { id: 'tabako', label: 'Tabakó', color: 'from-orange-500 to-red-600' },
  { id: 'base', label: 'Base', color: 'from-blue-500 to-cyan-500' },
  { id: 'mikes', label: 'Mikes Akadémia', color: 'from-purple-500 to-pink-500' },
];

export function PollScene() {
  const [votes, setVotes] = useState<Record<string, number>>({ tabako: 0, base: 0, mikes: 0 });

  const handleVote = (id: string) => {
    setVotes(prev => ({ ...prev, [id]: prev[id] + 10 }));
  };

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
            onClick={() => handleVote(event.id)}
            className="group relative h-80 rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden text-left p-8 transition-colors hover:border-neutral-600"
          >
            {/* Background Gradient on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold">{event.label}</h3>
              </div>
              
              <div className="flex items-end gap-2">
                 {/* Visual counter simulation */}
                <span className="text-5xl font-mono font-bold tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">
                   {100 + votes[event.id]}%
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
