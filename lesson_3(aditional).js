// additional

// --створити масив з:
// - з 5 числових значень

let num = [5, 34, 45, 97, 71];

// - з 5 стічкових значень

let str = ['asd', 'fwd', 'fad', 'asdqd', 'grea2e234sd'];

// - з 5 значень стрічкового, числового та булевого типу

let arr = [true, 723, 'fad', false, 115234];

// - та вивести його в консоль

console.log(num);
console.log(str);
console.log(arr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// - є масив
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}

// 2. перебрати його циклом for

for (let index = 0; index < array.length; index++) {
  const arr = array[index];
  console.log(arr);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let a = 1;
while (a < array.length) {
  console.log(array[a]);
  a += 2;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let index = 1; index < array.length; index += 2) {
  const arr = array[index];
  console.log(arr);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let b = 0;
while (b < array.length) {
  console.log(array[b]);
  b += 2;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let index = 0; index < array.length; index += 2) {
  const arr = array[index];
  console.log(arr);
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let index = 0; index < array.length; index++) {
  if (index % 3) {
    console.log('okten');
  }
}

// *НЕ МОЖУ ЗРОБИТИ*

// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numbers = [46, 72, 356, 8678, 78678, 2845, 453, 1745, -5675, -18];

for (let index = 0; index < numbers.length; index++) {
  const num = numbers[index];
  console.log(num);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let strings = [
  '46',
  '72',
  '356',
  '8678',
  '78678',
  '2845',
  '453',
  '1745',
  '-5675',
  '-18',
];

for (const str of strings) {
  console.log(str);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let items = [2, 17, false, 6, '453', '78678', 45, 66, '72', true];

let index = 0;
while (index < items.length) {
  console.log(items[index]);
  index++;
}

// *НЕ МОЖУ ЗРОБИТИ. Почав робити, але щось не правильно*

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let items_1 = [34, 567, false, 6, '453', '34234', 234, 6126, '453', true];
// if (items_1 === number) {
//   console.log(items_1);
// }

for (let index = 0; index < items_1.length; index++) {
  const item = items_1[index];
  if (item === 'boolean') {
    console.log(typeof [item]);
  }
}
// *НЕ МОЖУ ЗРОБИТИ.*
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let index = 0; index < 10; index++) {
  console.log(index);
  document.write(`${index}`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let index = 0; index < 100; index++) {
  console.log(index);
  document.write(`${index}`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let index = 0; index <= 100; index += 2) {
  console.log(index);
  document.write(`${index}`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let index = 1; index <= 100; index += 2) {
  console.log(index);
  document.write(`${index}`);
}

// *НЕ МОЖУ ЗРОБИТИ. Такий масив підійде?*

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
  {
    title: 'Harry Potter',
    pageCount: 155,
    genre: 'fantastic',
    author: [{ name: 'Joanne Rowling', age: 58 }],
  },

  {
    title: 'Big getsby',
    pageCount: 243,
    genre: 'novel',
    author: [{ name: 'Francis Scott Fitzgerald', age: 44 }],
  },
  {
    title: 'The Mystery of Endhouse',
    pageCount: 312,
    genre: 'detective',
    author: [{ name: 'Agatha Christie', age: 85 }],
  },
];

// -знайти найбільшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
