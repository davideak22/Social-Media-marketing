import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';

export function AITitleScene() {
  return (
    <div className="h-full w-full bg-black text-white flex items-center justify-center p-8 relative overflow-hidden">
        {/* Digital/Tech Background - Blue/Purple */}
        <div className="absolute inset-0 bg-neutral-950">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20" />
        </div>
        
        <div className="relative z-10 max-w-5xl text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="mb-8 flex justify-center">
                    <motion.div
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}
                        className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400"
                    >
                        <Bot size={48} />
                    </motion.div>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tighter mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                        Mesterséges Intelligencia
                    </span>
                </h1>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="relative inline-block"
                >
                    <p className="text-2xl md:text-4xl text-neutral-300 font-light italic">
                        "Használnád a munkádhoz?"
                    </p>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, type: "spring" }}
                        className="absolute -top-6 -right-8 text-yellow-400"
                    >
                        <Sparkles size={32} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </div>
  );
}
