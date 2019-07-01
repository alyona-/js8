//let lang = ['ru', 'en'];
let lang =true;

let ruDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let enDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


if(lang === true) {
    console.log(ruDays);
}else {
    console.log(enDays);
}

switch(lang){
    case true:
        console.log(ruDays);
        break;
    case false:
        console.log(enDays);
        break;
}


/*function getWeekDay(date) {
    date = date || new Date();
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let day = date.getDay();

    return days[day];
} */
//У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”,
// если значение “Максим” то вывести в консоль “преподаватель”
// , с любым другим значением вывести в консоль “студент”
let namePerson = prompt("Как вас зовут?");

(namePerson==="Артем") ? console.log("директор")
    : (namePerson==="Максим") ? console.log("преподаватель")
    : console.log("студент");