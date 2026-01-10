import { motion } from 'framer-motion';
import { PenTool, Camera, Video, MessageCircle, Share2, Users } from 'lucide-react';

export function DefinitionScene() {
  const pillars = [
    { icon: PenTool, label: 'Design', sub: 'Mit látnak' },
    { icon: Camera, label: 'Fotó', sub: 'Mit éreznek' },
    { icon: Video, label: 'Videó', sub: 'Mi marad meg' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="h-full w-full bg-neutral-950 text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl text-center mb-16 space-y-8"
      >
        <h2 className="text-sm text-blue-400 font-bold tracking-widest uppercase mb-4">
          Definíció
        </h2>
        <h1 className="text-4xl md:text-6xl font-medium leading-tight">
          "Történetmesélés képekkel és videókkal,<br />
          <span className="text-white/50">a megfelelő időben."</span>
        </h1>
        
        <div className="flex justify-center gap-8 pt-4">
             <Badge icon={MessageCircle} text="Nem reklám" crossed />
             <Badge icon={Share2} text="Nem posztolás" crossed />
             <Badge icon={Users} text="Közösségépítés" />
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
      >
        {pillars.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-neutral-800/50 transition-colors"
          >
            <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-6 text-white">
              <item.icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-2">{item.label}</h3>
            <p className="text-neutral-400">{item.sub}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function Badge({ icon: Icon, text, crossed = false }: { icon: any, text: string, crossed?: boolean }) {
    return (
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${crossed ? 'border-red-900/50 bg-red-900/10 text-red-400' : 'border-green-900/50 bg-green-900/10 text-green-400'}`}>
            <Icon size={16} />
            <span className={crossed ? 'line-through decoration-red-400/50' : ''}>{text}</span>
        </div>
    )
}
