import { motion } from 'framer-motion';

export function StrategyTitleScene() {
  return (
    <div className="h-full w-full bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/30 via-black to-black" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-5xl text-center">
            
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
            >
                <div className="inline-block px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm uppercase tracking-widest font-mono mb-4">
                   KÖVETKEZŐ LÉPÉS
                </div>

                <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                        Stratégiák
                    </span>
                </h1>
                
                <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                    Hogyan építsünk fel egy működő rendszert?
                </p>
            </motion.div>

        </div>
    </div>
  );
}
