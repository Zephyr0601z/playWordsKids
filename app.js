const {
  courseWords,
  wordExpressions,
  lessonTitles,
  lessonSections,
  sectionStories,
  lessonStoryFor,
  lessons,
} = window.PlayWordsCore;
let profileKey = "guest";
let currentProfile = {
  name: "Guest",
  age: "",
  level: "启蒙",
  guardian: "",
  isGuest: true,
};
let currentLessonIndex = 0;
let practicedWords = new Set();
let wordStats = {};
let stars = 0;
let courseCompleted = false;
let selectedWord = lessons[0].words[0];
let currentMoleTarget = selectedWord.word;
let draggedMatch = null;
let draggedElement = null;
let selectedDragWord = null;
let currentSoundWord = lessons[0].words[0];
let recognition = null;
let isListening = false;
let lessonMode = "course";
let preferredEnglishVoice = null;
let preferredChineseVoice = null;
let chantTimers = [];
let chantRunId = 0;
let matchPlaneTimer = null;

const appStage = document.querySelector("#appStage");
const loginScreen = document.querySelector("#loginScreen");
const kidName = document.querySelector("#kidName");
const kidAge = document.querySelector("#kidAge");
const kidLevel = document.querySelector("#kidLevel");
const guardianName = document.querySelector("#guardianName");
const profileText = document.querySelector("#profileText");
const buddy = document.querySelector("#buddy");
const wordText = document.querySelector("#wordText");
const wordChinese = document.querySelector("#wordChinese");
const wordChineseBtn = document.querySelector("#wordChineseBtn");
const wordHint = document.querySelector("#wordHint");
const storyWorld = document.querySelector("#storyWorld");
const storyTitle = document.querySelector("#storyTitle");
const storyMission = document.querySelector("#storyMission");
const phraseText = document.querySelector("#phraseText");
const sceneText = document.querySelector("#sceneText");
const rhymeText = document.querySelector("#rhymeText");
const chantMeaning = document.querySelector("#chantMeaning");
const chantBeats = document.querySelector("#chantBeats");
const phonicsBlend = document.querySelector("#phonicsBlend");
const phonicsChunks = document.querySelector("#phonicsChunks");
const starCount = document.querySelector("#starCount");
const wordCards = document.querySelector("#wordCards");
const lessonTag = document.querySelector("#lessonTag");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonProgress = document.querySelector("#lessonProgress");
const lessonSteps = document.querySelector("#lessonSteps");
const nextLessonBtn = document.querySelector("#nextLessonBtn");
const repeatBtn = document.querySelector("#repeatBtn");
const manualDoneBtn = document.querySelector("#manualDoneBtn");
const rewardOverlay = document.querySelector("#rewardOverlay");
const rewardText = document.querySelector("#rewardText");
const courseCompleteOverlay = document.querySelector("#courseCompleteOverlay");
const completeSummary = document.querySelector("#completeSummary");
const completeWordCount = document.querySelector("#completeWordCount");
const completeLessonCount = document.querySelector("#completeLessonCount");
const completeStarCount = document.querySelector("#completeStarCount");
const finalWordParade = document.querySelector("#finalWordParade");
const matchPlaneReward = document.querySelector("#matchPlaneReward");
const homeLessonTag = document.querySelector("#homeLessonTag");
const homeLessonTitle = document.querySelector("#homeLessonTitle");
const homeLessonStatus = document.querySelector("#homeLessonStatus");
const todayWords = document.querySelector("#todayWords");
const reviewCount = document.querySelector("#reviewCount");
const courseMap = document.querySelector("#courseMap");
const questList = document.querySelector("#questList");
const stickerShelf = document.querySelector("#stickerShelf");
const parentStats = document.querySelector("#parentStats");
const parentReportList = document.querySelector("#parentReportList");
const parentTip = document.querySelector("#parentTip");
const screens = document.querySelectorAll(".screen");
const tabs = document.querySelectorAll(".tab");

function storageKey() {
  return `playwords-progress-${profileKey}`;
}

function profileStorageKey(key = profileKey) {
  return `playwords-profile-${key}`;
}

function normalizeProfileKey(name) {
  return name.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/gi, "-").replace(/^-|-$/g, "") || "little-star";
}

function saveProfile() {
  if (currentProfile.isGuest) return;
  localStorage.setItem(profileStorageKey(), JSON.stringify(currentProfile));
  localStorage.setItem("playwords-last-profile-key", profileKey);
}

