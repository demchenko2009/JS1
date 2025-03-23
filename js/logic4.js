// console.dir(Boolean)
// const namens =""
// console.log(Boolean(namens));


// let age;
// console.log(Boolean(age));


// const cont = null
// console.log(Boolean(cont));


// console.log(Boolean(0));


// const number = Number("qwerty")
// console.log(number);
// console.log(Boolean(number));



// console.log(Boolean(false));



//logik operator (&& and ) powertae esli 2 umovi powertae  do true, powerae ostame znachennja(esli budet falls na nomu ostanowetsa)
// console.log(12 && 9);

// console.log(12 && 6);

// console.log(10 && 20 && 0 && 33);

// logic operator || повертае 1 значення true або якщо 2 умовы false буде останнмй false

// console.log(10 || 0);
// console.log(null || 0);
// console.log(null || !0);

// console.log(11 && 7 || null && 3);

// console.log(11 && !7 || null && 3);





// IF



// if (10 > 5) {
//     console.log("True");
    
// }

// else {
//     console.log("False");
    
// }




// const quesion = prompt("який у вас ривень? (noob, pro, master")

// const level = noob;
// let points =""
// if (quesion === "pro") {
//     points = 500 
// }
// else if (quesion === "master") {
//     points = 1000
// }
// else if (quesion === "noob") {
//     points = 200 
// }
// else  {

// }

// console.log(points);








// const age = Number(prompt("Вик"))
// // const isAdmin = confirm("Ви Админ?")
// const isAge = 18
// // const entPsw =  prompt("PASWORT")
// const pass = "qwerty"

// if (age >= isAge) {
//     // console.log("мени бильше 18");
//     const isAdmin = confirm("Ви Админ?")
//     if (isAdmin === true) {
//         console.log("i am Admin");
//         const entPsw =  prompt("PASWORT").toLowerCase().trim();
//         if (entPsw === pass) {
//             console.log("вітаю вас!!!!");
            
//         } else {
//             console.log("не правельний пароль");
//         }
 
        
//     } else {
//         console.log("ты не админ!!!!");
//     }




// } else {
//     console.log("тоби менше18");
    
// }






// дз 
// 1  Створіть дві змінні для зберігання значень двох текстових полів. Перевірте, чи обидві змінні не є порожніми. Якщо обидва поля заповнені, вивести повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".

const abdul = prompt("Введить данни")
const textaria = prompt ("koment");
if (abdul !== "" && textaria !=="") {
   console.log("Полноий"); 

} else {
    console.log("Пустой");
    
}
 



// 2   Створіть дві змінні для зберігання числових значень. Обчисліть їх суму.
//  Якщо сума більше 10 — виведіть "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".


const numbe = Number(prompt("Введіть число"));
const numer = Number(prompt("Введіть число"));

const respekt = numbe + numer;

if (respekt > 10) {
    console.log("Сума більша за 10");
    
} else {
    console.log("Сума менша або дорівнює 10");
}


// 3  Створіть змінну для зберігання тексту. Перевірте, чи містить цей текст слово "JavaScript".
//  Якщо містить, виведіть "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".

const nazarchik = prompt("Напиши JavaSkript!!!!").trim();

if (nazarchik.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");

} else {
    console.log("Текст не містить слово JavaScript")
}



// 4  Створіть змінну для зберігання числа. Перевірте, чи це число більше 10 і менше 20.
//  Якщо так — виведіть "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".


const numerok = Number(prompt("Введіть число"));

if (numerok > 10 && numerok < 20) {
    console.log("Число входить в діапазон від 10 до 20");
    
} else {
    console.log("Число не входить в діапазон від 10 до 20");
    
}


// 5 Створіть змінні для зберігання значень полів (ім'я, email, пароль).
//  Перевірте, чи ім'я містить не менше 3 символів, чи email містить символ @ та крапку після нього, а пароль не менше 6 символів.
//  Якщо всі умови виконані — виведіть "Перенаправлення на іншу сторінку", якщо ні — "Помилка: неправильне заповнення".


//  БУДЬЛАСКА НЕ ЗАНИЖАЙТЕ БАЛИ

const Namess = prompt("ДЕБИЛ СЮДА ИМЯ");
const mail = prompt("ДОЛБОЕБ ТУТ ПОЧТУ");
const passwort = prompt(" Мистер Ушлепок Введіть пароль");

if (Namess.length >= 3 && mail.includes("@") && mail.includes(".") && passwort.length >= 6) {

    console.log("Перенаправлення на іншу сторінку");
    
} else {
    console.log("Помилка: неправильне заповнення");
    
}




















