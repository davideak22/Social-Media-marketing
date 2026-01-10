Product Requirements Document: Social Flow MVP
🎯 Product Overview
Product Name: Social Flow Concept: A cinematic, interactive web-based presentation deck for social media marketing. Goal: Deliver a high-impact, "Apple-style" presentation that outperforms static PowerPoint/Keynote slides. Target Launch: Ready for your upcoming talk.

👥 Target Users
Primary User: The Speaker (You)
Context: Standing on stage or presenting via screen share.

Needs:

Rock-solid stability (cannot crash during a talk).

Seamless navigation using a physical clicker or keyboard arrows.

Confidence that videos/animations will play without buffering (offline/preloaded).

Secondary User: The Audience
Context: Watching on a large projector screen or shared monitor.

Experience: Needs to see fluid motion, high-contrast visuals (Dark Mode), and "magic" transitions that visualize the flow of social media data.

🎬 User Journey & Flow
The presentation follows a "Scene-based" linear narrative but allows for interactive depth within scenes.

The Hook (Intro Scene):

Audience sees a high-impact, animated title screen.

Speaker clicks "Next"; elements morph seamlessly into the next state (no hard cuts).

The Evidence (Social Feed Scene):

A simulated Instagram/TikTok feed appears.

Interaction: Speaker clicks a specific post. It expands (using layoutId) to fill the screen, showing likes/comments metrics in detail.

Speaker clicks again to close and return to the feed.

The Data (Analytics Scene):

Visual charts animate in (bars grow, lines draw).

Data points highlight automatically as the speaker advances.

The Climax (Conclusion):

Final takeaways appear with a "Call to Action" visual.

✨ MVP Features
🔴 Core Features (Must Have)

1. Scene Controller Engine
   Description: The "brain" of the app that manages which Slide/Scene is active.

Tech Note: Uses Zustand store (as per research) to manage state currentScene.

Requirement: Must support linear navigation (Next/Prev) and direct jumps (for development).

2. Cinematic Transitions (Shared Layouts)
   Description: Elements morph between scenes rather than fading out/in.

Tech Note: Heavily relies on Framer Motion layoutId and <AnimatePresence mode="wait">.

Success Criteria: Smooth 60fps transitions on a standard laptop.

3. Interactive Social Mockups (Offline)
   Description: Custom-coded React components that look like Instagram/TikTok posts but don't require an internet connection.

Why: Eliminates the risk of bad venue Wi-Fi and loading spinners.

Interactivity: Cards must support hover states and "Active/Expanded" states.

4. Hardware Input Support
   Description: Map navigation logic to standard keyboard events.

Mappings:

ArrowRight / Space / Clicker Next: Go to next step/scene.

ArrowLeft / Clicker Back: Go to previous.

5. Asset Preloading
   Description: System to load all images/videos before the talk starts.

Why: Ensures zero buffering during the presentation.

🟡 Nice to Have (v1.5)
Scrubbable Timelines: Dragging a slider to control the progress of an animation (good for explaining complex data).

Presenter Mode: A separate window showing speaker notes and a timer.

🚫 NOT in MVP (Out of Scope)
Drag-and-Drop Editor: Content will be hard-coded in React components for now.

Mobile Support: Layouts will be hard-coded for 16:9 Desktop/Projector aspect ratios.

Live API Data: All data will be mocked to ensure stability.

📊 Success Metrics
Performance: Maintains 60fps during complex transitions on the presentation machine.

Reliability: Zero crashes or "white screens" during the run-through.

Engagement: Audience feedback specifically mentioning the visual quality/flow.

🎨 Look & Feel
Design Vibe: "Apple Event," Cinematic, Dark Mode. Visual Principles:

Glassmorphism: Subtle blur effects on overlays (backdrop-filter).

Motion Meaning: Things don't just move; they move from somewhere to somewhere to show context.

Projector Safe: High contrast text (White on Black), avoiding subtle grays that wash out on projectors.

⚡ Technical Constraints & Decisions
Stack: React + Vite + TypeScript.

Styling: Tailwind CSS (for rapid layout).

Animation: Framer Motion (specifically LayoutGroup and layoutId).

State: Zustand (minimal boilerplate).

Browser: Optimized for Chrome/Brave (Chromium engine).

Resolution: Targeted for 1920x1080 (1080p).

🛡️ Quality Standards
No Layout Shifts: Elements must not "jump" when animating.

Type Safety: Strict TypeScript to prevent runtime errors during the talk.

Clean Component Structure: Each "Slide" is a separate component in src/scenes/ to keep code organized.

✅ Definition of Done
The MVP is ready for the talk when:

[ ] All scenes are implemented and sequenced.

[ ] Navigation works flawlessly with the specific clicker you will use.

[ ] All assets (images/videos) load without lag.

[ ] The app runs offline (tested with Wi-Fi off).