function loadProfile(key) {
  if (!key) return null;
  const raw = localStorage.getItem(profileStorageKey(key));
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveProgress() {
  localStorage.setItem(
    storageKey(),
    JSON.stringify({
      lesson: currentLessonIndex,
      stars,
      practiced: [...practicedWords],
      wordStats,
      completed: courseCompleted,
    })
  );
}

function loadProgress() {
  currentLessonIndex = 0;
  stars = 0;
  practicedWords = new Set();
  wordStats = {};
  courseCompleted = false;

  const raw = localStorage.getItem(storageKey());
  if (!raw) return;

  try {
    const progress = JSON.parse(raw);
    currentLessonIndex = Math.min(progress.lesson || 0, lessons.length - 1);
    stars = progress.stars || 0;
    practicedWords = new Set(progress.practiced || []);
    wordStats = progress.wordStats || {};
    courseCompleted = Boolean(progress.completed);
  } catch {
    currentLessonIndex = 0;
    practicedWords = new Set();
    wordStats = {};
    courseCompleted = false;
  }
}

function currentLesson() {
  return lessons[currentLessonIndex];
}

function currentLessonWords() {
  if (lessonMode === "review") {
    const words = reviewDueWords();
    if (words.length) return words;
    const learned = learnedWords();
    return learned.length ? learned.slice(-4) : currentLesson().words;
  }

  return currentLesson().words;
}

function unlockedWords() {
  return courseWords.slice(0, (currentLessonIndex + 1) * 4);
}

function learnedWords() {
  const previous = courseWords.slice(0, currentLessonIndex * 4);
  const current = currentLesson().words.filter((word) => practicedWords.has(word.word));
  return [...previous, ...current];
}

function setActiveScreen(screenName) {
  tabs.forEach((item) => item.classList.toggle("active", item.dataset.screen === screenName));
  screens.forEach((screen) => screen.classList.toggle("active-screen", screen.id === screenName));
  if (screenName === "lesson") updateVoiceFallback();
  if (screenName === "parent") renderParentReport();
}

function sample(items, count) {
  return [...items].sort(() => Math.random() - 0.5).slice(0, count);
}

function wordSection(word) {
  return lessons.find((lesson) => lesson.words.some((item) => item.word === word.word))?.section || "Core";
}

const artPalettes = {
  Animals: ["#b86f5d", "#f5d7a6", "#fff4df"],
  Food: ["#7aa66b", "#f3c978", "#fff2d2"],
  Actions: ["#5f9fbd", "#d8eab5", "#fff6e8"],
  Home: ["#b88a6b", "#e7c7a2", "#fff3df"],
  Colors: ["#c66f73", "#dfb4c6", "#fff0df"],
  Numbers: ["#ba8a3a", "#f2d16d", "#fff7d8"],
  Family: ["#c07a69", "#f0c2ad", "#fff0e6"],
  Body: ["#7ea68c", "#f0c7ae", "#fff1e2"],
  Feelings: ["#d19a4a", "#f4d37d", "#fff5d7"],
  Clothes: ["#8d84bb", "#dfc3d9", "#fff1e8"],
  Weather: ["#6d9eb8", "#d9e7ef", "#fff7e6"],
  Shapes: ["#7ba36d", "#d9c6ef", "#fff5df"],
  School: ["#b58b4c", "#e5d19b", "#fff6dc"],
  Nature: ["#6e9a68", "#d3df9c", "#fff5d9"],
  Transport: ["#5f8fa8", "#e4b08e", "#fff1dc"],
  Polite: ["#c48a5a", "#f2c881", "#fff2dc"],
  Core: ["#7ba7b4", "#f2cf8f", "#fff5df"],
};

function iconCat() {
  return `<path class="art-body" d="M27 53 L34 31 L45 42 Q50 39 55 42 L66 31 L73 53 Q73 76 50 78 Q27 76 27 53Z" /><circle class="art-eye" cx="42" cy="57" r="3" /><circle class="art-eye" cx="58" cy="57" r="3" /><path class="art-smile" d="M43 65 Q50 71 57 65" />`;
}

function iconDog() {
  return `<ellipse class="art-body" cx="50" cy="58" rx="25" ry="21" /><path class="art-ear left" d="M31 43 C19 42 20 65 32 66" /><path class="art-ear right" d="M69 43 C81 42 80 65 68 66" /><circle class="art-eye" cx="42" cy="56" r="3" /><circle class="art-eye" cx="58" cy="56" r="3" /><path class="art-smile" d="M42 66 Q50 72 58 66" />`;
}

function iconBird() {
  return `<ellipse class="art-body" cx="52" cy="56" rx="22" ry="19" /><path class="art-wing" d="M36 57 C20 47 21 75 38 68" /><path class="art-beak" d="M70 55 L86 62 L70 67Z" /><circle class="art-eye" cx="57" cy="50" r="3" /><path class="art-line" d="M41 78 L35 86 M55 78 L59 86" />`;
}

function iconFish() {
  return `<path class="art-body" d="M25 58 C38 36 70 39 78 58 C70 77 38 80 25 58Z" /><path class="art-wing" d="M76 58 L91 45 L91 71Z" /><circle class="art-eye" cx="43" cy="54" r="3" /><path class="art-wave soft" d="M18 76 C28 68 37 84 47 76 C57 68 66 84 76 76" />`;
}

function iconApple() {
  return `<path class="art-body" d="M31 66 C23 44 38 32 50 42 C62 32 77 44 69 66 C62 84 38 84 31 66Z" /><path class="art-line" d="M50 41 C50 33 54 28 61 25" /><path class="art-leaf" d="M58 28 C70 20 78 31 64 38" />`;
}

function iconBanana() {
  return `<path class="art-body" d="M25 62 C42 79 70 76 82 43 C67 60 45 66 29 48 C27 53 26 58 25 62Z" /><path class="art-line" d="M34 58 C48 68 65 63 76 49" />`;
}

function iconBook() {
  return `<path class="art-body" d="M22 36 C35 31 44 34 50 40 C56 34 65 31 78 36 V75 C66 70 57 72 50 79 C43 72 34 70 22 75Z" /><path class="art-line" d="M50 40 V78 M31 47 H43 M57 47 H70 M31 57 H42 M58 57 H70" />`;
}

function iconVehicle(type = "car") {
  if (type === "plane" || type === "rocket") return `<path class="art-wing" d="M20 59 L80 33 L66 65 L88 78 L75 88 L55 74 L36 83Z" /><path class="art-line" d="M24 78 C39 72 54 65 70 55" />`;
  if (type === "boat" || type === "ship") return `<path class="art-body" d="M24 60 H82 L70 78 H34Z" /><path class="art-wing" d="M48 34 V58 H70 C64 47 58 39 48 34Z" /><path class="art-wave soft" d="M21 83 C32 75 42 91 53 83 C64 75 74 91 85 83" />`;
  return `<path class="art-body" d="M23 57 H31 L38 43 H65 L75 57 H82 V73 H23Z" /><circle class="art-dot" cx="37" cy="75" r="7" /><circle class="art-dot" cx="68" cy="75" r="7" /><path class="art-line" d="M41 49 H61" />`;
}

function iconWeather(type) {
  if (type === "sun" || type === "sunny" || type === "hot") return `<circle class="art-body" cx="50" cy="55" r="19" /><path class="art-line" d="M50 24 V34 M50 76 V86 M19 55 H29 M71 55 H82 M28 33 L35 40 M65 70 L72 77 M72 33 L65 40 M35 70 L28 77" />`;
  if (type === "rain" || type === "storm") return `<path class="art-cloud" d="M25 55 H75 C86 55 86 42 74 41 C70 27 50 27 46 42 C35 35 20 44 25 55Z" /><path class="art-rain" d="M36 66 L31 80 M52 65 L47 82 M68 66 L63 80" />`;
  if (type === "snow" || type === "cold") return `<path class="art-spark" d="M50 29 V80 M30 40 L70 69 M70 40 L30 69 M38 31 L50 42 L62 31 M38 78 L50 67 L62 78" />`;
  return `<path class="art-cloud" d="M25 60 H75 C86 60 86 47 74 46 C70 32 50 32 46 47 C35 40 20 49 25 60Z" />`;
}

function iconPerson(kind = "person") {
  const hair = kind === "mom" || kind === "girl" || kind === "sister" ? `<path class="art-ear" d="M29 53 C28 29 72 29 71 53 C67 39 33 39 29 53Z" />` : "";
  return `${hair}<circle class="art-body" cx="50" cy="45" r="16" /><path class="art-body" d="M27 82 C31 65 69 65 73 82Z" /><circle class="art-eye" cx="44" cy="45" r="2.7" /><circle class="art-eye" cx="56" cy="45" r="2.7" /><path class="art-smile" d="M43 53 Q50 58 57 53" />`;
}

function iconShape(name) {
  if (name === "circle" || name === "oval") return `<circle class="art-shape" cx="50" cy="56" r="24" />`;
  if (name === "triangle") return `<path class="art-shape" d="M50 28 L78 77 H22Z" />`;
  if (name === "diamond") return `<path class="art-shape" d="M50 25 L78 55 L50 85 L22 55Z" />`;
  if (name === "star") return `<path class="art-spark" d="M50 25 L58 44 L79 45 L63 59 L68 80 L50 68 L32 80 L37 59 L21 45 L42 44Z" />`;
  if (name === "heart") return `<path class="art-body" d="M50 78 C27 61 24 43 37 35 C45 30 50 38 50 38 C50 38 55 30 63 35 C76 43 73 61 50 78Z" />`;
  return `<rect class="art-shape" x="27" y="34" width="46" height="42" rx="9" />`;
}

function iconObject(name, section, action) {
  if (["cat", "lion", "tiger", "rabbit", "bear", "monkey", "cow", "pig", "sheep", "horse", "frog", "duck", "bee"].includes(name)) {
    if (name === "bird" || name === "bee" || name === "duck") return iconBird();
    return name === "dog" ? iconDog() : iconCat();
  }
  if (name === "bird" || name === "bee" || name === "duck") return iconBird();
  if (name === "fish") return iconFish();
  if (name === "apple") return iconApple();
  if (name === "banana") return iconBanana();
  if (["cake", "cookie", "pizza", "bread", "cheese"].includes(name)) return `<path class="art-body" d="M25 68 L75 42 V76 H25Z" /><path class="art-line" d="M31 62 H67 M39 55 H69" /><circle class="art-dot" cx="45" cy="67" r="4" />`;
  if (["milk", "water", "juice", "soup"].includes(name)) return `<path class="art-body" d="M35 32 H65 L70 78 H30Z" /><path class="art-line" d="M34 51 H66" /><path class="art-wave soft" d="M36 65 C43 58 50 72 57 65 C62 60 66 63 69 66" />`;
  if (["book", "read", "paper"].includes(name)) return iconBook();
  if (["car", "bus", "train", "taxi", "truck", "scooter", "bike", "subway"].includes(name)) return iconVehicle("car");
  if (["plane", "rocket"].includes(name)) return iconVehicle("plane");
  if (["boat", "ship"].includes(name)) return iconVehicle("boat");
  if (["sun", "sunny", "hot", "warm"].includes(name)) return iconWeather("sun");
  if (["rain", "storm", "cloud", "foggy"].includes(name)) return iconWeather("rain");
  if (["snow", "cold"].includes(name)) return iconWeather("snow");
  if (["circle", "oval", "square", "rectangle", "triangle", "diamond", "star", "heart"].includes(name)) return iconShape(name);
  if (["mom", "dad", "baby", "grandma", "grandpa", "sister", "brother", "friend", "boy", "girl", "teacher", "family"].includes(name)) return iconPerson(name);
  if (["bed", "chair", "sofa", "pillow", "table", "desk"].includes(name)) return `<path class="art-body" d="M25 52 H75 V74 H25Z" /><path class="art-line" d="M29 74 V84 M71 74 V84 M30 49 C36 39 50 43 50 52" />`;
  if (["door", "window", "lamp", "clock", "tv", "phone"].includes(name)) return `<rect class="art-shape" x="31" y="33" width="38" height="45" rx="8" /><circle class="art-dot" cx="61" cy="56" r="4" /><path class="art-line" d="M39 42 H57 M39 66 H57" />`;
  if (["hat", "shoes", "coat", "socks", "shirt", "pants", "dress", "skirt", "shorts", "scarf", "gloves", "boots"].includes(name)) return `<path class="art-body" d="M32 40 C42 31 58 31 68 40 L62 78 H38Z" /><path class="art-line" d="M43 42 V75 M57 42 V75" />`;
  if (["run", "jump", "clap", "sing", "dance", "walk", "swim", "eat", "drink", "look", "listen", "smile", "wash"].includes(name)) return `<circle class="art-body" cx="50" cy="38" r="12" /><path class="art-line" d="M50 51 L44 70 M50 51 L65 62 M45 57 L32 50 M52 58 L63 46" /><path class="art-wave soft" d="M24 80 C35 72 45 88 56 80 C67 72 76 88 87 80" />`;
  if (section === "Nature") return `<path class="art-leaf" d="M28 73 C46 24 77 25 83 70 C62 61 46 65 28 73Z" /><path class="art-line" d="M43 72 C51 55 61 42 75 31" />`;
  if (section === "Shapes") return iconShape(name);
  if (action === "flap") return `<path class="art-wing" d="M22 58 C37 34 53 39 48 68 C37 71 29 66 22 58Z" /><path class="art-wing" d="M78 58 C63 34 47 39 52 68 C63 71 71 66 78 58Z" />`;
  if (action === "swim") return `<path class="art-wave" d="M22 67 C33 55 43 79 54 67 C65 55 75 79 86 67" /><path class="art-wave soft" d="M30 78 C39 70 48 85 57 78 C66 70 74 85 83 78" />`;
  return `<path class="art-spark" d="M24 35 L31 48 L45 51 L34 60 L36 74 L24 67 L12 74 L14 60 L3 51 L17 48Z" /><circle class="art-dot" cx="74" cy="34" r="7" />`;
}

function artMotif(word, section) {
  return iconObject(word.word.toLowerCase(), section, word.action);
}

function wordArt(word, size = "medium") {
  const section = wordSection(word);
  const [primary, secondary, paper] = artPalettes[section] || artPalettes.Core;
  const letter = (word.letter || word.word[0] || "?").slice(0, 2).toUpperCase();
  return `
    <span class="word-art ${size}" aria-hidden="true" style="--art-primary:${primary};--art-secondary:${secondary};--art-paper:${paper}">
      <svg viewBox="0 0 100 100" focusable="false">
        <path class="art-shadow" d="M24 88 C39 96 67 96 82 87" />
        <rect class="art-bg" x="8" y="8" width="84" height="84" rx="24" />
        <path class="art-hill" d="M15 75 C32 61 48 75 64 64 C75 57 84 63 91 70 L91 92 L15 92Z" />
        <circle class="art-sun" cx="76" cy="25" r="9" />
        <path class="art-doodle" d="M21 29 C28 24 33 25 38 29 M65 75 C72 73 78 76 82 81" />
        ${artMotif(word, section)}
        <rect class="art-letter-badge" x="35" y="73" width="30" height="18" rx="8" />
        <text x="50" y="82" text-anchor="middle">${letter}</text>
      </svg>
    </span>
  `;
}

function chooseFriendlyVoice(lang = "en") {
  if (!("speechSynthesis" in window)) return null;
  if (lang === "zh" && preferredChineseVoice) return preferredChineseVoice;
  if (lang !== "zh" && preferredEnglishVoice) return preferredEnglishVoice;

  const voices = window.speechSynthesis.getVoices();
  if (lang === "zh") {
    const chineseVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith("zh"));
    const preferredNames = ["ting-ting", "tingting", "mei-jia", "meijia", "sin-ji", "huihui", "xiaoxiao", "yaoyao"];
    preferredChineseVoice =
      chineseVoices.find((voice) => preferredNames.some((name) => voice.name.toLowerCase().includes(name))) ||
      chineseVoices.find((voice) => voice.lang.toLowerCase() === "zh-cn") ||
      chineseVoices[0] ||
      null;
    return preferredChineseVoice;
  }

  const englishVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith("en"));
  const preferredNames = ["samantha", "karen", "moira", "tessa", "zira", "aria", "jenny", "female"];
  preferredEnglishVoice =
    englishVoices.find((voice) => preferredNames.some((name) => voice.name.toLowerCase().includes(name))) ||
    englishVoices.find((voice) => voice.lang.toLowerCase() === "en-us") ||
    englishVoices[0] ||
    null;
  return preferredEnglishVoice;
}

