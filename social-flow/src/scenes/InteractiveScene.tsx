import { motion } from 'framer-motion';

export function InteractiveScene() {
    const questions = [
        "Milyen tartalmat néznétek szívesen?",
        "Mitől lenne menő egy dt oldal?",
        "Mi hiányzik most?"
    ];

  return (
    <div className="h-full w-full bg-neutral-950 flex flex-col items-center justify-center p-8 relative overflow-hidden">
        
        {/* Abstract Background Shapes */}
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0] 
            }}
            transition={{ duration: 20, repeat: Infinity, type: "tween" }}
            className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" 
        />
        <motion.div 
            animate={{ 
                scale: [1, 1.5, 1],
                rotate: [0, -45, 0] 
            }}
            transition={{ duration: 15, repeat: Infinity, type: "tween" }}
            className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" 
        />

        <div className="max-w-4xl text-center z-10 space-y-16">
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 pb-2">
                Te jössz!
            </h1>

            <div className="space-y-8">
                {questions.map((q, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: i * 0.5, type: "spring" }}
                        className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-8 rounded-3xl hover:border-neutral-600 transition-colors cursor-help"
                    >
                        <h2 className="text-2xl md:text-4xl font-light text-white">
                            "{q}"
                        </h2>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="text-neutral-500 font-mono tracking-widest uppercase text-sm"
            >
                (Csoportos ötletelés)
            </motion.div>
        </div>
    </div>
  );
}
