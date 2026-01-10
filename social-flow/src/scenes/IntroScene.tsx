import { motion } from 'framer-motion';

export function IntroScene() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        duration: 1,
        ease: [0.22, 1, 0.36, 1], // Cubic bezier for smooth premium feel
      },
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full bg-black text-white overflow-hidden font-sans">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none mix-blend-overlay" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex flex-col items-center text-center space-y-12 max-w-5xl px-4"
      >
        <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-white/60">
            Miért nem unatkozik<br />
            az, aki médiázik?
            </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-3xl text-neutral-400 font-light tracking-wide"
        >
          Social media marketing diákoknak, diákoktól
        </motion.p>
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 3, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-12 flex flex-col items-center gap-2"
      >
        <span className="text-xs md:text-sm text-neutral-500 tracking-[0.2em] uppercase">
          Nyomj Space-t a kezdéshez
        </span>
        <div className="w-1 h-8 rounded-full bg-neutral-800 overflow-hidden">
            <motion.div 
                className="w-full bg-white h-full"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
        </div>
      </motion.div>
    </div>
  );
}
