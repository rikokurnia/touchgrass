/**
 * TOUCHGRASS — Quiz Application Logic
 * Windows 95 Retro Theme + Mental Health Features
 */

// ============================================
// QUIZ DATA (with Burnout Weights: 0-10)
// ============================================

const quizData = [
  {
    id: 1,
    question: "When your code finally compiles after 3 hours, you:",
    answers: [
      { text: "😭 Cry tears of pure joy", career: "lele", burnoutWeight: 8 },
      { text: "🌿 Immediately go outside", career: "rumput", burnoutWeight: 4 },
      { text: "🤓 Rewrite it — not elegant enough", career: "kapalSelam", burnoutWeight: 9 },
      { text: "😴 Log off and go to sleep", career: "kandangAyam", burnoutWeight: 3 }
    ]
  },
  {
    id: 2,
    question: "Your spirit animal as a programmer is:",
    answers: [
      { text: "🐟 A catfish chilling in mud", career: "lele", burnoutWeight: 5 },
      { text: "🌱 A blade of grass swaying", career: "rumput", burnoutWeight: 3 },
      { text: "🚢 A submarine going deeper", career: "kapalSelam", burnoutWeight: 9 },
      { text: "🐓 A rooster crowing at 4 AM", career: "kandangAyam", burnoutWeight: 7 }
    ]
  },
  {
    id: 3,
    question: "How do you handle a production bug at 2 AM?",
    answers: [
      { text: "😌 'Tomorrow. Catfish also sleep.'", career: "lele", burnoutWeight: 4 },
      { text: "🏃 Run outside for fresh air", career: "rumput", burnoutWeight: 3 },
      { text: "📊 Build a dashboard first", career: "kapalSelam", burnoutWeight: 10 },
      { text: "📋 'I predicted this, here's SOP'", career: "kandangAyam", burnoutWeight: 6 }
    ]
  },
  {
    id: 4,
    question: "Your commit messages look like:",
    answers: [
      { text: "✍️ 'fix: semoga'", career: "lele", burnoutWeight: 6 },
      { text: "🌈 'i need help'", career: "rumput", burnoutWeight: 7 },
      { text: "📜 10 lines + diagram", career: "kapalSelam", burnoutWeight: 8 },
      { text: "📋 'feat(ayam): pakan-v3.2.1'", career: "kandangAyam", burnoutWeight: 4 }
    ]
  },
  {
    id: 5,
    question: "What makes you rage quit?",
    answers: [
      { text: "🤷 'Never, catfish are patient'", career: "lele", burnoutWeight: 2 },
      { text: "💢 CSS centering", career: "rumput", burnoutWeight: 5 },
      { text: "🤯 Dependency conflicts", career: "kapalSelam", burnoutWeight: 8 },
      { text: "😤 Meeting at 7 AM", career: "kandangAyam", burnoutWeight: 6 }
    ]
  },
  {
    id: 6,
    question: "Choose your dream desk setup:",
    answers: [
      { text: "🏞️ Beside a fish pond", career: "lele", burnoutWeight: 3 },
      { text: "⛅ Open grass field", career: "rumput", burnoutWeight: 2 },
      { text: "🕳️ Basement, 6 monitors", career: "kapalSelam", burnoutWeight: 10 },
      { text: "🪵 Cozy wooden coop", career: "kandangAyam", burnoutWeight: 4 }
    ]
  },
  {
    id: 7,
    question: "How many tabs do you have open?",
    answers: [
      { text: "📂 '20-ish, still remember'", career: "lele", burnoutWeight: 6 },
      { text: "🔥 'Browser crashed'", career: "rumput", burnoutWeight: 7 },
      { text: "📂📂📂 '100+, all important'", career: "kapalSelam", burnoutWeight: 9 },
      { text: "📂 '3-5, neat'", career: "kandangAyam", burnoutWeight: 3 }
    ]
  },
  {
    id: 8,
    question: "Finish this: 'It's not a bug, it's a...'",
    answers: [
      { text: "🎣 ...chance to fish catfish", career: "lele", burnoutWeight: 4 },
      { text: "🌾 ...reason to touch grass", career: "rumput", burnoutWeight: 3 },
      { text: "📖 ...edge case, 14 causes", career: "kapalSelam", burnoutWeight: 8 },
      { text: "🐣 ...neighbor's chicken", career: "kandangAyam", burnoutWeight: 5 }
    ]
  }
];

