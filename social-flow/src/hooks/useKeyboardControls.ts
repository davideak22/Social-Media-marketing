import { useEffect } from 'react';
import { usePresentationStore } from '../store/presentationStore';
import { useSound } from './useSound';

export function useKeyboardControls(totalScenes: number) {
  // No need to destructure state here, we'll access it directly in the listener
  // to avoid stale closures and dependencies issues.
  const { playClick } = useSound();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault(); // Prevent scrolling for Space
        playClick();
        
        const state = usePresentationStore.getState();
        if (state.customNextHandler) {
          state.customNextHandler();
        } else {
          state.goToNextScene(totalScenes);
        }
      } else if (e.key === 'ArrowLeft') {
        playClick();
        usePresentationStore.getState().goToPrevScene();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalScenes, playClick]); // Dependencies are now stable
}