function speechStyle(text, lang = "en") {
  if (lang === "zh") {
    return {
      rate: 0.82,
      pitch: 1.12,
      volume: 0.86,
    };
  }

  const isShortWord = /^[a-z]+$/i.test(text.trim());
  const isRhyme = text.includes(",") || text.split(" ").length > 5;
  return {
    rate: isShortWord ? 0.7 : isRhyme ? 0.76 : 0.72,
    pitch: isShortWord ? 1.34 : 1.22,
    volume: 0.92,
  };
}

function speak(text, options = {}) {
  if (!("speechSynthesis" in window)) return Promise.resolve();
  if (options.cancel !== false) window.speechSynthesis.cancel();
  return new Promise((resolve) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const lang = options.lang || "en";
    const fallbackMs =
      options.fallbackMs ||
      (lang === "zh" ? Math.max(1600, text.length * 360 + 600) : Math.max(900, text.length * 210));
    const fallbackTimer = window.setTimeout(resolve, fallbackMs);
    utterance.lang = lang === "zh" ? "zh-CN" : "en-US";
    const voice = chooseFriendlyVoice(lang);
    const style = speechStyle(text, lang);
    if (voice) utterance.voice = voice;
    utterance.rate = options.rate || style.rate;
    utterance.pitch = options.pitch || style.pitch;
    utterance.volume = options.volume || style.volume;
    utterance.onend = () => {
      window.clearTimeout(fallbackTimer);
      resolve();
    };
    utterance.onerror = () => {
      window.clearTimeout(fallbackTimer);
      resolve();
    };
    window.speechSynthesis.speak(utterance);
  });
}

function speakChinese(text, options = {}) {
  return speak(text, { lang: "zh", ...options });
}

async function speakWordWithMeaning(word) {
  await speakChinese(word.zh, { rate: 0.76, pitch: 1.08 });
  await new Promise((resolve) => window.setTimeout(resolve, 420));
  speak(word.word, { rate: 0.68, pitch: 1.32 });
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.addEventListener("voiceschanged", () => {
    preferredEnglishVoice = null;
    preferredChineseVoice = null;
    chooseFriendlyVoice();
    chooseFriendlyVoice("zh");
  });
}

function normalizeSpeech(text) {
  return text.toLowerCase().replace(/[^a-z\s]/g, " ").replace(/\s+/g, " ").trim();
}

function heardTarget(transcript, target) {
  return normalizeSpeech(transcript).split(" ").includes(target.toLowerCase());
}

function phonicsFor(word) {
  const letters = word.word.toLowerCase().replace(/[^a-z]/g, "").split("");
  return {
    letter: word.letter,
    sound: `/${word.sound}/`,
    chunks: letters,
    blend: `${letters.join("-")}, ${word.word.toLowerCase()}`,
  };
}

function pronunciationFeedback(transcript, target) {
  const heard = normalizeSpeech(transcript);
  const word = target.toLowerCase();
  if (heard.split(" ").includes(word) || heard.includes(word)) {
    return { score: 100, message: "Great! You said it!", coach: `Great! ${target}` };
  }
  if (heard && heard[0] === word[0]) {
    return { score: 60, message: `Good start! Try the whole word: ${target}`, coach: `Good start. Say it slowly: ${target}` };
  }
  return { score: 30, message: `Listen again. Say: ${target}`, coach: `Listen again. ${target}` };
}

