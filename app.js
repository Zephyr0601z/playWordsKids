const courseWords = [
  { word: "Cat", zh: "小猫", action: "jump", emoji: "🐱", letter: "C", sound: "c" },
  { word: "Dog", zh: "小狗", action: "wag", emoji: "🐶", letter: "D", sound: "d" },
  { word: "Bird", zh: "小鸟", action: "flap", emoji: "🐦", letter: "B", sound: "b" },
  { word: "Fish", zh: "小鱼", action: "swim", emoji: "🐠", letter: "F", sound: "f" },
  { word: "Apple", zh: "苹果", action: "jump", emoji: "🍎", letter: "A", sound: "a" },
  { word: "Banana", zh: "香蕉", action: "wag", emoji: "🍌", letter: "B", sound: "b" },
  { word: "Cake", zh: "蛋糕", action: "jump", emoji: "🍰", letter: "C", sound: "c" },
  { word: "Milk", zh: "牛奶", action: "swim", emoji: "🥛", letter: "M", sound: "m" },
  { word: "Run", zh: "跑", action: "swim", emoji: "🏃", letter: "R", sound: "r" },
  { word: "Jump", zh: "跳", action: "jump", emoji: "🦘", letter: "J", sound: "j" },
  { word: "Clap", zh: "拍手", action: "wag", emoji: "👏", letter: "C", sound: "c" },
  { word: "Sing", zh: "唱歌", action: "flap", emoji: "🎤", letter: "S", sound: "s" },
  { word: "Bed", zh: "床", action: "jump", emoji: "🛏️", letter: "B", sound: "b" },
  { word: "Cup", zh: "杯子", action: "wag", emoji: "☕", letter: "C", sound: "c" },
  { word: "Ball", zh: "球", action: "jump", emoji: "⚽", letter: "B", sound: "b" },
  { word: "Book", zh: "书", action: "flap", emoji: "📘", letter: "B", sound: "b" },
  { word: "Lion", zh: "狮子", action: "jump", emoji: "🦁", letter: "L", sound: "l" },
  { word: "Frog", zh: "青蛙", action: "jump", emoji: "🐸", letter: "F", sound: "f" },
  { word: "Bee", zh: "蜜蜂", action: "flap", emoji: "🐝", letter: "B", sound: "b" },
  { word: "Duck", zh: "鸭子", action: "wag", emoji: "🦆", letter: "D", sound: "d" },
  { word: "Egg", zh: "鸡蛋", action: "jump", emoji: "🥚", letter: "E", sound: "e" },
  { word: "Juice", zh: "果汁", action: "wag", emoji: "🧃", letter: "J", sound: "j" },
  { word: "Rice", zh: "米饭", action: "swim", emoji: "🍚", letter: "R", sound: "r" },
  { word: "Cookie", zh: "饼干", action: "jump", emoji: "🍪", letter: "C", sound: "c" },
  { word: "Dance", zh: "跳舞", action: "wag", emoji: "💃", letter: "D", sound: "d" },
  { word: "Sleep", zh: "睡觉", action: "swim", emoji: "😴", letter: "S", sound: "s" },
  { word: "Read", zh: "阅读", action: "jump", emoji: "📖", letter: "R", sound: "r" },
  { word: "Draw", zh: "画画", action: "wag", emoji: "🖍️", letter: "D", sound: "d" },
  { word: "Door", zh: "门", action: "swim", emoji: "🚪", letter: "D", sound: "d" },
  { word: "Chair", zh: "椅子", action: "wag", emoji: "🪑", letter: "C", sound: "c" },
  { word: "Lamp", zh: "台灯", action: "jump", emoji: "💡", letter: "L", sound: "l" },
  { word: "Toy", zh: "玩具", action: "wag", emoji: "🧸", letter: "T", sound: "t" },
];

