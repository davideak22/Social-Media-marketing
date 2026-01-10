import { motion, AnimatePresence } from 'framer-motion';
import { usePresentationStore } from '../store/presentationStore';
import { useKeyboardControls } from '../hooks/useKeyboardControls';

import { IntroScene } from '../scenes/IntroScene';
import { PollScene } from '../scenes/PollScene';
import { AboutScene } from '../scenes/AboutScene';
import { TitleScene } from '../scenes/TitleScene';
import { DefinitionScene } from '../scenes/DefinitionScene';
import { DesignTitleScene } from '../scenes/DesignTitleScene';
import { DesignTheoryScene } from '../scenes/DesignTheoryScene';
import { DesignMistakesScene } from '../scenes/DesignMistakesScene';
import { InspirationScene } from '../scenes/InspirationScene';
import { LogoComparisonScene } from '../scenes/LogoComparisonScene';
import { PhotographyScene } from '../scenes/PhotographyScene';
import { TikTokTransitionScene } from '../scenes/TikTokTransitionScene';
import { VideoAnalysisScene } from '../scenes/VideoAnalysisScene';
import { CulturalContextScene } from '../scenes/CulturalContextScene';
import { StrategyScene } from '../scenes/StrategyScene';
import { AIScene } from '../scenes/AIScene';
import { AITitleScene } from '../scenes/AITitleScene';
import { InteractiveScene } from '../scenes/InteractiveScene';
import { RecruitmentScene } from '../scenes/RecruitmentScene';
import { ThankYouScene } from '../scenes/ThankYouScene';
import { VersionHistoryScene } from '../scenes/VersionHistoryScene';
import { PhotographyTitleScene } from '../scenes/PhotographyTitleScene';


const SCENES = [
  IntroScene,
  PollScene,
  AboutScene,
  TitleScene,
  DefinitionScene,
  DesignTitleScene,
  DesignTheoryScene,
  DesignMistakesScene,
  InspirationScene,
  LogoComparisonScene,
  VersionHistoryScene,
  PhotographyTitleScene,
  PhotographyScene,
  TikTokTransitionScene,
  VideoAnalysisScene,
  CulturalContextScene,
  StrategyScene,
  AITitleScene,
  AIScene,
  InteractiveScene,
  RecruitmentScene,
  ThankYouScene,
];

import { Preloader } from './Preloader';

export function SceneController() {
  const { currentScene, direction } = usePresentationStore();
  
  // Initialize keyboard controls
  useKeyboardControls(SCENES.length);

  const CurrentSceneComponent = SCENES[currentScene];

  return (
    <div className="relative w-screen h-screen bg-background overflow-hidden">
      <Preloader />
      
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentScene}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <CurrentSceneComponent />
        </motion.div>
      </AnimatePresence>
      
      {/* Debug UI - remove in production */}
      <div className="absolute bottom-4 right-4 text-white/20 text-xs">
        Scene {currentScene + 1} / {SCENES.length}
      </div>
    </div>
  );
}