function recordPractice(word, result = {}) {
  const previous = wordStats[word.word] || {
    seenCount: 0,
    correctCount: 0,
    wrongCount: 0,
    lastPracticedAt: 0,
    nextReviewAt: 0,
    mastery: 0,
  };
  const isCorrect = result.correct !== false;
  const seenCount = previous.seenCount + 1;
  const correctCount = previous.correctCount + (isCorrect ? 1 : 0);
  const wrongCount = previous.wrongCount + (isCorrect ? 0 : 1);
  const mastery = Math.min(1, Math.max(0.12, correctCount / Math.max(1, seenCount)));
  const reviewDelay = mastery > 0.8 ? 3 : mastery > 0.5 ? 1 : 0.25;
  wordStats[word.word] = {
    seenCount,
    correctCount,
    wrongCount,
    lastPracticedAt: Date.now(),
    nextReviewAt: Date.now() + reviewDelay * 24 * 60 * 60 * 1000,
    mastery,
    lastScore: result.score || (isCorrect ? 100 : 30),
  };
  saveProgress();
}

function reviewDueWords() {
  const now = Date.now();
  return learnedWords()
    .filter((word) => {
      const stat = wordStats[word.word];
      return !stat || stat.nextReviewAt <= now || stat.mastery < 0.68;
    })
    .slice(-4);
}

function getWordExpression(word) {
  return (
    wordExpressions[word.word] || {
      phrase: word.phrase || `a ${word.word.toLowerCase()}`,
      scene: word.scene || `I see a ${word.word.toLowerCase()}.`,
      rhyme: word.rhyme || `${word.word}, ${word.word}, say it with me.`,
    }
  );
}

function chantMeaningText(word, expression) {
  const knownMeanings = {
    Cat: "小猫，小猫，像这样拍拍手。",
    Dog: "小狗，小狗，说 hello。",
    Bird: "小鸟，小鸟，飞得高高。",
    Fish: "小鱼，小鱼，游呀游。",
    Book: "书，书，看一看。",
    Ball: "球，球，弹一弹。",
  };
  return knownMeanings[word.word] || translateChant(expression.rhyme, word);
}

const chantTailChinese = {
  "under the sun": "在太阳下面跑。",
  "up and down": "上上下下跳。",
  "make a sound": "发出声音。",
  "ding ding": "叮叮唱。",
  "sleepy head": "困困的小脑袋。",
  "drink it up": "喝光光。",
  "roar with me": "和我一起吼。",
  "hop on a log": "跳到木头上。",
  "buzz with me": "和我一起嗡嗡叫。",
  "quack quack": "嘎嘎叫。",
  "tap the peg": "轻轻敲一敲。",
  "peel and eat": "剥开来吃。",
  "sweet and cool": "甜甜又凉凉。",
  "very nice": "非常好。",
  "crunchy bite": "咔嚓咬一口。",
  "move your feet": "动动你的脚。",
  "count the sheep": "数小羊。",
  "learn and grow": "学习长大。",
  "color more": "再涂一点颜色。",
  "one step more": "再走一步。",
  "sit right there": "坐在那里。",
  "light the room": "点亮房间。",
  "share your joy": "分享快乐。",
  "touch your head": "摸摸你的头。",
  "i see you": "我看见你。",
  "soft and mellow": "柔柔软软。",
  "nice and clean": "干净又漂亮。",
  "learning is fun": "学习真有趣。",
  "me and you": "我和你。",
  "count with me": "和我一起数。",
  "open the door": "打开门。",
  "sing a song": "唱一首歌。",
  "wave to me": "向我挥挥手。",
  "nod your head": "点点头。",
  "look up high": "向高处看。",
  "smell a rose": "闻一闻玫瑰。",
  "make a band": "组成小乐队。",
  "tap tap tap": "拍拍拍。",
  "hug mom and dad": "抱抱妈妈和爸爸。",
  "rest your head": "让小脑袋休息。",
  "sunny day": "晴朗的一天。",
  "pat your hat": "拍拍帽子。",
  "choose your shoes": "选一选鞋子。",
  "button your coat": "扣好外套。",
  "tick tock": "滴答滴答。",
  "run in the sun": "在阳光下跑。",
  "tap the pane": "敲敲窗玻璃。",
  "spin and grin": "转一转，笑一笑。",
  "soft and slow": "轻轻慢慢。",
  "round we go": "圆圆地转。",
  "shine afar": "远远发光。",
  "draw it there": "在那里画出来。",
  "love is art": "爱像艺术一样美。",
};

const chantWordChinese = {
  say: "说",
  and: "",
  peel: "剥开",
  touch: "摸摸",
  your: "你的",
  head: "头",
  clap: "拍拍手",
  like: "像",
  that: "那样",
  fly: "飞",
  high: "高高地",
  swim: "游泳",
  run: "跑",
  jump: "跳",
  dance: "跳舞",
  sing: "唱歌",
  look: "看",
  listen: "听",
  wave: "挥挥手",
  smile: "微笑",
  play: "玩",
  read: "阅读",
  draw: "画画",
  eat: "吃",
  drink: "喝",
  sleep: "睡觉",
  go: "走",
  come: "来",
  help: "帮忙",
  count: "数数",
  with: "和",
  me: "我",
  you: "你",
  mom: "妈妈",
  dad: "爸爸",
  friend: "朋友",
  happy: "开心",
  soft: "柔软",
  warm: "温暖",
  bright: "明亮",
  fast: "快速",
  slow: "慢慢",
  big: "大大的",
  small: "小小的",
};

function translateChantTail(text) {
  const key = normalizeExpressionKey(text.replace(/[.!?]/g, ""));
  if (chantTailChinese[key]) return chantTailChinese[key];
  return key
    .split(/\s+/)
    .map((part) => chantWordChinese[part] || phraseWordChinese[part] || part)
    .filter(Boolean)
    .join("");
}

function translateChant(rhyme, word) {
  const parts = rhyme
    .replace(/[.!?]/g, "")
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  const tail = parts.slice(2).join(" ") || parts.slice(1).join(" ");
  const translatedTail = translateChantTail(tail);
  return translatedTail ? `${word.zh}，${word.zh}，${translatedTail}` : `${word.zh}，${word.zh}。`;
}

const phraseChinese = {
  "a little cat": "一只小猫",
  "a happy dog": "一只开心的小狗",
  "a blue bird": "一只蓝色的小鸟",
  "a small fish": "一条小鱼",
  "a red apple": "一个红苹果",
  "a yellow banana": "一根黄色香蕉",
  "a sweet cake": "一个甜甜的蛋糕",
  "a cup of milk": "一杯牛奶",
  "soft rain": "柔和的雨",
  "strong wind": "大风",
  "white snow": "白白的雪",
  "bright sun": "明亮的太阳",
  "blue sky": "蓝色的天空",
  "green leaf": "绿色的叶子",
  "red heart": "红色的爱心",
  "my mom": "我的妈妈",
  "my dad": "我的爸爸",
  "my family": "我的家庭",
  "good morning": "早上好",
  "good night": "晚安",
  "say hello": "说你好",
  "say bye": "说再见",
  "say thanks": "说谢谢",
  "say sorry": "说对不起",
  "please help": "请帮忙",
  "you are welcome": "不用谢",
};

const sceneChinese = {
  "I see a cat.": "我看见一只小猫。",
  "The dog can run.": "小狗会跑。",
  "The bird can fly.": "小鸟会飞。",
  "The fish can swim.": "小鱼会游泳。",
  "I like apples.": "我喜欢苹果。",
  "I eat a banana.": "我吃一根香蕉。",
  "This cake is yummy.": "这个蛋糕很好吃。",
  "I drink milk.": "我喝牛奶。",
  "I hear the rain.": "我听见雨声。",
  "The wind blows.": "风吹起来了。",
  "I see snow.": "我看见雪。",
  "The sun is up.": "太阳升起来了。",
  "The sky is blue.": "天空是蓝色的。",
  "The leaf is green.": "叶子是绿色的。",
  "I see a heart.": "我看见一个爱心。",
  "I love Mom.": "我爱妈妈。",
  "I love Dad.": "我爱爸爸。",
  "I love my family.": "我爱我的家人。",
  "Good morning, teacher.": "老师，早上好。",
  "Good night, Mom.": "妈妈，晚安。",
  "Hello, my friend.": "你好，我的朋友。",
  "Bye, see you.": "再见，回头见。",
  "Thanks, Mom.": "谢谢妈妈。",
  "Sorry, my friend.": "对不起，我的朋友。",
  "Please help me.": "请帮帮我。",
  "Welcome to class.": "欢迎来到课堂。",
};