const wordExpressions = {
  Cat: { phrase: "a little cat", scene: "I see a cat.", rhyme: "Cat, cat, clap like that." },
  Dog: { phrase: "a happy dog", scene: "The dog can run.", rhyme: "Dog, dog, say hello." },
  Bird: { phrase: "a blue bird", scene: "The bird can fly.", rhyme: "Bird, bird, fly high." },
  Fish: { phrase: "a small fish", scene: "The fish can swim.", rhyme: "Fish, fish, swish, swish." },
  Apple: { phrase: "a red apple", scene: "I like apples.", rhyme: "Apple, apple, yum, yum." },
  Banana: { phrase: "a yellow banana", scene: "I eat a banana.", rhyme: "Banana, banana, peel and eat." },
  Cake: { phrase: "a sweet cake", scene: "This cake is yummy.", rhyme: "Cake, cake, take a bite." },
  Milk: { phrase: "a cup of milk", scene: "I drink milk.", rhyme: "Milk, milk, nice and white." },
  Run: { phrase: "run fast", scene: "I can run.", rhyme: "Run, run, under the sun." },
  Jump: { phrase: "jump high", scene: "I can jump.", rhyme: "Jump, jump, up and down." },
  Clap: { phrase: "clap hands", scene: "I clap my hands.", rhyme: "Clap, clap, make a sound." },
  Sing: { phrase: "sing a song", scene: "I can sing.", rhyme: "Sing, sing, ding, ding." },
  Bed: { phrase: "my little bed", scene: "I sleep in bed.", rhyme: "Bed, bed, sleepy head." },
  Cup: { phrase: "a blue cup", scene: "This is my cup.", rhyme: "Cup, cup, drink it up." },
  Ball: { phrase: "a round ball", scene: "I kick the ball.", rhyme: "Ball, ball, bounce and fall." },
  Book: { phrase: "a story book", scene: "I read a book.", rhyme: "Book, book, take a look." },
  Lion: { phrase: "a big lion", scene: "The lion is strong.", rhyme: "Lion, lion, roar with me." },
  Frog: { phrase: "a green frog", scene: "The frog can jump.", rhyme: "Frog, frog, hop on a log." },
  Bee: { phrase: "a busy bee", scene: "The bee can buzz.", rhyme: "Bee, bee, buzz with me." },
  Duck: { phrase: "a yellow duck", scene: "The duck can swim.", rhyme: "Duck, duck, quack, quack." },
  Egg: { phrase: "a white egg", scene: "I see an egg.", rhyme: "Egg, egg, tap the peg." },
  Juice: { phrase: "apple juice", scene: "I drink juice.", rhyme: "Juice, juice, sweet and cool." },
  Rice: { phrase: "hot rice", scene: "I eat rice.", rhyme: "Rice, rice, very nice." },
  Cookie: { phrase: "a round cookie", scene: "I want a cookie.", rhyme: "Cookie, cookie, crunchy bite." },
  Dance: { phrase: "dance around", scene: "I can dance.", rhyme: "Dance, dance, move your feet." },
  Sleep: { phrase: "sleep well", scene: "I go to sleep.", rhyme: "Sleep, sleep, count the sheep." },
  Read: { phrase: "read a book", scene: "I read with Mom.", rhyme: "Read, read, learn and grow." },
  Draw: { phrase: "draw a picture", scene: "I draw a sun.", rhyme: "Draw, draw, color more." },
  Door: { phrase: "open the door", scene: "Please open the door.", rhyme: "Door, door, one step more." },
  Chair: { phrase: "sit on a chair", scene: "I sit on a chair.", rhyme: "Chair, chair, sit right there." },
  Lamp: { phrase: "turn on the lamp", scene: "The lamp is bright.", rhyme: "Lamp, lamp, light the room." },
  Toy: { phrase: "my favorite toy", scene: "I play with a toy.", rhyme: "Toy, toy, share your joy." },
};

const lessonTitles = [
  "Hello Animals",
  "Yummy Food",
  "Move My Body",
  "My Room",
  "More Animals",
  "Snack Time",
  "I Can Do It",
  "Around Home",
];

const lessons = Array.from({ length: Math.ceil(courseWords.length / 4) }, (_, index) => ({
  title: lessonTitles[index],
  words: courseWords.slice(index * 4, index * 4 + 4),
}));

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
let stars = 0;
let selectedWord = lessons[0].words[0];
let currentMoleTarget = selectedWord.word;
let draggedMatch = null;
let draggedElement = null;
let selectedDragWord = null;
let currentSoundWord = lessons[0].words[0];
let recognition = null;
let isListening = false;
let lessonMode = "course";

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
const wordHint = document.querySelector("#wordHint");
const phraseText = document.querySelector("#phraseText");
const sceneText = document.querySelector("#sceneText");
const rhymeText = document.querySelector("#rhymeText");
const starCount = document.querySelector("#starCount");
const wordCards = document.querySelector("#wordCards");
const lessonTag = document.querySelector("#lessonTag");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonProgress = document.querySelector("#lessonProgress");
const nextLessonBtn = document.querySelector("#nextLessonBtn");
const repeatBtn = document.querySelector("#repeatBtn");
const manualDoneBtn = document.querySelector("#manualDoneBtn");
const rewardOverlay = document.querySelector("#rewardOverlay");
const rewardText = document.querySelector("#rewardText");
const homeLessonTag = document.querySelector("#homeLessonTag");
const homeLessonTitle = document.querySelector("#homeLessonTitle");
const homeLessonStatus = document.querySelector("#homeLessonStatus");
const todayWords = document.querySelector("#todayWords");
const reviewCount = document.querySelector("#reviewCount");
const courseMap = document.querySelector("#courseMap");
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
    })
  );
}

