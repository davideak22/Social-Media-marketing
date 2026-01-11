import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';

export function ExplanationDetailsScene() {
  const points = [
    { 
      icon: CheckCircle2, 
      text: "Az emberek ismerik az Instagram algoritmusát.",
      color: "text-emerald-400"
    },
    { 
      icon: AlertCircle, 
      text: 'De a „Második Algoritmus” izgalmasan hangzik.',
      color: "text-amber-400"
    },
    { 
      icon: TrendingUp, 
      text: "Azt sugallja, hogy olyan előnyre tesznek szert, amivel mások nem rendelkeznek.",
      color: "text-indigo-400"
    }
  ];

  return (
    <div className="h-full w-full bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        
        {/* Cinematic Backdrop - Consistent with other scenes */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-black" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative z-10 max-w-5xl w-full">
            
            <div className="space-y-12">
                {points.map((point, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.4, ease: "easeOut" }}
                        className="flex items-start md:items-center gap-6 group"
                    >
                        {/* Icon */}
                        <div className={`
                            w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-neutral-900/50 border border-white/10 flex items-center justify-center shrink-0
                            shadow-lg group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm
                            ${point.color}
                        `}>
                            <point.icon size={28} className="md:w-8 md:h-8" />
                        </div>

                        {/* Text */}
                        <div className="text-xl md:text-3xl font-light text-neutral-300 group-hover:text-white transition-colors leading-relaxed">
                            {index === 1 ? (
                                <>
                                    De a <span className="text-white font-semibold">„Második Algoritmus”</span> izgalmasan hangzik.
                                </>
                            ) : (
                                point.text
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    </div>
  );
}