// ============================================
// ARCHETYPE DATA (with Coping Kits)
// ============================================

const archetypes = {
  lele: {
    emoji: "🐟",
    title: "CATFISH FARMER",
    description: "You have the patience of a thousand debuggers. The mud doesn't scare you. You debug like you'd raise catfish — slowly, faithfully, in murky conditions.",
    steps: [
      "Sell your laptop on eBay",
      "Dig a pond in your backyard",
      "Buy 500 catfish fingerlings",
      "Profit (maybe in 6-8 months)"
    ],
    copingKit: [
      { icon: "🧘", title: "5-Minute Stillness", desc: "Sit by a window. Don't code. Don't scroll. Just breathe." },
      { icon: "🌧️", title: "Embrace the Mud", desc: "Your patience is a superpower — but mud needs breaks too." },
      { icon: "📵", title: "Tab Bankruptcy", desc: "Close every tab. Yes, even Stack Overflow. Start fresh tomorrow." }
    ]
  },
  rumput: {
    emoji: "🌿",
    title: "PROFESSIONAL GRASS TOUCHER",
    description: "You have gone too deep. Go outside. Touch grass. This is your destiny. The sunlight misses you.",
    steps: [
      "Close your laptop (do it now)",
      "Walk outside barefoot",
      "Touch actual grass",
      "Don't come back for at least 30 minutes"
    ],
    copingKit: [
      { icon: "🚶", title: "10-Minute Walk", desc: "No phone. No music. Just you and the outside world." },
      { icon: "☀️", title: "Sunlight Therapy", desc: "Spend 15 mins in direct sunlight. Vitamin D is real medicine." },
      { icon: "🌳", title: "Digital Sunset", desc: "Set a hard stop at 6 PM. The code will still be there tomorrow." }
    ]
  },
  kapalSelam: {
    emoji: "🚢",
    title: "SUBMARINE PARKING ATTENDANT",
    description: "You don't just solve problems — you over-engineer solutions to problems that don't exist. You'd design a Kubernetes cluster for underwater vehicles.",
    steps: [
      "Sell 5 of your 6 monitors",
      "Buy a used submarine on Craigslist",
      "Build a parking system with microservices",
      "Question why you're doing this"
    ],
    copingKit: [
      { icon: "✂️", title: "YAGNI Reminder", desc: "You Aren't Gonna Need It. Write simpler code. Ship faster. Rest sooner." },
      { icon: "🎯", title: "One Thing Rule", desc: "Today, finish ONE task. Not ten. One. Done is better than perfect." },
      { icon: "🤝", title: "Ask for Help", desc: "You don't need to solve everything alone. Ping a colleague." }
    ]
  },
  kandangAyam: {
    emoji: "🐔",
    title: "CHICKEN COOP GUARD",
    description: "Your discipline is unmatched. The roosters salute you. Your 9 AM stand-up is late. The chickens have been up since 4 AM.",
    steps: [
      "Maintain your 4 AM wake-up routine",
      "Replace stand-up with cock-a-doodle-doo",
      "Guard the coop with military precision",
      "Become the coop legend"
    ],
    copingKit: [
      { icon: "😴", title: "Sleep In", desc: "Tomorrow, wake up at 7 AM instead of 4. The world won't end." },
      { icon: "🎮", title: "Scheduled Play", desc: "Block 30 mins for a game. Guilt-free. Your brain needs play." },
      { icon: "💬", title: "Talk to Humans", desc: "Have one non-work conversation today. About anything." }
    ]
  }
};

