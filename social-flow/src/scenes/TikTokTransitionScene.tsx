import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share, Music, Play } from 'lucide-react';
import { useState, useRef } from 'react';
import videoUrl from '../assets/ssstik.io_@thenickfowler_1768076004526.mp4';

export function TikTokTransitionScene() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }
  };

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

        <div className="absolute inset-0 bg-black z-0 group cursor-pointer" onClick={togglePlay}>
             <video 
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
             />
             
             {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <Play size={32} fill="white" className="ml-1" />
                    </div>
                </div>
             )}
        </div>

        {/* UI Overlay */}
        <div className="absolute bottom-0 w-full p-4 z-10 bg-gradient-to-t from-black/80 to-transparent pt-20 text-white">
            <div className="mb-4">
                <h3 className="font-bold text-lg mb-1">@telefonismeno</h3>
                <p className="text-sm opacity-80">Nem számít mit használsz... 😅 #fyp #erdely</p>
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
