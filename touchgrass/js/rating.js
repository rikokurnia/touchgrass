/**
 * TOUCHGRASS — SELF-RATING (Mental Health Assessment)
 * Burnout detection + coping kit. Serious but gentle.
 */

// ============================================
// MENTAL HEALTH QUESTIONS (with burnout weights 0-10)
// ============================================

const ratingQuestions = [
  {
    id: 1,
    question: "In the past 2 weeks, how often have you felt exhausted even after a full night's sleep?",
    answers: [
      { text: "Never — I wake up refreshed", weight: 1 },
      { text: "Rarely — Once or twice", weight: 3 },
      { text: "Often — Most days", weight: 7 },
      { text: "Always — Every single day", weight: 10 }
    ]
  },
  {
    id: 2,
    question: "How's your sleep quality been lately?",
    answers: [
      { text: "😴 Great — 7-8 hours, deep sleep", weight: 1 },
      { text: "😐 Okay — Sometimes disrupted", weight: 4 },
      { text: "😟 Poor — Hard to fall/stay asleep", weight: 7 },
      { text: "💀 Terrible — 3-4 hours or insomnia", weight: 10 }
    ]
  },
  {
    id: 3,
    question: "When you think about opening your code editor, you feel:",
    answers: [
      { text: "Excited — Let's build something!", weight: 1 },
      { text: "Neutral — It's just work", weight: 4 },
      { text: "Dread — I procrastinate for hours", weight: 7 },
      { text: "Panic — I can't even look at it", weight: 10 }
    ]
  },
  {
    id: 4,
    question: "How often do you feel like you're 'faking it' and will be exposed as incompetent?",
    answers: [
      { text: "Never — I know my worth", weight: 1 },
      { text: "Sometimes — Occasional doubt", weight: 4 },
      { text: "Often — Most coding sessions", weight: 7 },
      { text: "Constantly — I feel like a fraud", weight: 10 }
    ]
  },
  {
    id: 5,
    question: "In the last 2 weeks, how often have you felt irritable or snapped at people?",
    answers: [
      { text: "Never — I'm a zen monk", weight: 1 },
      { text: "Rarely — Bad days happen", weight: 3 },
      { text: "Often — My fuse is short", weight: 7 },
      { text: "Always — Everything annoys me", weight: 10 }
    ]
  },
  {
    id: 6,
    question: "How's your social life outside of work/tech?",
    answers: [
      { text: "Great — I see friends/family regularly", weight: 1 },
      { text: "Okay — Sometimes, but busy", weight: 4 },
      { text: "Poor — Mostly online only", weight: 7 },
      { text: "None — I don't remember last time", weight: 10 }
    ]
  },
  {
    id: 7,
    question: "How often do you work or think about work outside office hours?",
    answers: [
      { text: "Never — Strict boundaries", weight: 1 },
      { text: "Sometimes — Occasional check", weight: 4 },
      { text: "Often — Evenings and weekends", weight: 7 },
      { text: "Always — Even in my dreams", weight: 10 }
    ]
  },
  {
    id: 8,
    question: "When you imagine your life 1 year from now, you feel:",
    answers: [
      { text: "Hopeful — Excited for what's next", weight: 1 },
      { text: "Uncertain — But curious", weight: 4 },
      { text: "Anxious — Scared of more of the same", weight: 7 },
      { text: "Empty — I can't picture anything good", weight: 10 }
    ]
  }
];

// ============================================
// BURNOUT PROFILES (based on score ranges)
// ============================================

const burnoutProfiles = {
  healthy: {
    emoji: "🌱",
    title: "THRIVING DEVELOPER",
    description: "You're doing well! Your stress levels are manageable and you have healthy boundaries. Keep nurturing your well-being.",
    copingKit: [
      { icon: "🌟", title: "Maintain Balance", desc: "Keep doing what you're doing. Your habits are working." },
      { icon: "🤝", title: "Help Others", desc: "Share your healthy routines with colleagues who are struggling." },
      { icon: "📈", title: "Level Up", desc: "With this energy, it's a great time to learn something new." }
    ]
  },
  moderate: {
    emoji: "⚠️",
    title: "STRESSED BUT FUNCTIONING",
    description: "You're feeling the pressure. Not critical yet, but the warning lights are on. Time to slow down before it gets worse.",
    copingKit: [
      { icon: "😴", title: "Sleep First", desc: "Aim for 7-8 hours tonight. No screens 1 hour before bed." },
      { icon: "🚶", title: "20-Min Walk", desc: "Daily. No phone. Just you and fresh air." },
      { icon: "⏰", title: "Set Boundaries", desc: "No work after 6 PM. The code will wait." }
    ]
  },
  high: {
    emoji: "🔥",
    title: "BURNOUT WARNING",
    description: "Your well-being is at risk. You're running on fumes and it's affecting your health. Please take this seriously.",
    copingKit: [
      { icon: "🛑", title: "Take a Day Off", desc: "Not a weekend. A real weekday off. No laptop. No exceptions." },
      { icon: "🗣️", title: "Talk to Someone", desc: "A friend, mentor, or therapist. Don't carry this alone." },
      { icon: "📵", title: "Digital Detox", desc: "48 hours without work notifications. Let your team know." }
    ]
  },
  critical: {
    emoji: "🚨",
    title: "CRITICAL BURNOUT",
    description: "This isn't sustainable. Your physical and mental health are at serious risk. Please prioritize yourself immediately.",
    copingKit: [
      { icon: "🏥", title: "Seek Professional Help", desc: "A therapist or counselor can help. It's not weakness — it's wisdom." },
      { icon: "✋", title: "Stop Working NOW", desc: "Take sick leave. Your health is more important than any deadline." },
      { icon: "💚", title: "Tell Someone Close", desc: "Let family or friends know. You need support right now." }
    ]
  }
};