// Fallback quotes in case API fails
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
  currentQuestionIndex: 0,
  scores: { lele: 0, rumput: 0, kapalSelam: 0, kandangAyam: 0 },
  selectedAnswer: null,
  isAnimating: false,
  moodCheckIn: 5,
  totalBurnoutScore: 0,
  maxBurnoutScore: 80,
  burnoutLevel: 0
};

// ============================================
// DOM ELEMENTS
// ============================================

const startBtn = document.getElementById('start-quiz-btn');
const quizOverlay = document.getElementById('quiz-overlay');
const questionWindow = document.getElementById('question-window');
const calculatingWindow = document.getElementById('calculating-window');
const resultWindow = document.getElementById('result-window');
const moodWindow = document.getElementById('mood-window');
const questionText = document.getElementById('question-text');
const answersGrid = document.getElementById('answers-grid');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const resultEmoji = document.getElementById('result-emoji');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const resultSteps = document.getElementById('result-steps');
const quoteText = document.getElementById('quote-text');
const shareBtn = document.getElementById('share-btn');
const restartBtn = document.getElementById('restart-btn');

// ============================================
// FUNCTIONS
// ============================================

function init() {
  if (document.body.classList.contains('dashboard-page')) {
    showMoodCheckin();
  }
  
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      showMoodCheckin();
    });
  }
  if (shareBtn) {
    shareBtn.addEventListener('click', shareResult);
  }
  if (restartBtn) {
    restartBtn.addEventListener('click', restartQuiz);
  }
}

// ── Mood Check-in ──
function showMoodCheckin() {
  if (moodWindow) {
    moodWindow.style.display = 'block';
    if (questionWindow) questionWindow.style.display = 'none';
    if (calculatingWindow) calculatingWindow.style.display = 'none';
    if (resultWindow) resultWindow.style.display = 'none';
    if (progressFill) progressFill.style.width = '0%';
    if (progressText) progressText.textContent = 'Step 1 of 2: Check-In';
  }
}

function submitMoodCheckin() {
  const slider = document.getElementById('mood-slider');
  if (slider) {
    state.moodCheckIn = parseInt(slider.value);
  }
  
  if (moodWindow) moodWindow.style.display = 'none';
  
  // Reset and start quiz
  state.currentQuestionIndex = 0;
  state.scores = { lele: 0, rumput: 0, kapalSelam: 0, kandangAyam: 0 };
  state.totalBurnoutScore = 0;
  state.selectedAnswer = null;
  state.isAnimating = false;
  
  if (questionWindow) questionWindow.style.display = 'block';
  renderQuestion();
}

function updateMoodLabel() {
  const slider = document.getElementById('mood-slider');
  const label = document.getElementById('mood-label');
  if (!slider || !label) return;
  
  const val = parseInt(slider.value);
  let text = '';
  let color = '';
  
  if (val <= 2) {
    text = "😌 Feeling good — just here for fun";
    color = "#008000";
  } else if (val <= 4) {
    text = "🙂 A bit tired, but managing";
    color = "#808000";
  } else if (val <= 6) {
    text = "😬 Stressed — could use a break";
    color = "#ff8000";
  } else if (val <= 8) {
    text = "😰 Burnt out — this quiz might help";
    color = "#ff4000";
  } else {
    text = "🚨 Critical — please take care of yourself";
    color = "#ff0000";
  }
  
  label.textContent = text;
  label.style.color = color;
}

