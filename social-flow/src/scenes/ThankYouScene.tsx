import { motion } from 'framer-motion';
import { Instagram, Globe, ArrowRight } from 'lucide-react';

export function ThankYouScene() {
  return (
    <div className="h-full w-full bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

        <div className="relative z-10 text-center space-y-12">
            
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-500 pb-4">
                    Köszönöm<br />a figyelmet!
                </h1>
                <p className="text-xl text-neutral-400">Van kérdésed? Keress bátran!</p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col md:flex-row gap-8 items-center justify-center"
            >
                {/* Website Link */}
                <SocialLink 
                    icon={Globe} 
                    label="Weboldal" 
                    value="deakdavid.com" 
                    href="https://www.deakdavid.com"
                />

                {/* Instagram Link */}
                <SocialLink 
                    icon={Instagram} 
                    label="Instagram" 
                    value="@davideak_" 
                    href="https://instagram.com/davideak_" 
                />
            </motion.div>

             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="mt-16 text-sm text-neutral-600 font-mono"
            >
                Social Flow Presentation © 2026
            </motion.div>
        </div>
    </div>
  );
}

function SocialLink({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href: string }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all w-64"
        >
            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Icon size={24} />
            </div>
            <div className="text-left">
                <div className="text-xs text-neutral-500 uppercase tracking-widest mb-1">{label}</div>
                <div className="font-bold flex items-center gap-2">
                    {value}
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
            </div>
        </a>
    );
}