const phraseWordChinese = {
  a: "一个",
  an: "一个",
  the: "这个",
  my: "我的",
  little: "小小的",
  happy: "开心的",
  blue: "蓝色的",
  small: "小小的",
  red: "红色的",
  yellow: "黄色的",
  sweet: "甜甜的",
  cup: "杯",
  of: "",
  soft: "柔软的",
  strong: "强壮的",
  white: "白色的",
  bright: "明亮的",
  green: "绿色的",
  big: "大的",
  round: "圆圆的",
  warm: "温暖的",
  cold: "冷冷的",
  hot: "热热的",
  long: "长长的",
  fast: "快快地",
  slowly: "慢慢地",
  cat: "小猫",
  dog: "小狗",
  bird: "小鸟",
  fish: "小鱼",
  apple: "苹果",
  banana: "香蕉",
  cake: "蛋糕",
  milk: "牛奶",
  rain: "雨",
  wind: "风",
  snow: "雪",
  sun: "太阳",
  sky: "天空",
  leaf: "叶子",
  heart: "爱心",
  mom: "妈妈",
  dad: "爸爸",
  family: "家人",
  ball: "球",
  book: "书",
  run: "跑",
  jump: "跳",
  clap: "拍手",
  sing: "唱歌",
  hello: "你好",
  bye: "再见",
  thanks: "谢谢",
  sorry: "对不起",
  please: "请",
  help: "帮忙",
  welcome: "欢迎",
};

function normalizeExpressionKey(text) {
  return text.trim().toLowerCase();
}

function lookupChinese(map, text) {
  const normalized = normalizeExpressionKey(text);
  return Object.entries(map).find(([key]) => normalizeExpressionKey(key) === normalized)?.[1];
}

function translatePhraseFromParts(text, word) {
  const parts = normalizeExpressionKey(text)
    .replace(/[.!?]/g, "")
    .split(/\s+/)
    .map((part) => phraseWordChinese[part] ?? (part === word.word.toLowerCase() ? word.zh : part))
    .filter(Boolean);
  return parts.join("");
}

function readableExpressionChinese(text, word, type) {
  const exactChinese = lookupChinese(type === "phrase" ? phraseChinese : sceneChinese, text);
  if (exactChinese) return exactChinese;
  if (type === "phrase") return translatePhraseFromParts(text, word);
  return `${word.zh}相关句子`;
}

function expressionChineseText(word, type) {
  const expression = getWordExpression(word);
  return readableExpressionChinese(expression[type], word, type);
}

function chantBeatsFor(text) {
  return text
    .replace(/[.!?]/g, "")
    .split(/[\s,]+/)
    .filter(Boolean)
    .slice(0, 6);
}

function setRepeatButtonLabel() {
  repeatBtn.textContent = `Speak ${selectedWord.word}`;
}

function updateWordDetails(word, hint = `/${word.sound}/ sound`) {
  const expression = getWordExpression(word);
  const phonics = phonicsFor(word);
  selectedWord = word;
  wordText.textContent = word.word;
  wordChinese.textContent = word.zh;
  wordHint.textContent = hint;
  phraseText.textContent = expression.phrase;
  sceneText.textContent = expression.scene;
  rhymeText.textContent = expression.rhyme;
  chantMeaning.textContent = chantMeaningText(word, expression);
  chantBeats.innerHTML = chantBeatsFor(expression.rhyme).map((beat) => `<i>${beat}</i>`).join("");
  phonicsBlend.textContent = phonics.blend;
  phonicsChunks.innerHTML = phonics.chunks
    .map((chunk, index) => `<button type="button" data-chunk="${chunk}" aria-label="sound ${chunk}">${chunk}${index === 0 ? `<small>${phonics.sound}</small>` : ""}</button>`)
    .join("");
  phonicsChunks.querySelectorAll("button").forEach((chunk) => {
    chunk.addEventListener("click", () => speak(chunk.dataset.chunk, { rate: 0.58, pitch: 1.34 }));
  });
  setRepeatButtonLabel();
}

function clearChantPlayback() {
  chantRunId += 1;
  chantTimers.forEach((timer) => window.clearTimeout(timer));
  chantTimers = [];
  chantBeats.querySelectorAll("i").forEach((item) => item.classList.remove("active"));
  document.querySelector(".chant-card")?.classList.remove("playing");
}

function wait(ms) {
  return new Promise((resolve) => {
    chantTimers.push(window.setTimeout(resolve, ms));
  });
}

async function playChant() {
  clearChantPlayback();
  const runId = chantRunId;
  const expression = getWordExpression(selectedWord);
  const beatItems = Array.from(chantBeats.querySelectorAll("i"));
  const chantCard = document.querySelector(".chant-card");
  chantCard?.classList.add("playing");
  animateBuddy("happy");
  await speakChinese(chantMeaningText(selectedWord, expression), { rate: 0.72, pitch: 1.08 });
  if (runId !== chantRunId) return;
  await wait(720);
  for (const beat of beatItems) {
    if (runId !== chantRunId) return;
    beatItems.forEach((item) => item.classList.remove("active"));
    beat.classList.add("active");
    animateBuddy("happy");
    await speak(beat.textContent, { rate: 0.58, pitch: 1.3, fallbackMs: 620 });
    await wait(160);
  }
  if (runId !== chantRunId) return;
  beatItems.forEach((item) => item.classList.remove("active"));
  chantCard?.classList.remove("playing");
}

async function playExpression(type) {
  const expression = getWordExpression(selectedWord);
  const text = expression[type];
  await speakChinese(expressionChineseText(selectedWord, type), { rate: 0.76, pitch: 1.08 });
  await new Promise((resolve) => window.setTimeout(resolve, 420));
  speak(text, { rate: type === "phrase" ? 0.68 : 0.72, pitch: 1.24 });
}

function showReward(word) {
  rewardText.textContent = `${word.word} / ${word.zh}`;
  rewardOverlay.classList.remove("hidden");
  rewardOverlay.classList.remove("reward-show");
  requestAnimationFrame(() => rewardOverlay.classList.add("reward-show"));
  window.setTimeout(() => {
    rewardOverlay.classList.add("hidden");
    rewardOverlay.classList.remove("reward-show");
  }, 1450);
}

function showCourseComplete() {
  courseCompleted = true;
  completeSummary.textContent = `You learned ${courseWords.length} words and finished ${lessons.length} lessons.`;
  completeWordCount.textContent = courseWords.length;
  completeLessonCount.textContent = lessons.length;
  completeStarCount.textContent = stars;
  finalWordParade.innerHTML = sample(courseWords, 8)
    .map((word) => `<span>${wordArt(word, "tiny")}<b>${word.word}</b></span>`)
    .join("");
  saveProgress();
  courseCompleteOverlay.classList.remove("hidden");
  courseCompleteOverlay.classList.remove("celebration-show");
  requestAnimationFrame(() => courseCompleteOverlay.classList.add("celebration-show"));
  speak("Wow. You finished all lessons. You are an English star!", { rate: 0.72, pitch: 1.3 });
  window.setTimeout(() => speakChinese("全部课程完成啦，真棒！"), 2600);
}

function closeCourseComplete() {
  courseCompleteOverlay.classList.add("hidden");
  courseCompleteOverlay.classList.remove("celebration-show");
}

function completeSpokenWord(feedback = { score: 100, message: "Great! You said it!" }) {
  wordHint.textContent = feedback.message;
  animateBuddy("happy");
  recordPractice(selectedWord, { correct: true, score: feedback.score });
  markPracticed(selectedWord);
  addStar();
  showReward(selectedWord);
  renderParentReport();
  speak(feedback.coach || `Great job. ${selectedWord.word}`, { rate: 0.72, pitch: 1.28 });
}

