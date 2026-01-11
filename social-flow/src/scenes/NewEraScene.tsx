import { motion } from 'framer-motion';

export function NewEraScene() {
  return (
    <div className="h-full w-full bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        
        {/* Cinematic Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-5xl w-full text-center space-y-16">
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h2 className="text-3xl md:text-4xl font-light text-neutral-300 mb-6">
                    We are entering a new era...
                </h2>
                <div className="w-24 h-px bg-current mx-auto opacity-30" />
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-xl md:text-2xl text-neutral-400 leading-relaxed max-w-3xl mx-auto"
            >
                Everything is changing: the way we buy, the way we work, the way we live.<br/>
                And so does the way people do business.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                className="pt-12"
            >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                    We're entering what experts are calling<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">"The New Arbitrage Economy"</span>...
                </h1>

                <p className="text-neutral-500 font-mono text-sm uppercase tracking-widest">
                    — Iman Gadzhi
                </p>
            </motion.div>

        </div>
    </div>
  );
}
