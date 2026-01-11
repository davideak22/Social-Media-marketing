import { motion } from 'framer-motion';
import { Eye, Lock } from 'lucide-react';

export function SecretAlgorithmScene() {
  return (
    <div className="h-full w-full bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        
        {/* Mysterious Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-black to-black" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        
        {/* Code Rain Effect (Simulated via CSS) */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
                 backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(32, 255, 77, .3) 25%, rgba(32, 255, 77, .3) 26%, transparent 27%, transparent 74%, rgba(32, 255, 77, .3) 75%, rgba(32, 255, 77, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(32, 255, 77, .3) 25%, rgba(32, 255, 77, .3) 26%, transparent 27%, transparent 74%, rgba(32, 255, 77, .3) 75%, rgba(32, 255, 77, .3) 76%, transparent 77%, transparent)',
                 backgroundSize: '50px 50px'
             }} 
        />

        <div className="relative z-10 max-w-5xl w-full text-center">
            
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative inline-flex flex-col items-center"
            >
                {/* Icon Badge */}
                <div className="flex gap-4 mb-8">
                    <div className="bg-pink-600/20 p-3 rounded-full border border-pink-500/50 text-pink-500 animate-pulse">
                        <Lock size={32} />
                    </div>
                     <div className="bg-indigo-600/20 p-3 rounded-full border border-indigo-500/50 text-indigo-500">
                        <Eye size={32} />
                    </div>
                </div>

                {/* Example Label */}
                <div className="mb-6 px-4 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-sm uppercase tracking-widest font-mono">
                    Példa
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    "Mi lenne, ha azt mondanám,<br/>
                    hogy az <span className="text-pink-500">Instagram</span>-nak van egy<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-black">titkos „Második Algoritmusa”</span>,<br/>
                    amiről a tartalomgyártók <span className="text-pink-500 underline decoration-pink-900 underline-offset-8">99%-a</span> mit sem sejt?"
                </h1>
            </motion.div>

        </div>
    </div>
  );
}