function collectProfile(isGuest = false) {
  if (isGuest) {
    return {
      name: "Guest",
      age: "",
      level: "体验模式",
      guardian: "",
      isGuest: true,
    };
  }

  const name = kidName.value.trim() || "Little Star";
  return {
    name,
    age: kidAge.value,
    level: kidLevel.value,
    guardian: guardianName.value.trim(),
    isGuest: false,
  };
}

function fillLoginForm(profile) {
  if (!profile || profile.isGuest) return;
  kidName.value = profile.name || "";
  kidAge.value = profile.age || "4";
  kidLevel.value = profile.level || "启蒙";
  guardianName.value = profile.guardian || "";
}

function enterApp(profile) {
  profileKey = profile.isGuest ? "guest" : normalizeProfileKey(profile.name);
  currentProfile = profile;
  const label = profile.isGuest
    ? "游客体验 · 进度临时保存"
    : `${currentProfile.name} · ${currentProfile.age}岁 · ${currentProfile.level}`;
  profileText.textContent = label;
  saveProfile();
  loadProgress();
  starCount.textContent = stars;
  loginScreen.classList.add("hidden");
  appStage.classList.remove("hidden");
  renderLesson();
  renderSoundBoard();
  renderSoundGame();
  renderMatchGame();
  renderMoleGame();
  renderHome();
  renderParentReport();
  updateVoiceFallback();
  setActiveScreen("home");
  window.setTimeout(() => speak("Hi, little star. Let's play English!", { rate: 0.72, pitch: 1.3 }), 350);
}

function addStar() {
  stars += 1;
  starCount.textContent = stars;
  starCount.parentElement.classList.remove("pop");
  requestAnimationFrame(() => starCount.parentElement.classList.add("pop"));
  saveProgress();
}

function markPracticed(word) {
  practicedWords.add(word.word);
  updateLessonProgress();
  renderHome();
  renderParentReport();
  saveProgress();
}

function animateBuddy(action) {
  buddy.className = `buddy ${action}`;
  window.setTimeout(() => {
    buddy.className = "buddy wave";
  }, 850);
}

function setSelectedWord(word, card) {
  document.querySelectorAll(".word-card").forEach((item) => item.classList.remove("active"));
  if (card) card.classList.add("active");
  updateWordDetails(word);
  animateBuddy(word.action);
  speakWordWithMeaning(word);
}

function stopListeningState() {
  isListening = false;
  repeatBtn.disabled = false;
  setRepeatButtonLabel();
  repeatBtn.classList.remove("listening");
}

function updateVoiceFallback() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  manualDoneBtn.classList.toggle("hidden", Boolean(SpeechRecognition));
}

function startRepeatCheck() {
  if (isListening) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    wordHint.textContent = "Use Chrome for voice!";
    speak("Please use Chrome for voice practice");
    manualDoneBtn.classList.remove("hidden");
    return;
  }

  window.speechSynthesis.cancel();
  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;
  isListening = true;
  repeatBtn.disabled = true;
  repeatBtn.textContent = "Listening";
  repeatBtn.classList.add("listening");
  wordHint.textContent = `Say: ${selectedWord.word}`;
  animateBuddy(selectedWord.action);

  recognition.onresult = (event) => {
    const alternatives = Array.from(event.results[0] || []);
    const transcript = alternatives.map((item) => item.transcript).join(" ");
    const feedback = pronunciationFeedback(transcript, selectedWord.word);
    if (feedback.score >= 60 || heardTarget(transcript, selectedWord.word)) {
      completeSpokenWord(feedback);
    } else {
      wordHint.textContent = feedback.message;
      buddy.classList.add("wrong");
      recordPractice(selectedWord, { correct: false, score: feedback.score });
      renderParentReport();
      speak(feedback.coach, { rate: 0.72, pitch: 1.22 });
    }
  };

  recognition.onerror = (event) => {
    wordHint.textContent = event.error === "not-allowed" ? "Allow microphone" : "Tap Repeat again";
    manualDoneBtn.classList.remove("hidden");
    speak(event.error === "not-allowed" ? "Please allow microphone" : "Let's try again", { rate: 0.72, pitch: 1.22 });
  };

  recognition.onend = stopListeningState;
  recognition.start();
}

function updateLessonProgress() {
  const lessonWords = currentLessonWords();
  const done = lessonWords.filter((word) => practicedWords.has(word.word)).length;
  const isFinalLesson = currentLessonIndex >= lessons.length - 1;
  lessonProgress.textContent = lessonMode === "review" ? "Review" : `${done}/${lessonWords.length}`;
  nextLessonBtn.disabled = lessonMode === "review" || done < lessonWords.length;
  nextLessonBtn.textContent = lessonMode === "review" ? "Course" : isFinalLesson ? "Done" : "Next";

  document.querySelectorAll(".word-card").forEach((card) => {
    card.classList.toggle("learned", practicedWords.has(card.dataset.word));
  });

  lessonSteps.innerHTML = lessons.map(() => '<span class="step-dot"></span>').join("");
  lessonSteps.style.setProperty("--lesson-count", lessons.length);

  document.querySelectorAll(".step-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentLessonIndex);
    dot.classList.toggle("done", index < currentLessonIndex);
  });
}

function renderLesson() {
  const lesson = currentLesson();
  const words = currentLessonWords();
  storyWorld.textContent = lessonMode === "review" ? "Review Trail" : lesson.story.world;
  storyTitle.textContent = lessonMode === "review" ? "复习小挑战" : lesson.story.title;
  storyMission.textContent = lessonMode === "review" ? "把快忘记的单词再找回来。" : lesson.story.mission;
  lessonTag.textContent = lessonMode === "review" ? "Review" : `${lesson.section} · Lesson ${currentLessonIndex + 1}`;
  lessonTitle.textContent = lessonMode === "review" ? "Review Words" : lesson.title;
  wordCards.innerHTML = words
    .map(
      (item, index) => `
        <button class="word-card ${index === 0 ? "active" : ""}" data-word="${item.word}">
          ${wordArt(item, "large")}
          <span class="word-copy">
            <strong>${item.word}</strong>
            <small>${item.zh}</small>
          </span>
        </button>
      `
    )
    .join("");

  updateWordDetails(words[0], "Listen first, then copy!");

  document.querySelectorAll(".word-card").forEach((card) => {
    const word = words.find((item) => item.word === card.dataset.word);
    card.addEventListener("click", () => setSelectedWord(word, card));
  });

  updateLessonProgress();
  updateVoiceFallback();
}

function renderSoundBoard() {
  const words = currentLessonWords();
  document.querySelector("#soundBoard").innerHTML = words
    .map(
      (item) => `
        <button class="letter-card" data-word="${item.word}">
          <span>${item.letter}</span>
          <strong>${item.word}</strong>
          <small>${item.zh}</small>
        </button>
      `
    )
    .join("");

  document.querySelectorAll(".letter-card").forEach((card) => {
    const word = words.find((item) => item.word === card.dataset.word);
    card.addEventListener("click", () => {
      card.classList.remove("pop");
      requestAnimationFrame(() => card.classList.add("pop"));
      currentSoundWord = word;
      renderSoundGame();
      speak(`${word.letter} says ${word.sound}, ${word.sound}, ${word.word}`);
    });
  });
}

function renderSoundGame() {
  const correct = currentSoundWord || currentLesson().words[0];
  const options = sample(
    unlockedWords().filter((item) => item.word !== correct.word),
    3
  );
  const choices = sample([correct, ...options], 4);
  document.querySelector("#soundPrompt").textContent = `Find “${correct.letter}” sound`;
  document.querySelector("#soundChoices").innerHTML = choices
    .map(
      (item) => `
        <button class="animal-choice" data-answer="${item.word === correct.word ? "yes" : "no"}" data-word="${item.word}">
          ${wordArt(item, "large")}
          <strong>${item.word}</strong>
          <small>${item.zh}</small>
        </button>
      `
    )
    .join("");

  document.querySelectorAll(".animal-choice").forEach((choice) => {
    choice.addEventListener("click", () => {
      choice.classList.remove("happy", "wrong");
      if (choice.dataset.answer === "yes") {
        const word = courseWords.find((item) => item.word === choice.dataset.word);
        choice.classList.add("happy");
        speak(`${choice.dataset.word}. Yes, nice listening!`, { rate: 0.74, pitch: 1.26 });
        if (word) window.setTimeout(() => speakChinese(word.zh), 1200);
        addStar();
      } else {
        choice.classList.add("wrong");
        speak("Almost. Listen again.", { rate: 0.72, pitch: 1.22 });
      }
    });
  });
}

