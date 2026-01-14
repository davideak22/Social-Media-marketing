import { motion } from 'framer-motion';
import { LayoutGroup } from 'framer-motion';

export function ABTestingScene() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full bg-black text-white overflow-hidden font-sans p-4 md:p-8">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 brightness-100 contrast-150 pointer-events-none mix-blend-overlay" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 w-full max-w-5xl flex flex-col items-center gap-6"
      >
        <motion.div variants={itemVariants} className="text-center space-y-2">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            A/B Tesztelés
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Hogyan döntsük el, mi működik jobban? Kísérletezéssel!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Variant A */}
          <motion.div
            variants={cardVariants}
            className="group relative bg-neutral-900/50 rounded-3xl p-5 border border-white/10 backdrop-blur-sm hover:bg-neutral-900/80 transition-colors"
          >
            <div className="absolute top-4 left-4 bg-red-500/20 text-red-300 text-xs font-bold px-3 py-1 rounded-full border border-red-500/30">
              VARIÁCIÓ A
            </div>
            
            <div className="mt-6 aspect-video w-full bg-neutral-800 rounded-xl overflow-hidden mb-5 relative group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                <span>Standard Design</span>
              </div>
              <div className="absolute inset-0 bg-neutral-800 opacity-50" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-neutral-500 text-sm">Elérés</span>
                <span className="text-xl font-bold text-neutral-300">12.5k</span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "45%" }}
                  transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-neutral-500"
                />
              </div>
              
              <div className="flex justify-between items-end pt-2">
                <span className="text-neutral-500 text-sm">Konverzió</span>
                <span className="text-xl font-bold text-neutral-300">1.2%</span>
              </div>
               <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "30%" }}
                  transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-neutral-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Variant B */}
          <motion.div
            variants={cardVariants}
            className="group relative bg-blue-900/10 rounded-3xl p-5 border border-blue-500/30 backdrop-blur-sm hover:bg-blue-900/20 transition-colors"
          >
             <div className="absolute top-4 left-4 bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30">
              VARIÁCIÓ B (Győztes 🏆)
            </div>

            <div className="mt-6 aspect-video w-full bg-neutral-800 rounded-xl overflow-hidden mb-5 relative group-hover:scale-[1.02] transition-transform duration-500 border border-blue-500/20">
               <div className="absolute inset-0 flex items-center justify-center text-blue-200">
                <span className="font-bold text-lg">✨ Prémium Design</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-blue-200/70 text-sm">Elérés</span>
                <motion.span 
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  28.4k
                </motion.span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>

               <div className="flex justify-between items-end pt-2">
                <span className="text-blue-200/70 text-sm">Konverzió</span>
                <span className="text-xl font-bold text-white">4.8%</span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ delay: 1.7, duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            </div>
            
            {/* Winner Badge */}
             <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 12 }}
              transition={{ delay: 2, type: "spring" }}
              className="absolute -top-4 -right-4 bg-yellow-400 text-black font-bold p-3 text-sm rounded-full shadow-lg border-4 border-black/50 hidden md:block"
            >
              +350%
            </motion.div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl pt-4">
            {[
                { title: "Mérés", desc: "Pontos adatok a megérzések helyett" },
                { title: "Optimalizálás", desc: "Folyamatos javulás és tanulás" },
                { title: "Eredmény", desc: "Maximális hatékonyság és ROI" }
            ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-3 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mb-2">
                         <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                    </div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-neutral-400">{item.desc}</p>
                </div>
            ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