function loadProgress() {
  currentLessonIndex = 0;
  stars = 0;
  practicedWords = new Set();

  const raw = localStorage.getItem(storageKey());
  if (!raw) return;

  try {
    const progress = JSON.parse(raw);
    currentLessonIndex = Math.min(progress.lesson || 0, lessons.length - 1);
    stars = progress.stars || 0;
    practicedWords = new Set(progress.practiced || []);
  } catch {
    currentLessonIndex = 0;
    practicedWords = new Set();
  }
}

function currentLesson() {
  return lessons[currentLessonIndex];
}

function currentLessonWords() {
  if (lessonMode === "review") {
    const words = learnedWords();
    return words.length ? words.slice(-4) : currentLesson().words;
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
}

function sample(items, count) {
  return [...items].sort(() => Math.random() - 0.5).slice(0, count);
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.74;
  utterance.pitch = 1.25;
  window.speechSynthesis.speak(utterance);
}

function normalizeSpeech(text) {
  return text.toLowerCase().replace(/[^a-z\s]/g, " ").replace(/\s+/g, " ").trim();
}

function heardTarget(transcript, target) {
  return normalizeSpeech(transcript).split(" ").includes(target.toLowerCase());
}

function getWordExpression(word) {
  return wordExpressions[word.word] || {
    phrase: `a ${word.word.toLowerCase()}`,
    scene: `I see a ${word.word.toLowerCase()}.`,
    rhyme: `${word.word}, ${word.word}, say it with me.`,
  };
}

function setRepeatButtonLabel() {
  repeatBtn.textContent = `Speak ${selectedWord.word}`;
}

function updateWordDetails(word, hint = `/${word.sound}/ sound`) {
  const expression = getWordExpression(word);
  selectedWord = word;
  wordText.textContent = word.word;
  wordChinese.textContent = word.zh;
  wordHint.textContent = hint;
  phraseText.textContent = expression.phrase;
  sceneText.textContent = expression.scene;
  rhymeText.textContent = expression.rhyme;
  setRepeatButtonLabel();
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

function completeSpokenWord() {
  wordHint.textContent = "You got it!";
  animateBuddy("happy");
  markPracticed(selectedWord);
  addStar();
  showReward(selectedWord);
  speak(`Great! ${selectedWord.word}`);
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
  updateVoiceFallback();
  setActiveScreen("home");
  window.setTimeout(() => speak("Welcome. Let's play English!"), 350);
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
  speak(word.word);
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
    if (heardTarget(transcript, selectedWord.word)) {
      completeSpokenWord();
    } else {
      wordHint.textContent = "Try again!";
      buddy.classList.add("wrong");
      speak("Try again");
    }
  };

  recognition.onerror = (event) => {
    wordHint.textContent = event.error === "not-allowed" ? "Allow microphone" : "Tap Repeat again";
    manualDoneBtn.classList.remove("hidden");
    speak(event.error === "not-allowed" ? "Please allow microphone" : "Try again");
  };

  recognition.onend = stopListeningState;
  recognition.start();
}

function updateLessonProgress() {
  const lessonWords = currentLessonWords();
  const done = lessonWords.filter((word) => practicedWords.has(word.word)).length;
  lessonProgress.textContent = lessonMode === "review" ? "Review" : `${done}/${lessonWords.length}`;
  nextLessonBtn.disabled = lessonMode === "review" || done < lessonWords.length || currentLessonIndex >= lessons.length - 1;
  nextLessonBtn.textContent = lessonMode === "review" ? "Course" : currentLessonIndex >= lessons.length - 1 ? "Done" : "Next";

  document.querySelectorAll(".word-card").forEach((card) => {
    card.classList.toggle("learned", practicedWords.has(card.dataset.word));
  });

  document.querySelectorAll(".step-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentLessonIndex);
    dot.classList.toggle("done", index < currentLessonIndex);
  });
}