const fallbackQuotes = [
  "You are not your code. You are not your bugs. You are someone who builds things from nothing — and that's extraordinary.",
  "Every senior developer was once a junior who had no idea what they were doing. You're exactly where you need to be.",
  "The fact that you can make computers do things with words is magic. Don't forget that you are a wizard.",
  "Burnout doesn't mean you're weak. It means you've been strong for too long. Take the break.",
  "Programming is hard. You are harder. Rest, recharge, and come back — the compiler misses you."
];

// ============================================
// STATE
// ============================================

const state = {
  moodCheckIn: 5,
  currentQuestionIndex: 0,
  totalBurnoutScore: 0,
  maxBurnoutScore: 80,
  isAnimating: false
};

// ============================================
// DOM ELEMENTS
// ============================================

const moodWindow = document.getElementById('mood-window');
const questionWindow = document.getElementById('rating-question-window');
const calculatingWindow = document.getElementById('rating-calculating-window');
const resultWindow = document.getElementById('rating-result-window');
const progressFill = document.getElementById('rating-progress-fill');
const progressText = document.getElementById('rating-progress-text');
const questionText = document.getElementById('rating-question-text');
const answersGrid = document.getElementById('rating-answers-grid');

// ============================================
// FUNCTIONS
// ============================================

function updateMoodLabel() {
  const slider = document.getElementById('mood-slider');
  const label = document.getElementById('mood-label');
  if (!slider || !label) return;
  
  const val = parseInt(slider.value);
  let text = '';
  let color = '';
  
  if (val <= 2) { text = "😌 Feeling good — just here for awareness"; color = "#008000"; }
  else if (val <= 4) { text = "🙂 A bit tired, but managing"; color = "#808000"; }
  else if (val <= 6) { text = "😬 Stressed — could use a break"; color = "#ff8000"; }
  else if (val <= 8) { text = "😰 Burnt out — this assessment might help"; color = "#ff4000"; }
  else { text = "🚨 Critical — please take care of yourself"; color = "#ff0000"; }
  
  label.textContent = text;
  label.style.color = color;
}

function submitMoodCheckin() {
  const slider = document.getElementById('mood-slider');
  if (slider) state.moodCheckIn = parseInt(slider.value);
  
  moodWindow.style.display = 'none';
  questionWindow.style.display = 'block';
  
  state.currentQuestionIndex = 0;
  state.totalBurnoutScore = 0;
  state.isAnimating = false;
  
  renderQuestion();
}

function renderQuestion() {
  const question = ratingQuestions[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex) / ratingQuestions.length) * 100;
  
  progressFill.style.width = `${progress}%`;
  progressText.textContent = `Question ${state.currentQuestionIndex + 1} of ${ratingQuestions.length}`;
  questionText.textContent = question.question;
  
  answersGrid.innerHTML = '';
  question.answers.forEach((answer) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer.text;
    btn.addEventListener('click', () => selectAnswer(answer.weight, btn));
    answersGrid.appendChild(btn);
  });
}

function selectAnswer(weight, btnElement) {
  if (state.isAnimating) return;
  
  const allBtns = answersGrid.querySelectorAll('.answer-btn');
  allBtns.forEach(b => b.classList.remove('selected'));
  btnElement.classList.add('selected');
  
  state.totalBurnoutScore += weight;
  
  state.isAnimating = true;
  setTimeout(() => nextQuestion(), 400);
}

function nextQuestion() {
  state.currentQuestionIndex++;
  
  if (state.currentQuestionIndex < ratingQuestions.length) {
    renderQuestion();
    state.isAnimating = false;
  } else {
    showCalculating();
  }
}

function showCalculating() {
  progressFill.style.width = '100%';
  progressText.textContent = 'Analyzing...';
  questionWindow.style.display = 'none';
  calculatingWindow.style.display = 'block';
  
  setTimeout(() => showResult(), 2500);
}

function getBurnoutProfile(score) {
  const percent = Math.min(Math.round((score / state.maxBurnoutScore) * 100), 100);
  if (percent <= 30) return { key: 'healthy', percent, ...burnoutProfiles.healthy };
  if (percent <= 50) return { key: 'moderate', percent, ...burnoutProfiles.moderate };
  if (percent <= 65) return { key: 'high', percent, ...burnoutProfiles.high };
  return { key: 'critical', percent, ...burnoutProfiles.critical };
}

