# 📚 Materi Lengkap: TouchGrass Project

> Dokumen ini menjelaskan konsep-konsep fundamental yang diterapkan dalam project **TouchGrass**, sebuah web aplikasi quiz dengan tema Windows 95 retro.

---

## 1. Flexbox dan CSS Grid untuk Tata Letak Responsif

### 📖 Apa itu Flexbox?

**Flexbox** (Flexible Box Layout) adalah sistem layout CSS satu dimensi (1D) yang memudahkan pengaturan elemen dalam satu baris (row) atau satu kolom (column). Flexbox dirancang untuk mengatur alignment, spacing, dan distribusi ruang antar item dalam container.

**Konsep Dasar Flexbox:**
- **Container** (parent) → elemen dengan `display: flex`
- **Items** (children) → elemen di dalam container yang akan diatur
- **Main Axis** → arah utama (default: horizontal/row)
- **Cross Axis** → arah tegak lurus main axis

**Property Utama Flexbox:**

| Property | Fungsi |
|----------|--------|
| `display: flex` | Mengaktifkan flexbox pada container |
| `flex-direction` | Arah layout: `row`, `column`, `row-reverse`, `column-reverse` |
| `justify-content` | Alignment horizontal: `center`, `space-between`, `flex-start`, dll |
| `align-items` | Alignment vertikal: `center`, `stretch`, `flex-start`, dll |
| `flex-wrap` | Apakah item boleh wrap ke baris baru: `wrap`, `nowrap` |
| `gap` | Jarak antar item |

### 📖 Apa itu CSS Grid?

**CSS Grid** adalah sistem layout CSS dua dimensi (2D) yang memungkinkan pengaturan elemen dalam baris DAN kolom secara bersamaan. Grid lebih powerful untuk layout kompleks yang memerlukan kontrol di kedua arah.

**Konsep Dasar CSS Grid:**
- **Grid Container** → elemen dengan `display: grid`
- **Grid Items** → elemen di dalam grid
- **Grid Lines** → garis pembatas antar kolom/bar
- **Grid Tracks** → kolom atau baris (area antar garis)
- **Grid Cells** → area perpotongan satu baris dan satu kolom

**Property Utama CSS Grid:**

| Property | Fungsi |
|----------|--------|
| `display: grid` | Mengaktifkan grid pada container |
| `grid-template-columns` | Mendefinisikan kolom (contoh: `1fr 1fr`, `repeat(3, 1fr)`) |
| `grid-template-rows` | Mendefinisikan baris |
| `grid-gap` / `gap` | Jarak antar grid cells |
| `grid-column` | Menentukan item menempati kolom ke berapa |
| `grid-row` | Menentukan item menempati baris ke berapa |

### 🎯 Use Case di Project TouchGrass

#### A. Flexbox Usage

**1. Centering Hero Window (Centering Horizontal + Vertikal)**
```css
.header-section {
  display: flex;              /* Aktifkan flexbox */
  flex-direction: column;     /* Stack vertikal */
  align-items: center;        /* Center horizontal */
  justify-content: center;    /* Center vertikal */
}
```
**Mengapa Flexbox?** Karena kita hanya perlu centering satu elemen (hero window) di tengah layar, baik horizontal maupun vertikal. Ini adalah kasus 1D yang sempurna untuk Flexbox.

**2. Navbar Layout**
```css
.navbar {
  display: flex;
  align-items: center;        /* Vertikal center */
  justify-content: space-between; /* Logo kiri, menu kanan */
}
```
**Mengapa Flexbox?** Navbar memiliki dua grup elemen (brand kiri, menu kanan) yang perlu disebar di satu baris horizontal. `justify-content: space-between` adalah solusi Flexbox yang ideal.

**3. Dialog Title Bar**
```css
.dialog-title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```
**Mengapa Flexbox?** Title bar memiliki ikon+teks di kiri dan tombol kontrol di kanan. Flexbox memudahkan alignment dan spacing.

