import { motion } from 'framer-motion';

export function ReasoningScene() {
  return (
    <div className="h-full w-full bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Cinematic Backdrop - Consistent with HookConceptScene */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-black" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative z-10 max-w-4xl text-center">
            
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Optional Label for consistency */}
                <div className="mb-8 inline-block px-4 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-neutral-400 text-sm uppercase tracking-widest font-mono">
                   A MAGYARÁZAT
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
                    Ez azért működik, mert<motion.span 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    >...</motion.span>
                </h1>
            </motion.div>
        </div>
    </div>
  );
}