function getBurnoutLevelInfo(percent) {
  if (percent <= 30) return { label: "HEALTHY", color: "#008000", emoji: "✅" };
  if (percent <= 50) return { label: "MODERATE", color: "#ff8000", emoji: "⚠️" };
  if (percent <= 65) return { label: "HIGH", color: "#ff4000", emoji: "🔥" };
  return { label: "CRITICAL", color: "#ff0000", emoji: "🚨" };
}

async function showResult() {
  calculatingWindow.style.display = 'none';
  resultWindow.style.display = 'block';
  
  const profile = getBurnoutProfile(state.totalBurnoutScore);
  const levelInfo = getBurnoutLevelInfo(profile.percent);
  const moodDiff = Math.abs(state.moodCheckIn - Math.round(profile.percent / 10));
  
  // Render burnout score
  const burnoutContainer = document.getElementById('burnout-score-container');
  if (burnoutContainer) {
    burnoutContainer.innerHTML = `
      <div class="burnout-score-box" style="border-color: ${levelInfo.color};">
        <div class="burnout-label" style="color: ${levelInfo.color};">
          ${levelInfo.emoji} BURNOUT LEVEL: ${levelInfo.label}
        </div>
        <div class="burnout-number" style="color: ${levelInfo.color};">
          ${profile.percent}%
        </div>
        <div class="burnout-bar-container">
          <div class="burnout-bar-fill" style="width: ${profile.percent}%; background: ${levelInfo.color};"></div>
        </div>
        <div class="mood-comparison">
          You rated yourself ${state.moodCheckIn}/10. Assessment detected ${Math.round(profile.percent / 10)}/10.
          ${moodDiff >= 3 
            ? '<br><span style="color: #ff0000;">⚠️ Big gap — you might be underestimating your stress.</span>' 
            : '<br><span style="color: #008000;">✅ Your self-awareness is on point.</span>'
          }
        </div>
      </div>
    `;
  }
  
  // Render profile result
  document.getElementById('rating-result-emoji').textContent = profile.emoji;
  document.getElementById('rating-result-title').textContent = profile.title;
  document.getElementById('rating-result-description').textContent = profile.description;
  
  // Render coping kit
  const copingContainer = document.getElementById('coping-kit-container');
  if (copingContainer) {
    copingContainer.innerHTML = `
      <h3 class="coping-heading">🧠 YOUR COPING KIT</h3>
      <div class="coping-grid">
        ${profile.copingKit.map(item => `
          <div class="coping-card">
            <div class="coping-icon">${item.icon}</div>
            <div class="coping-title">${item.title}</div>
            <div class="coping-desc">${item.desc}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // Show crisis warning if critical
  const crisisWarning = document.getElementById('crisis-warning');
  if (crisisWarning) {
    crisisWarning.style.display = profile.key === 'critical' ? 'block' : 'none';
  }
  
  // Fetch quote
  await fetchQuote();
  state.isAnimating = false;
}

async function fetchQuote() {
  const quoteText = document.getElementById('rating-quote-text');
  if (!quoteText) return;
  quoteText.textContent = 'Fetching wisdom...';
  
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    if (!response.ok) throw new Error('API failed');
    
    const data = await response.json();
    if (data && data.slip && data.slip.advice) {
      quoteText.textContent = `"${data.slip.advice}"`;
    } else {
      throw new Error('Invalid data');
    }
  } catch (error) {
    const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    quoteText.textContent = `"${randomQuote}"`;
  }
}

function shareResult() {
  const title = document.getElementById('rating-result-title').textContent;
  const desc = document.getElementById('rating-result-description').textContent;
  const shareText = `🌱 TouchGrass Self-Rating:\n\n${title}\n${desc}\n\nCheck your well-being: https://touchgrass.vercel.app/`;
  
  if (navigator.share) {
    navigator.share({ title: 'My Well-being Rating', text: shareText }).catch(() => copyToClipboard(shareText));
  } else {
    copyToClipboard(shareText);
  }
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => alert('Result copied!'));
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Result copied!');
  }
}

function restartRating() {
  moodWindow.style.display = 'block';
  questionWindow.style.display = 'none';
  calculatingWindow.style.display = 'none';
  resultWindow.style.display = 'none';
  
  state.currentQuestionIndex = 0;
  state.totalBurnoutScore = 0;
  state.isAnimating = false;
  
  progressFill.style.width = '0%';
  progressText.textContent = 'Step 1 of 2: Check-In';
}

// ============================================
// INIT
// ============================================

updateMoodLabel();

document.getElementById('rating-share-btn').addEventListener('click', shareResult);
document.getElementById('rating-restart-btn').addEventListener('click', restartRating);

// Expose to window for onclick handlers
window.updateMoodLabel = updateMoodLabel;
window.submitMoodCheckin = submitMoodCheckin;
