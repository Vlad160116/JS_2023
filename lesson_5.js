// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const rec = (a, b) => {
  let squareRec = a * b;
  return squareRec;
};
let x = rec(5, 5);
console.log(x);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let rectangle = (r) => {
  let result = Math.PI * r * r;
  return result;
};
let y = rectangle(5);
console.log(y);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinder = (r, h) => {
  return (cylSquare = 2 * r * h * Math.PI);
};
console.log(cylinder(2, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент

function array() {
  console.log(arguments);
}
array(11, 22, 33, 'asdqwe'); // На скільки я пам'ятаю аргумент не може стрілковою функцією

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let value = (p) => {
  document.write(`<p>${p}</p>`);
};

value('hgjadwhgsuydyu');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let list = (item) => {
  document.write(`<ul><li>${item}</li><li>${item}</li><li>${item}</li></ul>`);
};
list('ehwhdjesd12983793');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let list1 = (item1) => {
  document.write(`<ul>`);
  for (let index = 0; index < 3; index++) {
    document.write(`<li>${item1}</li><li>${item1}</li><li>${item1}</li>`);
  }
  document.write(`</ul>`);
};
list1('ehwserfesdsty545');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let textList = (item2) => {
  document.write(`<ul>`);
  for (const arr of item2) {
    document.write(`<li>${arr}</li>`);
  }
  document.write(`</ul>`);
};
textList([11, 44, 66, true, -283, 'wwewq']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
  { id: 0, name: 'vasya', age: 31 },
  { id: 1, name: 'petya', age: 30 },
  { id: 2, name: 'kolya', age: 29 },
  { id: 3, name: 'olya', age: 28 },
  { id: 4, name: 'max', age: 30 },
  { id: 5, name: 'anya', age: 31 },
  { id: 6, name: 'oleg', age: 28 },
  { id: 7, name: 'andrey', age: 29 },
  { id: 8, name: 'masha', age: 30 },
  { id: 9, name: 'olya', age: 31 },
  { id: 10, name: 'max', age: 31 },
];

let arrayNumbers = (arr) => {
  for (const user of arr) {
    document.write(`${user.id} ${user.name} ${user.age}`);
  }
};
arrayNumbers(users);
// - створити функцію яка повертає найменьше число з масиву

let minNumbers = [23, 234, 345, 98, 12, -4562, 6, -45, -2274];

let minNumber = (arr) => {
  let minNum = arr[0];
  for (const num of arr) {
    if (minNum > num) {
      minNum = num;
    }
  }
  return minNum;
};
console.log(minNumber(minNumbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) => {
  let result = 0;
  for (const item of arr) {
    result += item;
  }
  return result;
};
console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) => {
  let number1 = arr[index1];
  let number2 = arr[index2];
  arr[index1] = number2;
  arr[index2] = number1;
  return arr;
};
console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
  for (const currency of currencyValues) {
    if (currency.currency === exchangeCurrency) {
      return sumUAH / currency.value;
    }
  }
};
let item = exchange(
  10000,
  [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 },
  ],
  'USD'
);
console.log(item);
