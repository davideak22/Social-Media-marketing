import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Zap, Award, Camera } from 'lucide-react';

export function RecruitmentScene() {
  const benefits = [
    { icon: Zap, label: "Kreativitás" },
    { icon: Camera, label: "Események" },
    { icon: Users, label: "Kapcsolatok" },
    { icon: Star, label: "Valós tapasztalat" },
    { icon: Award, label: "Kézzelfogható eredmény" },
  ];

  return (
    <div className="h-full w-full bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        
        {/* Explosive Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-6xl w-full text-center z-10 space-y-16">
            
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="space-y-6"
            >
                <h1 className="text-5xl md:text-7xl font-bold">Miért jó a <br/>médiás munkacsoport?</h1>
            </motion.div>

            {/* Benefits Grid */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {benefits.map((b, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="flex items-center gap-3 px-6 py-4 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition-colors"
                    >
                        <b.icon className="text-indigo-400" size={24} />
                        <span className="text-lg font-medium">{b.label}</span>
                    </motion.div>
                ))}
            </div>

            {/* Final CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, type: "spring" }}
                className="pt-16 space-y-8"
            >
                 <q className="text-2xl md:text-3xl text-neutral-400 italic block">
                    Nem kell profinak lenned, elég, ha érdekel.
                 </q>

                 <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full text-2xl font-bold tracking-tight overflow-hidden hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-shadow duration-500"
                 >
                     <span className="relative z-10">JELENTKEZZ</span>
                     <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-2" size={32} />
                     
                     {/* Button Gradient Shine */}
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-100 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                 </motion.button>

                 <p className="text-neutral-500 text-sm uppercase tracking-widest mt-8">
                    Keresd a szervezőket az előadás után
                 </p>
            </motion.div>

        </div>
    </div>
  );
}
