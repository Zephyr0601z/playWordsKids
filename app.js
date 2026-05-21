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
  { word: "Rabbit", zh: "兔子", action: "jump", emoji: "🐰", letter: "R", sound: "r", phrase: "a white rabbit", scene: "The rabbit can hop.", rhyme: "Rabbit, rabbit, hop so fast." },
  { word: "Bear", zh: "熊", action: "wag", emoji: "🐻", letter: "B", sound: "b", phrase: "a big bear", scene: "The bear is big.", rhyme: "Bear, bear, sit right there." },
  { word: "Tiger", zh: "老虎", action: "jump", emoji: "🐯", letter: "T", sound: "t", phrase: "a strong tiger", scene: "The tiger can run.", rhyme: "Tiger, tiger, orange and bright." },
  { word: "Monkey", zh: "猴子", action: "flap", emoji: "🐵", letter: "M", sound: "m", phrase: "a funny monkey", scene: "The monkey can climb.", rhyme: "Monkey, monkey, swing with me." },
  { word: "Cow", zh: "奶牛", action: "wag", emoji: "🐮", letter: "C", sound: "c", phrase: "a black cow", scene: "The cow says moo.", rhyme: "Cow, cow, moo out loud." },
  { word: "Pig", zh: "猪", action: "swim", emoji: "🐷", letter: "P", sound: "p", phrase: "a pink pig", scene: "The pig is pink.", rhyme: "Pig, pig, dance a jig." },
  { word: "Sheep", zh: "绵羊", action: "wag", emoji: "🐑", letter: "S", sound: "sh", phrase: "a soft sheep", scene: "The sheep is soft.", rhyme: "Sheep, sheep, go to sleep." },
  { word: "Horse", zh: "马", action: "jump", emoji: "🐴", letter: "H", sound: "h", phrase: "a fast horse", scene: "The horse can run.", rhyme: "Horse, horse, run your course." },
  { word: "Bread", zh: "面包", action: "jump", emoji: "🍞", letter: "B", sound: "b", phrase: "warm bread", scene: "I eat bread.", rhyme: "Bread, bread, breakfast bread." },
  { word: "Water", zh: "水", action: "swim", emoji: "💧", letter: "W", sound: "w", phrase: "cold water", scene: "I drink water.", rhyme: "Water, water, sip and smile." },
  { word: "Grape", zh: "葡萄", action: "wag", emoji: "🍇", letter: "G", sound: "g", phrase: "purple grapes", scene: "I like grapes.", rhyme: "Grape, grape, on my plate." },
  { word: "Pizza", zh: "披萨", action: "jump", emoji: "🍕", letter: "P", sound: "p", phrase: "hot pizza", scene: "The pizza is hot.", rhyme: "Pizza, pizza, yummy slice." },
  { word: "Noodles", zh: "面条", action: "swim", emoji: "🍜", letter: "N", sound: "n", phrase: "long noodles", scene: "I eat noodles.", rhyme: "Noodles, noodles, twist and twirl." },
  { word: "IceCream", zh: "冰淇淋", action: "jump", emoji: "🍦", letter: "I", sound: "i", phrase: "cold ice cream", scene: "I like ice cream.", rhyme: "Ice cream, ice cream, sweet dream." },
  { word: "Cheese", zh: "奶酪", action: "wag", emoji: "🧀", letter: "C", sound: "ch", phrase: "yellow cheese", scene: "The cheese is yellow.", rhyme: "Cheese, cheese, smile please." },
  { word: "Soup", zh: "汤", action: "swim", emoji: "🥣", letter: "S", sound: "s", phrase: "warm soup", scene: "I drink soup.", rhyme: "Soup, soup, scoop the soup." },
  { word: "Walk", zh: "走路", action: "wag", emoji: "🚶", letter: "W", sound: "w", phrase: "walk slowly", scene: "I can walk.", rhyme: "Walk, walk, tick tock." },
  { word: "Swim", zh: "游泳", action: "swim", emoji: "🏊", letter: "S", sound: "s", phrase: "swim fast", scene: "I can swim.", rhyme: "Swim, swim, splash and grin." },
  { word: "Eat", zh: "吃", action: "jump", emoji: "🍽️", letter: "E", sound: "e", phrase: "eat lunch", scene: "I eat rice.", rhyme: "Eat, eat, take a seat." },
  { word: "Drink", zh: "喝", action: "swim", emoji: "🥤", letter: "D", sound: "d", phrase: "drink water", scene: "I drink milk.", rhyme: "Drink, drink, sip and think." },
  { word: "Look", zh: "看", action: "jump", emoji: "👀", letter: "L", sound: "l", phrase: "look here", scene: "Look at me.", rhyme: "Look, look, open the book." },
  { word: "Listen", zh: "听", action: "wag", emoji: "👂", letter: "L", sound: "l", phrase: "listen carefully", scene: "Listen to the word.", rhyme: "Listen, listen, sparkle and glisten." },
  { word: "Smile", zh: "微笑", action: "jump", emoji: "🙂", letter: "S", sound: "s", phrase: "big smile", scene: "I can smile.", rhyme: "Smile, smile, stay a while." },
  { word: "Wash", zh: "洗", action: "swim", emoji: "🧼", letter: "W", sound: "w", phrase: "wash hands", scene: "I wash my hands.", rhyme: "Wash, wash, splash, splash." },
  { word: "Table", zh: "桌子", action: "wag", emoji: "🪵", letter: "T", sound: "t", phrase: "a small table", scene: "The cup is on the table.", rhyme: "Table, table, strong and stable." },
  { word: "Window", zh: "窗户", action: "flap", emoji: "🪟", letter: "W", sound: "w", phrase: "open window", scene: "Open the window.", rhyme: "Window, window, let wind in." },
  { word: "Sofa", zh: "沙发", action: "swim", emoji: "🛋️", letter: "S", sound: "s", phrase: "soft sofa", scene: "I sit on the sofa.", rhyme: "Sofa, sofa, sit with me." },
  { word: "Pillow", zh: "枕头", action: "swim", emoji: "🛌", letter: "P", sound: "p", phrase: "soft pillow", scene: "My pillow is soft.", rhyme: "Pillow, pillow, sleepy head." },
  { word: "Clock", zh: "钟表", action: "wag", emoji: "🕒", letter: "C", sound: "c", phrase: "a round clock", scene: "The clock ticks.", rhyme: "Clock, clock, tick tock." },
  { word: "TV", zh: "电视", action: "jump", emoji: "📺", letter: "T", sound: "t", phrase: "watch TV", scene: "I watch TV.", rhyme: "TV, TV, look and see." },
  { word: "Phone", zh: "电话", action: "wag", emoji: "☎️", letter: "P", sound: "f", phrase: "my phone", scene: "The phone rings.", rhyme: "Phone, phone, ring at home." },
  { word: "Brush", zh: "牙刷", action: "wag", emoji: "🪥", letter: "B", sound: "br", phrase: "my brush", scene: "I brush my teeth.", rhyme: "Brush, brush, rush, rush." },
  { word: "Black", zh: "黑色", action: "swim", emoji: "⚫", letter: "B", sound: "b", phrase: "black cat", scene: "The cat is black.", rhyme: "Black, black, tap your back." },
  { word: "White", zh: "白色", action: "jump", emoji: "⚪", letter: "W", sound: "w", phrase: "white snow", scene: "The snow is white.", rhyme: "White, white, soft and bright." },
  { word: "Pink", zh: "粉色", action: "wag", emoji: "🌸", letter: "P", sound: "p", phrase: "pink flower", scene: "The flower is pink.", rhyme: "Pink, pink, blink, blink." },
  { word: "Purple", zh: "紫色", action: "jump", emoji: "🟣", letter: "P", sound: "p", phrase: "purple grape", scene: "The grape is purple.", rhyme: "Purple, purple, circle, circle." },
  { word: "Orange", zh: "橙色", action: "jump", emoji: "🟠", letter: "O", sound: "o", phrase: "orange ball", scene: "The ball is orange.", rhyme: "Orange, orange, bright and warm." },
  { word: "Brown", zh: "棕色", action: "wag", emoji: "🟤", letter: "B", sound: "b", phrase: "brown bear", scene: "The bear is brown.", rhyme: "Brown, brown, turn around." },
  { word: "Gray", zh: "灰色", action: "swim", emoji: "🩶", letter: "G", sound: "g", phrase: "gray cloud", scene: "The cloud is gray.", rhyme: "Gray, gray, cloudy day." },
  { word: "Gold", zh: "金色", action: "jump", emoji: "🌟", letter: "G", sound: "g", phrase: "gold star", scene: "The star is gold.", rhyme: "Gold, gold, bright and bold." },
  { word: "Five", zh: "五", action: "jump", emoji: "5️⃣", letter: "F", sound: "f", phrase: "five stars", scene: "I see five stars.", rhyme: "Five, five, jump and jive." },
  { word: "Six", zh: "六", action: "wag", emoji: "6️⃣", letter: "S", sound: "s", phrase: "six socks", scene: "I count six socks.", rhyme: "Six, six, tap the sticks." },
  { word: "Seven", zh: "七", action: "flap", emoji: "7️⃣", letter: "S", sound: "s", phrase: "seven days", scene: "Seven days in a week.", rhyme: "Seven, seven, look at heaven." },
  { word: "Eight", zh: "八", action: "swim", emoji: "8️⃣", letter: "E", sound: "e", phrase: "eight eggs", scene: "I see eight eggs.", rhyme: "Eight, eight, close the gate." },
  { word: "Nine", zh: "九", action: "jump", emoji: "9️⃣", letter: "N", sound: "n", phrase: "nine toys", scene: "I have nine toys.", rhyme: "Nine, nine, draw a line." },
  { word: "Ten", zh: "十", action: "wag", emoji: "🔟", letter: "T", sound: "t", phrase: "ten fingers", scene: "I have ten fingers.", rhyme: "Ten, ten, count again." },
  { word: "Zero", zh: "零", action: "swim", emoji: "0️⃣", letter: "Z", sound: "z", phrase: "zero cookies", scene: "I have zero cookies.", rhyme: "Zero, zero, start from zero." },
  { word: "Count", zh: "数数", action: "jump", emoji: "🔢", letter: "C", sound: "c", phrase: "count numbers", scene: "I can count.", rhyme: "Count, count, up the mount." },
  { word: "Grandma", zh: "奶奶", action: "wag", emoji: "👵", letter: "G", sound: "g", phrase: "my grandma", scene: "I love Grandma.", rhyme: "Grandma, Grandma, hug me tight." },
  { word: "Grandpa", zh: "爷爷", action: "jump", emoji: "👴", letter: "G", sound: "g", phrase: "my grandpa", scene: "I love Grandpa.", rhyme: "Grandpa, Grandpa, smile so bright." },
  { word: "Sister", zh: "姐妹", action: "flap", emoji: "👧", letter: "S", sound: "s", phrase: "my sister", scene: "My sister can sing.", rhyme: "Sister, sister, dance with me." },
  { word: "Brother", zh: "兄弟", action: "jump", emoji: "👦", letter: "B", sound: "br", phrase: "my brother", scene: "My brother can run.", rhyme: "Brother, brother, help each other." },
  { word: "Friend", zh: "朋友", action: "wag", emoji: "🧒", letter: "F", sound: "f", phrase: "my friend", scene: "Hello, my friend.", rhyme: "Friend, friend, play again." },
  { word: "Boy", zh: "男孩", action: "jump", emoji: "👦", letter: "B", sound: "b", phrase: "a little boy", scene: "The boy can jump.", rhyme: "Boy, boy, share your toy." },
  { word: "Girl", zh: "女孩", action: "flap", emoji: "👧", letter: "G", sound: "g", phrase: "a little girl", scene: "The girl can read.", rhyme: "Girl, girl, twirl, twirl." },
  { word: "Family", zh: "家庭", action: "wag", emoji: "👨‍👩‍👧", letter: "F", sound: "f", phrase: "my family", scene: "I love my family.", rhyme: "Family, family, you and me." },
  { word: "Mouth", zh: "嘴巴", action: "wag", emoji: "👄", letter: "M", sound: "m", phrase: "my mouth", scene: "I speak with my mouth.", rhyme: "Mouth, mouth, north and south." },
  { word: "Ear", zh: "耳朵", action: "flap", emoji: "👂", letter: "E", sound: "e", phrase: "my ear", scene: "I listen with my ears.", rhyme: "Ear, ear, I can hear." },
  { word: "Foot", zh: "脚", action: "jump", emoji: "🦶", letter: "F", sound: "f", phrase: "my foot", scene: "Touch your foot.", rhyme: "Foot, foot, step and put." },
  { word: "Leg", zh: "腿", action: "swim", emoji: "🦵", letter: "L", sound: "l", phrase: "my leg", scene: "I kick with my leg.", rhyme: "Leg, leg, hop like an egg." },
  { word: "Arm", zh: "胳膊", action: "wag", emoji: "💪", letter: "A", sound: "a", phrase: "my arm", scene: "Wave your arm.", rhyme: "Arm, arm, strong and warm." },
  { word: "Hair", zh: "头发", action: "swim", emoji: "💇", letter: "H", sound: "h", phrase: "my hair", scene: "My hair is soft.", rhyme: "Hair, hair, brush with care." },
  { word: "Face", zh: "脸", action: "jump", emoji: "😀", letter: "F", sound: "f", phrase: "my face", scene: "Wash your face.", rhyme: "Face, face, happy place." },
  { word: "Tooth", zh: "牙齿", action: "wag", emoji: "🦷", letter: "T", sound: "t", phrase: "one tooth", scene: "Brush your teeth.", rhyme: "Tooth, tooth, tell the truth." },
  { word: "Angry", zh: "生气", action: "jump", emoji: "😠", letter: "A", sound: "a", phrase: "feel angry", scene: "I feel angry.", rhyme: "Angry, angry, breathe with me." },
  { word: "Scared", zh: "害怕", action: "swim", emoji: "😨", letter: "S", sound: "s", phrase: "feel scared", scene: "I feel scared.", rhyme: "Scared, scared, hold my hand." },
  { word: "Excited", zh: "兴奋", action: "jump", emoji: "🤩", letter: "E", sound: "e", phrase: "feel excited", scene: "I am excited.", rhyme: "Excited, excited, clap and play." },
  { word: "Calm", zh: "平静", action: "swim", emoji: "😌", letter: "C", sound: "c", phrase: "feel calm", scene: "I feel calm.", rhyme: "Calm, calm, soft as a song." },
  { word: "Sleepy", zh: "困了", action: "swim", emoji: "😪", letter: "S", sound: "s", phrase: "feel sleepy", scene: "I am sleepy.", rhyme: "Sleepy, sleepy, close your eyes." },
  { word: "Proud", zh: "自豪", action: "jump", emoji: "🥳", letter: "P", sound: "p", phrase: "feel proud", scene: "I feel proud.", rhyme: "Proud, proud, say it loud." },
  { word: "Shy", zh: "害羞", action: "wag", emoji: "☺️", letter: "S", sound: "sh", phrase: "feel shy", scene: "I feel shy.", rhyme: "Shy, shy, wave goodbye." },
  { word: "Okay", zh: "还好", action: "wag", emoji: "👌", letter: "O", sound: "o", phrase: "feel okay", scene: "I am okay.", rhyme: "Okay, okay, start the day." },
  { word: "Shirt", zh: "衬衫", action: "wag", emoji: "👕", letter: "S", sound: "sh", phrase: "a blue shirt", scene: "I wear a shirt.", rhyme: "Shirt, shirt, swish your shirt." },
  { word: "Pants", zh: "裤子", action: "jump", emoji: "👖", letter: "P", sound: "p", phrase: "long pants", scene: "I wear pants.", rhyme: "Pants, pants, dance, dance." },
  { word: "Dress", zh: "连衣裙", action: "flap", emoji: "👗", letter: "D", sound: "d", phrase: "a pretty dress", scene: "I wear a dress.", rhyme: "Dress, dress, twirl and bless." },
  { word: "Skirt", zh: "裙子", action: "wag", emoji: "👚", letter: "S", sound: "sk", phrase: "a pink skirt", scene: "This is my skirt.", rhyme: "Skirt, skirt, spin your skirt." },
  { word: "Shorts", zh: "短裤", action: "jump", emoji: "🩳", letter: "S", sound: "sh", phrase: "blue shorts", scene: "I wear shorts.", rhyme: "Shorts, shorts, sports, sports." },
  { word: "Scarf", zh: "围巾", action: "flap", emoji: "🧣", letter: "S", sound: "sk", phrase: "warm scarf", scene: "I wear a scarf.", rhyme: "Scarf, scarf, warm my neck." },
  { word: "Gloves", zh: "手套", action: "wag", emoji: "🧤", letter: "G", sound: "g", phrase: "red gloves", scene: "I wear gloves.", rhyme: "Gloves, gloves, warm with love." },
  { word: "Boots", zh: "靴子", action: "jump", emoji: "🥾", letter: "B", sound: "b", phrase: "brown boots", scene: "I wear boots.", rhyme: "Boots, boots, step in boots." },
  { word: "Cloud", zh: "云", action: "flap", emoji: "☁️", letter: "C", sound: "c", phrase: "white cloud", scene: "I see a cloud.", rhyme: "Cloud, cloud, soft and proud." },
  { word: "Storm", zh: "暴风雨", action: "swim", emoji: "⛈️", letter: "S", sound: "st", phrase: "big storm", scene: "The storm is loud.", rhyme: "Storm, storm, stay warm." },
  { word: "Hot", zh: "热", action: "jump", emoji: "🥵", letter: "H", sound: "h", phrase: "hot day", scene: "It is hot.", rhyme: "Hot, hot, drink a lot." },
  { word: "Cold", zh: "冷", action: "swim", emoji: "🥶", letter: "C", sound: "c", phrase: "cold day", scene: "It is cold.", rhyme: "Cold, cold, hold, hold." },
  { word: "Warm", zh: "温暖", action: "wag", emoji: "🌤️", letter: "W", sound: "w", phrase: "warm sun", scene: "It is warm.", rhyme: "Warm, warm, soft and warm." },
  { word: "Cool", zh: "凉爽", action: "swim", emoji: "🍃", letter: "C", sound: "c", phrase: "cool wind", scene: "It is cool.", rhyme: "Cool, cool, back to school." },
  { word: "Sunny", zh: "晴朗", action: "jump", emoji: "🌞", letter: "S", sound: "s", phrase: "sunny day", scene: "It is sunny.", rhyme: "Sunny, sunny, bright and funny." },
  { word: "Foggy", zh: "有雾", action: "swim", emoji: "🌫️", letter: "F", sound: "f", phrase: "foggy morning", scene: "It is foggy.", rhyme: "Foggy, foggy, walk slowly." },
  { word: "Triangle", zh: "三角形", action: "jump", emoji: "🔺", letter: "T", sound: "t", phrase: "red triangle", scene: "This is a triangle.", rhyme: "Triangle, triangle, three sides tall." },
  { word: "Rectangle", zh: "长方形", action: "wag", emoji: "▭", letter: "R", sound: "r", phrase: "long rectangle", scene: "This is a rectangle.", rhyme: "Rectangle, rectangle, long and strong." },
  { word: "Diamond", zh: "菱形", action: "swim", emoji: "🔷", letter: "D", sound: "d", phrase: "blue diamond", scene: "This is a diamond.", rhyme: "Diamond, diamond, shine and glow." },
  { word: "Oval", zh: "椭圆形", action: "wag", emoji: "🥚", letter: "O", sound: "o", phrase: "small oval", scene: "This is an oval.", rhyme: "Oval, oval, roll so slow." },
  { word: "Pencil", zh: "铅笔", action: "wag", emoji: "✏️", letter: "P", sound: "p", phrase: "yellow pencil", scene: "I use a pencil.", rhyme: "Pencil, pencil, write your name." },
  { word: "Ruler", zh: "尺子", action: "jump", emoji: "📏", letter: "R", sound: "r", phrase: "long ruler", scene: "I use a ruler.", rhyme: "Ruler, ruler, straight and neat." },
  { word: "Eraser", zh: "橡皮", action: "swim", emoji: "🧽", letter: "E", sound: "e", phrase: "pink eraser", scene: "I use an eraser.", rhyme: "Eraser, eraser, rub away." },
  { word: "Crayon", zh: "蜡笔", action: "wag", emoji: "🖍️", letter: "C", sound: "c", phrase: "red crayon", scene: "I use a crayon.", rhyme: "Crayon, crayon, color and play." },
  { word: "Paper", zh: "纸", action: "flap", emoji: "📄", letter: "P", sound: "p", phrase: "white paper", scene: "I draw on paper.", rhyme: "Paper, paper, fold and play." },
  { word: "Glue", zh: "胶水", action: "swim", emoji: "🧴", letter: "G", sound: "g", phrase: "sticky glue", scene: "I use glue.", rhyme: "Glue, glue, stick it true." },
  { word: "Scissors", zh: "剪刀", action: "wag", emoji: "✂️", letter: "S", sound: "s", phrase: "safe scissors", scene: "I use scissors.", rhyme: "Scissors, scissors, snip, snip." },
  { word: "Classroom", zh: "教室", action: "jump", emoji: "🏫", letter: "C", sound: "c", phrase: "my classroom", scene: "I learn in the classroom.", rhyme: "Classroom, classroom, learn and bloom." },
  { word: "Mountain", zh: "山", action: "jump", emoji: "⛰️", letter: "M", sound: "m", phrase: "big mountain", scene: "I see a mountain.", rhyme: "Mountain, mountain, high and tall." },
  { word: "River", zh: "河流", action: "swim", emoji: "🏞️", letter: "R", sound: "r", phrase: "long river", scene: "The river is long.", rhyme: "River, river, shimmer, shimmer." },
  { word: "Leaf", zh: "叶子", action: "flap", emoji: "🍃", letter: "L", sound: "l", phrase: "green leaf", scene: "The leaf is green.", rhyme: "Leaf, leaf, fly so brief." },
  { word: "Rock", zh: "石头", action: "wag", emoji: "🪨", letter: "R", sound: "r", phrase: "small rock", scene: "I see a rock.", rhyme: "Rock, rock, knock, knock." },
  { word: "Grass", zh: "草地", action: "swim", emoji: "🌱", letter: "G", sound: "g", phrase: "green grass", scene: "I sit on the grass.", rhyme: "Grass, grass, soft to pass." },
  { word: "Sky", zh: "天空", action: "flap", emoji: "🌌", letter: "S", sound: "s", phrase: "blue sky", scene: "The sky is blue.", rhyme: "Sky, sky, way up high." },
  { word: "Lake", zh: "湖", action: "swim", emoji: "🏝️", letter: "L", sound: "l", phrase: "quiet lake", scene: "I see a lake.", rhyme: "Lake, lake, wake, wake." },
  { word: "Hill", zh: "小山", action: "jump", emoji: "🌄", letter: "H", sound: "h", phrase: "small hill", scene: "I walk up the hill.", rhyme: "Hill, hill, climb with will." },
  { word: "Bike", zh: "自行车", action: "swim", emoji: "🚲", letter: "B", sound: "b", phrase: "ride a bike", scene: "I ride a bike.", rhyme: "Bike, bike, ride and like." },
  { word: "Boat", zh: "船", action: "swim", emoji: "⛵", letter: "B", sound: "b", phrase: "small boat", scene: "The boat can float.", rhyme: "Boat, boat, float, float." },
  { word: "Taxi", zh: "出租车", action: "wag", emoji: "🚕", letter: "T", sound: "t", phrase: "yellow taxi", scene: "I see a taxi.", rhyme: "Taxi, taxi, take me home." },
  { word: "Ship", zh: "轮船", action: "swim", emoji: "🚢", letter: "S", sound: "sh", phrase: "big ship", scene: "The ship is big.", rhyme: "Ship, ship, on a trip." },
  { word: "Truck", zh: "卡车", action: "swim", emoji: "🚚", letter: "T", sound: "tr", phrase: "big truck", scene: "The truck is loud.", rhyme: "Truck, truck, good luck." },
  { word: "Scooter", zh: "滑板车", action: "wag", emoji: "🛴", letter: "S", sound: "s", phrase: "red scooter", scene: "I ride a scooter.", rhyme: "Scooter, scooter, zoom away." },
  { word: "Subway", zh: "地铁", action: "swim", emoji: "🚇", letter: "S", sound: "s", phrase: "fast subway", scene: "I take the subway.", rhyme: "Subway, subway, go today." },
  { word: "Rocket", zh: "火箭", action: "flap", emoji: "🚀", letter: "R", sound: "r", phrase: "fast rocket", scene: "The rocket goes up.", rhyme: "Rocket, rocket, to the sky." },
  { word: "Sorry", zh: "对不起", action: "wag", emoji: "🙏", letter: "S", sound: "s", phrase: "say sorry", scene: "Sorry, my friend.", rhyme: "Sorry, sorry, kind and sweet." },
  { word: "Welcome", zh: "欢迎", action: "jump", emoji: "🤗", letter: "W", sound: "w", phrase: "you are welcome", scene: "Welcome to class.", rhyme: "Welcome, welcome, come and play." },
  { word: "Morning", zh: "早上", action: "jump", emoji: "🌅", letter: "M", sound: "m", phrase: "good morning", scene: "Good morning, teacher.", rhyme: "Morning, morning, start the day." },
  { word: "Night", zh: "夜晚", action: "swim", emoji: "🌙", letter: "N", sound: "n", phrase: "good night", scene: "Good night, Mom.", rhyme: "Night, night, sleep tight." },
  { word: "Yes", zh: "是的", action: "jump", emoji: "✅", letter: "Y", sound: "y", phrase: "say yes", scene: "Yes, I can.", rhyme: "Yes, yes, do your best." },
  { word: "No", zh: "不", action: "wag", emoji: "❌", letter: "N", sound: "n", phrase: "say no", scene: "No, thank you.", rhyme: "No, no, slow, slow." },
  { word: "Good", zh: "好的", action: "jump", emoji: "👍", letter: "G", sound: "g", phrase: "good job", scene: "Good job!", rhyme: "Good, good, knock on wood." },
  { word: "Great", zh: "很棒", action: "jump", emoji: "🌈", letter: "G", sound: "gr", phrase: "great work", scene: "Great work!", rhyme: "Great, great, celebrate." },
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
  "Animal Friends 1",
  "Yummy Food 1",
  "Move My Body 1",
  "Around Home 1",
  "Animal Friends 2",
  "Yummy Food 2",
  "Move My Body 2",
  "Around Home 2",
  "Rainbow Colors 1",
  "First Numbers 1",
  "My Family 1",
  "My Body 1",
  "My Feelings 1",
  "My Clothes 1",
  "Weather Day 1",
  "Shapes I See 1",
  "School Time 1",
  "Nature Walk 1",
  "Things That Go 1",
  "Polite Words 1",
  "Animal Friends 3",
  "Animal Friends 4",
  "Yummy Food 3",
  "Yummy Food 4",
  "Move My Body 3",
  "Move My Body 4",
  "Around Home 3",
  "Around Home 4",
  "Rainbow Colors 2",
  "Rainbow Colors 3",
  "First Numbers 2",
  "First Numbers 3",
  "My Family 2",
  "My Family 3",
  "My Body 2",
  "My Body 3",
  "My Feelings 2",
  "My Feelings 3",
  "My Clothes 2",
  "My Clothes 3",
  "Weather Day 2",
  "Weather Day 3",
  "Shapes I See 2",
  "School Time 2",
  "School Time 3",
  "Nature Walk 2",
  "Nature Walk 3",
  "Things That Go 2",
  "Things That Go 3",
  "Polite Words 2",
  "Polite Words 3",
];

