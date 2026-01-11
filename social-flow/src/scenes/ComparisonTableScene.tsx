import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentationStore } from '../store/presentationStore';
import { Info } from 'lucide-react';

export function ComparisonTableScene() {
    const { setNavigationBlocked } = usePresentationStore();
    const [step, setStep] = useState(0); 

    useEffect(() => {
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

    // Visiblity Logic
    // Step 0: All visible
    // Step 1: Only Col 1
    // Step 2: Only Col 2
    // Step 3: Only Col 3
    // Step 4: All visible
    const isCol1Visible = step === 0 || step === 1 || step === 4;
    const isCol2Visible = step === 0 || step === 2 || step === 4;
    const isCol3Visible = step === 0 || step === 3 || step === 4;

    const isHighlightMode = step > 0 && step < 4;

    return (
        <div className="h-full w-full bg-black text-white p-8 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-blue-950/20" />
            
            <div className="relative z-10 max-w-7xl w-full">
                <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-400">
                    Melyik stratégiát választod?
                </h2>

                <div className="flex gap-8 items-center justify-center min-h-[450px]">
                    
                    {/* Main Table - Switched to Flex Rows for better alignment control */}
                    <div className="flex flex-col gap-4">
                        
                        {/* Header Row */}
                        <div className="flex gap-4">
                            <div className="w-48 p-4 rounded-lg bg-neutral-900/50 backdrop-blur font-mono text-sm text-neutral-400 flex items-end shrink-0">
                                Kritériumok
                            </div>
                            <AnimatePresence mode="popLayout">
                                {isCol1Visible && <HeaderCell key="h1" title="Első Benyomás" active={!isHighlightMode || step === 1} />}
                                {isCol2Visible && <HeaderCell key="h2" title="Videó Megtartás" active={!isHighlightMode || step === 2} />}
                                {isCol3Visible && <HeaderCell key="h3" title="Üzenet Tisztasága" active={!isHighlightMode || step === 3} />}
                            </AnimatePresence>
                        </div>

                        {/* Row 1: Frankenstein */}
                        <div className="flex gap-4">
                            <div className="w-48 p-6 rounded-xl bg-red-950/20 border border-red-900/30 flex items-center shadow-lg shrink-0">
                                <span className="font-bold text-xl text-red-400">Frankenstein</span>
                            </div>
                            <AnimatePresence mode="popLayout">
                                {isCol1Visible && (
                                    <Cell key="c1-1" 
                                        value="C- (Zavaros)" subtext="Confusing" type="negative" 
                                        highlight={!isHighlightMode || step === 1} 
                                    />
                                )}
                                {isCol2Visible && (
                                    <Cell key="c1-2" 
                                        value="D (Zavaró)" subtext="Distracting" type="negative" 
                                        highlight={!isHighlightMode || step === 2}
                                    />
                                )}
                                {isCol3Visible && (
                                    <Cell key="c1-3" 
                                        value="C (Túl sok szöveg)" subtext="Text-Heavy" type="negative" 
                                        highlight={!isHighlightMode || step === 3}
                                    />
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Row 2: Film Előzetes */}
                        <div className="flex gap-4">
                            <div className="w-48 p-6 rounded-xl bg-green-950/20 border border-green-900/30 flex items-center shadow-lg shrink-0">
                                <span className="font-bold text-xl text-green-400">Film Előzetes</span>
                            </div>
                            <AnimatePresence mode="popLayout">
                                {isCol1Visible && (
                                    <Cell key="c2-1" 
                                        value="A+ (Hiteles)" subtext="Authoritative" type="positive" 
                                        highlight={!isHighlightMode || step === 1}
                                    />
                                )}
                                {isCol2Visible && (
                                    <Cell key="c2-2" 
                                        value="A (Magával ragadó)" subtext="Immersive" type="positive" 
                                        highlight={!isHighlightMode || step === 2}
                                    />
                                )}
                                {isCol3Visible && (
                                    <Cell key="c2-3" 
                                        value="A+ (Átlátható)" subtext="Scannable" type="positive" 
                                        highlight={!isHighlightMode || step === 3}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Evidence Sidebar */}
                    <AnimatePresence mode="popLayout">
                        {step >= 1 && step < 4 && (
                            <motion.div 
                                key="sidebar"
                                layout
                                initial={{ opacity: 0, x: 50, width: 0 }}
                                animate={{ opacity: 1, x: 0, width: '384px' }} // w-96 = 384px
                                exit={{ opacity: 0, x: -20, width: 0 }}
                                transition={{ duration: 0.5, type: 'spring' }}
                                className="shrink-0 relative self-center flex flex-col justify-center gap-6"
                            >
                                <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-950/20 border border-blue-500/30 backdrop-blur-md shadow-2xl h-[280px] flex flex-col justify-center">
                                    <div className="text-blue-400 font-mono text-sm uppercase tracking-widest flex items-center gap-2 mb-4">
                                        <Info size={18} />
                                        Miért fontos?
                                    </div>
                                    
                                    <div className="text-xl leading-relaxed text-blue-100">
                                        {step === 1 && (
                                            <motion.div key="s1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                                A felhasználók <span className="text-white font-bold block mt-4 text-3xl">0.05 másodperc</span> alatt alkotnak véleményt.
                                            </motion.div>
                                        )}
                                        {step === 2 && (
                                            <motion.div key="s2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                                A rossz hang <span className="text-white font-bold block mt-4 text-3xl">60%-os visszaesést</span> okoz a megtekintésben.
                                            </motion.div>
                                        )}
                                        {step === 3 && (
                                            <motion.div key="s3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                                Az agy <span className="text-white font-bold block mt-4 text-3xl">60,000x gyorsabban</span> dolgozza fel a képet, mint a szöveget.
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                 {/* Footer Result */}
                 <AnimatePresence>
                 {step >= 4 && (
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-900/40 to-emerald-800/20 border border-emerald-500/30 text-center mx-auto max-w-2xl"
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
            layout
            initial={{ opacity: 0, width: 0 }}
            animate={{ 
                opacity: 1, 
                width: '220px', 
                color: active ? '#ffffff' : '#525252',
                backgroundColor: active ? 'rgba(255,255,255,0.1)' : 'transparent',
            }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
            className="p-4 rounded-lg font-bold text-lg flex items-end overflow-hidden whitespace-nowrap"
        >
            {title}
        </motion.div>
    )
}

function Cell({ value, subtext, type, highlight }: any) {
    return (
        <motion.div 
            layout
            initial={{ opacity: 0, width: 0 }}
            animate={{ 
                opacity: 1, 
                width: '220px', 
                scale: highlight ? 1 : 1, // Removed scale effect to keep alignment clean
                backgroundColor: highlight ? (type === 'positive' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)') : 'transparent',
                borderColor: highlight ? (type === 'positive' ? 'rgba(34, 197, 94, 0.5)' : 'rgba(239, 68, 68, 0.5)') : 'transparent',
                filter: highlight ? 'blur(0px)' : 'blur(0px)' // Removed blur
            }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
            className={`
                p-6 rounded-xl border flex flex-col justify-center overflow-hidden whitespace-nowrap shadow-sm h-[100px]
                ${!highlight ? (type === 'positive' ? 'border-green-900/5 text-green-900/30' : 'border-red-900/5 text-red-900/30') : ''}
                ${highlight ? (type === 'positive' ? 'text-green-400 shadow-lg ring-1 ring-inset ring-green-400/20' : 'text-red-400 shadow-lg ring-1 ring-inset ring-red-400/20') : ''}
            `}
        >
            <div className={`font-bold text-xl transition-colors duration-300 ${!highlight ? 'text-neutral-700' : ''}`}>{value}</div>
            {highlight && <div className="text-sm opacity-80 mt-1">{subtext}</div>}
        </motion.div>
    )
}
