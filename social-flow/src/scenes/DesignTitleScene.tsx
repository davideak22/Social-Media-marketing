import { motion } from 'framer-motion';

export function DesignTitleScene() {
  return (
    <div className="h-full w-full bg-black text-white flex items-center justify-center p-8 relative overflow-hidden">
        {/* Subtle Background Gradient - Purple/Blue specific for Design section */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-blue-950/20" />
        
        <div className="relative z-10 max-w-5xl text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="mb-4 overflow-hidden">
                    <motion.p 
                        initial={{ y: 40 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-xl md:text-2xl font-light tracking-widest text-neutral-400 uppercase"
                    >
                        Második Rész
                    </motion.p>
                </div>
                
                <h1 className="text-7xl md:text-9xl font-bold leading-tight tracking-tighter mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        Design
                    </span>
                </h1>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="h-1 w-24 bg-white/20 mx-auto mb-8"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                     className="text-2xl md:text-3xl text-neutral-300 font-light"
                >
                    A vizuális kommunikáció alapjai
                </motion.p>
            </motion.div>
        </div>
    </div>
  );
}
