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
  { word: "Red", zh: "红色", action: "jump", emoji: "🔴", letter: "R", sound: "r", phrase: "red apple", scene: "The apple is red.", rhyme: "Red, red, touch your head." },
  { word: "Blue", zh: "蓝色", action: "swim", emoji: "🔵", letter: "B", sound: "b", phrase: "blue sky", scene: "The sky is blue.", rhyme: "Blue, blue, I see you." },
  { word: "Yellow", zh: "黄色", action: "jump", emoji: "🟡", letter: "Y", sound: "y", phrase: "yellow sun", scene: "The sun is yellow.", rhyme: "Yellow, yellow, soft and mellow." },
  { word: "Green", zh: "绿色", action: "wag", emoji: "🟢", letter: "G", sound: "g", phrase: "green leaf", scene: "The leaf is green.", rhyme: "Green, green, nice and clean." },
  { word: "One", zh: "一", action: "jump", emoji: "1️⃣", letter: "O", sound: "o", phrase: "one ball", scene: "I have one ball.", rhyme: "One, one, learning is fun." },
  { word: "Two", zh: "二", action: "wag", emoji: "2️⃣", letter: "T", sound: "t", phrase: "two eyes", scene: "I have two eyes.", rhyme: "Two, two, me and you." },
  { word: "Three", zh: "三", action: "flap", emoji: "3️⃣", letter: "T", sound: "th", phrase: "three birds", scene: "I see three birds.", rhyme: "Three, three, count with me." },
  { word: "Four", zh: "四", action: "swim", emoji: "4️⃣", letter: "F", sound: "f", phrase: "four fish", scene: "I see four fish.", rhyme: "Four, four, open the door." },
  { word: "Mom", zh: "妈妈", action: "wag", emoji: "👩", letter: "M", sound: "m", phrase: "my mom", scene: "I love Mom.", rhyme: "Mom, mom, sing a song." },
  { word: "Dad", zh: "爸爸", action: "jump", emoji: "👨", letter: "D", sound: "d", phrase: "my dad", scene: "I love Dad.", rhyme: "Dad, dad, clap like that." },
  { word: "Baby", zh: "宝宝", action: "swim", emoji: "👶", letter: "B", sound: "b", phrase: "little baby", scene: "The baby smiles.", rhyme: "Baby, baby, wave to me." },
  { word: "Home", zh: "家", action: "jump", emoji: "🏠", letter: "H", sound: "h", phrase: "go home", scene: "I go home.", rhyme: "Home, home, warm as foam." },
  { word: "Head", zh: "头", action: "jump", emoji: "🙂", letter: "H", sound: "h", phrase: "my head", scene: "Touch your head.", rhyme: "Head, head, nod your head." },
  { word: "Eye", zh: "眼睛", action: "wag", emoji: "👁️", letter: "E", sound: "e", phrase: "one eye", scene: "I see with my eyes.", rhyme: "Eye, eye, look up high." },
  { word: "Nose", zh: "鼻子", action: "swim", emoji: "👃", letter: "N", sound: "n", phrase: "my nose", scene: "Touch your nose.", rhyme: "Nose, nose, smell a rose." },
  { word: "Hand", zh: "手", action: "wag", emoji: "✋", letter: "H", sound: "h", phrase: "my hand", scene: "Wave your hand.", rhyme: "Hand, hand, make a band." },
  { word: "Happy", zh: "开心", action: "jump", emoji: "😊", letter: "H", sound: "h", phrase: "feel happy", scene: "I am happy.", rhyme: "Happy, happy, tap, tap, tap." },
  { word: "Sad", zh: "难过", action: "swim", emoji: "😢", letter: "S", sound: "s", phrase: "feel sad", scene: "I feel sad.", rhyme: "Sad, sad, hug Mom and Dad." },
  { word: "Tired", zh: "累了", action: "swim", emoji: "🥱", letter: "T", sound: "t", phrase: "feel tired", scene: "I am tired.", rhyme: "Tired, tired, rest your head." },
  { word: "Funny", zh: "有趣", action: "jump", emoji: "😄", letter: "F", sound: "f", phrase: "so funny", scene: "This is funny.", rhyme: "Funny, funny, sunny day." },
  { word: "Hat", zh: "帽子", action: "jump", emoji: "🧢", letter: "H", sound: "h", phrase: "a blue hat", scene: "I wear a hat.", rhyme: "Hat, hat, pat your hat." },
  { word: "Shoes", zh: "鞋子", action: "wag", emoji: "👟", letter: "S", sound: "sh", phrase: "my shoes", scene: "I wear shoes.", rhyme: "Shoes, shoes, choose your shoes." },
  { word: "Coat", zh: "外套", action: "swim", emoji: "🧥", letter: "C", sound: "c", phrase: "a warm coat", scene: "I wear a coat.", rhyme: "Coat, coat, button your coat." },
  { word: "Socks", zh: "袜子", action: "wag", emoji: "🧦", letter: "S", sound: "s", phrase: "warm socks", scene: "These are my socks.", rhyme: "Socks, socks, tick tock." },
  { word: "Sun", zh: "太阳", action: "jump", emoji: "☀️", letter: "S", sound: "s", phrase: "bright sun", scene: "The sun is up.", rhyme: "Sun, sun, run in the sun." },
  { word: "Rain", zh: "雨", action: "swim", emoji: "🌧️", letter: "R", sound: "r", phrase: "soft rain", scene: "I hear the rain.", rhyme: "Rain, rain, tap the pane." },
  { word: "Wind", zh: "风", action: "flap", emoji: "💨", letter: "W", sound: "w", phrase: "strong wind", scene: "The wind blows.", rhyme: "Wind, wind, spin and grin." },
  { word: "Snow", zh: "雪", action: "swim", emoji: "❄️", letter: "S", sound: "s", phrase: "white snow", scene: "I see snow.", rhyme: "Snow, snow, soft and slow." },
  { word: "Circle", zh: "圆形", action: "swim", emoji: "⭕", letter: "C", sound: "c", phrase: "a big circle", scene: "This is a circle.", rhyme: "Circle, circle, round we go." },
  { word: "Star", zh: "星星", action: "jump", emoji: "⭐", letter: "S", sound: "s", phrase: "bright star", scene: "I see a star.", rhyme: "Star, star, shine afar." },
  { word: "Square", zh: "正方形", action: "wag", emoji: "◼️", letter: "S", sound: "s", phrase: "a small square", scene: "This is a square.", rhyme: "Square, square, draw it there." },
  { word: "Heart", zh: "爱心", action: "jump", emoji: "❤️", letter: "H", sound: "h", phrase: "red heart", scene: "I see a heart.", rhyme: "Heart, heart, love is art." },
  { word: "Pen", zh: "笔", action: "wag", emoji: "🖊️", letter: "P", sound: "p", phrase: "a blue pen", scene: "I use a pen.", rhyme: "Pen, pen, write again." },
  { word: "Bag", zh: "书包", action: "jump", emoji: "🎒", letter: "B", sound: "b", phrase: "my school bag", scene: "This is my bag.", rhyme: "Bag, bag, tag your bag." },
  { word: "Desk", zh: "课桌", action: "swim", emoji: "🧑‍🏫", letter: "D", sound: "d", phrase: "my desk", scene: "I sit at my desk.", rhyme: "Desk, desk, do your best." },
  { word: "Teacher", zh: "老师", action: "flap", emoji: "👩‍🏫", letter: "T", sound: "t", phrase: "my teacher", scene: "Hello, teacher.", rhyme: "Teacher, teacher, help me learn." },
  { word: "Tree", zh: "树", action: "flap", emoji: "🌳", letter: "T", sound: "t", phrase: "a tall tree", scene: "I see a tree.", rhyme: "Tree, tree, wave with me." },
  { word: "Flower", zh: "花", action: "wag", emoji: "🌸", letter: "F", sound: "f", phrase: "a pink flower", scene: "The flower is pretty.", rhyme: "Flower, flower, smell the flower." },
  { word: "Moon", zh: "月亮", action: "swim", emoji: "🌙", letter: "M", sound: "m", phrase: "the moon", scene: "The moon is bright.", rhyme: "Moon, moon, see you soon." },
  { word: "Sea", zh: "大海", action: "swim", emoji: "🌊", letter: "S", sound: "s", phrase: "blue sea", scene: "I see the sea.", rhyme: "Sea, sea, splash with me." },
  { word: "Car", zh: "汽车", action: "swim", emoji: "🚗", letter: "C", sound: "c", phrase: "a red car", scene: "The car can go.", rhyme: "Car, car, near and far." },
  { word: "Bus", zh: "公交车", action: "wag", emoji: "🚌", letter: "B", sound: "b", phrase: "a big bus", scene: "I ride a bus.", rhyme: "Bus, bus, ride with us." },
  { word: "Train", zh: "火车", action: "swim", emoji: "🚆", letter: "T", sound: "t", phrase: "a long train", scene: "The train is fast.", rhyme: "Train, train, down the lane." },
  { word: "Plane", zh: "飞机", action: "flap", emoji: "✈️", letter: "P", sound: "p", phrase: "a big plane", scene: "The plane can fly.", rhyme: "Plane, plane, fly again." },
  { word: "Hello", zh: "你好", action: "wag", emoji: "👋", letter: "H", sound: "h", phrase: "say hello", scene: "Hello, my friend.", rhyme: "Hello, hello, off we go." },
  { word: "Please", zh: "请", action: "jump", emoji: "🙏", letter: "P", sound: "p", phrase: "please help", scene: "Please help me.", rhyme: "Please, please, say it with ease." },
  { word: "Thanks", zh: "谢谢", action: "wag", emoji: "💛", letter: "T", sound: "th", phrase: "say thanks", scene: "Thanks, Mom.", rhyme: "Thanks, thanks, big happy thanks." },
  { word: "Bye", zh: "再见", action: "flap", emoji: "👋", letter: "B", sound: "b", phrase: "say bye", scene: "Bye, see you.", rhyme: "Bye, bye, wave to the sky." },
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
  "Rainbow Colors",
  "First Numbers",
  "My Family",
  "My Body",
  "My Feelings",
  "My Clothes",
  "Weather Day",
  "Shapes I See",
  "School Time",
  "Nature Walk",
  "Things That Go",
  "Polite Words",
];

