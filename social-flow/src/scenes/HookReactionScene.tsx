import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function HookReactionScene() {
  return (
    <div className="h-full w-full bg-neutral-950 text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        
        {/* Background Visuals */}
        <div className="absolute inset-0 bg-indigo-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-black opacity-80" />

        <div className="relative z-10 max-w-4xl w-full">
            
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="relative bg-neutral-900/50 p-12 rounded-[3rem] shadow-2xl border border-white/10 backdrop-blur-sm"
            >
                {/* Decoration: Quote Icon */}
                <div className="absolute -top-8 -left-8 bg-indigo-500 text-white p-6 rounded-full shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                    <MessageCircle size={48} fill="currentColor" />
                </div>

                <h1 className="text-4xl md:text-6xl font-medium leading-snug text-neutral-200 italic">
                    "Hmm, ez érdekesen hangzik.<br/>
                    <span className="text-indigo-400 font-bold not-italic">Lássuk, miről is van szó!</span>"
                </h1>
                
                <div className="mt-8 flex justify-end">
                    <p className="text-neutral-500 font-mono text-sm uppercase tracking-widest">
                        — A néző gondolata
                    </p>
                </div>
            </motion.div>

        </div>
    </div>
  );
}
