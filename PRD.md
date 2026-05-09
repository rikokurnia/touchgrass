# PRD: Should I Quit Programming?

**Status:** Draft v1.0  
**Product Type:** Web Application (Entertainment / Well-being)  
**Target Audience:** Software Developers, Programmers, IT Professionals  
**Platform:** Responsive Web (Desktop + Mobile)

---

## 1. Executive Summary

"Should I Quit Programming?" is a lightweight, humor-driven web quiz designed to give developers a 2-3 minute micro-break from coding stress. Through 8 relatable questions, the quiz determines which absurd alternative career the user is most suited for: Catfish Farmer, Professional Grass Toucher, Submarine Parking Attendant, or Chicken Coop Guard. The experience wraps with a random motivational quote fetched from an external API, adding a layer of heartfelt sincerity beneath the humor.

---

## 2. Problem Statement

### 2.1 Developer Burnout is Real

| Source | Statistic |
|--------|-----------|
| Stack Overflow Developer Survey 2023 | **83%** of developers reported experiencing burnout |
| OSMI Mental Health in Tech (2023) | **73%** of developers aged 18-24 reported anxiety or depression |
| JetBrains State of Developer Ecosystem 2023 | **62%** of developers feel stressed at work regularly |
| Harvard Business Review | Micro-breaks of 2-5 minutes every hour can increase productivity by **30%** |

### 2.2 The Gap

- Existing mental health tools are **too clinical** — they don't speak the developer's language.
- Developers tend to self-medicate stress with memes, dark humor, and Twitter doomscrolling.
- There is a lack of **low-friction, culturally relatable** micro-break experiences tailored for tech workers.
- Humor is underutilized as an entry point to mental well-being in the developer community.

### 2.3 User Pain Points

1. **Decision fatigue** — constantly choosing frameworks, architectures, tools.
2. **Impostor syndrome** — "Am I even good enough to be a programmer?"
3. **Isolation** — long solo coding sessions, minimal human interaction.
4. **Context switching fatigue** — jumping between 100 browser tabs, Slack, Jira, codebase.
5. **Lack of structured breaks** — developers often skip breaks entirely.

---

## 3. Solution

### 3.1 Product Concept

A browser-based quiz that transforms the existential question "Should I quit programming?" into a 2-minute interactive experience. The quiz maps developer personality traits to absurd rural career outcomes, creating laughter through self-recognition.

### 3.2 Core Value Proposition

> "Laugh at yourself before your code makes you cry."

| Pillar | Description |
|--------|-------------|
| **Relatable** | Every question mirrors real developer struggles (commit messages, production bugs, CSS centering). |
| **Absurd** | Outcomes are deliberately ridiculous — Catfish Farmer is not a real career pivot. |
| **Shareable** | Results are meme-formatted, encouraging organic social sharing among developer circles. |
| **Sincere** | The motivational quote at the end adds a genuine well-wishing touch. |
| **Lightweight** | No signup, no data collection, loads instantly, works on mobile. |

### 3.3 How It Works

1. User lands on the hero page with the title and a "Start Quiz" CTA.
2. User answers 8 multiple-choice questions, each with 4 absurd answers.
3. Each answer maps to 1 of 4 hidden career archetypes (scoring system).
4. The archetype with the highest score becomes the user's result.
5. A result card displays the career, a meme illustration, a "career transition guide," and a random motivational quote fetched from an external API.
6. User can restart the quiz or share their result.

### 3.4 The 4 Career Archetypes

| Archetype | Trait | The Joke |
|-----------|-------|----------|
| 🐟 Catfish Farmer | Patient, nurturing, ok with mud | "You debug like you'd raise catfish — slowly, faithfully, in murky conditions." |
| 🌿 Professional Grass Toucher | Needs sunlight, disconnects | "You have gone too deep. Go outside. Touch grass. This is your destiny." |
| 🚢 Submarine Parking Attendant | Over-engineers, over-thinks | "You don't just park. You design a Kubernetes cluster for underwater vehicles." |
| 🐔 Chicken Coop Guard | Disciplined, routine-driven | "Your 9 AM stand-up is late. The chickens have been up since 4. They salute you." |

---

## 4. MVP Scope

### 4.1 Must-Have Features

| # | Feature | Details | Covers Criteria |
|---|---------|---------|-----------------|
| 1 | **Landing Page** | Hero section with typewriter title animation, dark/neon theme, Start CTA, brief teaser text | Content/Design, Idea |
| 2 | **8-Question Quiz** | Interactive Q&A with progress bar, 4 options per question, hover/focus/active states, scoring engine | Functionality, Content/Design |
| 3 | **Result Page** | Dynamic result card based on highest-scoring archetype, meme-style copy, career transition guide, emoji illustration | Content/Design, Functionality |
| 4 | **Fetch API Integration** | Fetch random motivational quote from `https://api.adviceslip.com/advice` displayed on the result card; **mandatory external API call** | Idea (25%) |
| 5 | **Responsive Design** | Full mobile + desktop support using CSS Flexbox, CSS Grid; text, images, layout adjust gracefully across breakpoints | Responsiveness (20%) |
| 6 | **Motivational Quote** | The result page displays a serious, heartfelt motivational quote fetched from external API, reminding users they're valued beyond their code | Content/Design |