**4. Result Actions (Tombol Share/Restart)**
```css
.result-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;            /* Wrap ke baris baru jika tidak muat */
}
```
**Mengapa Flexbox?** Tombol-tombol perlu di-center dan wrap otomatis jika layar kecil. `flex-wrap: wrap` sangat berguna untuk responsivitas.

**5. Quiz Container Vertical Stack**
```css
.quiz-container {
  display: flex;
  flex-direction: column;     /* Stack vertikal */
  gap: 1rem;                  /* Jarak antar elemen */
}
```

#### B. CSS Grid Usage

**1. Stats Grid (4 Kolom di Desktop, 2 di Tablet, 1 di Mobile)**
```css
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
```
**Mengapa Grid?** Kita memiliki 4 card statistik yang perlu tersusun dalam grid 2D. `auto-fit` dengan `minmax` memungkinkan grid otomatis menyesuaikan jumlah kolom berdasarkan lebar layar:
- Desktop lebar (>800px): 4 kolom
- Tablet (400-800px): 2 kolom
- Mobile (<400px): 1 kolom

**2. Archetype Grid (4 Card)**
```css
.archetype-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}
```

**3. Answers Grid (2 Kolom Desktop, 1 Kolom Mobile)**
```css
.answers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* 2 kolom sama besar */
  gap: 12px;
}

@media (max-width: 640px) {
  .answers-grid {
    grid-template-columns: 1fr;    /* 1 kolom di mobile */
  }
}
```
**Mengapa Grid?** Jawaban quiz perlu tersusun rapi dalam 2 kolom di desktop dan 1 kolom di mobile. Grid memberikan kontrol presisi atas susunan 2D ini.

**4. Dashboard Cards (2 Card Side-by-Side)**
```css
.dashboard-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 640px) {
  .dashboard-cards {
    grid-template-columns: 1fr;    /* Stack vertikal di mobile */
  }
}
```

**5. Coping Kit Grid (3 Kolom)**
```css
.coping-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

@media (max-width: 640px) {
  .coping-grid {
    grid-template-columns: 1fr;    /* 1 kolom di mobile */
  }
}
```

### 📊 Perbandingan Flexbox vs Grid di Project

| Skenario | Teknologi | Alasan |
|----------|-----------|--------|
| Centering satu elemen | Flexbox | Hanya perlu alignment 1D |
| Navbar horizontal | Flexbox | Distribusi item dalam satu baris |
| Stats card (4 item) | Grid | Layout 2D yang kompleks |
| Answer buttons | Grid | Susunan 2x2 yang responsif |
| Dashboard cards | Grid | Dua card yang sejajar |
| Tombol result | Flexbox | Center + wrap sederhana |

---

## 2. Hubungan HTML, CSS, dan JavaScript

### 📄 HTML (Struktur)

HTML adalah **kerangka** (skeleton) dari halaman web. Ia mendefinisikan struktur dan konten.

**File:** `index.html`, `login.html`, `dashboard.html`, `quiz.html`, `rating.html`

**Peran HTML di TouchGrass:**
- Menyusun elemen-elemen halaman: header, navbar, dialog boxes, form
- Memberikan struktur semantik: `<nav>`, `<main>`, `<article>`, `<footer>`
- Menyediakan container untuk CSS styling dan JS manipulation
- Menghubungkan file eksternal: `<link>` untuk CSS, `<script>` untuk JS

```html
<!-- Contoh struktur HTML di project -->
<body>
  <nav class="navbar">          <!-- Container untuk navbar CSS -->
    <a href="index.html">...</a> <!-- Link yang diatur CSS + JS -->
  </nav>
  
  <main class="dashboard-content"> <!-- Container utama -->
    <div id="question-window">     <!-- ID untuk JS manipulation -->
      <h2 id="question-text"></h2> <!-- Text yang diisi JS -->
    </div>
  </main>
  
  <script src="js/quiz.js"></script> <!-- Hubungkan JS -->
</body>
```

### 🎨 CSS (Presentasi)

CSS adalah **penampilan** (skin) dari halaman web. Ia mengatur warna, ukuran, posisi, dan tampilan visual.

**File:** `css/style.css`

