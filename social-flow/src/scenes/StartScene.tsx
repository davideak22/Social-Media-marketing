import { motion } from 'framer-motion';
import { usePresentationStore } from '../store/presentationStore';
import { ArrowRight } from 'lucide-react';

export const StartScene = () => {
  const { startPresentation } = usePresentationStore();

  return (
    <div className="relative w-screen h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden font-sans">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none mix-blend-overlay" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center space-y-12 max-w-4xl px-4"
      >
        <div className="space-y-4">
          <motion.h1
            className="text-7xl md:text-9xl font-bold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/60"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Social Flow
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-px w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto" 
          />
        </div>

        <motion.p
          className="text-xl md:text-2xl text-neutral-400 font-light tracking-wide max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          A cinematic journey into modern social media marketing.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={startPresentation}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-medium text-lg flex items-center gap-3 mx-auto overflow-hidden transition-colors"
          >
            <span className="relative z-10 tracking-widest uppercase text-sm">Start Presentation</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform opacity-70" />
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};