function renderMatchGame() {
  const round = currentLessonWords();
  hideMatchPlaneReward();
  document.querySelector("#dragBank").innerHTML = round
    .map((item) => `<button class="drag-word" draggable="true" data-match="${item.word}">${item.word}<small>${item.zh}</small></button>`)
    .join("");
  document.querySelector("#dropGrid").innerHTML = sample(round, round.length)
    .map((item) => `<button class="drop-zone" data-match="${item.word}">${wordArt(item, "xlarge")}</button>`)
    .join("");

  selectedDragWord = null;
  document.querySelectorAll(".drag-word").forEach((word) => {
    word.addEventListener("dragstart", (event) => {
      draggedMatch = word.dataset.match;
      draggedElement = word;
      event.dataTransfer.setData("text/plain", draggedMatch);
    });

    word.addEventListener("click", () => {
      document.querySelectorAll(".drag-word").forEach((item) => item.classList.remove("selected"));
      selectedDragWord = word;
      draggedMatch = word.dataset.match;
      draggedElement = word;
      word.classList.add("selected");
      speak(word.dataset.match);
    });
  });

  document.querySelectorAll(".drop-zone").forEach((zone) => {
    zone.addEventListener("click", () => {
      if (!selectedDragWord) return;
      checkMatch(zone, selectedDragWord.dataset.match);
    });

    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      zone.classList.add("ready");
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("ready");
    });

    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("ready");
      const incoming = event.dataTransfer.getData("text/plain") || draggedMatch;
      checkMatch(zone, incoming);
    });
  });
}

function hideMatchPlaneReward() {
  if (!matchPlaneReward) return;
  window.clearTimeout(matchPlaneTimer);
  matchPlaneReward.classList.add("hidden");
  matchPlaneReward.classList.remove("fly");
}

function showMatchPlaneReward() {
  if (!matchPlaneReward || matchPlaneReward.classList.contains("fly")) return;
  matchPlaneReward.classList.remove("hidden");
  matchPlaneReward.classList.remove("fly");
  requestAnimationFrame(() => matchPlaneReward.classList.add("fly"));
  playJetTakeoffSound();
  window.setTimeout(() => speak("Super match. Rocket speed!", { rate: 0.7, pitch: 1.34, volume: 1 }), 760);
  matchPlaneTimer = window.setTimeout(() => {
    matchPlaneReward.classList.add("hidden");
    matchPlaneReward.classList.remove("fly");
  }, 3200);
}

function playJetTakeoffSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const audio = new AudioContext();
  const now = audio.currentTime;
  const master = audio.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.42, now + 0.06);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 1.9);
  master.connect(audio.destination);

  const roar = audio.createOscillator();
  const roarGain = audio.createGain();
  roar.type = "sawtooth";
  roar.frequency.setValueAtTime(54, now);
  roar.frequency.exponentialRampToValueAtTime(520, now + 1.35);
  roarGain.gain.setValueAtTime(0.24, now);
  roarGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.75);
  roar.connect(roarGain);
  roarGain.connect(master);

  const booster = audio.createOscillator();
  const boosterGain = audio.createGain();
  booster.type = "square";
  booster.frequency.setValueAtTime(130, now);
  booster.frequency.exponentialRampToValueAtTime(920, now + 0.9);
  boosterGain.gain.setValueAtTime(0.08, now);
  boosterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.15);
  booster.connect(boosterGain);
  boosterGain.connect(master);

  const whooshBuffer = audio.createBuffer(1, audio.sampleRate * 1.55, audio.sampleRate);
  const channel = whooshBuffer.getChannelData(0);
  for (let index = 0; index < channel.length; index += 1) {
    const fade = 1 - index / channel.length;
    channel[index] = (Math.random() * 2 - 1) * fade;
  }
  const whoosh = audio.createBufferSource();
  const whooshFilter = audio.createBiquadFilter();
  const whooshGain = audio.createGain();
  whoosh.buffer = whooshBuffer;
  whooshFilter.type = "highpass";
  whooshFilter.frequency.setValueAtTime(260, now);
  whooshFilter.frequency.exponentialRampToValueAtTime(2600, now + 1.2);
  whooshGain.gain.setValueAtTime(0.2, now);
  whooshGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.55);
  whoosh.connect(whooshFilter);
  whooshFilter.connect(whooshGain);
  whooshGain.connect(master);

  const sparkle = audio.createOscillator();
  const sparkleGain = audio.createGain();
  sparkle.type = "triangle";
  sparkle.frequency.setValueAtTime(820, now + 0.18);
  sparkle.frequency.exponentialRampToValueAtTime(2100, now + 0.56);
  sparkleGain.gain.setValueAtTime(0.0001, now + 0.16);
  sparkleGain.gain.exponentialRampToValueAtTime(0.11, now + 0.24);
  sparkleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.72);
  sparkle.connect(sparkleGain);
  sparkleGain.connect(master);

  roar.start(now);
  roar.stop(now + 1.85);
  booster.start(now);
  booster.stop(now + 1.2);
  whoosh.start(now);
  whoosh.stop(now + 1.6);
  sparkle.start(now + 0.16);
  sparkle.stop(now + 0.78);
  window.setTimeout(() => audio.close(), 2100);
}

function maybeCompleteMatchRound() {
  const zones = Array.from(document.querySelectorAll(".drop-zone"));
  if (zones.length && zones.every((item) => item.classList.contains("done"))) {
    showMatchPlaneReward();
  }
}

function checkMatch(zone, incoming) {
  if (zone.classList.contains("done")) return;
  const word = currentLessonWords().find((item) => item.word === incoming);
  if (incoming === zone.dataset.match) {
    zone.classList.add("done", "happy");
    if (draggedElement) draggedElement.classList.add("matched");
    if (selectedDragWord) selectedDragWord.classList.remove("selected");
    selectedDragWord = null;
    if (word) markPracticed(word);
    if (word) recordPractice(word, { correct: true, score: 100 });
    speak(`Yes, ${incoming}. Well done!`, { rate: 0.74, pitch: 1.26 });
    if (word) window.setTimeout(() => speakChinese(word.zh), 1200);
    addStar();
    maybeCompleteMatchRound();
  } else {
    zone.classList.add("wrong");
    window.setTimeout(() => zone.classList.remove("wrong"), 350);
    speak("Almost. Try again.", { rate: 0.72, pitch: 1.22 });
  }
}

function renderMoleGame() {
  const round = currentLessonWords();
  currentMoleTarget = sample(round, 1)[0].word;
  document.querySelector("#targetWord").textContent = currentMoleTarget;
  document.querySelector("#moleGrid").innerHTML = sample(round, round.length)
    .map((item) => `<button class="mole" data-word="${item.word}">${wordArt(item, "large")}<strong>${item.word}</strong><small>${item.zh}</small></button>`)
    .join("");

  document.querySelectorAll(".mole").forEach((mole) => {
    mole.addEventListener("click", () => {
      mole.classList.remove("happy", "wrong");
      if (mole.dataset.word === currentMoleTarget) {
        const word = currentLessonWords().find((item) => item.word === currentMoleTarget);
        mole.classList.add("happy");
        if (word) markPracticed(word);
        if (word) recordPractice(word, { correct: true, score: 100 });
        speak(`Yes, ${currentMoleTarget}. You found it!`, { rate: 0.74, pitch: 1.26 });
        if (word) window.setTimeout(() => speakChinese(word.zh), 1200);
        addStar();
        window.setTimeout(renderMoleGame, 700);
      } else {
        mole.classList.add("wrong");
        speak("Listen again.", { rate: 0.72, pitch: 1.22 });
      }
    });
  });
}