**Peran CSS di TouchGrass:**
- **Styling visual:** Warna Windows 95 (grey, blue, white), border 3D bevel
- **Layout:** Flexbox dan Grid untuk tata letak
- **Responsive:** Media queries untuk mobile/tablet/desktop
- **Typography:** Font Press Start 2P untuk heading, system font untuk body
- **Animations:** Keyframes untuk blink cursor, bounce emoji

```css
/* CSS mengatur tampilan elemen HTML */
.navbar {
  background: var(--win95-grey);      /* Warna dari variabel CSS */
  display: flex;                       /* Layout flexbox */
  justify-content: space-between;      /* Spacing */
}
```

### ⚡ JavaScript (Interaktivitas)

JavaScript adalah **otak** (brain) dari halaman web. Ia menangani logika, interaksi user, dan manipulasi DOM.

**File:** `js/quiz.js`, `js/rating.js`, `js/app.js`

**Peran JavaScript di TouchGrass:**
- **State Management:** Menyimpan score quiz, index pertanyaan, mood check-in
- **DOM Manipulation:** Mengisi teks pertanyaan, membuat tombol jawaban, menampilkan hasil
- **Event Handling:** Menangani klik tombol, input slider, submit form
- **API Integration:** Fetch quote dari external API
- **Logic:** Scoring engine, kalkulasi burnout, penentuan archetype

```javascript
// JS mengubah konten HTML dan bereaksi terhadap user
function renderQuestion() {
  const question = quizData[state.currentQuestionIndex];
  questionText.textContent = question.question;  // Ubah teks HTML
  
  answersGrid.innerHTML = '';  // Hapus jawaban lama
  question.answers.forEach((answer) => {
    const btn = document.createElement('button');  // Buat elemen baru
    btn.textContent = answer.text;
    btn.addEventListener('click', () => selectAnswer(answer.career, btn));
    answersGrid.appendChild(btn);  // Tambah ke HTML
  });
}
```

### 🔗 Hubungan Ketiganya

```
┌─────────────────────────────────────────────────────┐
│                    HTML (index.html)                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │  <nav>   │  │ <main>   │  │ <footer> │          │
│  │  Navbar  │  │ Content  │  │  Footer  │          │
│  └──────────┘  └──────────┘  └──────────┘          │
│       ▲              ▲              ▲               │
│       │              │              │               │
│   ┌───┴────┐    ┌────┴────┐   ┌────┴────┐         │
│   │  CSS   │    │   CSS   │   │   CSS   │         │
│   │Styling │    │ Layout  │   │Styling  │         │
│   └───┬────┘    └────┬────┘   └────┬────┘         │
│       │              │              │               │
│       └──────────────┼──────────────┘               │
│                      │                              │
│              ┌───────┴───────┐                      │
│              │  JavaScript   │                      │
│              │ - Event Click │                      │
│              │ - DOM Update  │                      │
│              │ - API Fetch   │                      │
│              └───────────────┘                      │
└─────────────────────────────────────────────────────┘
```

**Alur Kerja:**
1. **Browser** membaca HTML → membangun DOM tree
2. **Browser** membaca CSS → menghitung style untuk setiap elemen
3. **Browser** membaca JS → mengeksekusi script, menambahkan event listeners
4. **User** berinteraksi (klik) → JS menangkap event → manipulasi DOM → tampilan berubah

---

## 3. Fungsi JavaScript yang Perlu Dipahami

### A. State Management Functions

#### `startQuiz()`
```javascript
function startQuiz() {
  state.currentQuestionIndex = 0;
  state.scores = { lele: 0, rumput: 0, kapalSelam: 0, kandangAyam: 0 };
  // Reset semua state ke awal
}
```
**Fungsi:** Me-reset semua state ke kondisi awal. Dipanggil saat quiz dimulai atau di-restart.

**Konsep:** **State Management** — Menyimpan data aplikasi dalam object JavaScript, bukan di HTML atau database.

---

