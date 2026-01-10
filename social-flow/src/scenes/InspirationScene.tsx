import { motion } from 'framer-motion';
import { Globe, GraduationCap, Users } from 'lucide-react';

export function InspirationScene() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="h-full w-full bg-neutral-950 text-white p-8 flex flex-col items-center justify-center overflow-hidden">
        {/* Background World Map Effect (Simulated) */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-neutral-950 to-neutral-950" />

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-12"
            >
                <div>
                     <h2 className="text-sm font-mono text-blue-400 mb-4 tracking-widest uppercase">Források</h2>
                     <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Inspiráció<br/>
                        <span className="text-red-500">≠</span> Másolás
                     </h1>
                     <blockquote className="text-2xl text-neutral-400 border-l-4 border-neutral-800 pl-6 italic">
                        "Nem azt veszed át, mit csinál,<br/>hanem azt, <span className="text-white">miért csinálja</span>."
                     </blockquote>
                </div>

                <div className="space-y-6">
                    <SourceItem icon={Globe} title="Gondolkodj globálisan" desc="Külföldi példák, más kultúrák adaptálása." />
                    <SourceItem icon={GraduationCap} title="Egyetemi Brandek" desc="Letisztult design, fiatal célközönség." />
                    <SourceItem icon={Users} title="Profi Alkotók" desc="Fotósok, videósok látásmódja." />
                </div>
            </motion.div>

            {/* Visual Metaphor Area - "The Lens" */}
            <div className="relative flex items-center justify-center">
                 <div className="relative w-full aspect-square max-w-md">
                    {/* The "Bad" Layer */}
                    <div className="absolute inset-0 bg-neutral-900 rounded-3xl border border-neutral-800 p-8 flex flex-col items-center justify-center text-neutral-600 grayscale opacity-50">
                        <div className="w-32 h-32 bg-neutral-800 rounded-full mb-4 animate-pulse" />
                        <div className="w-3/4 h-8 bg-neutral-800 rounded mb-2" />
                        <div className="w-1/2 h-8 bg-neutral-800 rounded" />
                        <p className="mt-8 text-sm uppercase tracking-widest">Felszín (Másolás)</p>
                    </div>

                    {/* The "Good" Lens - Interactive Hover Reveal */}
                    <motion.div 
                        style={{ x: "-50%", y: "-50%" }}
                        whileHover={{ scale: 1.1 }}
                        className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/20 backdrop-blur-xl rounded-full border border-blue-400/30 flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.3)] z-10 overflow-hidden"
                    >
                         <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            <h3 className="text-xl font-bold text-white mb-2">Struktúra</h3>
                            <p className="text-xs text-blue-200">A miért, a stratégia, az érzelem.</p>
                         </div>
                    </motion.div>

                    {/* Connecting lines */}
                     <svg className="absolute inset-0 pointer-events-none opacity-20" width="100%" height="100%">
                        <circle cx="50%" cy="50%" r="40%" fill="none" stroke="white" strokeDasharray="4 4" />
                     </svg>
                 </div>
            </div>
        </div>
    </div>
  );
}

function SourceItem({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <motion.div 
            variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
            className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
        >
            <div className="p-3 bg-neutral-900 rounded-lg">
                <Icon size={24} className="text-blue-400" />
            </div>
            <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-neutral-400">{desc}</p>
            </div>
        </motion.div>
    )
}
