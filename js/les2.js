// const a = Number(parseInt(prompt("введить число")))
// console.log((a));

// console.log((0.1+0.2).toFixed(0.3));


// max chek

// console.log(Math.max(2,4,6,88,9));
// console.log(Math.min(2,4,6,88,9));
// console.log(Math.pow(5,3));
// console.log(Math.floor(8.9));
// console.log(Math.ceil(11.5));
// console.log(Math.round(3.4)); // (auto округлення)



// const min = 4;
// const max = 111;
// console.log((Math.random() * (max-min)+min).toFixed(0));

// const age = 18;
// const masege = Number(prompt("скільки вам років"));
// const rest = masege !== age;
// console.log(rest);
// console.log(17<masege);


// const num1 = Number(prompt("число"));
// const num2 = Number(prompt("число"));
// const reset =num1+num2;
// console.log(reset);





// ДЗ

// 1 Створити змінні celsius,  fahrenheit для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.


const celsius = 22
const  fahrenheit = (celsius * 9/5)+32;
console.log(fahrenheit);

// 2 Створити змінну daysInMonth для зберігання кількості днів у місяці. Обчислити кількість hoursInMonth годин та minutesInMonth хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль. 
const daysInMonth = 30 
const hoursInMonth = 24;
const minutesInMonth = 60;
const all = daysInMonth * hoursInMonth * minutesInMonth;
console.log(all);


// 3 Створити змінні health, energy для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.



const health = 100
const energy = 60
const damag = health - 20
const unEnergy = energy - 30 
console.log(damag,unEnergy);


// 4 Створити змінну totalPrice для зберігання суми покупки в магазині. Застосувати знижку discount в розмірі 10% до цієї суми за допомогою оператора множення. Результат зберегти в змінній discountedPrice та вивести результат в консоль.


const totalPrice = 300;
const discount = 0.1;
const discountedPrice = totalPrice - discount * totalPrice;
console.log(discountedPrice);


// 5 Створити змінну const floatNumber = 12.78 для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого. Результат зберегти в змінній roundedDown та вивести результат в консоль.

const floatNumber  = 12.78;
const  roundedDown = (Math.floor(floatNumber));
console.log(roundedDown);

// 6 Створити змінну const floatString = "45.67"  для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число. Результат зберегти в змінній parsedFloat та вивести результат в консоль.

const floatString = "45.67"
 const parsedFloat = Number(parseFloat (floatString));
console.log(parsedFloat);


// 7 Створити змінну const intString = "123" для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в змінній parsedIntта вивести результат в консоль. 

const intString = "123"
const parsedInta = Number(parseInt (intString));
console.log(parsedInta);


// 8 Створити змінну number для зберігання числа. Використати метод Math.sqrt() для обчислення квадратного кореня числа. Результат зберегти в змінній sqrtNumber та вивести результат в консоль 

const number = 256;
const sqrtNumber = (Math.sqrt(number))
console.log(sqrtNumber);


// 9 Створити змінні const integer = 42 та const stringNumber = "256" для зберігання цілочисельного значення та рядка з числом у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в змінній convertedInt та вивести результат в консоль. Потім використати метод toString() для перетворення цілочисельного значення у рядок. Результат зберегти в змінній convertedString та вивести результат в консоль.

const integer = 42;
const stringNumber = "256";
const  convertedInt = Number(parseInt (stringNumber));
const convertedString = integer.toString();
console.log(convertedInt);
console.log(convertedString);
console.log(typeof(convertedString));