const lessonSections = [
  "Animals",
  "Food",
  "Actions",
  "Home",
  "Animals",
  "Food",
  "Actions",
  "Home",
  "Colors",
  "Numbers",
  "Family",
  "Body",
  "Feelings",
  "Clothes",
  "Weather",
  "Shapes",
  "School",
  "Nature",
  "Transport",
  "Polite",
  "Animals",
  "Animals",
  "Food",
  "Food",
  "Actions",
  "Actions",
  "Home",
  "Home",
  "Colors",
  "Colors",
  "Numbers",
  "Numbers",
  "Family",
  "Family",
  "Body",
  "Body",
  "Feelings",
  "Feelings",
  "Clothes",
  "Clothes",
  "Weather",
  "Weather",
  "Shapes",
  "School",
  "School",
  "Nature",
  "Nature",
  "Transport",
  "Transport",
  "Polite",
  "Polite",
];

const sectionStories = {
  Animals: {
    world: "Forest Island",
    title: "森林里谁在叫？",
    mission: "Buddy 听到一个声音，帮它找到森林朋友。",
    win: "You saved the forest friend!",
  },
  Food: {
    world: "Food Town",
    title: "野餐篮少了什么？",
    mission: "听一听、说一说，把食物放回野餐篮。",
    win: "Picnic sticker unlocked!",
  },
  Actions: {
    world: "Move Park",
    title: "动作小队出发！",
    mission: "跟着 Buddy 做动作，再大声说出来。",
    win: "Action badge unlocked!",
  },
  Home: {
    world: "Cozy Home",
    title: "家里藏着什么？",
    mission: "找到房间里的小物品，学会说它们。",
    win: "Home sticker unlocked!",
  },
  Weather: {
    world: "Weather Sky",
    title: "今天是什么天气？",
    mission: "看天空、听声音，帮 Buddy 选择天气。",
    win: "Weather badge unlocked!",
  },
  School: {
    world: "School Bus",
    title: "上学准备好了吗？",
    mission: "找到课堂用品，完成开学小任务。",
    win: "School sticker unlocked!",
  },
};

