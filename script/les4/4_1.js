
let income ="500000";

let mission = 200000;
let period =1;
let money = +prompt("Ваш месячный доход?");

//возможные расходы за рассчитываемый период через запятую
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
addExpenses = addExpenses.replace(" ", "").split(",");

// 1. a. Функция возвращает сумму всех расходов за месяц
function getExpensesMonth (expenses1, expenses2){
    isNaN(expenses1) ? expenses1 = 0 : expenses1;
    isNaN(expenses2) ? expenses2 = 0 : expenses2;
    return expenses1+expenses2;
}


//депозит
let deposit =confirm("Есть ли у вас депозит в банке?");
let showTypeof = function (item) {
    console.log('Type: '+item, typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let question1 =prompt("Какие обязательные ежемесячные расходы у вас есть?");
let question2 =+prompt("Во сколько это обойдется?");
let question3 =prompt("Какие обязательные ежемесячные расходы у вас есть?");
let question4 =+prompt("Во сколько это обойдется?");


//1. b. Функция getAccumulateMonth Функция возвращает накопления за месяц(доходы минус расходы)
function getAccumulatedMonth(income, expenses) {
    return income - expenses;
}

let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(question2, question4));


//1. c. Функция getTargetMonth подсчитывает за какой период будет достигнута цель, зная результат месячного накопления
function getTargetMonth(mission, budgetMonth){
    return Math.floor(mission/budgetMonth, 0);
}



let countMonth = getTargetMonth(mission, accumulatedMonth);


let budgetDay =Math.floor(budgetMonth/30, 0);

function getStatusIncome() {
    if (budgetDay >= 800) {
        return "Высокий уровень дохода";
    } else if (budgetDay >= 300 && budgetDay < 800) {
        return "Средний уровень дохода";
    } else if (budgetDay >= 0 && budgetDay < 300) {
        return "Низкий уровень дохода";
    } else if (budgetDay < 0) {
        return "Что то пошло не так";
    }

}

