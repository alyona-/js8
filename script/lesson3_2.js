//Переменная lang может принимать 2 значения: 'ru' 'en'.
//Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
let lang ='ru';


let ruDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let enDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log("1. a. через if,");
// a. через if,
if(lang === 'ru') {
    console.log(ruDays);
}else if(lang === 'en'){
    console.log(enDays);
}

//b. через switch-case
console.log("1. b. через switch-case");
switch(lang){
    case "ru":
        console.log(ruDays);
        break;
    case "en":
        console.log(enDays);
        break;
}


//c. через многомерный массив без ифов и switch.
console.log("1. c. через многомерный массив без ифов и switch.");
let allDays  = {
    "ru": ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    "en": ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
console.log(allDays[lang]);





//У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”,
// если значение “Максим” то вывести в консоль “преподаватель”
// , с любым другим значением вывести в консоль “студент”
let namePerson = prompt("Как вас зовут?");

(namePerson==="Артем") ? console.log("директор")
    : (namePerson==="Максим") ? console.log("преподаватель")
    : console.log("студент");