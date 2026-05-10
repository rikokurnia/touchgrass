# 🌱 TouchGrass

> *"Laugh at yourself before your code makes you cry."*

**TouchGrass** is a dual-purpose web application for developers, wrapped in a nostalgic Windows 95 aesthetic:

1. 🎮 **Fun Quiz** — 8 absurd questions that determine which ridiculous alternative career you are destined for (Catfish Farmer, Grass Toucher, Submarine Parking Attendant, or Chicken Coop Guard).

2. 🧠 **Self-Rating** — An honest mental health check-in that measures your burnout level (0-100%) and gives you actionable coping tips.

Because sometimes the best therapy is realizing you should farm catfish. And sometimes you actually need real help.

🔗 **Live Demo:** [https://touchgrass.vercel.app](https://touchgrass.vercel.app)

---

## ✨ Features

### 🎮 Fun Quiz (Entertainment)
| Feature | Description |
|---------|-------------|
| 🏠 **Landing Page** | Hero with burnout stats, hooks, and archetype previews |
| 🎮 **Fun Quiz** | 8 absurd, dev-relatable multiple-choice questions |
| 🎯 **4 Career Archetypes** | Catfish Farmer, Grass Toucher, Submarine Parking Attendant, Chicken Coop Guard |
| 📋 **Career Guide** | Hilarious step-by-step "transition guide" for your result |
| 🔗 **API Quote** | Random motivational quote from [Advice Slip API](https://api.adviceslip.com) |

### 🧠 Self-Rating (Mental Health)
| Feature | Description |
|---------|-------------|
| 🧠 **Mood Check-In** | Pre-quiz slider: rate your burnout 1-10 |
| 📊 **8 Psychology Questions** | Evidence-inspired questions about exhaustion, sleep, impostor syndrome, isolation |
| 🔥 **Burnout Score** | 0-100% with category: Healthy / Moderate / High / Critical |
| ⚖️ **Mood Comparison** | Compares your self-rating vs. quiz detection |
| 🧰 **Coping Kit** | 3 actionable tips tailored to your burnout level |
| 🚨 **Crisis Warning** | Displays if your score is Critical |

### 🎨 Design & Tech
| Feature | Description |
|---------|-------------|
| 🪟 **Win95 Theme** | Authentic Windows 95 UI with pixel fonts, beveled borders, and classic grey tones |
| 📱 **Responsive** | Fully responsive across desktop, tablet, and mobile (Flexbox + CSS Grid) |
| 🔐 **Login (FE Only)** | Fake login form for demo flow — no backend, no auth |

---

## 🛠 Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom Win95 theme, Flexbox, CSS Grid, responsive media queries
- **JavaScript (ES6+)** — Quiz logic, state management, API fetching
- **Google Fonts** — Press Start 2P (pixel font)

---

## 📁 Project Structure

```
touchgrass/
├── index.html              # Landing page (hero + stats)
├── login.html              # Login form (FE only, no backend)
├── dashboard.html          # Post-login dashboard (2 card selection)
├── quiz.html               # Fun Quiz page
├── rating.html             # Self-Rating / Mental Health page
├── css/
│   └── style.css           # Win95 theme + responsive styles
├── js/
│   ├── quiz.js             # Fun Quiz logic (8 questions, archetypes)
│   └── rating.js           # Self-Rating logic (mood slider, burnout score, coping kit)
└── public/
    └── images/
        ├── bg-header.png       # Hero background (sky/grass)
        ├── logo.png            # Favicon
        ├── second-bg.jpeg      # Landing page content background
        └── second-bg2.png      # Login/dashboard background
```

---

## 🚀 Getting Started

### Option 1: Local Server (Recommended)
```bash
cd touchgrass
python3 -m http.server 8000
```
Buka: `http://localhost:8000`

### Option 2: Deploy to Vercel
1. Push repo ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Set **Root Directory** ke `touchgrass`
4. Deploy!

---

## 🎮 How It Works

### Flow 1: Fun Quiz
1. **Landing Page** → Lihat statistik burnout developer
2. **Login** → Masukkan credentials (fake) atau Guest
3. **Dashboard** → Pilih card **🎮 Fun Quiz**
4. **8 Questions** → Jawab pertanyaan absurd
5. **Calculating** → Animasi "analyzing your life choices"
6. **Result** → Dapatkan archetype + career guide + quote API
7. **Share** → Copy result atau retake

### Flow 2: Self-Rating
1. **Landing Page** → Lihat statistik burnout developer
2. **Login** → Masukkan credentials (fake) atau Guest
3. **Dashboard** → Pilih card **🧠 Self-Rating**
4. **Mood Check-In** → Slide 1-10: seberapa burnt out kamu?
5. **8 Questions** → Jawab pertanyaan kesehatan mental
6. **Calculating** → Animasi "analyzing your well-being"
7. **Result** → Dapatkan burnout score (0-100%), coping kit, quote API
8. **Retake** → Cek progress minggu depan

---

## 🔌 API Integration

```
GET https://api.adviceslip.com/advice
```

Jika API gagal, secara otomatis fallback ke 5 hardcoded motivational quotes.

---

## 📊 The 4 Career Archetypes (Fun Quiz)

| Archetype | Emoji | Trait |
|-----------|-------|-------|
| **Catfish Farmer** | 🐟 | Patient, nurturing, ok with mud |
| **Professional Grass Toucher** | 🌿 | Needs sunlight, disconnected |
| **Submarine Parking Attendant** | 🚢 | Over-engineers everything |
| **Chicken Coop Guard** | 🐔 | Disciplined, routine-driven |

---

## 🔥 Burnout Levels (Self-Rating)

| Level | Score | Emoji | Description |
|-------|-------|-------|-------------|
| **Healthy** | 0-30% | 🌱 | You're doing well! Keep it up. |
| **Moderate** | 31-50% | ⚠️ | Warning lights are on. Slow down. |
| **High** | 51-65% | 🔥 | Your well-being is at risk. Take action. |
| **Critical** | 66-100% | 🚨 | Please prioritize yourself. Seek help. |

---

## 📝 Credits

- **Data Sources:** Stack Overflow Developer Survey 2023, OSMI Mental Health in Tech, JetBrains State of Developer Ecosystem 2023
- **API:** [Advice Slip](https://api.adviceslip.com)
- **Font:** [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) by CodeMan38
- **Theme Inspiration:** Windows 95 / 98 Classic UI

---

## ⚠️ Disclaimer

**Fun Quiz** is pure satire. It is **not** a real career assessment tool. Please do not quit your job to farm catfish based on this quiz.

**Self-Rating** is inspired by psychological concepts but is **not** a diagnostic tool. If you are experiencing serious mental health issues, please consult a professional.

That said — you matter. Your code does not define you. 💙

---

<p align="center">
  <sub>Built with 💙, burnout, and way too much caffeine.</sub>
</p>
