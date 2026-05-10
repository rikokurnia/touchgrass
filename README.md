# 🌱 TouchGrass

> *"Laugh at yourself before your code makes you cry."*

**TouchGrass** is a humor-driven, retro-themed web quiz designed to give burnt-out developers a 2-minute micro-break. Built with a nostalgic Windows 95 aesthetic, it diagnoses which absurd alternative career you are destined for — because sometimes the best therapy is realizing you should be a **Catfish Farmer**.

🔗 **Live Demo:** [https://touchgrass.vercel.app](https://touchhgrass.vercel.app) 

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🏠 **Landing Page** | Eye-catching hero with stats, hooks, and archetype previews |
| 🔐 **Login Page** | Retro Windows 95 login form (FE only, no backend) |
| 📊 **Quiz Dashboard** | 8 interactive questions with progress tracking |
| 🎯 **4 Career Results** | Catfish Farmer, Grass Toucher, Submarine Parking Attendant, Chicken Coop Guard |
| 🔗 **Fetch API** | Random motivational quote from [Advice Slip API](https://api.adviceslip.com) |
| 📱 **Responsive** | Fully responsive across desktop, tablet, and mobile |
| 🪟 **Win95 Theme** | Authentic Windows 95 UI with pixel fonts, beveled borders, and classic grey tones |

---

## 🛠 Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom Win95 theme, Flexbox, CSS Grid
- **JavaScript (ES6+)** — Quiz logic, state management, API fetching
- **Tailwind CSS** *(CDN)* — Utility classes for rapid responsive layout
- **Google Fonts** — Press Start 2P (pixel font)

---

## 📁 Project Structure

```
touchgrass/
├── index.html              # Landing page
├── login.html              # Login form (FE only)
├── dashboard.html          # Quiz dashboard
├── css/
│   └── style.css           # Win95 theme + responsive styles
├── js/
│   └── app.js              # Quiz engine + API logic
└── public/
    └── images/
        ├── bg-header.png       # Hero background (sky/grass)
        ├── second-bg.jpeg      # Content background (grass field)
        ├── second-bg2.png      # Login/dashboard background (grass)
        └── reference/          # Style reference images
```

---

## 🚀 Getting Started

### Option 1: Open Directly
Simply open `touchgrass/index.html` in your browser.

### Option 2: Local Server
```bash
cd touchgrass
npx serve .
# or
python3 -m http.server 8000
```

### Option 3: Deploy to Vercel
1. Push this repo to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Set **Root Directory** to `touchgrass`
4. Deploy!

---

## 🎮 How It Works

1. **Landing Page** → Read the dire stats about developer burnout
2. **Login** → Enter any credentials (fake login for demo purposes) or continue as guest
3. **Dashboard** → Answer 8 relatable multiple-choice questions
4. **Calculating** → Watch the "analyzing your life choices" animation
5. **Result** → Receive your absurd career + a motivational quote from the internet
6. **Share** → Copy your result or retake the quiz

---

## 🔌 API Integration

The app fetches a random motivational quote from:

```
GET https://api.adviceslip.com/advice
```

If the API fails, it gracefully falls back to one of 5 hardcoded quotes.

---

## 📊 The 4 Career Archetypes

| Archetype | Emoji | Trait |
|-----------|-------|-------|
| **Catfish Farmer** | 🐟 | Patient, nurturing, ok with mud |
| **Professional Grass Toucher** | 🌿 | Needs sunlight, disconnected, touch grass |
| **Submarine Parking Attendant** | 🚢 | Over-engineers, over-thinks everything |
| **Chicken Coop Guard** | 🐔 | Disciplined, routine-driven, early riser |

---

## 📝 Credits

- **Data Sources:** Stack Overflow Developer Survey 2023, OSMI Mental Health in Tech, JetBrains State of Developer Ecosystem 2023
- **API:** [Advice Slip](https://api.adviceslip.com)
- **Font:** [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) by CodeMan38
- **Theme Inspiration:** Windows 95 / 98 Classic UI

---

## ⚠️ Disclaimer

This is a satire project for entertainment purposes. It is **not** a real career assessment tool. Please do not quit your job to farm catfish based on this quiz.

That said — the motivational quotes are genuine. You matter. 💙

---

<p align="center">
  <sub>Built with 💙, burnout, and way too much caffeine.</sub>
</p>
