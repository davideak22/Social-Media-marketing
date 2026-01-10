import { useEffect } from 'react';
import { usePresentationStore } from '../store/presentationStore';
import { useSound } from './useSound';

export function useKeyboardControls(totalScenes: number) {
  const { goToNextScene, goToPrevScene } = usePresentationStore();
  const { playClick } = useSound();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault(); // Prevent scrolling for Space
        playClick();
        goToNextScene(totalScenes);
      } else if (e.key === 'ArrowLeft') {
        playClick();
        goToPrevScene();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalScenes, goToNextScene, goToPrevScene]);
}
