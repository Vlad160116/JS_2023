// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}
let user = [
  new User(1, 'Olya', 'Koval', 'kovalOlya@gmail.com', '0979882388'),
  new User(2, 'Olya', 'Koval', 'kovalOlya@gmail.com', '0979882388'),
  new User(3, 'Olya', 'Koval', 'kovalOlya@gmail.com', '0979882388'),
  new User(4, 'Olya', 'Koval', 'kovalOlya@gmail.com', '0979882388'),
  new User(5, 'Olya', 'Koval', 'kovalOlya@gmail.com', '0979882388'),
  new User(6, 'Olya', 'Koval', 'kovalOlya@gmail.com', '0979882388'),
  new User(7, 'Olya', 'Koval', 'kovalOlya@gmail.com', '0979882388'),
  new User(8, 'Olya', 'Koval', 'kovalOlya@gmail.com', '0979882388'),
  new User(9, 'Olya', 'Koval', 'kovalOlya@gmail.com', '0979882388'),
  new User(10, 'Olya', 'Koval', 'kovalOlya@gmail.com', '0979882388'),
];
console.log(user);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter1 = user.filter((itemFil) => !(itemFil.id % 2));
console.log(filter1);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort1 = user.sort((a, b) => a.id - b.id);
console.log(sort1);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car1(model, manufacture, year, maxSpeed, engineV) {
  this.manufacture = manufacture;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.engineV = engineV;
  this.engineV = engineV;
  this.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed}км на годину`);
  };
  this.info = function () {
    console.log(
      `Модель - ${this.model}, виробник - ${this.manufacture}, рік випуску - ${
        this.year
      }, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${
        this.engineV
      }, водій - ${JSON.stringify(this.driver)}`
    );
  };
  this.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed += newSpeed;
  };

  this.changeYear = function (newValue) {
    this.year += newValue;
  };
  this.addDriver = function (driver) {
    this.driver = driver;
  };
}

let car1 = new Car1('Malibu', 'Shevrolet', 2019, 200, 1.5);
car1.drive();
car1.info();

car1.increaseMaxSpeed(25);
car1.info();

car1.changeYear(4);
car1.info();

car1.addDriver({ name: 'Владислав', age: 27 });
car1.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
  constructor(model, manufacture, year, maxSpeed, engineV) {
    this.manufacture = manufacture;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineV = engineV;
    this.engineV = engineV;
    this.drive = function () {
      console.log(`їдемо зі швидкістю ${this.maxSpeed}км на годину`);
    };
    this.info = function () {
      console.log(
        `Модель - ${this.model}, виробник - ${
          this.manufacture
        }, рік випуску - ${this.year}, максимальна швидкість - ${
          this.maxSpeed
        }, об'єм двигуна - ${this.engineV}, водій - ${JSON.stringify(
          this.driver
        )}`
      );
    };
    this.increaseMaxSpeed = function (newSpeed) {
      this.maxSpeed += newSpeed;
    };

    this.changeYear = function (newValue) {
      this.year += newValue;
    };
    this.addDriver = function (driver) {
      this.driver = driver;
    };
  }
}
console.log('-----------------------');
let car2 = new Car2('Malibu', 'Shevrolet', 2019, 200, 1.5);
car2.drive();
car2.info();

car2.increaseMaxSpeed(25);
car2.info();

car2.changeYear(4);
car2.info();

car2.addDriver({ name: 'Владислав', age: 27 });
car2.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Cinderella1(name, age, size) {
  this.name = name;
  this.age = age;
  this.size = size;
}
let cinderella1 = [
  new Cinderella1(1, 'Ariel', 25, 36),
  new Cinderella1(2, 'Ariel', 25, 36),
  new Cinderella1(3, 'Ariel', 25, 36),
  new Cinderella1(4, 'Ariel', 25, 36),
  new Cinderella1(5, 'Ariel', 25, 36),
  new Cinderella1(6, 'Ariel', 25, 36),
  new Cinderella1(7, 'Ariel', 25, 36),
  new Cinderella1(8, 'Ariel', 25, 36),
  new Cinderella1(9, 'Ariel', 25, 36),
  new Cinderella1(10, 'Ariel', 25, 36),
];
console.log(cinderella1);

console.log('--------------------');

class Cinderella2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class CinderellaCopy extends Cinderella2 {
  constructor(name, age, size) {
    super(name, age);
    this.size = size;
  }
}

let cinderella2 = [
  new Cinderella2(1, 'Ariel', 25, 36),
  new Cinderella2(2, 'Ariel', 25, 36),
  new Cinderella2(3, 'Ariel', 25, 36),
  new Cinderella2(4, 'Ariel', 25, 36),
  new Cinderella2(5, 'Ariel', 25, 36),
  new Cinderella2(6, 'Ariel', 25, 36),
  new Cinderella2(7, 'Ariel', 25, 36),
  new Cinderella2(8, 'Ariel', 25, 36),
  new Cinderella2(9, 'Ariel', 25, 36),
  new Cinderella2(10, 'Ariel', 25, 36),
];
console.log(cinderella2);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

class Prince extends Cinderella2 {
  constructor(name, age, found) {
    super(name, age);
    this.found = found;
  }
  findCinderella(arr) {
    for (const item of object) {
      if (size === found) {
        console.log(`${item}`);
      }
    }
  }
}
let prince = new Prince('Vlad', 27, 36);
console.log(prince);

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