### 4.2 MVP User Flow

```
[Landing Page] → [Q1] → [Q2] → ... → [Q8] → [Loading Animation] → [Result Card + Quote] → [Retake / Share]
                                          ↑                              |
                                          └──────── RESTART ─────────────┘
```

### 4.3 Pages / States

| Page | Description |
|------|-------------|
| `landing` | Hero title, animated cursor, CTA button, footer with subtle memes |
| `quiz` | Progress bar (top), question card (center), 4 answer buttons (grid). State transitions between questions with fade/slide animation |
| `calculating` | Brief 2-second loading state with humorous "analyzing your life choices..." text |
| `result` | Result card with archetype name, emoji, description, "career transition guide" (numbered list), motivational quote (from API), retake button, share button |
| `error` | Fallback UI if API fetch fails — graceful degradation with hardcoded quote |

### 4.4 Functional Requirements

- **FR-1:** Answers must be selected before proceeding (quiz is sequential, not skippable).
- **FR-2:** Each answer increments +1 to the corresponding archetype counter.
- **FR-3:** In case of a tie, the first tied archetype (by definition order) wins.
- **FR-4:** The motivational quote must be fetched from an external API after quiz completion.
- **FR-5:** If the API call fails, a fallback array of 5 hardcoded quotes is used instead.
- **FR-6:** Share button copies result text to clipboard (Web Share API on mobile, `navigator.clipboard` on desktop).
- **FR-7:** Retake button resets all state and returns to Landing Page.

### 4.5 Non-Functional Requirements

| NFR | Requirement |
|-----|-------------|
| **Performance** | Page load ≤ 2 seconds on 3G (Tailwind CDN + minimal assets) |
| **Accessibility** | All interactive elements are keyboard navigable; color contrast meets WCAG AA |
| **Browser Support** | Chrome, Firefox, Safari, Edge (latest 2 versions) |
| **No Dependencies** | Single HTML file with Tailwind CDN; zero `node_modules`, zero build step |
| **Privacy** | No cookies, no localStorage beyond session, no tracking |

---

## 5. Next Features (Post-MVP Roadmap)

### Phase 1: Engagement & Virality
- **Shareable Image Export** — generate an image of the result card using `html2canvas` for easy sharing to Twitter/Instagram/Discord
- **Leaderboard** — global stats: "73% of developers are destined to be Catfish Farmers"
- **Sound Effects** — optional toggle: typewriter click sounds, crowd gasp on result reveal

### Phase 2: Freshness & Replay
- **Question Rotation** — pool of 20+ questions, randomly draws 8 per session, increasing replay value
- **Daily Quiz** — 3-question "mini quiz" that changes daily, different flavor text
- **More Archetypes** — Expand to 6-8 career outcomes: Ember Collector, Professional Line-Waiter, Cloud Yeller, etc.

### Phase 3: Personalization
- **Custom Input** — user types "What's stressing you out today?" to personalize the quiz vibe
- **Mood Tracker** — optional: log mood before and after quiz, display "you were X% happier after this"
- **Dark Mode / Retro Mode** — theme toggle (default dark, optional light, optional Windows 95 mode)

### Phase 4: Community
- **User-Submitted Questions** — allow users to submit quiz questions via a simple form
- **Voting System** — community upvotes the funniest submitted questions
- **Hall of Fame** — top-voted questions get permanently added to the pool with credit

---

## 6. Technical Design

### 6.1 Architecture

```
┌────────────────────────────────────────┐
│              index.html                │
│  ┌──────────┐  ┌────────────────────┐  │
│  │  HTML    │  │  Tailwind CSS CDN  │  │
│  │  (DOM)   │  │  (styling + grid)  │  │
│  └──────────┘  └────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │          app.js (inline)         │  │
│  │  - QuizStateMachine              │  │
│  │  - ScoringEngine                 │  │
│  │  - fetchQuote() → AdviceSlip API │  │
│  │  - UI transitions / animations   │  │
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘
```

### 6.2 Tech Stack

| Layer | Technology | Justification |
|-------|------------|---------------|
| Markup | HTML5 | Single file, semantic elements |
| Styling | Tailwind CSS (CDN) | Rapid styling, built-in responsive utilities, Flexbox/Grid classes |
| Layout | CSS Flexbox + CSS Grid | Assessment criteria; Flexbox for 1D, Grid for 2D answer layouts |
| Logic | Vanilla JavaScript (ES6+) | No framework overhead, meets "JavaScript for interactive features" |
| API | `api.adviceslip.com/advice` | Reliable, no API key, CORS-friendly, returns random motivational-ish advice |
| Hosting | Static (any HTTP server) | Single HTML file, zero deployment complexity |

