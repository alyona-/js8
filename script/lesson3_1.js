//Урок 3

let income ="500000";
let mission = 200000;
let period =1;
//1) Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
let money = +prompt("Ваш месячный доход?");



//2) Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую”
//сохранить в переменную addExpenses, вывести в консоль в виде массива
//let addExpenses = "16000,5800,6500";
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
addExpenses = addExpenses.replace(" ", "").split(",");
console.log("addExpenses: ", addExpenses);



//3) Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булевое значение true/false)
//let deposit =true;
/*let deposit =prompt("Есть ли у вас депозит в банке?").replace(" ", "");

switch (deposit) {
    case "есть":
        deposit = true;
        break;
    case "да":
        deposit = true;
        break;
    case "1":
        deposit = true;
        break;
    case "нет":
        deposit = false;
        break;
    case "нету":
        deposit = false;
        break;
    case "0":
        deposit = false;
        break;
    case "-":
        deposit = false;
        break;
    case "":
        deposit = false;
        break;
    default :
        deposit = false;
} */
let deposit =confirm("Есть ли у вас депозит в банке?");



//4) Вывести в консоль типы данных money, income, deposit
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

//5) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в переменные
/*
 “Какие обязательные ежемесячные расходы у вас есть?”
 “Во сколько это обойдется?”
 в итоге 4 вопроса и 4 переменных
*/
let question1 =prompt("Какие обязательные ежемесячные расходы у вас есть?");
let question2 =+prompt("Во сколько это обойдется?");
let question3 =prompt("Какие обязательные ежемесячные расходы у вас есть?");
let question4 =+prompt("Во сколько это обойдется?");

//6) Вычислить доход за месяц, учитывая обязательные расходы, сохранить в переменную budgetMonth и вывести результат в консоль
//Выполняю проверку на число, если не число, значит не учитываю расходы
isNaN(question2) ? question2 = 0 : question2;
isNaN(question4) ? question4 = 0 : question4;
let budgetMonth = money - (question2 + question4);
console.log('Доход за месяц: ', budgetMonth);

//7) Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, округляя в большую сторону
let countMonth = Math.ceil(mission/budgetMonth, 0);
console.log('Цель будет достигнута за: ', countMonth , ' месяцев');



//8) Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль  округлив в меньшую сторону (методы объекта Math в помощь)
let budgetDay =Math.floor(budgetMonth/30, 0);
console.log('Ежедневный доход: ', budgetDay);

//9) Написать конструкцию условий
/*Если budgetDay больше 800, то “Высокий уровень дохода”

Если budgetDay больше 300 и меньше 800, то сообщение “Средний уровень дохода”

Если budgetDay больше 0 и меньше 300 то в консоль вывести сообщение “Низкий уровень дохода”

Если отрицательное значение то вывести “Что то пошло не так”

учесть варианты 0, 300 и 800 */

if(budgetDay >= 800) {
    console.log("Высокий уровень дохода");
}else if(budgetDay >= 300 && budgetDay < 800) {
    console.log("Средний уровень дохода");
}else if(budgetDay >= 0 && budgetDay < 300) {
    console.log("Низкий уровень дохода");
}else if(budgetDay < 0 ) {
    console.log("Что то пошло не так");
}


//10) Проверить, чтобы все работало без ошибок в консоли

//11) Добавить папку с третьим уроком в свой репозиторий на GitHub