#### `renderQuestion()`
```javascript
function renderQuestion() {
  const question = quizData[state.currentQuestionIndex];
  questionText.textContent = question.question;
  answersGrid.innerHTML = '';
  question.answers.forEach((answer) => {
    const btn = document.createElement('button');
    btn.textContent = answer.text;
    btn.addEventListener('click', () => selectAnswer(answer.career, btn));
    answersGrid.appendChild(btn);
  });
}
```
**Fungsi:** Menampilkan pertanyaan dan jawaban ke DOM. Mengambil data dari array `quizData` berdasarkan index saat ini.

**Konsep:**
- **DOM Manipulation** — `createElement`, `textContent`, `appendChild`
- **Event Listener** — `addEventListener('click', ...)`
- **Template Rendering** — Generate HTML dari data (tanpa framework)

---

### B. Event Handling Functions

#### `selectAnswer(career, btnElement)`
```javascript
function selectAnswer(career, btnElement) {
  if (state.isAnimating) return;  // Prevent double click
  
  const allBtns = answersGrid.querySelectorAll('.answer-btn');
  allBtns.forEach(b => b.classList.remove('selected'));
  btnElement.classList.add('selected');
  
  state.scores[career]++;  // Update score
  
  setTimeout(() => nextQuestion(), 400);  // Delay sebelum lanjut
}
```
**Fungsi:** Menangani klik jawaban user. Memberikan visual feedback (class `selected`) dan update score.

**Konsep:**
- **Event Delegation** — Event listener ditambahkan ke setiap tombol
- **State Update** — Mengubah data score
- **Visual Feedback** — Menambah/menghapus CSS class
- **Throttling** — `isAnimating` flag mencegah double-click

---

### C. Logic & Calculation Functions

#### `calculateResult()`
```javascript
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
```
**Fungsi:** Menghitung archetype pemenang berdasarkan score tertinggi.

**Konsep:**
- **Object Iteration** — `Object.entries()` mengubah object jadi array
- **Max Algorithm** — Mencari nilai tertinggi dengan iterasi
- **Tie Handling** — Karena `>` bukan `>=`, kalo seri yang pertama menang

---

#### `getBurnoutProfile(score)` (Self-Rating)
```javascript
function getBurnoutProfile(score) {
  const percent = Math.min(Math.round((score / state.maxBurnoutScore) * 100), 100);
  if (percent <= 30) return { key: 'healthy', percent, ...burnoutProfiles.healthy };
  if (percent <= 50) return { key: 'moderate', percent, ...burnoutProfiles.moderate };
  if (percent <= 65) return { key: 'high', percent, ...burnoutProfiles.high };
  return { key: 'critical', percent, ...burnoutProfiles.critical };
}
```
**Fungsi:** Mengkonversi raw score (0-80) ke kategori burnout (0-100%).

**Konsep:**
- **Normalization** — Mengubah skala 0-80 menjadi 0-100%
- **Conditional Logic** — Range-based categorization
- **Spread Operator** — `...burnoutProfiles.healthy` meng-copy semua property

---

### D. Async Functions

#### `fetchQuote()`
```javascript
async function fetchQuote() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    if (!response.ok) throw new Error('API failed');
    
    const data = await response.json();
    quoteText.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    quoteText.textContent = `"${randomQuote}"`;
  }
}
```
**Fungsi:** Mengambil quote dari API eksternal. Jika gagal, gunakan fallback.

**Konsep:**
- **Async/Await** — Penanganan operasi asynchronous
- **Fetch API** — HTTP request ke server
- **Error Handling** — Try-catch untuk graceful degradation
- **Fallback Pattern** — Plan B ketika API gagal

---

### E. Utility Functions

#### `updateMoodLabel()` (Self-Rating)
```javascript
function updateMoodLabel() {
  const slider = document.getElementById('mood-slider');
  const label = document.getElementById('mood-label');
  const val = parseInt(slider.value);
  
  if (val <= 2) { text = "😌 Feeling good"; color = "#008000"; }
  else if (val <= 4) { text = "🙂 A bit tired"; color = "#808000"; }
  // ...dll
}
```
**Fungsi:** Update label berdasarkan nilai slider. Memberikan feedback real-time.

**Konsep:**
- **Real-time DOM Update** — Merespons input user secara langsung
- **Conditional Rendering** — Menampilkan konten berbeda berdasarkan kondisi

