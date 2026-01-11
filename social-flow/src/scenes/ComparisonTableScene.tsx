import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentationStore } from '../store/presentationStore';
import { Check, X, Info } from 'lucide-react';

export function ComparisonTableScene() {
    const { setNavigationBlocked } = usePresentationStore();
    const [step, setStep] = useState(0); 

    // Step 0: Show basic comparison rows (Frankenstein vs Film Előzetes)
    // Step 1: Reveal 'First Impressions' column detail
    // Step 2: Reveal 'Video Retention' column detail
    // Step 3: Reveal 'Message Clarity' column detail
    // Step 4: Finished, unblock navigation

    useEffect(() => {
        // Block navigation until all steps are complete
        if (step < 4) {
            setNavigationBlocked(true);
        } else {
            setNavigationBlocked(false);
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') && step < 4) {
                e.preventDefault();
                e.stopPropagation();
                setStep(s => s + 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown, { capture: true });
        return () => {
             window.removeEventListener('keydown', handleKeyDown, { capture: true });
             setNavigationBlocked(false);
        };
    }, [step, setNavigationBlocked]);


    return (
        <div className="h-full w-full bg-black text-white p-8 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-blue-950/20" />
            
            <div className="relative z-10 max-w-7xl w-full">
                <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-400">
                    Melyik stratégiát választod?
                </h2>

                <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-4">
                    {/* Headers */}
                    <div className="p-4 rounded-lg bg-neutral-900/50 backdrop-blur font-mono text-sm text-neutral-400 flex items-end">
                        Kritériumok
                    </div>
                    <HeaderCell title="Első Benyomás" active={step >= 1} />
                    <HeaderCell title="Videó Megtartás" active={step >= 2} />
                    <HeaderCell title="Üzenet Tisztasága" active={step >= 3} />

                    {/* Row 1: Frankenstein */}
                    <div className="p-6 rounded-xl bg-red-950/20 border border-red-900/30 flex items-center shadow-lg">
                        <span className="font-bold text-xl text-red-400">Frankenstein</span>
                    </div>
                    <Cell 
                        value="C- (Zavaros)" 
                        subtext="Confusing"
                        type="negative" 
                        highlight={step === 1} 
                        visible={true}
                    />
                    <Cell 
                        value="D (Zavaró)" 
                        subtext="Distracting"
                        type="negative" 
                        highlight={step === 2}
                        visible={true} 
                    />
                    <Cell 
                        value="C (Túl sok szöveg)" 
                        subtext="Text-Heavy"
                        type="negative" 
                        highlight={step === 3}
                        visible={true} 
                    />


                    {/* Row 2: Film Előzetes */}
                    <div className="p-6 rounded-xl bg-green-950/20 border border-green-900/30 flex items-center shadow-lg">
                        <span className="font-bold text-xl text-green-400">Film Előzetes</span>
                    </div>
                    <Cell 
                        value="A+ (Hiteles)" 
                        subtext="Authoritative"
                        type="positive" 
                        highlight={step === 1}
                        visible={true} 
                    />
                    <Cell 
                        value="A (Magával ragadó)" 
                        subtext="Immersive"
                        type="positive" 
                        highlight={step === 2}
                        visible={true} 
                    />
                    <Cell 
                        value="A+ (Átlátható)" 
                        subtext="Scannable"
                        type="positive" 
                        highlight={step === 3}
                        visible={true} 
                    />


                    {/* Row 3: Evidence (Reveals Step by Step) */}
                    <div className="p-4 text-right font-mono text-sm text-blue-400 flex items-center justify-end">
                         {step >= 1 && "A Bizonyíték (Miért számít):"}
                    </div>

                    <EvidenceCell visible={step >= 1} active={step === 1}>
                        A felhasználók <span className="text-white font-bold">0.05 másodperc</span> alatt alkotnak véleményt.
                    </EvidenceCell>
                    <EvidenceCell visible={step >= 2} active={step === 2}>
                        A rossz hang <span className="text-white font-bold">60%-os visszaesést</span> okoz a megtekintésben.
                    </EvidenceCell>
                    <EvidenceCell visible={step >= 3} active={step === 3}>
                         Az agy <span className="text-white font-bold">60,000x gyorsabban</span> dolgozza fel a képet, mint a szöveget.
                    </EvidenceCell>
                    
                </div>
                
                 {/* Footer Result */}
                 <AnimatePresence>
                 {step >= 4 && (
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-900/40 to-emerald-800/20 border border-emerald-500/30 text-center"
                     >
                         <h3 className="text-3xl font-bold text-emerald-400 mb-2">Bizalom = Eladás</h3>
                         <p className="text-neutral-300">A profi megjelenés nem luxus, hanem az alapja az értékesítésnek.</p>
                     </motion.div>
                 )}
                 </AnimatePresence>

            </div>
        </div>
    );
}

function HeaderCell({ title, active }: { title: string, active: boolean }) {
    return (
        <motion.div 
            animate={{ 
                color: active ? '#ffffff' : '#737373',
                backgroundColor: active ? 'rgba(255,255,255,0.1)' : 'transparent'
            }}
            className="p-4 rounded-lg font-bold text-lg flex items-end transition-colors duration-500"
        >
            {title}
        </motion.div>
    )
}

function Cell({ value, subtext, type, highlight, visible }: any) {
    if (!visible) return <div />;
    
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                scale: highlight ? 1.05 : 1,
                backgroundColor: highlight ? (type === 'positive' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)') : 'transparent',
                borderColor: highlight ? (type === 'positive' ? 'rgba(34, 197, 94, 0.5)' : 'rgba(239, 68, 68, 0.5)') : 'transparent'
            }}
            className={`
                p-6 rounded-xl border flex flex-col justify-center transition-all duration-500
                ${!highlight ? (type === 'positive' ? 'border-green-900/10 text-green-700/50' : 'border-red-900/10 text-red-700/50') : ''}
                ${highlight ? (type === 'positive' ? 'text-green-400' : 'text-red-400') : ''}
            `}
        >
            <div className="font-bold text-xl">{value}</div>
            {highlight && <div className="text-sm opacity-80 mt-1">{subtext}</div>}
        </motion.div>
    )
}

function EvidenceCell({ children, visible, active }: any) {
    return (
        <div className="relative h-32">
            <AnimatePresence>
                {visible && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ 
                            opacity: active ? 1 : 0.4, 
                            y: 0,
                            filter: active ? 'blur(0px)' : 'blur(1px)'
                        }}
                        exit={{ opacity: 0 }}
                        className="p-4 text-sm text-blue-200 border-l-2 border-blue-500/50 bg-blue-950/10 h-full flex items-center"
                    >
                        <p>{children}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
