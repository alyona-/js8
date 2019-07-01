//Урок 3

let income ="500000";
let mission = 200000;
let period =1;
//1) Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
let money = 52000;


//2) Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую”
//сохранить в переменную addExpenses, вывести в консоль в виде массива
let addExpenses = "16000,5800,6500";


//3) Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булевое значение true/false)
let deposit =true;

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

let question2, question4;
// let question1 =prompt("Какие обязательные ежемесячные расходы у вас есть?");
// let question2 =+prompt("Во сколько это обойдется?");
// // alert(typeof question2);
// let question3 =prompt("Какие обязательные ежемесячные расходы у вас есть?");
// let question4 =+prompt("Во сколько это обойдется?");

question2 = 15000; question4=15000;

// console.log(question1);
// console.log(question2);
// console.log(question3);
// console.log(question4);


//6) Вычислить доход за месяц, учитывая обязательные расходы, сохранить в переменную budgetMonth и вывести результат в консоль
// alert('isNAN ='+isNaN(question2));
//
// console.log('TEST TS '+money -(question2 + question4));
// alert('isNAN2 = '+isNaN(money -(question2 + question4)));

let budgetMonth =money;

if(isNaN(question2) && isNaN(question4)){
    budgetMonth = budgetMonth -(question2 + question4);
    console.log('Доход за месяц: ', budgetMonth);
}



//7) Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, округляя в большую сторону

let temp = mission/budgetMonth;

console.log('Цель будет достигнута за: ', temp);









/*

//Используя методы и свойства:
//Вывести в консоль тип данных значений переменных money, income, deposit;


//Вывести в консоль длину строки income
console.log(income.length);

//Вывести в консоль “Период (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
console.log("Период "+period+" месяцев");
console.log("Цель заработать "+mission+" рублей/долларов/гривен/юани");

//Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(addExpenses.toLowerCase().split(","));

//Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30), вывести в консоль результат и остаток        от деления
let budgetDay =money/30;

//Результат money/30 хранится в переменной budgetDay
console.log(budgetDay);

*/