---

## 4. Tailwind CSS di Project Ini

### 📖 Apa itu Tailwind?

Tailwind CSS adalah **utility-first CSS framework**. Alih-alih memberikan class semantic (seperti `btn-primary`), Tailwind memberikan class kecil-kecil (utility) yang masing-masing hanya melakukan satu hal (seperti `bg-blue-500`, `p-4`, `flex`).

### 🤔 Kenapa Tidak Menggunakan Tailwind di Project Ini?

Project TouchGrass sebenarnya menggunakan **Custom CSS** (vanilla CSS), bukan Tailwind. Tapi di awal project, kita merencanakan penggunaan Tailwind.

**Seandainya menggunakan Tailwind, ini yang akan dipakai:**

#### A. Layout (Flexbox & Grid)
```html
<!-- Dengan Tailwind -->
<div class="flex flex-col items-center justify-center">
  <!-- Centering vertikal dan horizontal -->
</div>

<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
  <!-- Grid 2 kolom mobile, 4 kolom desktop -->
</div>
```

#### B. Responsive Design
```html
<!-- Tailwind responsive breakpoints -->
<div class="w-full px-4 md:px-8 lg:px-12">
  <!-- Padding: 16px mobile, 32px tablet, 48px desktop -->
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <!-- 1 kolom mobile, 2 tablet, 4 desktop -->
</div>
```

**Breakpoints Tailwind:**
- `sm:` — 640px
- `md:` — 768px
- `lg:` — 1024px
- `xl:` — 1280px

#### C. Spacing
```html
<!-- Padding & Margin -->
<div class="p-4 md:p-8">          <!-- 16px mobile, 32px desktop -->
<div class="mt-4 mb-2">            <!-- Margin top 16px, bottom 8px -->
<div class="gap-4">                <!-- Gap antar flex/grid items -->
```

#### D. Colors & Typography
```html
<!-- Warna -->
<div class="bg-gray-200 text-blue-900">
<!-- Tailwind color palette: gray-200, blue-900, dll -->

<!-- Font -->
<p class="text-sm md:text-base lg:text-lg">
  <!-- Font size responsif -->
```

### 🎯 Mengapa Kita Pakai Custom CSS Sebagai Ganti Tailwind?

| Aspek | Tailwind | Custom CSS (Project Ini) |
|-------|----------|--------------------------|
| **Theme** | Utility classes | Windows 95 theme kompleks |
| **3D Borders** | Tidak native | Custom bevel borders |
| **Pixel Font** | Perlu config | Langsung @import Google Fonts |
| **File Size** | Bisa besar (CDN) | Minimal (hanya yang dipakai) |
| **Control** | Utility constraints | Full creative control |

**Keputusan:** Karena project memerlukan **Windows 95 retro theme** yang sangat spesifik (3D bevel borders, pixel font, classic grey color scheme), custom CSS lebih fleksibel.

---

## 5. Konsep Responsive: Desktop ke Mobile

### 📐 Breakpoints di Project

```css
/* Mobile First Approach */

/* Base styles — Mobile (< 640px) */
.answers-grid {
  grid-template-columns: 1fr;    /* 1 kolom */
}

/* Tablet (640px - 1024px) */
@media (min-width: 640px) {
  .answers-grid {
    grid-template-columns: 1fr 1fr;  /* 2 kolom */
  }
}

/* Desktop (> 1024px) */
@media (min-width: 1024px) {
  .hero-window {
    max-width: 700px;  /* Lebar maksimal */
  }
}
```

### 📱 Mobile First Approach

Project menggunakan pendekatan **Mobile First**:
1. **Base CSS** = Style untuk mobile (layar kecil)
2. **Media Queries** = Override untuk layar lebih besar

**Alasan Mobile First:**
- Mayoritas traffic web sekarang dari mobile
- Lebih mudah menambah kompleksitas (scale up) daripada mengurangi (scale down)
- Browser mobile lebih cepat memproses CSS yang lebih sederhana

### 🎯 Responsive Implementasi di Project

