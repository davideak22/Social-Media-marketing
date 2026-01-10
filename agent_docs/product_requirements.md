# Product Requirements

## Core Features

1.  **Scene Controller Engine:**
    - Manages active scene via Zustand.
    - Supports Linear Navigation (Next/Prev).
2.  **Cinematic Transitions:**
    - Use `AnimatePresence mode="wait"` for scene swaps.
    - Use `layoutId` for shared element morphing.
3.  **Interactive Social Mockups:**
    - Custom React components (no iframes).
    - Click-to-expand functionality for posts.
4.  **Hardware Input:**
    - ArrowRight / Space -> Next Scene
    - ArrowLeft -> Prev Scene
5.  **Offline Reliability:**
    - All assets in `/public`.
    - Preloader script at startup.

## Success Metrics

- **Performance:** Constant 60fps.
- **Reliability:** Zero crashes during a 20-minute run.
- **Visuals:** No "pop-in" of images.