function startQuiz() {
  state.currentQuestionIndex = 0;
  state.scores = { lele: 0, rumput: 0, kapalSelam: 0, kandangAyam: 0 };
  state.totalBurnoutScore = 0;
  state.selectedAnswer = null;
  state.isAnimating = false;
  
  if (quizOverlay) {
    quizOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  
  if (questionWindow) questionWindow.style.display = 'block';
  if (calculatingWindow) calculatingWindow.style.display = 'none';
  if (resultWindow) resultWindow.style.display = 'none';
  if (moodWindow) moodWindow.style.display = 'none';
  
  renderQuestion();
}

function renderQuestion() {
  const question = quizData[state.currentQuestionIndex];
  
  const progress = ((state.currentQuestionIndex) / quizData.length) * 100;
  if (progressFill) progressFill.style.width = `${progress}%`;
  if (progressText) progressText.textContent = `Question ${state.currentQuestionIndex + 1} of ${quizData.length}`;
  
  if (questionText) questionText.textContent = question.question;
  
  if (answersGrid) {
    answersGrid.innerHTML = '';
    question.answers.forEach((answer) => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.textContent = answer.text;
      btn.addEventListener('click', () => selectAnswer(answer.career, answer.burnoutWeight, btn));
      answersGrid.appendChild(btn);
    });
  }
  
  state.selectedAnswer = null;
}

function selectAnswer(career, burnoutWeight, btnElement) {
  if (state.isAnimating) return;
  
  const allBtns = answersGrid.querySelectorAll('.answer-btn');
  allBtns.forEach(b => b.classList.remove('selected'));
  btnElement.classList.add('selected');
  
  state.scores[career]++;
  state.totalBurnoutScore += burnoutWeight;
  state.selectedAnswer = career;
  
  state.isAnimating = true;
  setTimeout(() => {
    nextQuestion();
  }, 400);
}

function nextQuestion() {
  state.currentQuestionIndex++;
  
  if (state.currentQuestionIndex < quizData.length) {
    renderQuestion();
    state.isAnimating = false;
  } else {
    showCalculating();
  }
}

function showCalculating() {
  if (progressFill) progressFill.style.width = '100%';
  if (progressText) progressText.textContent = 'Analyzing...';
  
  if (questionWindow) questionWindow.style.display = 'none';
  if (calculatingWindow) calculatingWindow.style.display = 'block';
  
  setTimeout(() => {
    const result = calculateResult();
    showResult(result);
  }, 2500);
}

function calculateResult() {
  const entries = Object.entries(state.scores);
  let maxScore = -1;
  let winner = entries[0][0];
  
  for (const [career, score] of entries) {
    if (score > maxScore) {
      maxScore = score;
      winner = career;
    }
  }
  
  return winner;
}

function getBurnoutLevel(score) {
  if (score <= 30) return { label: "HEALTHY", color: "#008000", emoji: "✅" };
  if (score <= 50) return { label: "MODERATE", color: "#ff8000", emoji: "⚠️" };
  if (score <= 65) return { label: "HIGH", color: "#ff4000", emoji: "🔥" };
  return { label: "CRITICAL", color: "#ff0000", emoji: "🚨" };
}

