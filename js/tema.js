// const warm = alert("ви сгодні з правилами");
// console.log(warm);

// const mail = prompt ("maill");
// console.log(mail);


// const spot = confirm ("danke dir");
// console.log(spot);









// 1 Створити змінну з іменем name і присвоїти їй значення свого імені. Вивести значення цієї змінної в консоль.

const userName = "Ivan";
console.log(userName);



// 2 Створити змінну з іменем age і присвоїти їй значення свого віку. Вивести значення цієї змінної в консоль.


const userAge = 15;
console.log(userAge);



// 3 Створити змінну з іменем isStudent і присвоїти їй значення true або false, залежно від того, чи є студентом. Вивести значення цієї змінної в консоль.

const isStudent = true;
console.log(isStudent);



// 4 Створити змінну з іменем myString і присвоїти їй рядок з вашої улюбленою цитатою. Вивести цей рядок в консоль.

const myString =  "Я люблю гроші маму та js."
console.log(myString.toLowerCase());


//5 Створити змінну з іменем myNumber і присвоїти їй довільне числове значення. Потім присвоїти цій змінній результат додавання до неї числа 10. Вивести значення myNumber в консоль.
const myNumber = 33;
console.log(typeof (myNumber));


const numer = myNumber+10;
console.log(numer);

// 6 Створити змінну з іменем myNull і присвоїти їй значення null. Вивести значення цієї змінної в консоль.

const myNull = null;
console.log( myNull);






// 7 Створити скрипт який виводить спливаюче попередження "Увага! Дія може бути небезпечною." за допомогою alert(). Вивести повідомлення про те, що дія небезпечна та попросити користувача підтвердити дію за допомогою confirm() “Ви впевнені, що хочете продовжити?”. 

const safety = alert ("Увага! Дія може бути небезпечною");

console.log(safety );

const save = confirm ("Ви впевнені, що хочете продовжити?");
console.log(save);




// 8 Створити скрипт який виводить спливаюче вікно з запитом на введення імені користувача “Введіть своє ім’я” за допомогою prompt(). Результат зберегти в змінній userName. Після вивести alert з отриманим ім’ям. Також перевірити за допомогою typeof тип змінної userName при отриманні імен. 

const userNames = prompt ("Введіть своє ім’я");
 alert ("Дякуемо вам "+ userNames);
console.log(typeof(userNames));

// const sea = alert ("спасибо " + userrName);
// console.log(sea);


// 9 Створити скрипт який виводить спливаюче підтвердження за допомогою confirm() з питання “Ви дійсно хочете покинути сторінку?”. Результат зберегти в змінній userAnswer та вивести в консоль. Перевірити результат при натисканні ОК та CANCEL

const userAnswer = confirm ("Ви дійсно хочете покинути сторінку?");
console.log(userAnswer);
