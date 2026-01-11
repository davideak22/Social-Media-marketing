import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function ImportanceScene() {
  const benefits = [
    "VIP helyszín belépő",
    "Brand építés",
    "Munkahely"
  ];

  return (
    <div className="h-full w-full bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/20" />
      
      <div className="relative z-10 flex flex-col items-center justify-center space-y-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center leading-tight max-w-4xl"
        >
          Miért fontos tudni, hogyan kell <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">közösségi média marketinget</span> csinálni?
        </motion.h2>

        <div className="grid gap-6 w-full max-w-2xl">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
              className="flex items-center space-x-4 bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
            >
              <div className="bg-green-500/20 p-3 rounded-full">
                <Check className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-2xl font-semibold">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