async function showResult(careerKey) {
  if (calculatingWindow) calculatingWindow.style.display = 'none';
  if (resultWindow) resultWindow.style.display = 'block';
  
  const archetype = archetypes[careerKey];
  
  // Calculate burnout percentage
  const burnoutPercent = Math.min(Math.round((state.totalBurnoutScore / state.maxBurnoutScore) * 100), 100);
  const burnoutInfo = getBurnoutLevel(burnoutPercent);
  const moodDiff = Math.abs(state.moodCheckIn - Math.round(burnoutPercent / 10));
  
  // Render burnout score
  const burnoutContainer = document.getElementById('burnout-score-container');
  if (burnoutContainer) {
    burnoutContainer.innerHTML = `
      <div class="burnout-score-box" style="border-color: ${burnoutInfo.color};">
        <div class="burnout-label" style="color: ${burnoutInfo.color};">
          ${burnoutInfo.emoji} BURNOUT LEVEL: ${burnoutInfo.label}
        </div>
        <div class="burnout-number" style="color: ${burnoutInfo.color};">
          ${burnoutPercent}%
        </div>
        <div class="burnout-bar-container">
          <div class="burnout-bar-fill" style="width: ${burnoutPercent}%; background: ${burnoutInfo.color};"></div>
        </div>
        <div class="mood-comparison">
          You rated yourself ${state.moodCheckIn}/10. Quiz detected ${Math.round(burnoutPercent / 10)}/10.
          ${moodDiff >= 3 ? '<br><span style="color: #ff0000;">⚠️ Big gap — you might be underestimating your stress.</span>' : '<br><span style="color: #008000;">✅ Your self-awareness is on point.</span>'}
        </div>
      </div>
    `;
  }
  
  // Render archetype result
  if (resultEmoji) resultEmoji.textContent = archetype.emoji;
  if (resultTitle) resultTitle.textContent = archetype.title;
  if (resultDescription) resultDescription.textContent = archetype.description;
  
  if (resultSteps) {
    resultSteps.innerHTML = '';
    archetype.steps.forEach(step => {
      const li = document.createElement('li');
      li.textContent = step;
      resultSteps.appendChild(li);
    });
  }
  
  // Render coping kit
  const copingContainer = document.getElementById('coping-kit-container');
  if (copingContainer) {
    copingContainer.innerHTML = `
      <h3 class="coping-heading">🧠 YOUR COPING KIT</h3>
      <div class="coping-grid">
        ${archetype.copingKit.map(item => `
          <div class="coping-card">
            <div class="coping-icon">${item.icon}</div>
            <div class="coping-title">${item.title}</div>
            <div class="coping-desc">${item.desc}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // Fetch quote from API
  await fetchQuote();
  
  state.isAnimating = false;
}

async function fetchQuote() {
  if (quoteText) quoteText.textContent = 'Fetching wisdom...';
  
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    if (!response.ok) throw new Error('API failed');
    
    const data = await response.json();
    if (data && data.slip && data.slip.advice) {
      if (quoteText) quoteText.textContent = `"${data.slip.advice}"`;
    } else {
      throw new Error('Invalid data');
    }
  } catch (error) {
    console.log('API fetch failed, using fallback:', error);
    const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    if (quoteText) quoteText.textContent = `"${randomQuote}"`;
  }
}

function shareResult() {
  const resultTitleText = resultTitle ? resultTitle.textContent : '';
  const resultDescText = resultDescription ? resultDescription.textContent : '';
  
  const shareText = `🌱 TouchGrass Result:\n\n${resultTitleText}\n${resultDescText}\n\nTake the quiz: https://touchgrass.vercel.app/`;
  
  if (navigator.share) {
    navigator.share({
      title: 'My TouchGrass Result',
      text: shareText
    }).catch(() => {
      copyToClipboard(shareText);
    });
  } else {
    copyToClipboard(shareText);
  }
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Result copied to clipboard! Paste it anywhere.');
    }).catch(() => {
      alert('Could not copy automatically. Here is your result:\n\n' + text);
    });
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      document.execCommand('copy');
      alert('Result copied to clipboard!');
    } catch (err) {
      alert('Here is your result:\n\n' + text);
    }
    
    document.body.removeChild(textarea);
  }
}

function restartQuiz() {
  if (document.body.classList.contains('dashboard-page')) {
    showMoodCheckin();
    return;
  }
  
  if (quizOverlay) {
    quizOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }
  
  if (questionWindow) questionWindow.style.display = 'block';
  if (calculatingWindow) calculatingWindow.style.display = 'none';
  if (resultWindow) resultWindow.style.display = 'none';
  if (moodWindow) moodWindow.style.display = 'none';
  
  state.currentQuestionIndex = 0;
  state.scores = { lele: 0, rumput: 0, kapalSelam: 0, kandangAyam: 0 };
  state.totalBurnoutScore = 0;
  state.selectedAnswer = null;
  state.isAnimating = false;
  state.burnoutLevel = 0;
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// INITIALIZE
// ============================================

init();

// Expose functions to window for onclick handlers
window.submitMoodCheckin = submitMoodCheckin;
window.updateMoodLabel = updateMoodLabel;
