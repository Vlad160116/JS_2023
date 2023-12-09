// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function recSquare(a, b) {
  let result = a * b;
  return result;
}
let x = recSquare(5, 5);
console.log(x);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleSquare(r) {
  return r * r * Math.PI;
}
console.log(circleSquare(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderSquare(r, h) {
  return r * h * 2 * Math.PI;
}
console.log(cylinderSquare(10, 32));
// - створити функцію яка приймає масив та виводить кожен його елемент

function array() {
  console.log(arguments);
}
array(11, 22, 33, 'asdqwe');
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function p(text) {
  document.write(`<p>${text}</p>`);
}
p('Okten school');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function text_Ul(list) {
  document.write(`
  <ul>
    <li>${list}</li>
    <li>${list}</li>
    <li>${list}</li>
  </ul>`);
}
text_Ul('Asdfsefdx');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function text_Ul2(list) {
  document.write(`<ul>`);
  for (let index = 0; index < 3; index++) {
    document.write(`<li>${list}</li>`);
  }
  document.write(`</ul>`);
}
text_Ul2('Adfgegrdf');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function text_Li(list) {
  document.write(`<ul>`);
  for (const arr of list) {
    document.write(`<li>${arr}</li>`);
  }

  document.write(`</ul>`);
}
text_Li(['Adfgegrdf', 123, 234, 345, 'tokeog', true]);

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

function arrLi(arr) {
  for (const user of arr) {
    document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
  }
}
arrLi(users);

// - створити функцію яка повертає найменьше число з масиву

let minNumbers = [23, 234, 345, 98, 12, 1, 6, -45, -2274];
function minNum(arr) {
  let minItem = arr[0];
  for (const num of arr) {
    if (minItem > num) {
      minItem = num;
    }
  }
  return minItem;
}
console.log(minNum(minNumbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
  let result = 0;
  for (const item of arr) {
    result += item;
  }
  return result;
}
console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
  const num1 = arr[index1];
  const num2 = arr[index2];
  arr[index1] = num2;
  arr[index2] = num1;
  return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));

function swap(arr, index2, index3) {
  const num2 = arr[index2];
  const num3 = arr[index3];
  arr[index2] = num3;
  arr[index3] = num2;
  return arr;
}
console.log(swap([11, 22, 33, 44], 1, 2));

function swap(arr, index3, index4) {
  const num3 = arr[index3];
  const num4 = arr[index4];
  arr[index3] = num4;
  arr[index4] = num3;
  return arr;
}
console.log(swap([11, 22, 33, 44], 2, 3));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
  for (const currency of currencyValues) {
    if (currency.currency === exchangeCurrency) {
      return sumUAH / currency.value;
    }
  }
}

const result = exchange(
  10000,
  [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 },
  ],
  'USD'
);
console.log(result);
