//1) Следующим переменным присвоить значения
let money = 2000000;
let income ="500000";
let addExpenses = "30000,500000,600000";
let deposit =true;
let mission = 100000000000000;
let period =1;


//Используя методы и свойства:
//Вывести в консоль тип данных значений переменных money, income, deposit;
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

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