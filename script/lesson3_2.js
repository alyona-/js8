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

let namePerson = prompt("Как вас зовут?");

