/**
 * TOUCHGRASS — FUN QUIZ (Pure Entertainment)
 * No burnout weights, no psychology. Just vibes.
 */

const quizData = [
  {
    id: 1,
    question: "When your code finally compiles after 3 hours, you:",
    answers: [
      { text: "😭 Cry tears of pure joy", career: "lele" },
      { text: "🌿 Immediately go outside", career: "rumput" },
      { text: "🤓 Rewrite it — not elegant enough", career: "kapalSelam" },
      { text: "😴 Log off and go to sleep", career: "kandangAyam" }
    ]
  },
  {
    id: 2,
    question: "Your spirit animal as a programmer is:",
    answers: [
      { text: "🐟 A catfish chilling in mud", career: "lele" },
      { text: "🌱 A blade of grass swaying", career: "rumput" },
      { text: "🚢 A submarine going deeper", career: "kapalSelam" },
      { text: "🐓 A rooster crowing at 4 AM", career: "kandangAyam" }
    ]
  },
  {
    id: 3,
    question: "How do you handle a production bug at 2 AM?",
    answers: [
      { text: "😌 'Tomorrow. Catfish also sleep.'", career: "lele" },
      { text: "🏃 Run outside for fresh air", career: "rumput" },
      { text: "📊 Build a dashboard first", career: "kapalSelam" },
      { text: "📋 'I predicted this, here's SOP'", career: "kandangAyam" }
    ]
  },
  {
    id: 4,
    question: "Your commit messages look like:",
    answers: [
      { text: "✍️ 'fix: semoga'", career: "lele" },
      { text: "🌈 'i need help'", career: "rumput" },
      { text: "📜 10 lines + diagram", career: "kapalSelam" },
      { text: "📋 'feat(ayam): pakan-v3.2.1'", career: "kandangAyam" }
    ]
  },
  {
    id: 5,
    question: "What makes you rage quit?",
    answers: [
      { text: "🤷 'Never, catfish are patient'", career: "lele" },
      { text: "💢 CSS centering", career: "rumput" },
      { text: "🤯 Dependency conflicts", career: "kapalSelam" },
      { text: "😤 Meeting at 7 AM", career: "kandangAyam" }
    ]
  },
  {
    id: 6,
    question: "Choose your dream desk setup:",
    answers: [
      { text: "🏞️ Beside a fish pond", career: "lele" },
      { text: "⛅ Open grass field", career: "rumput" },
      { text: "🕳️ Basement, 6 monitors", career: "kapalSelam" },
      { text: "🪵 Cozy wooden coop", career: "kandangAyam" }
    ]
  },
  {
    id: 7,
    question: "How many tabs do you have open?",
    answers: [
      { text: "📂 '20-ish, still remember'", career: "lele" },
      { text: "🔥 'Browser crashed'", career: "rumput" },
      { text: "📂📂📂 '100+, all important'", career: "kapalSelam" },
      { text: "📂 '3-5, neat'", career: "kandangAyam" }
    ]
  },
  {
    id: 8,
    question: "Finish this: 'It's not a bug, it's a...'",
    answers: [
      { text: "🎣 ...chance to fish catfish", career: "lele" },
      { text: "🌾 ...reason to touch grass", career: "rumput" },
      { text: "📖 ...edge case, 14 causes", career: "kapalSelam" },
      { text: "🐣 ...neighbor's chicken", career: "kandangAyam" }
    ]
  }
];

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

const state = {
  currentQuestionIndex: 0,
  scores: { lele: 0, rumput: 0, kapalSelam: 0, kandangAyam: 0 },
  selectedAnswer: null,
  isAnimating: false
};

const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const questionWindow = document.getElementById('question-window');
const calculatingWindow = document.getElementById('calculating-window');
const resultWindow = document.getElementById('result-window');
const questionText = document.getElementById('question-text');
const answersGrid = document.getElementById('answers-grid');
const resultEmoji = document.getElementById('result-emoji');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const resultSteps = document.getElementById('result-steps');
const quoteText = document.getElementById('quote-text');

function init() {
  startQuiz();
  document.getElementById('share-btn').addEventListener('click', shareResult);
  document.getElementById('restart-btn').addEventListener('click', startQuiz);
}

function startQuiz() {
  state.currentQuestionIndex = 0;
  state.scores = { lele: 0, rumput: 0, kapalSelam: 0, kandangAyam: 0 };
  state.selectedAnswer = null;
  state.isAnimating = false;
  
  questionWindow.style.display = 'block';
  calculatingWindow.style.display = 'none';
  resultWindow.style.display = 'none';
  
  renderQuestion();
}

function renderQuestion() {
  const question = quizData[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex) / quizData.length) * 100;
  
  progressFill.style.width = `${progress}%`;
  progressText.textContent = `Question ${state.currentQuestionIndex + 1} of ${quizData.length}`;
  questionText.textContent = question.question;
  
  answersGrid.innerHTML = '';
  question.answers.forEach((answer) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer.text;
    btn.addEventListener('click', () => selectAnswer(answer.career, btn));
    answersGrid.appendChild(btn);
  });
  
  state.selectedAnswer = null;
}

function selectAnswer(career, btnElement) {
  if (state.isAnimating) return;
  
  const allBtns = answersGrid.querySelectorAll('.answer-btn');
  allBtns.forEach(b => b.classList.remove('selected'));
  btnElement.classList.add('selected');
  
  state.scores[career]++;
  state.selectedAnswer = career;
  
  state.isAnimating = true;
  setTimeout(() => nextQuestion(), 400);
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
  progressFill.style.width = '100%';
  progressText.textContent = 'Analyzing...';
  questionWindow.style.display = 'none';
  calculatingWindow.style.display = 'block';
  
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

async function showResult(careerKey) {
  calculatingWindow.style.display = 'none';
  resultWindow.style.display = 'block';
  
  const archetype = archetypes[careerKey];
  
  resultEmoji.textContent = archetype.emoji;
  resultTitle.textContent = archetype.title;
  resultDescription.textContent = archetype.description;
  
  resultSteps.innerHTML = '';
  archetype.steps.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    resultSteps.appendChild(li);
  });
  
  await fetchQuote();
  state.isAnimating = false;
}

async function fetchQuote() {
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
  const shareText = `🌱 TouchGrass Result:\n\n${resultTitle.textContent}\n${resultDescription.textContent}\n\nTake the quiz: https://touchgrass.vercel.app/`;
  
  if (navigator.share) {
    navigator.share({ title: 'My TouchGrass Result', text: shareText }).catch(() => copyToClipboard(shareText));
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

init();
