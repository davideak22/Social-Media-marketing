import { motion } from 'framer-motion';
import { Film, Play } from 'lucide-react';

export function MovieTrailerScene() {
  return (
    <div className="h-full w-full bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

        <div className="relative z-10 h-full max-h-[85vh] aspect-[2/3] flex flex-col items-center">
            
            {/* Movie Poster Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-full h-full bg-neutral-800 rounded-xl overflow-hidden shadow-2xl border border-neutral-700/50 group"
            >
                {/* Poster Placeholder Image - Noir/Cinematic Style */}
                <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center overflow-hidden">
                     {/* Abstract Poster Art */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-purple-900/20" />
                     <Film className="text-white/5 w-[150%] h-[150%] absolute -rotate-12 translate-x-10 translate-y-10" />
                     
                     <div className="relative z-10 flex flex-col items-center gap-6">
                         <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500">
                            <Play size={40} className="fill-white ml-2" />
                         </div>
                         <p className="text-neutral-500 uppercase tracking-widest text-sm font-mono">Coming Soon</p>
                     </div>
                </div>

                {/* Poster Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black via-black/80 to-transparent pt-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                         <h2 className="text-neutral-400 text-sm uppercase tracking-[0.3em] mb-4">A Social Flow Produkció Bemutatja</h2>
                         <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
                             ELŐZETES
                         </h1>
                         
                         {/* Fake Credits Block */}
                         <div className="text-[0.5rem] md:text-[0.6rem] text-neutral-500 font-mono tracking-wide leading-tight uppercase max-w-sm mx-auto opacity-70">
                             RENDEZTE: MARKERTEREK &nbsp; • &nbsp; ZENE: VIRÁLIS HANGOK &nbsp; • &nbsp; FORGATÓKÖNYV: KREATIVITÁS <br/>
                             PRODUCER: ALGORITMUS &nbsp; • &nbsp; VÁGÓ: CAPCUT &nbsp; • &nbsp; SZEREPLŐK: AZ ÜGYFELEK <br/>
                             <span className="text-neutral-400 mt-2 block font-bold text-xs tracking-widest">CSAK A MOZIKBAN</span>
                         </div>
                    </motion.div>
                </div>
            </motion.div>

        </div>
    </div>
  );
}
