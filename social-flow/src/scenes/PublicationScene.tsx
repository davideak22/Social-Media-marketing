import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import QRCode from 'react-qr-code';

export function PublicationScene() {
  return (
    <div className="h-full w-full bg-neutral-950 text-white flex items-center justify-center p-8 relative overflow-hidden">
        {/* Background - Elegant Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-indigo-950/20" />
        
        <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8 text-left"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <BookOpen size={20} />
                    <span className="text-sm font-medium uppercase tracking-wider">Ajánlott irodalom</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Médiásnak lenni a<br/>
                    <span className="text-indigo-400">DT környezetben</span>
                </h1>

                <p className="text-xl text-neutral-400 leading-relaxed max-w-lg">
                    Ez a kiadvány a MAKOSZ Média Munkacsoporttal közösen készült, 
                    és mélyebben foglalkozik a digitális tudatosság és a média kapcsolatával.
                </p>

                <div className="flex items-center gap-4 pt-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-neutral-700 to-transparent" />
                    <span className="text-neutral-500 text-sm uppercase tracking-widest">Olvass bele</span>
                </div>
            </motion.div>

            {/* Right Column: QR Code Card */}
            <motion.div 
                initial={{ opacity: 0, rotateY: 30, x: 50 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col items-center justify-center"
            >
                <a 
                    href="https://makosz.ro/dokumentumok/medias-kisokos/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative group bg-white p-4 rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02] block cursor-pointer"
                >
                    {/* Real QR Code - High Contrast */}
                    <div className="w-64 h-64 bg-white rounded-xl flex items-center justify-center p-2">
                        <QRCode 
                            value="https://makosz.ro/dokumentumok/medias-kisokos/"
                            size={220}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            viewBox={`0 0 256 256`}
                        />
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-black font-bold text-lg flex items-center justify-center gap-2">
                            Szkenneld be <ExternalLink size={16} className="text-neutral-400" />
                        </p>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-indigo-500/20 blur-2xl -z-10 group-hover:bg-indigo-500/30 transition-colors" />
                </a>
            </motion.div>
        </div>
    </div>
  );
}