### 6.3 Responsive Breakpoints

| Breakpoint | Width | Layout Behavior |
|------------|-------|-----------------|
| Mobile | < 640px | Single column, stacked answer buttons, smaller typography |
| Tablet | 640px - 1024px | 2-column answer grid, moderate spacing |
| Desktop | > 1024px | 2-column answer grid, wider progress bar, larger emojis |

### 6.4 Data Model (JavaScript Objects)

```javascript
// Quiz State
const state = {
  screen: 'landing',            // 'landing' | 'quiz' | 'result'
  currentQuestionIndex: 0,
  scores: { lele: 0, rumput: 0, kapalSelam: 0, kandangAyam: 0 },
  result: null,                 // archetype key after quiz
  quote: null                   // fetched quote text
};

// Question Object
{
  id: 1,
  question: "When your code finally compiles after 3 hours, you:",
  answers: [
    { text: "Cry tears of pure joy", career: "lele" },
    { text: "Immediately go outside", career: "rumput" },
    { text: "Rewrite it — not elegant enough", career: "kapalSelam" },
    { text: "Log off and go to sleep", career: "kandangAyam" }
  ]
}
```

---

## 7. Content Strategy

### 7.1 Tone & Voice

| Dimension | Guideline |
|-----------|-----------|
| **Tone** | Playful, absurd, self-deprecating (but not cruel) |
| **Voice** | A friend who's also a developer and also wants to quit |
| **Humor style** | Relatable programmer struggles + absurd rural contrast |
| **Sincerity** | The motivational quote at the end is 100% earnest — no irony |

### 7.2 Motivational Quotes (Fallback Set)

In case the external API fails, these 5 quotes are used as fallback:

1. "You are not your code. You are not your bugs. You are someone who builds things from nothing — and that's extraordinary."
2. "Every senior developer was once a junior who had no idea what they were doing. You're exactly where you need to be."
3. "The fact that you can make computers do things with words is magic. Don't forget that you are a wizard."
4. "Burnout doesn't mean you're weak. It means you've been strong for too long. Take the break."
5. "Programming is hard. You are harder. Rest, recharge, and come back — the compiler misses you."

---

## 8. Success Metrics (for MVP)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Quiz Completion Rate | ≥ 80% | Users who finish all 8 questions / users who clicked Start |
| API Fetch Success Rate | ≥ 95% | Successful quote fetches / total quiz completions |
| Share Click Rate | ≥ 20% | Users who clicked share / users who saw result |
| Retake Rate | ≥ 15% | Users who restarted quiz / users who saw result |
| Mobile Usability | Pass | Google Lighthouse Mobile score ≥ 90 |
| Avg Session Duration | 1.5 - 3 minutes | Time from landing to result + idle on result page |

---

## 9. Risks & Mitigations

| Risk | Severity | Mitigation |
|------|----------|------------|
| External API downtime | Low | Fallback array of 5 hardcoded motivational quotes |
| Quiz too long → drop-off | Medium | Progress bar shows remaining; time estimate "2 min left" |
| Content fatigue (same 8 questions) | Medium | Post-MVP: question rotation pool |
| Users take quiz literally | Low | Disclaimer text: "This is a joke. Please do not quit your job to farm catfish." |
| Tailwind CDN unreachable | Low | Option: inline critical styles as fallback (future) |

---

## 10. Out of Scope (MVP)

- User authentication / accounts
- Database or backend server
- Analytics or tracking
- Payment or monetization
- Multi-language support
- Custom domain / SEO
- Admin dashboard

---

## 11. Appendices

### A. References
- Stack Overflow Developer Survey 2023 — [stackoverflow.co/survey/2023](https://stackoverflow.co/survey/2023)
- OSMI Mental Health in Tech Survey 2023 — [osmihelp.org/research](https://osmihelp.org/research)
- JetBrains State of Developer Ecosystem 2023 — [jetbrains.com/lp/devecosystem-2023](https://www.jetbrains.com/lp/devecosystem-2023/)
- Harvard Business Review — "The Power of Micro-Breaks" — [hbr.org](https://hbr.org)

### B. Glossary
- **MVP:** Minimum Viable Product — the smallest version that delivers value.
- **Archetype:** A personality/career outcome determined by quiz scoring.
- **Micro-break:** A short, intentional pause from work (2-5 minutes) to reset focus.

### C. Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| v1.0 | 2026-05-09 | PRD Draft | Initial PRD created |

---

> **Disclaimer:** This product is satire. It is not a real career assessment tool. Please do not submit a resignation letter after getting "Catfish Farmer." The motivational quotes, however, are genuine. You matter. ❤️
