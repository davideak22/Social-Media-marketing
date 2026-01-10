import { motion } from 'framer-motion';

export function CulturalContextScene() {
  return (
    <div className="h-full w-full bg-black relative overflow-hidden">
      
      {/* Cinematic Background Image with Ken Burns Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop")',
        }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-white z-10">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
        >
             <h2 className="text-neutral-400 tracking-[0.3em] uppercase text-sm md:text-base">Kulturális Kontextus</h2>
             
             <h1 className="text-5xl md:text-7xl font-serif italic text-amber-100/90 leading-tight">
                "Az idősek = Nyugalom"
             </h1>

             <div className="w-24 h-px bg-amber-500/50 mx-auto" />

             <p className="text-2xl md:text-3xl font-light max-w-2xl mx-auto leading-relaxed text-neutral-200">
                A jó tartalom kultúrát ért,<br />
                <span className="text-amber-400">nem algoritmust.</span>
             </p>
        </motion.div>
      </div>

    </div>
  );
}
