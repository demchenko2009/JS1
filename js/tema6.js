
// for (let i = 0; i < 10; i += 1) {
//     console.log(i);
    
// }






// const text = "nazar legenda"
// for (let i = 0; i < text.length; i += 1) {
// console.log(text[i]);

// }



// for (let i = 0; i < 10; i += 1) {
//     if ()
// }

    











// let sum = 0
// for (let i =0; i<=  100; i+=1) {
//     sum += i
//     console.log(sum);
    
// }


// for (let i =0; i<=  10; i+=1) {
  
//     console.log(`5 x i = ${5 * i}`);
    
// }



// for (let i =10; i >= 1; i -=1) {
// console.log(i);

// }









// 2. Пошук першого парного числа

// let numbers = [1, 3, 7, 4, 9];


// for (let i =0; i<  numbers.length; i+=1) {

//     if (numbers[i] % 2 === 0) {
//         console.log(numbers [i]);
//         break
//     }
// }











// let wort = prompt("einfaach zeil schreiben")
// let weules = "dsdsdsddsdsdsd"
// let couunt = 0
// for(i = 0; i < wort.length; i +=1) {
//     console.log(wort[i]);
//     if ()
    
// }






// напиши скрипт який підрахує сумму всіх парних чисел, 
// які входять в діапазон між 0 та 50


// let min = 0
// let max = 50
// let count = 0
// for ( let i = min; i <= max; i+=1) {
//     if (i % 2 ===0) {
//         count += i
//     }
// }

// console.log(count);




//Напиши скрипт, який імітує авторизацію адміністратора в панелі управління.
//  Є змінна message в яку буде записано повідомлення про результат.
//  При завантаженні сторінки у відвідувача запитується пароль через prompt:
// Якщо натиснули Cancel, записати в message рядок 'Скасовано користувачем!'
// В іншому випадку, якщо введений пароль який збігається зі значенням константи ADMIN_PASSWORD,
//  записати в message рядок 'Ласкаво просимо!'
// В іншому випадку, тобто якщо жодна з попередніх умов не виконалася,
//  записати в message рядок 'Доступ заборонений, невірний пароль!'
// Після всіх перевірок вивести в alert значення змінної message.

// const ADMIN_PASSWORD = "12345"; // Тут можна задати справжній пароль
// let message;

// const userInput = prompt("Введіть пароль адміністратора:");




// if (userInput === null ) {
//     message = 'Скасовано користувачем!'

// } else if (userInput === ADMIN_PASSWORD) {
//     message = 'Ласкаво просимо!'
// }
// else    {
//    message =  'Доступ заборонений, невірний пароль!'
// }

// console.log(message);







// На рахунку користувача є 23580 кредитів, значення зберігається в змінній credits (створи і привласни).
//  Користувач вирішує купити пазли, які коштують по 3000 кредитів за штуку.
//  Ціна одного пазла зберігається в змінній pricePerPazzle (створи і привласни).
// При відвідуванні сторінки, використовуючи prompt, необхідно запитати кількість пазлів,
//  які користувач хоче купити і зберегти в змінну.
// Напиши скрипт який:
// Якщо в prompt була натиснута кнопка Cancel, виводить в консоль повідомлення 'Скасовано користувачем!'.
// В іншому випадку, розраховує загальну ціну замовлення і зберігає в змінній totalPrice.
// Перевіряє чи зможе користувач оплатити замовлення:
// якщо сума до оплати перевищує кількість кредитів на рахунку, виводь в консоль повідомлення 'Недостатньо коштів на рахунку!'.
// в іншому випадку необхідно порахувати залишок кредитів на рахунку і вивести повідомлення 'Ви купили [число] пазлів, на рахунку залишилося [число] кредитів.'.

// const credits = 23580;
// const pricePerPazzle = 3000;

// let message = "";
// let totalPrice;
// const input = prompt("Скільки пазлів ви хочете купити?");
// console.log(input)



// if (input === null) {
//     message = 'Скасовано користувачем!'
// } else  {
// const cuol = Number(input)

// totalPrice = cuol * pricePerPazzle


// if (totalPrice > credits ) {
// console.log("'Недостатньо коштів на рахунку!'.");

// } else {
//     const summ = credits - totalPrice
//     message = `Ви купили ${cuol}  пазлів, на рахунку залишилося ${summ} кредитів.`
// }

// } 

// console.log(message);
    
