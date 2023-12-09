// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let str_1 = 'hello';
console.log(str_1);
let str_2 = 'owu';
console.log(str_2);
let str_3 = 'com';
console.log(str_3);
let str_4 = 'ua';
console.log(str_4);
let str_5 = 1;
console.log(str_5);
let str_6 = 10;
console.log(str_6);
let str_7 = -999;
console.log(str_7);
let str_8 = 123;
console.log(str_8);
let str_9 = 3.14;
console.log(str_9);
let str_10 = 2.7;
console.log(str_10);
let str_11 = 16;
console.log(str_11);
let str_12 = true;
console.log(str_12);
let str_13 = false;
console.log(str_13);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Vladyslav';
let middleName = 'Viacheslavovych';
let lastName = 'Tymoshenko';

// 1 спосіб
console.log(`${firstName} ${middleName} ${lastName}`);

// 2 спосіб
console.log(firstName + ' ' + middleName + ' ' + lastName);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = +prompt('Як тебе звати');
console.log('Привіт' + ' ' + name);

let middle_name = +prompt('По-батькові');
console.log(middle_name);

let age = +prompt('Скільки тобі років');
console.log(`${'Мені'} ${age} ${'років'} `);