function refreshGames() {
  currentSoundWord = currentLessonWords()[0];
  renderLesson();
  renderSoundBoard();
  renderSoundGame();
  renderMatchGame();
  renderMoleGame();
  renderHome();
  renderParentReport();
}

function renderHome() {
  const lesson = currentLesson();
  const done = lesson.words.filter((word) => practicedWords.has(word.word)).length;
  const learned = learnedWords();
  const dueWords = reviewDueWords();
  const questItems = [
    { icon: "🎧", title: "Story", text: lesson.story.title, done: done > 0 },
    { icon: "🗣️", title: "Speak", text: done === lesson.words.length ? "Ready for next" : "Say today words", done: done === lesson.words.length },
    { icon: "🔁", title: "Review", text: dueWords.length ? `${dueWords.length} words due` : "No review yet", done: learned.length > 0 && dueWords.length === 0 },
  ];
  const stickerWords = learned.length ? learned.slice(-6) : lesson.words.slice(0, 4);
  homeLessonTag.textContent = `${lesson.section} · Lesson ${currentLessonIndex + 1}`;
  homeLessonTitle.textContent = lesson.story.title;
  homeLessonStatus.textContent = `${lesson.story.world} · ${done}/${lesson.words.length} words`;
  reviewCount.textContent = `${learned.length} learned`;
  document.querySelector("#reviewBtn").disabled = learned.length === 0;
  questList.innerHTML = questItems
    .map(
      (quest) => `
        <div class="quest-item ${quest.done ? "done" : ""}">
          <span>${quest.icon}</span>
          <div>
            <strong>${quest.title}</strong>
            <small>${quest.text}</small>
          </div>
        </div>
      `
    )
    .join("");
  stickerShelf.innerHTML = stickerWords
    .map(
      (word, index) => `
        <button class="sticker ${learned.length || index === 0 ? "unlocked" : ""}" data-word="${word.word}">
          ${wordArt(word, "small")}
          <small>${word.word}</small>
        </button>
      `
    )
    .join("");
  todayWords.innerHTML = lesson.words
    .map(
      (word) => `
        <button class="mini-word" data-word="${word.word}">
          ${wordArt(word, "small")}
          <div>
            <strong>${word.word}</strong>
            <small>${word.zh}</small>
          </div>
        </button>
      `
    )
    .join("");
  courseMap.innerHTML = lessons
    .map((item, index) => {
      const state = index < currentLessonIndex ? "done" : index === currentLessonIndex ? "active" : "locked";
      const status = state === "done" ? "Done" : state === "active" ? "Now" : "Locked";
      return `
        <div class="course-row ${state}">
          <span>${index + 1}</span>
          <div>
            <em>${item.section}</em>
            <strong>${item.title}</strong>
          </div>
          <small>${status}</small>
        </div>
      `;
    })
    .join("");

  document.querySelectorAll(".mini-word").forEach((card) => {
    const word = lesson.words.find((item) => item.word === card.dataset.word);
    card.addEventListener("click", () => {
      lessonMode = "course";
      refreshGames();
      setActiveScreen("lesson");
      window.setTimeout(() => {
        const target = document.querySelector(`.word-card[data-word="${word.word}"]`);
        if (target) target.click();
      }, 0);
    });
  });

  document.querySelectorAll(".sticker.unlocked").forEach((sticker) => {
    const word = courseWords.find((item) => item.word === sticker.dataset.word);
    sticker.addEventListener("click", () => {
      if (word) speakWordWithMeaning(word);
    });
  });
}

function renderParentReport() {
  if (!parentStats || !parentReportList) return;
  const learned = learnedWords();
  const stats = Object.values(wordStats);
  const totalSpeak = stats.reduce((sum, item) => sum + item.seenCount, 0);
  const averageMastery = stats.length
    ? Math.round((stats.reduce((sum, item) => sum + item.mastery, 0) / stats.length) * 100)
    : 0;
  const strongWords = learned
    .filter((word) => (wordStats[word.word]?.mastery || 0) >= 0.8)
    .slice(-4);
  const reviewWords = reviewDueWords();
  parentStats.innerHTML = [
    { label: "已学单词", value: learned.length },
    { label: "跟读次数", value: totalSpeak },
    { label: "平均掌握", value: `${averageMastery}%` },
    { label: "星星奖励", value: stars },
  ]
    .map((item) => `<div><strong>${item.value}</strong><span>${item.label}</span></div>`)
    .join("");
  parentReportList.innerHTML = [
    { title: "掌握较好", value: strongWords.length ? strongWords.map((word) => word.word).join(", ") : "先完成一次跟读" },
    { title: "建议复习", value: reviewWords.length ? reviewWords.map((word) => `${word.word}(${word.zh})`).join(", ") : "暂无需要复习的词" },
    { title: "当前故事", value: `${currentLesson().story.world}：${currentLesson().story.title}` },
  ]
    .map((item) => `<div class="report-row"><strong>${item.title}</strong><span>${item.value}</span></div>`)
    .join("");
  const coachingWord = reviewWords[0] || currentLesson().words[0];
  parentTip.textContent = `陪练建议：睡前问孩子 “Can you say ${coachingWord.word}?”，再让孩子说“${coachingWord.zh}”。`;
}

document.querySelector("#loginBtn").addEventListener("click", () => enterApp(collectProfile()));
document.querySelector("#guestBtn").addEventListener("click", () => enterApp(collectProfile(true)));
document.querySelector("#switchUserBtn").addEventListener("click", () => {
  appStage.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  lessonMode = "course";
  fillLoginForm(currentProfile);
});

kidName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") enterApp(collectProfile());
});

document.querySelector("#listenBtn").addEventListener("click", () => {
  animateBuddy(selectedWord.action);
  speakWordWithMeaning(selectedWord);
});

wordChineseBtn.addEventListener("click", () => speakChinese(selectedWord.zh));

document.querySelectorAll(".expression-card").forEach((card) => {
  card.addEventListener("click", () => {
    if (card.dataset.say === "chant") {
      playChant();
      return;
    }
    card.classList.remove("pop");
    requestAnimationFrame(() => card.classList.add("pop"));
    playExpression(card.dataset.say);
  });
});

repeatBtn.addEventListener("click", startRepeatCheck);
manualDoneBtn.addEventListener("click", () => completeSpokenWord());

document.querySelector("#continueBtn").addEventListener("click", () => {
  lessonMode = "course";
  refreshGames();
  setActiveScreen("lesson");
});

document.querySelector("#reviewBtn").addEventListener("click", () => {
  if (!learnedWords().length) return;
  lessonMode = "review";
  refreshGames();
  setActiveScreen("lesson");
});

document.querySelectorAll(".game-launcher").forEach((button) => {
  button.addEventListener("click", () => {
    setActiveScreen(button.dataset.game);
    if (button.dataset.game === "match") renderMatchGame();
    if (button.dataset.game === "mole") renderMoleGame();
  });
});

nextLessonBtn.addEventListener("click", () => {
  if (nextLessonBtn.disabled) return;
  lessonMode = "course";
  if (currentLessonIndex >= lessons.length - 1) {
    showCourseComplete();
    return;
  }
  currentLessonIndex += 1;
  practicedWords = new Set();
  courseCompleted = false;
  saveProgress();
  refreshGames();
  setActiveScreen("home");
  speak(`Lesson ${currentLessonIndex + 1}`);
});

document.querySelector("#celebrateAgainBtn").addEventListener("click", () => {
  closeCourseComplete();
  lessonMode = "review";
  refreshGames();
  setActiveScreen("lesson");
});

document.querySelector("#celebrateHomeBtn").addEventListener("click", () => {
  closeCourseComplete();
  setActiveScreen("home");
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (tab.dataset.screen === "lesson") {
      lessonMode = "course";
      refreshGames();
    }
    setActiveScreen(tab.dataset.screen);
    if (tab.dataset.screen === "match") renderMatchGame();
    if (tab.dataset.screen === "mole") renderMoleGame();
  });
});

document.querySelector("#molePrompt").addEventListener("click", () => speak(currentMoleTarget));

fillLoginForm(loadProfile(localStorage.getItem("playwords-last-profile-key")));
