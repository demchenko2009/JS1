// const a = 4
// if (a < 4) {
//     const b = 5
// }

// let ssb = 7  
// if (true) {
//     let ssb = 2
//     ssb = 10 

    
// }
// console.log(ssb);





// створіть зміну cost не призначая їй нічого
// створіть зміну subscription і призначте їй рядок pro
// перевірте, якщо subscription дорівнює free, призначте зміній cost значення 100
// якщо не дорівнює призначте зміній cost 0
// виведіть у консоль значення cos

















// створіть зміну cost не призначая їй нічого
// створіть зміну subscription і призначте їй рядок premium
// перевірте, якщо subscription дорівнює pro, призначте зміній cost значення 0, якщо subscription дорівнює free призначте зміній cost значення 100, якщо subscription дорівнює premium призначте зміній cost значення 500
// якщо не дорівнює виведіть у консоль invalid subscription type
// виведіть у консоль значення cost


// let cost;
// let subscription = "premium"
// if (subscription === "pro") {
//     cost = 0; 

// }else if (subscription === "free") {
//     cost = 100;

// } else if (subscription === "premium") {
//     cost = 500;
// }else {
//     console.log(" invalid subscription type");
    
   
// }

// console.log(cost);


    



// створіть зміну type не призначая їй нічого
// створіть зміну age і призначте їй 21
// перевірте age більше 18, якщо так призначте змінній type рядок adalt, у інакшому випадку призначте змінній type рядок child.
// виведіть у консоль type





// let type
// const age = 22;
// if (age > 18) {
//    type = "adalt" 
// } else {

//     type = "child"
// }

// console.log(type);


// const type = (age > 18) ? "adalt" : "child";
// console.log(type);



//Напишіть код що отримує число з input та:
// якщо число більше 1 виведіть повідомлення число більше 1 та виведіть
//  число через шаблоний рядок на екран, якщо менше то  виведіть повідомлення число менше 
// 1 та виведіть число через шаблоний рядок на екран.

// const numberr = Number(prompt("nummer"));
// console.log(numberr);
// console.log(typeof(numberr));

// if (numberr > 1 ) { 
//     console.log("бильше");


    
// }else {
//     console.log("mensce");


    
// }

// console.log(numberr);







//1. Напиши скрипт вибору опції доставки товару. Опція зберігається в змінній option: 1 - самовивіз, 2 - кур"єр, 3 - пошта. В змінну message записати повідомлення в залежності від опції:

// 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
// 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
// 'Посилка буде відправлена сьогодні'
// 'Вам передзвонит менеджер'.


// const a = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
// const b = 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
// const c = 'Посилка буде відправлена сьогодні'
// const d = 'Вам передзвонит менеджер'
// alert(`оберіть  1 из 4 варіантів як забрати товар де : 1 ${a} 2 ${b} 3 ${c} 4${d}`)
// const option = Number(prompt("яким способом вам зручно забрати товар? 1/4 "))

// switch (option) {
//     case 1:
//        alert(a) 
//         break;
// case 2 :
//     alert(b)
//     break
// case 3 :
//     alert(c)
//     break
// case 4 :
//     alert(d)
//     break

//     default:
//   alert("не вірне значення")
        
// }



// const lang = prompt("Введіть одне з чотирьох значень: 'ua', 'en', 'ru', 'de'");
// switch (lang) {
//     case 'ua' :
//         alert("Мова: Українська")
//         break;
//     case 'en' :
//         alert("Language: English")
//         break;
//     case 'ru' :
//         alert("Язык: Руский")
//         break;
//     case 'de' :
//         alert("Sprache: Deutche")
//         break; 
        
//     default :
//     alert("Sprache nicht ausgewälten!!!")
// }












// Написати програму яка перевіряє чи введене число через input
//  потрапляє в діапазон від 55 до 99 включно. Якщо так, вивести на екран "Число потрапляє в діапазон". Якщо ні, вивести "Число не потрапляє в діапазон"

// const chek = Number(prompt("schreibt bitte ein Zahl"))

// if (chek> 55 && 99 ) {
//     alert("входить в діапазон")
// }else {
//     alert("не входить в діапазон")
// }







//Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100). До якої групи відноситься Максим, якщо йому 55 років. Назву групи вивести на екран.



// const jahre = 55
// let gruup = ""
// if (jahre>= 0 &&  16) {
//     gruup = kinder

// }else if (jahre >= 17 && 60 ) {
//     gruup = mann 