const lessons = Array.from({ length: Math.ceil(courseWords.length / 4) }, (_, index) => ({
  title: lessonTitles[index] || `Lesson ${index + 1}`,
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
const phraseText = document.querySelector("#phraseText");
const sceneText = document.querySelector("#sceneText");
const rhymeText = document.querySelector("#rhymeText");
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
      completed: courseCompleted,
    })
  );
}

function loadProgress() {
  currentLessonIndex = 0;
  stars = 0;
  practicedWords = new Set();
  courseCompleted = false;

  const raw = localStorage.getItem(storageKey());
  if (!raw) return;

  try {
    const progress = JSON.parse(raw);
    currentLessonIndex = Math.min(progress.lesson || 0, lessons.length - 1);
    stars = progress.stars || 0;
    practicedWords = new Set(progress.practiced || []);
    courseCompleted = Boolean(progress.completed);
  } catch {
    currentLessonIndex = 0;
    practicedWords = new Set();
    courseCompleted = false;
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
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const lang = options.lang || "en";
  utterance.lang = lang === "zh" ? "zh-CN" : "en-US";
  const voice = chooseFriendlyVoice(lang);
  const style = speechStyle(text, lang);
  if (voice) utterance.voice = voice;
  utterance.rate = options.rate || style.rate;
  utterance.pitch = options.pitch || style.pitch;
  utterance.volume = options.volume || style.volume;
  window.speechSynthesis.speak(utterance);
}

function speakChinese(text, options = {}) {
  speak(text, { lang: "zh", ...options });
}

function speakWordWithMeaning(word) {
  speak(word.word);
  window.setTimeout(() => speakChinese(word.zh), 850);
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

function getWordExpression(word) {
  return (
    wordExpressions[word.word] || {
      phrase: word.phrase || `a ${word.word.toLowerCase()}`,
      scene: word.scene || `I see a ${word.word.toLowerCase()}.`,
      rhyme: word.rhyme || `${word.word}, ${word.word}, say it with me.`,
    }
  );
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

function showCourseComplete() {
  courseCompleted = true;
  completeSummary.textContent = `You learned ${courseWords.length} words and finished ${lessons.length} lessons.`;
  completeWordCount.textContent = courseWords.length;
  completeLessonCount.textContent = lessons.length;
  completeStarCount.textContent = stars;
  finalWordParade.innerHTML = sample(courseWords, 8)
    .map((word) => `<span><b>${word.emoji}</b>${word.word}</span>`)
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

function completeSpokenWord() {
  wordHint.textContent = "You got it!";
  animateBuddy("happy");
  markPracticed(selectedWord);
  addStar();
  showReward(selectedWord);
  speak(`Great job. ${selectedWord.word}`, { rate: 0.72, pitch: 1.28 });
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
    if (heardTarget(transcript, selectedWord.word)) {
      completeSpokenWord();
    } else {
      wordHint.textContent = "Try again!";
      buddy.classList.add("wrong");
      speak("Almost. Try again.", { rate: 0.72, pitch: 1.22 });
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
    speak(`Yes, ${incoming}. Well done!`, { rate: 0.74, pitch: 1.26 });
    if (word) window.setTimeout(() => speakChinese(word.zh), 1200);
    addStar();
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
    .map((item) => `<button class="mole" data-word="${item.word}"><span>${item.emoji}</span><strong>${item.word}</strong><small>${item.zh}</small></button>`)
    .join("");

  document.querySelectorAll(".mole").forEach((mole) => {
    mole.addEventListener("click", () => {
      mole.classList.remove("happy", "wrong");
      if (mole.dataset.word === currentMoleTarget) {
        const word = currentLessonWords().find((item) => item.word === currentMoleTarget);
        mole.classList.add("happy");
        if (word) markPracticed(word);
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
  speakWordWithMeaning(selectedWord);
});

wordChineseBtn.addEventListener("click", () => speakChinese(selectedWord.zh));

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
