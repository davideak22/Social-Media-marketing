import { motion } from 'framer-motion';
import { Lightbulb, Link, Tag } from 'lucide-react';

export function IdeaConnectionScene() {
  const points = [
    { 
      icon: Lightbulb, 
      text: "Vegyél 2 dolgot, amit az emberek már ismernek",
      color: "text-amber-400"
    },
    { 
      icon: Link, 
      text: "Kösd össze őket váratlan módon",
      color: "text-indigo-400"
    },
    { 
      icon: Tag, 
      text: "Adj neki egy egyszerű, de figyelemfelkeltő nevet",
      color: "text-rose-400"
    }
  ];

  return (
    <div className="h-full w-full bg-neutral-950 text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        
        {/* Background Visuals */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-4xl w-full">
            
            <div className="space-y-12">
                {points.map((point, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.4, ease: "easeOut" }}
                        className="flex items-center gap-8 group"
                    >
                        {/* Number / Icon */}
                        <div className={`
                            w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0
                            shadow-lg group-hover:scale-110 transition-transform duration-300
                            ${point.color}
                        `}>
                            <point.icon size={32} />
                        </div>

                        {/* Text */}
                        <div className="text-2xl md:text-4xl font-light text-neutral-200 group-hover:text-white transition-colors">
                            {point.text}
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    </div>
  );
}