// }else if (jahre >=61 && 100) {
//     gruup = alter 
// } else {
//     alert("не иснуе")
// }




























// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте 
// повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік".
//  Використайте switch


// перший варіант

let trinken;
const select = prompt("Введіть напій із списку: Кава, Чай або Сік").toLowerCase().trim();

switch (select) {
    case "кава":
        trinken = "якщо ви залишили нам на чай то кава буде готова через 2секунди ЯКЩО НІ то ваша кава буде колись готова";
        break;
    case "сік":
        trinken = "поки що СІКУ НЕМАЕ чекайте через років 20 точно буде готовим";
        break;
    case "чай":
        trinken = "у нас акція для всіх у кого є грощі тариф (30$) у кого не має той без чаю"; 
        break;

    default:
        console.log("(не має напію) або не має грошей");
        
}

console.log(trinken);



// Створіть змінну для зберігання введеного рядка, який може бути 
// днем тижня. Якщо це робочий день — виведіть повідомлення про 
// робочий день, якщо вихідний — про вихідний.


const woche = prompt("Введіть день тиждня: понеділок, вівторок, середа, четвер, п'ятниця, субота, неділя.").toLowerCase().trim();

switch (woche) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п'ятниця":
        console.log("Роботяга досить лежать чапай на працю");
        break;
    case "субота":
    case "неділя":
        console.log("У тебе графік 6/1 іди працюй");
        break;
    default:
        console.log("ідіть у 1 класс вчити дні");      
}




// Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року 
// і виводьте відповідне повідомлення.

// перший спосіб

const monat = Number(prompt("Введіть номер місяця як номер 1/12"));

switch (monat) {
    case 1:
        console.log("1.01.2025 січень, знову ця зима");
        break;
    case 2:
        console.log("1.02.2025 лютий знову ця, зима");
        break;
    case 3:
        console.log("1.03.2025 березень О вже, весна");
        break;
    case 4:
        console.log("1.04.2025 квітень, весна");
        break;
    case 5:
        console.log("1.05.2025 травень, ЩЕ МІСЯЦЬ ДО КАНІКУЛ, весна");
        break;
    case 6:
        console.log("1.06.2025 червень КАНІКУЛИ,  літо");
        break;
    case 7:
        console.log("1.07.2025  КАНІКУЛИ, липень,  літо");
        break;
    case 8:
        console.log("1.08.2025  КАНІКУЛИ серпень, літо");
        break;
    case 9:
        console.log("1.09.2025 новий срок  вересень,осінь");
        break;
    case 10:
        console.log("1.10.2025  новий срок жовтень,осінь");
        break;
    case 11:
        console.log("1.11.2025 новий срок листопад, осінь");
        break;
    case 12:
        console.log("1.12.2025 ось і пройшов рік грудень, зима");
        break;
    
    default:
        console.log("не мае такого місяцю");
        
}

// другий спосіб


const numberssMonth = Number(prompt("Введіть номер місяця від 1 до 12:"));

if (numberssMonth >= 1 && numberssMonth <= 2 || numberssMonth === 12) {

    console.log("Зима");

} else if (numberssMonth >= 3 && numberssMonth <= 5) {
    console.log("Весна");

} else if (numberssMonth >= 6 && numberssMonth <= 8) {
    console.log("Літо");

} else if (numberssMonth >= 9 && numberssMonth <= 11) {
    console.log("Осінь");

} else {
    console.log("не існуе місяцю");

}





// Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору:
//  якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

const color = prompt("Введіть колір світлофора: зелений, жовтий, червоний").toLowerCase().trim();
switch (color) {
    case "зелений":
        console.log("йти");
        break;
    case "жовтий":
        console.log("чекати");
        break;
    case "червоний":
        console.log("стоп");
        break;

    default:
        console.log("виберіть нормальний колір)");
        
}



// Створіть змінні для зберігання двох чисел та оператора (як у списку select).
//  Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.

let zahl1 = Number(prompt("Введіть число"));
let zahl2 = Number(prompt("Введіть друге число"));
let helfe = prompt("введіть оператор *, /, -, +");
let tauschen;

switch (helfe) {
    case "+":
        result = zahl1 + zahl2;
        break;
    case "-":
        result = zahl1 - zahl2;
        break;
    case "*":
        result = zahl1 * zahl2;
        break;
    case "/":
        if (zahl2 === 0) {
            console.log("На 0 не ділиться");
        } else {
            tauschen = zahl1 / zahl2;
        }
        break;

    default:
        console.log("Не можимо вам допомогти");

}

console.log(helfe);







