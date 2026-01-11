import { motion } from 'framer-motion';

export function HookConceptScene() {
  return (
    <div className="h-full w-full bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Subtle Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-black" />
        
        {/* Grid Pattern (CSS only) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative z-10 max-w-5xl text-center">
            
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-12"
            >
                <div className="inline-block px-4 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-neutral-400 text-sm uppercase tracking-widest font-mono mb-4">
                   A titok nyitja
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                    Csak mondanod kell valamit,<br/>
                    ami <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">elgondolkodtatja</span> az embereket.
                </h1>
            </motion.div>

        </div>
    </div>
  );
}