function renderLesson() {
  const lesson = currentLesson();
  const words = currentLessonWords();
  lessonTag.textContent = lessonMode === "review" ? "Review" : `Lesson ${currentLessonIndex + 1}`;
  lessonTitle.textContent = lessonMode === "review" ? "Review Words" : lesson.title;
  wordCards.innerHTML = words
    .map(
      (item, index) => `
        <button class="word-card ${index === 0 ? "active" : ""}" data-word="${item.word}">
          <span class="emoji" aria-hidden="true">${item.emoji}</span>
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
          <span>${item.emoji}</span>
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
        choice.classList.add("happy");
        speak(`${choice.dataset.word}. Yes!`);
        addStar();
      } else {
        choice.classList.add("wrong");
        speak("Try again");
      }
    });
  });
}

function renderMatchGame() {
  const round = currentLessonWords();
  document.querySelector("#dragBank").innerHTML = round
    .map((item) => `<button class="drag-word" draggable="true" data-match="${item.word}">${item.word}<small>${item.zh}</small></button>`)
    .join("");
  document.querySelector("#dropGrid").innerHTML = sample(round, round.length)
    .map((item) => `<button class="drop-zone" data-match="${item.word}"><span>${item.emoji}</span></button>`)
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

function checkMatch(zone, incoming) {
  const word = currentLessonWords().find((item) => item.word === incoming);
  if (incoming === zone.dataset.match) {
    zone.classList.add("done", "happy");
    if (draggedElement) draggedElement.classList.add("matched");
    if (selectedDragWord) selectedDragWord.classList.remove("selected");
    selectedDragWord = null;
    if (word) markPracticed(word);
    speak(`Yes, ${incoming}`);
    addStar();
  } else {
    zone.classList.add("wrong");
    window.setTimeout(() => zone.classList.remove("wrong"), 350);
    speak("Try again");
  }
}

function renderMoleGame() {
  const round = currentLessonWords();
  currentMoleTarget = sample(round, 1)[0].word;
  document.querySelector("#targetWord").textContent = currentMoleTarget;
  document.querySelector("#moleGrid").innerHTML = sample(round, round.length)
    .map((item) => `<button class="mole" data-word="${item.word}"><span>${item.emoji}</span><strong>${item.word}</strong><small>${item.zh}</small></button>`)
    .join("");

  document.querySelectorAll(".mole").forEach((mole) => {
    mole.addEventListener("click", () => {
      mole.classList.remove("happy", "wrong");
      if (mole.dataset.word === currentMoleTarget) {
        const word = currentLessonWords().find((item) => item.word === currentMoleTarget);
        mole.classList.add("happy");
        if (word) markPracticed(word);
        speak(`Yes, ${currentMoleTarget}`);
        addStar();
        window.setTimeout(renderMoleGame, 700);
      } else {
        mole.classList.add("wrong");
        speak("Listen again");
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
}

function renderHome() {
  const lesson = currentLesson();
  const done = lesson.words.filter((word) => practicedWords.has(word.word)).length;
  const learned = learnedWords();
  homeLessonTag.textContent = `Continue Lesson ${currentLessonIndex + 1}`;
  homeLessonTitle.textContent = lesson.title;
  homeLessonStatus.textContent = `${done}/${lesson.words.length} words`;
  reviewCount.textContent = `${learned.length} learned`;
  document.querySelector("#reviewBtn").disabled = learned.length === 0;
  todayWords.innerHTML = lesson.words
    .map(
      (word) => `
        <button class="mini-word" data-word="${word.word}">
          <span>${word.emoji}</span>
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
          <strong>${item.title}</strong>
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
  speak(selectedWord.word);
});

document.querySelectorAll(".expression-card").forEach((card) => {
  card.addEventListener("click", () => {
    const expression = getWordExpression(selectedWord);
    const text = expression[card.dataset.say];
    card.classList.remove("pop");
    requestAnimationFrame(() => card.classList.add("pop"));
    speak(text);
  });
});

repeatBtn.addEventListener("click", startRepeatCheck);
manualDoneBtn.addEventListener("click", completeSpokenWord);

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

nextLessonBtn.addEventListener("click", () => {
  if (nextLessonBtn.disabled) return;
  lessonMode = "course";
  currentLessonIndex += 1;
  practicedWords = new Set();
  saveProgress();
  refreshGames();
  setActiveScreen("home");
  speak(`Lesson ${currentLessonIndex + 1}`);
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
