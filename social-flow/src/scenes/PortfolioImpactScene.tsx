import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';

export function PortfolioImpactScene() {
  return (
    <div className="h-full w-full bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-black/20" />
      
      <div className="relative z-10 flex flex-col items-center justify-center space-y-12 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center leading-tight"
        >
          Hogyan szerezhetsz <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            jól fizető munkát?
          </span>
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.5, type: "spring" }}
           className="relative"
        >
            <div className="flex flex-col items-center p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl shadow-blue-500/10">
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    className="mb-6 p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg shadow-purple-500/30"
                >
                    <Briefcase className="w-16 h-16 text-white" />
                </motion.div>
                
                <h3 className="text-3xl md:text-5xl font-bold text-center mb-4">
                    Portfólió építéssel
                </h3>
                
                <p className="text-xl text-gray-400 text-center max-w-lg mb-8">
                    Nem az önéletrajzod számít a leginkább, hanem az, hogy mit tudsz felmutatni.
                </p>

                 <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex items-center space-x-2 text-blue-400 font-semibold uppercase tracking-widest text-sm"
                 >
                    <span>Bizonyíték</span>
                    <ArrowRight className="w-4 h-4" />
                    <span>Eredmény</span>
                 </motion.div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-20 h-20 border-2 border-dashed border-white/20 rounded-full"
            />
             <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-dashed border-blue-500/20 rounded-full"
            />
        </motion.div>
      </div>
    </div>
  );
}
