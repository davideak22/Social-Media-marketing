import { motion } from 'framer-motion';
import { useState } from 'react';
import { Rocket, Zap, History } from 'lucide-react';

export function StrategyScene() {
  const steps = [
    { id: 'hype', label: 'Előtt: Hype', icon: Rocket, color: 'text-purple-400', desc: 'Várakozás keltése, teaserek.' },
    { id: 'presence', label: 'Közben: Jelenlét', icon: Zap, color: 'text-yellow-400', desc: 'Real-time sztorik, hangulat.' },
    { id: 'memory', label: 'Után: Emlék', icon: History, color: 'text-blue-400', desc: 'Összefoglaló, "aftermovie".' },
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="h-full w-full bg-neutral-950 text-white flex flex-col items-center justify-center p-8 relative overflow-hidden"
         onClick={() => setActiveStep(prev => (prev + 1) % (steps.length + 1))}
    >
        <div className="absolute top-8 text-neutral-500 uppercase tracking-widest text-sm">
            Kattints a folytatáshoz
        </div>

        <div className="max-w-6xl w-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-20 text-center">Mikor mit posztolunk?</h1>

            {/* Timeline Container */}
            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-12 left-0 w-full h-1 bg-neutral-800 -z-10">
                     <motion.div 
                        className="h-full bg-gradient-to-r from-purple-500 via-yellow-500 to-blue-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(Math.min(activeStep, 2) / 2) * 100}%` }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                     />
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                         const isActive = activeStep >= index;
                         const isCurrent = activeStep === index;

                         return (
                            <div key={step.id} className="flex flex-col items-center text-center">
                                {/* Dot/Icon Circle */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0.5 }}
                                    animate={{ 
                                        scale: isActive ? 1.1 : 0.8, 
                                        opacity: isActive ? 1 : 0.5,
                                        backgroundColor: isActive ? '#171717' : '#0a0a0a',
                                        borderColor: isActive ? '#ffffff' : '#333333'
                                    }}
                                    className="w-24 h-24 rounded-full border-4 flex items-center justify-center mb-8 relative z-10 transition-colors duration-500 bg-neutral-900"
                                >
                                    <step.icon 
                                        size={40} 
                                        className={`${isActive ? step.color : 'text-neutral-600'} transition-colors duration-500`}
                                    />
                                    
                                    {isCurrent && (
                                        <motion.div 
                                            layoutId="ring"
                                            className="absolute inset-[-8px] rounded-full border-2 border-white/50"
                                            transition={{ type: "spring" }}
                                        />
                                    )}
                                </motion.div>

                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: isActive ? 1 : 0.2, y: isActive ? 0 : 20 }}
                                    transition={{ delay: 0.2 }}
                                    className="space-y-2"
                                >
                                    <h3 className={`text-2xl font-bold ${isActive ? 'text-white' : 'text-neutral-600'}`}>{step.label}</h3>
                                    <p className="text-neutral-400 max-w-xs mx-auto">{step.desc}</p>
                                </motion.div>
                            </div>
                         )
                    })}
                </div>
            </div>

            {/* Final Message */}
            {activeStep >= 3 && (
                 <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mt-24 p-6 bg-neutral-900 rounded-2xl border border-neutral-800"
                 >
                    <p className="text-2xl font-light">
                        Nem minden nap kell posztolni.<br/>
                        <span className="font-bold text-white">Akkor kell, amikor történik valami.</span>
                    </p>
                 </motion.div>
            )}
        </div>
    </div>
  );
}
