// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

arr = [true, 'value', 100, false, 'okten', '657', true, 'owu', 235, 370];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book_1 = {
  title: 'Harry Potter',
  pageCount: 155,
  genre: 'fantastic',
};
console.log(book_1);

let book_2 = {
  title: 'Big getsby',
  pageCount: 243,
  genre: 'novel',
};
console.log(book_2);

let book_3 = {
  title: 'The Mystery of Endhouse',
  pageCount: 312,
  genre: 'detective',
};
console.log(book_3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// arr_1 = [author: ['name', 'age' ];]
let book1 = {
  title: 'Harry Potter',
  pageCount: 155,
  genre: 'fantastic',
  author: [{ name: 'Joanne Rowling', age: 58 }],
};
console.log(book1);

let book2 = {
  title: 'Big getsby',
  pageCount: 243,
  genre: 'novel',
  author: [{ name: 'Francis Scott Fitzgerald', age: 44 }],
};
console.log(book2);

let book3 = {
  title: 'The Mystery of Endhouse',
  pageCount: 312,
  genre: 'detective',
  author: [{ name: 'Agatha Christie', age: 85 }],
};
console.log(book3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

user = [
  { name: 'Oleg', username: 'Popov', password: 'wqeqe2qe' },
  { name: 'Ivan', username: 'Pupkin', password: 'zxfsef' },
  { name: 'Vlad', username: 'Tymoshchuk', password: 34234 },
  { name: 'Zac', username: 'Pupkin', password: 'ikghxg' },
  { name: 'Val', username: 'Tymoshchuk', password: 27457 },
  { name: 'Andrey', username: 'Pupkin', password: 'zxfsdf' },
  { name: 'Kolya', username: 'Tymoshchuk', password: 86778 },
  { name: 'Vova', username: 'Pupkin', password: 'zsewd' },
  { name: 'Stev', username: 'Tymoshchuk', password: 45646 },
  { name: 'Pavel', username: 'Pupkin', password: 'zdfsefs' },
];
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.

// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;
if (x != 0) {
  console.log('Вірно');
} else {
  console.log('Невірно');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 67;
if (time >= 0 && time <= 14) {
  console.log('Перша частина години');
} else if (time >= 15 && time <= 29) {
  console.log('Друга частина години');
} else if (time >= 30 && time <= 44) {
  console.log('Третя частина години');
} else if (time >= 45 && time <= 60) {
  console.log('Четверта частина години');
} else if (time > 60) {
  console.log('Невірне значення');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 6;
if (day >= 1 && day <= 10) {
  console.log('Перша декада місяця');
} else if (day >= 11 && day <= 20) {
  console.log('Друга декада місяця');
} else if (day >= 21 && day <= 31) {
  console.log('Третя декада місяця');
} else if (day > 31) {
  console.log('Невірне значення');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = 3;

switch (week) {
  case 1:
    console.log('Sunday');
    break;
  case 2:
    console.log('Monday');
    break;
  case 3:
    console.log('Tuesday');
    break;
  case 4:
    console.log('Wednesday');
    break;
  case 5:
    console.log('Thursday');
    break;
  case 6:
    console.log('Friday');
    break;
  case 7:
    console.log('Saturday');
    break;
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let b1 = 10;
let b2 = +prompt('Введи будь-яке число: ', 10);
if (b1 === b2) {
  console.log('рівні числа');
} else if (b1 > b2) {
  console.log('Максимальне число: ', b1);
} else if (b1 < b2) {
  console.log('Максимальне число: ', b2);
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x1 = null;
x1 = x1 || 'default';
console.log(x1);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
  { title: 'JavaScript Complex', monthDuration: 5 },
  { title: 'Java Complex', monthDuration: 6 },
  { title: 'Python Complex', monthDuration: 6 },
  { title: 'QA Complex', monthDuration: 4 },
  { title: 'FullStack', monthDuration: 7 },
  { title: 'Frontend', monthDuration: 4 },
];

if (coursesAndDurationArray[0]['monthDuration'] > 5) {
  console.log('Cупер');
} else {
  console.log('Погано');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
  console.log('Cупер');
} else {
  console.log('Погано');
}
if (coursesAndDurationArray[2]['monthDuration'] > 5) {
  console.log('Cупер');
} else {
  console.log('Погано');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
  console.log('Cупер');
} else {
  console.log('Погано');
}
if (coursesAndDurationArray[4]['monthDuration'] > 5) {
  console.log('Cупер');
} else {
  console.log('Погано');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
  console.log('Cупер');
} else {
  console.log('Погано');
}
