import { motion } from 'framer-motion';

export function TitleScene() {
  return (
    <div className="h-full w-full bg-black text-white flex items-center justify-center p-8 relative overflow-hidden">
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-black" />
        
        <div className="relative z-10 max-w-5xl text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                    Mi az a <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        közösségi média menedzsment
                    </span>
                    <br />
                    diákként?
                </h1>
                
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: 100 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="h-1 bg-white/20 mx-auto mt-8"
                />
            </motion.div>
        </div>
    </div>
  );
}