function lessonStoryFor(section) {
  return (
    sectionStories[section] || {
      world: `${section} World`,
      title: "Buddy 的英语小任务",
      mission: "听、看、说，完成今天的英语冒险。",
      win: "Sticker unlocked!",
    }
  );
}

const lessons = Array.from({ length: Math.ceil(courseWords.length / 4) }, (_, index) => {
  const section = lessonSections[index] || "Core";
  return {
    title: lessonTitles[index] || `Lesson ${index + 1}`,
    section,
    story: lessonStoryFor(section),
    words: courseWords.slice(index * 4, index * 4 + 4),
  };
});

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

function artMotif(section, action) {
  if (section === "Animals") return `<circle class="art-ear left" cx="35" cy="34" r="12" /><circle class="art-ear right" cx="65" cy="34" r="12" /><ellipse class="art-body" cx="50" cy="57" rx="25" ry="21" /><path class="art-smile" d="M39 60 Q50 70 61 60" />`;
  if (section === "Food") return `<path class="art-body" d="M32 67 C25 43 43 28 58 38 C73 31 83 49 70 70 C59 86 39 84 32 67Z" /><path class="art-leaf" d="M57 34 C70 20 82 28 69 40 C61 46 54 42 57 34Z" />`;
  if (section === "Weather") return `<path class="art-cloud" d="M25 60 H75 C86 60 86 47 74 46 C70 32 50 32 46 47 C35 40 20 49 25 60Z" /><path class="art-rain" d="M36 71 L31 82 M52 70 L47 84 M68 71 L63 82" />`;
  if (section === "Transport") return `<path class="art-wing" d="M20 59 L80 33 L66 65 L88 78 L75 88 L55 74 L36 83 Z" /><path class="art-line" d="M24 78 C39 72 54 65 70 55" />`;
  if (section === "Nature") return `<path class="art-leaf" d="M28 73 C46 24 77 25 83 70 C62 61 46 65 28 73Z" /><path class="art-line" d="M43 72 C51 55 61 42 75 31" />`;
  if (section === "Shapes") return `<rect class="art-shape" x="29" y="35" width="42" height="42" rx="11" transform="rotate(9 50 56)" /><circle class="art-dot" cx="29" cy="34" r="5" />`;
  if (section === "Numbers") return `<circle class="art-orbit" cx="50" cy="55" r="29" /><path class="art-line" d="M30 68 C42 55 57 47 73 38" /><circle class="art-dot" cx="76" cy="40" r="6" />`;
  if (action === "flap") return `<path class="art-wing" d="M22 58 C37 34 53 39 48 68 C37 71 29 66 22 58Z" /><path class="art-wing" d="M78 58 C63 34 47 39 52 68 C63 71 71 66 78 58Z" />`;
  if (action === "swim") return `<path class="art-wave" d="M22 67 C33 55 43 79 54 67 C65 55 75 79 86 67" /><path class="art-wave soft" d="M30 78 C39 70 48 85 57 78 C66 70 74 85 83 78" />`;
  return `<path class="art-spark" d="M24 35 L31 48 L45 51 L34 60 L36 74 L24 67 L12 74 L14 60 L3 51 L17 48Z" /><circle class="art-dot" cx="74" cy="34" r="7" />`;
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
        ${artMotif(section, word.action)}
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
