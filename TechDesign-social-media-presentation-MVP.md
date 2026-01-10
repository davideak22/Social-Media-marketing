# Technical Design Document: Social Flow MVP

## 🛠 Project Overview

**Goal:** Build a "Keynote-killer" web presentation for social media marketing.
**Core Requirement:** 60fps animations, "Apple-style" morphing transitions, and 100% offline reliability.
**Strategy:** You (the developer) handle the React/Tailwind structure. AI handles the Framer Motion physics and Zustand state logic.

## 🏗 Tech Stack & Architecture

### Recommended Stack

- **Core:** React 18 + Vite (Fastest local dev server)
- **Language:** TypeScript (Prevents runtime crashes during talk)
- **Styling:** Tailwind CSS (Rapid layout)
- **Animation:** **Framer Motion** (The "Magic" engine)
- **State:** **Zustand** (The "Brain" for scene switching)

### Project Structure

We will use a **Scene-Based Architecture**. Instead of "slides," we build "Scenes" that are full-screen components.

```text
src/
├── components/
│   ├── ui/               # Reusable buttons, cards
│   ├── social/           # Mock Instagram/TikTok posts (Offline safe)
│   └── SceneController.tsx # The "Director" that swaps scenes
├── scenes/
│   ├── IntroScene.tsx
│   ├── FeedScene.tsx     # The interactive social feed
│   ├── AnalyticsScene.tsx # The data visualization
│   └── ConclusionScene.tsx
├── store/
│   └── usePresentationStore.ts # Global state (Zustand)
└── App.tsx
```
