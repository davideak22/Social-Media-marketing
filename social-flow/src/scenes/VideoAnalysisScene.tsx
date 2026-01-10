import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share, Music } from 'lucide-react';

export function VideoAnalysisScene() {
  const annotations = [
    { label: "Humor", x: "20%", y: "30%", rotation: -10, delay: 1 },
    { label: "Kulturális különbség", x: "60%", y: "40%", rotation: 5, delay: 2 },
    { label: "Identitás", x: "30%", y: "70%", rotation: -5, delay: 3 },
    { label: "Emberi pillanat", x: "70%", y: "20%", rotation: 10, delay: 4 },
  ];

  return (
    <div className="h-full w-full bg-neutral-900 flex items-center justify-center p-8 overflow-hidden">
      
      {/* Phone Mockup */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="relative w-[350px] h-[700px] bg-black rounded-[3rem] border-8 border-neutral-800 shadow-2xl overflow-hidden"
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-neutral-800 rounded-b-2xl z-20" />

        {/* Video Placeholder Content */}
        {/* Note: In a real app, this would be a <video> tag. Using abstract gradient animation for now. */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-neutral-900 to-neutral-900 z-0">
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 font-bold text-4xl -rotate-12">TikTok videó helye</span>
             </div>
        </div>

        {/* UI Overlay */}
        <div className="absolute bottom-0 w-full p-4 z-10 bg-gradient-to-t from-black/80 to-transparent pt-20 text-white">
            <div className="mb-4">
                <h3 className="font-bold text-lg mb-1">@roman_magyar</h3>
                <p className="text-sm opacity-80">Amikor megpróbálsz románul beszélni... 😅 #fyp #erdely</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
                <Music size={14} className="animate-spin-slow" />
                <div className="w-32 overflow-hidden"><p className="whitespace-nowrap">Original Sound - Funny Sounds</p></div>
            </div>
        </div>

        {/* Right Sidebar */}
        <div className="absolute right-2 bottom-20 flex flex-col gap-6 items-center text-white z-10">
            <ActionIcon icon={Heart} label="14.2K" />
            <ActionIcon icon={MessageCircle} label="234" />
            <ActionIcon icon={Share} label="Share" />
        </div>
      </motion.div>

      {/* Annotations Layer */}
      <div className="absolute inset-0 pointer-events-none">
          {annotations.map((ann, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: ann.rotation }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: ann.delay, type: "spring" }}
                style={{ left: ann.x, top: ann.y }}
                className="absolute bg-white text-black px-4 py-2 rounded-full font-bold shadow-xl border-2 border-yellow-400 text-xl"
             >
                {ann.label}
             </motion.div>
          ))}
      </div>

       {/* Main Message */}
       <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5 }}
            className="absolute bottom-12 bg-black/80 backdrop-blur border border-neutral-800 px-8 py-4 rounded-full"
       >
            <h2 className="text-2xl font-light text-white">Nem tökéletes, hanem <span className="text-blue-400 font-bold">kapcsolódható</span>.</h2>
       </motion.div>
    </div>
  );
}

function ActionIcon({ icon: Icon, label }: { icon: any, label: string }) {
    return (
        <div className="flex flex-col items-center gap-1">
            <div className="p-3 bg-white/10 backdrop-blur rounded-full">
                <Icon size={24} fill="white" className="opacity-90" />
            </div>
            <span className="text-xs font-bold">{label}</span>
        </div>
    )
}