#### 1. Grid Adaptif (Stats & Archetypes)
```css
/* Mobile: 1 kolom (default) */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet & Desktop: auto-fit */
@media (min-width: 640px) {
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* Otomatis: 2 kolom tablet, 4 kolom desktop */
  }
}
```

#### 2. Typography Scaling
```css
/* Mobile */
.pixel-heading {
  font-size: 1.1rem;
}

/* Desktop */
@media (min-width: 640px) {
  .pixel-heading {
    font-size: 1.8rem;
  }
}
```

#### 3. Layout Switching
```css
/* Mobile: Stack vertikal */
.result-actions {
  flex-direction: column;
}

/* Desktop: Horizontal */
@media (min-width: 640px) {
  .result-actions {
    flex-direction: row;
  }
}
```

#### 4. Container Padding
```css
/* Mobile: padding kecil */
.content-section {
  padding: 2rem 0.75rem;
}

/* Desktop: padding lebih besar */
@media (min-width: 640px) {
  .content-section {
    padding: 3rem 1rem;
  }
}
```

#### 5. Touch Targets (Mobile Accessibility)
```css
.answer-btn {
  min-height: 48px;    /* Minimal touch target 48px (WCAG) */
  padding: 14px 16px;  /* Area klik yang besar */
}
```

### 📊 Perubahan Layout per Device

| Elemen | Mobile (<640px) | Tablet (640-1024px) | Desktop (>1024px) |
|--------|-----------------|---------------------|-------------------|
| **Stats Grid** | 1 kolom | 2 kolom | 4 kolom |
| **Answers** | 1 kolom (stack) | 2 kolom | 2 kolom |
| **Archetypes** | 1-2 kolom | 2 kolom | 4 kolom |
| **Dashboard Cards** | 1 kolom (stack) | 2 kolom | 2 kolom |
| **Coping Kit** | 1 kolom | 1-2 kolom | 3 kolom |
| **Navbar** | Compact | Normal | Normal |
| **Hero Window** | Full width | Full width | Max 700px |

### 🔧 Teknik Responsive Lainnya

#### Fluid Typography (Tanpa Media Query)
```css
.hero-subtitle {
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  /* Min: 0.9rem, Preferred: 2% viewport width, Max: 1.2rem */
}
```

#### Relative Units
```css
/* Menggunakan rem (relative to root font-size) */
.result-content {
  padding: 1.25rem;    /* 20px jika root = 16px */
}

/* Menggunakan % untuk width */
.progress-fill {
  width: 50%;    /* 50% dari container */
}
```

#### Viewport Meta Tag (HTML)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Penting: Memastikan mobile browser tidak zoom out -->
```

---

## 6. Ringkasan Konsep Kunci

### Flexbox vs Grid: Kapan Pakai Mana?

| Gunakan Flexbox Ketika... | Gunakan Grid Ketika... |
|---------------------------|------------------------|
| Layout 1 dimensi (satu baris/kolom) | Layout 2 dimensi (baris + kolom) |
| Content size tidak diketahui (dinamis) | Content size sudah diketahui |
| Perlu alignment di satu arah | Perlu control di kedua arah |
| Navbar, form alignment, centering | Card grid, gallery, dashboard |

### HTML-CSS-JS Relationship

```
HTML = Struktur (What)
CSS  = Presentasi (How it looks)
JS   = Behavior (How it works)
```

### Responsive Checklist

- [x] Mobile First approach
- [x] Fluid layouts (%, fr, auto-fit)
- [x] Media queries untuk breakpoint
- [x] Touch-friendly targets (min 48px)
- [x] Flexible images (`max-width: 100%`)
- [x] Readable typography (clamp, rem)
- [x] Testing di multiple screen sizes

---

> **Catatan:** Semua konsep di atas telah diterapkan dalam project TouchGrass. Untuk melihat implementasi detail, silakan periksa file:
> - `css/style.css` — untuk Flexbox, Grid, dan Responsive
> - `js/quiz.js` dan `js/rating.js` — untuk JavaScript logic
> - Semua file `.html` — untuk struktur dan hubungan ketiganya
