# AGENTS.md - Master Plan for Social Flow

## 🎯 Project Overview

**App:** Social Flow
**Goal:** A cinematic, interactive "Keynote-killer" web presentation for social media marketing.
**Stack:** React 18 + Vite, TypeScript, Tailwind CSS, Framer Motion, Zustand.
**User Level:** Level A (Vibe-Coder) - _I guide the vision, you write the code and explain the "magic"._
**Current Phase:** Phase 3 - Polish & Preload

## 🧠 How I Should Think

1.  **Explain the "Magic":** When adding complex animations (like `layoutId`), briefly explain _why_ it works in simple terms (e.g., "This tells React that Card A morphs into Card B").
2.  **Visuals First:** Prioritize "Apple-style" aesthetics—smooth 60fps motion, glassmorphism, and dark mode.
3.  **Offline Mindset:** NEVER suggest external image URLs or CDNs. Always assume we are presenting in a bunker with no Wi-Fi.
4.  **Step-by-Step:** Do not generate the whole app at once. Build one Scene, make it perfect, then move to the next.

## 🔁 Plan → Execute → Verify

1.  **Plan:** Propose the next component/scene structure.
2.  **Execute:** Implement the code (React component + Style + Animation).
3.  **Verify:** Ask the user to run `npm run dev` and check for "jank" or layout shifts.

## 🧠 Context & Memory

- **Architecture:** Scene-based. We don't have "pages," we have "Scenes" managed by a global Zustand store.
- **Key Constraint:** 16:9 Aspect Ratio (Desktop/Projector). No mobile responsiveness needed.
- **Style Guide:** Dark mode, high contrast text (White on Black), fluid motion.

## 📁 Context Files

- `agent_docs/tech_stack.md`: Detailed install commands & library versions.
- `agent_docs/project_brief.md`: The "Vibe" and core rules.
- `agent_docs/product_requirements.md`: The features we need to build.
- `agent_docs/testing.md`: How to verify 60fps and offline readiness.

## 🔄 Current State (Update This!)

**Last Updated:** 2026-01-10
**Working On:** Phase 3: Polish & Preload
**Blocked By:** None

## 🚀 Roadmap

### Phase 1: Foundation (Completed)

- [x] Initialize Vite + React + TypeScript project
- [x] Install dependencies (Framer Motion, Zustand, Tailwind, Lucide)
- [x] Set up `usePresentationStore` (The Brain)
- [x] Build basic `SceneController` (The Director)
- [x] Map Keyboard/Clicker keys (ArrowRight/Space)

### Phase 2: Core Scenes & Visuals (Completed)

- [x] **Intro Scene:** High-impact title with entrance animations
- [x] **Poll Scene:** Interactive voting cards (+10 votes/click)
- [x] **About Scene:** Animated counters + floating idle animation
- [x] **TitleScene:** New centered typography scenes for transitions
- [x] **Definition Scene:** Three pillars interaction
- [x] **Design Theory Scene:** Font morphing interaction (Keyboard Controlled)
- [x] **Design Mistakes Scene:** Chaos vs Order visual (Keyboard Controlled)
- [x] **Inspiration Scene:** Lens interaction
- [x] **LogoComparisonScene:** Geometric vs Branded transformation
- [x] **VersionHistoryScene:** First Ver vs Latest Ver (1:1 aspect)
- [x] **Photography Scene:** Viewfinder overlay
- [x] **VideoAnalysisScene:** Video with mute/play controls + annotations
- [x] **Cultural Context Scene:** Cinematic transitions
- [x] **Strategy Scene:** Interactive timeline
- [x] **AI Scene:** Human vs AI comparison
- [x] **Interactive Scene:** Brainstorming visualization
- [x] **Recruitment Scene:** Final CTA
- [x] **ThankYouScene:** Credits and social links

### Phase 3: Polish & Preload (In Progress)

- [ ] Asset Preloading system (for zero buffering)
- [ ] "Production Preview" test run
- [ ] Offline drill (Airplane mode test)

### Phase 4: Audio Experience (Pending)

- [ ] Web Audio API implementation (Generative Sound)
- [ ] Navigation clicks & Hover effects
- [ ] Transition swooshes

## 🏁 Mission Complete

All systems operational. Ready for deployment.

## ⚠️ What NOT To Do

- **NO** external image links (Unsplash, etc.). Use placeholders or local assets.
- **NO** mobile CSS hacks. Focus purely on 1920x1080.
- **NO** "Loading spinners". Preload everything.
- **NO** complex router (React Router). Use our custom Scene Controller.
