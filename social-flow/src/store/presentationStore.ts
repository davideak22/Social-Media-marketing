import { create } from 'zustand';

interface PresentationState {
  currentScene: number;
  direction: number; // 1 for forward, -1 for backward
  goToNextScene: (totalScenes: number) => void;
  goToPrevScene: () => void;
  setDirection: (direction: number) => void;
}

export const usePresentationStore = create<PresentationState>((set) => ({
  currentScene: 0,
  direction: 0,
  goToNextScene: (totalScenes) =>
    set((state) => {
      if (state.currentScene >= totalScenes - 1) return state;
      return { currentScene: state.currentScene + 1, direction: 1 };
    }),
  goToPrevScene: () =>
    set((state) => {
      if (state.currentScene <= 0) return state;
      return { currentScene: state.currentScene - 1, direction: -1 };
    }),
  setDirection: (direction) => set({ direction }),
}));
