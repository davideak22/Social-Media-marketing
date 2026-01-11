import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function ImportanceScene() {
  const benefits = [
    { text: "Munkahely", isPrimary: false },
    { text: "Brand építés", isPrimary: true },
    { text: "VIP helyszín belépő", isPrimary: false }
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
              key={benefit.text}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
              className={`flex items-center space-x-4 p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                benefit.isPrimary 
                  ? 'bg-purple-500/20 border-purple-500/50 scale-110 shadow-lg shadow-purple-900/20' 
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <div className={`p-3 rounded-full ${benefit.isPrimary ? 'bg-purple-500 text-white' : 'bg-green-500/20 text-green-400'}`}>
                <Check className={`w-6 h-6 ${benefit.isPrimary ? 'text-white' : 'text-green-400'}`} />
              </div>
              <span className={`font-semibold ${benefit.isPrimary ? 'text-3xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200' : 'text-2xl'}`}>
                {benefit.text}
              </span>
              {benefit.isPrimary && (
                <motion.span 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="ml-auto text-xs font-bold px-3 py-1 bg-purple-500 text-white rounded-full tracking-wider uppercase"
                >
                  Top Skill
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
