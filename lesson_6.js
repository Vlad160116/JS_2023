// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let a = 'hello world';
console.log(a.length);

let b = 'lorem ipsum';
console.log(b.length);

let c = 'javascript is cool';
console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let result = str1.toUpperCase();
console.log(result);

let str2 = 'lorem ipsum';
console.log(str2.toUpperCase());

let str3 = 'javascript is cool';
console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str4 = 'HELLO WORLD';
let result4 = str4.toLowerCase();
console.log(result4);

let str5 = 'LOREM IPSUM';
console.log(str5.toLowerCase());

let str6 = 'JAVASCRIPT IS COOL';
console.log(str6.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let res = str.trim();
console.log(res);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let string = 'Ревуть воли як ясла повні';
console.log(string.split(' '));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let numStr = numArr.map((arr) => arr.toString());
console.log(numStr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

let nums = [11, 21, 3];

let sortNums = (arr5, orders) => {
  switch (orders) {
    case 'ascending':
      return arr5.sort((a, b) => a - b);
    case 'descending':
      return arr5.sort((a, b) => b - a);
  }
};

console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]

// ==========================
// - є масив
let coursesAndDurationArray = [
  { title: 'JavaScript Complex', monthDuration: 5 },
  { title: 'Java Complex', monthDuration: 6 },
  { title: 'Python Complex', monthDuration: 6 },
  { title: 'QA Complex', monthDuration: 4 },
  { title: 'FullStack', monthDuration: 7 },
  { title: 'Frontend', monthDuration: 4 },
];

//  -- відсортувати його за спаданням за monthDuration

let sort = coursesAndDurationArray.sort((a, b) => {
  return b.monthDuration - a.monthDuration;
});
console.log(sort);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter((item) => item.monthDuration > 5);
console.log(filter);

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let newCourse = coursesAndDurationArray.map((user, index) => {
  user.id = index;
  return user;
});
console.log(newCourse);

//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
let cards = [
  { cardSuit: 'hearts', value: '6', color: 'red' },
  { cardSuit: 'hearts', value: '7', color: 'red' },
  { cardSuit: 'hearts', value: '8', color: 'red' },
  { cardSuit: 'hearts', value: '9', color: 'red' },
  { cardSuit: 'hearts', value: '10', color: 'red' },
  { cardSuit: 'hearts', value: 'ace', color: 'red' },
  { cardSuit: 'hearts', value: 'jack', color: 'red' },
  { cardSuit: 'hearts', value: 'queen', color: 'red' },
  { cardSuit: 'hearts', value: 'king', color: 'red' },
  { cardSuit: 'diamonds', value: '6', color: 'red' },
  { cardSuit: 'diamonds', value: '7', color: 'red' },
  { cardSuit: 'diamonds', value: '8', color: 'red' },
  { cardSuit: 'diamonds', value: '9', color: 'red' },
  { cardSuit: 'diamonds', value: '10', color: 'red' },
  { cardSuit: 'diamonds', value: 'ace', color: 'red' },
  { cardSuit: 'diamonds', value: 'jack', color: 'red' },
  { cardSuit: 'diamonds', value: 'queen', color: 'red' },
  { cardSuit: 'diamonds', value: 'king', color: 'red' },
  { cardSuit: 'spades', value: '6', color: 'black' },
  { cardSuit: 'spades', value: '7', color: 'black' },
  { cardSuit: 'spades', value: '8', color: 'black' },
  { cardSuit: 'spades', value: '9', color: 'black' },
  { cardSuit: 'spades', value: '10', color: 'black' },
  { cardSuit: 'spades', value: 'ace', color: 'black' },
  { cardSuit: 'spades', value: 'jack', color: 'black' },
  { cardSuit: 'spades', value: 'queen', color: 'black' },
  { cardSuit: 'spades', value: 'king', color: 'black' },
  { cardSuit: 'clubs', value: '6', color: 'black' },
  { cardSuit: 'clubs', value: '7', color: 'black' },
  { cardSuit: 'clubs', value: '8', color: 'black' },
  { cardSuit: 'clubs', value: '9', color: 'black' },
  { cardSuit: 'clubs', value: '10', color: 'black' },
  { cardSuit: 'clubs', value: 'ace', color: 'black' },
  { cardSuit: 'clubs', value: 'jack', color: 'black' },
  { cardSuit: 'clubs', value: 'queen', color: 'black' },
  { cardSuit: 'clubs', value: 'king', color: 'black' },
];
//  - знайти піковий туз

console.log(
  cards.find((card) => card.cardSuit === 'spade' && card.value === 'ace')
);

//  - всі шістки

console.log(cards.find((card) => card.value === '6'));

//  - всі червоні карти

console.log(cards.find((card) => card.color === 'red'));

//  - всі буби

console.log(cards.find((card) => card.cardSuit === 'diamond'));

//  - всі трефи від 9 та більше

console.log(
  cards.filter(
    (card) =>
      card.cardSuit === 'clubs' &&
      ['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value)
  )
);

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// =========================

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cards.reduce(
  (item, car) => {
    item[car.cardSuit].push(car);
    return item;
  },
  {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: [],
  }
);
console.log(reduce);

// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
  {
    title: 'JavaScript Complex',
    monthDuration: 5,
    hourDuration: 909,
    modules: [
      'html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'node.js',
    ],
  },
  {
    title: 'Java Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      'html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'git',
      'java core',
      'java advanced',
    ],
  },
  {
    title: 'Python Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      'html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'python core',
      'python advanced',
    ],
  },
  {
    title: 'QA Complex',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC'],
  },
  {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: [
      'html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'node.js',
      'python',
      'java',
    ],
  },
  {
    title: 'Frontend',
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      'html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'sass',
    ],
  },
];

// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter((text) => text.modules.includes('sass')));

// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter((text1) => text1.modules.includes('docker')));
