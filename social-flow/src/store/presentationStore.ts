import { create } from 'zustand';

interface PresentationState {
  currentScene: number;
  direction: number; // 1 for forward, -1 for backward
  isNavigationBlocked: boolean;
  goToNextScene: (totalScenes: number) => void;
  goToPrevScene: () => void;
  setDirection: (direction: number) => void;
  setNavigationBlocked: (blocked: boolean) => void;
  customNextHandler: (() => void) | null;
  setCustomNextHandler: (handler: (() => void) | null) => void;
}

export const usePresentationStore = create<PresentationState>((set) => ({
  currentScene: 0,
  direction: 1,
  isNavigationBlocked: false,
  customNextHandler: null,
  setCustomNextHandler: (handler) => set({ customNextHandler: handler }),
  goToNextScene: (totalScenes) =>
    set((state) => {
      if (state.isNavigationBlocked) return state;
      return {
        currentScene: Math.min(state.currentScene + 1, totalScenes - 1),
        direction: 1,
      };
    }),
  goToPrevScene: () =>
    set((state) => ({
      currentScene: Math.max(state.currentScene - 1, 0),
      direction: -1,
      isNavigationBlocked: false, // Always unblock when going back
      customNextHandler: null, // Clear custom handler when going back
    })),
  setDirection: (direction) => set({ direction }),
  setNavigationBlocked: (blocked) => set({ isNavigationBlocked: blocked }),
}));
