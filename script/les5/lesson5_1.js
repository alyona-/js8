//let money = +prompt("Ваш месячный доход?", "70000");
let income ="500000";
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "3000,4000,5000").replace(" ", "").split(",");
let deposit =confirm("Есть ли у вас депозит в банке?");
let mission = 200000;
let period =1;


let start = function(){
    money = prompt("Ваш месячный доход?");
    while(isNaN(money) || money =='' ||money==null){
        money = prompt("Ваш месячный доход?");
        console.log(money);
    }
    //return money;
    console.log(money);
};

start();

let expenses1,
    expenses2;

let expensesMonth =  function (){
    let sum = 0;
    for(let i =0; i < 2; i++ ){
        if(i === 0) {
            expenses1 = prompt("Введите обязательную статью расходов?", "Еда");
        }else if(i === 1) {
            expenses2 = prompt("Введите обязательную статью расходов?", "Вода");
        }
        sum+= +prompt("Во сколько это обойдется ", "2500");
    }

    return sum;
};

let showTypeof = function (item) {
    console.log('Type: '+item, typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);


let expensesAmount = expensesMonth();
let accumulateMonth = function () {
    return money -(expensesAmount);
};

let budgetPeriod = function() {
    return money * period;
};
let expensesPeriod = function(){
    return expensesAmount* period;
};

let incomePeriod =function() {
  return budgetPeriod() - expensesPeriod();
};


let budgetDay =function() {
    return Math.floor(accumulateMonth() / 30);
};

let targetMonth = function() {
    return Math.ceil(mission / accumulateMonth());
};




let getStatusIncome =function() {
    if (budgetDay() >= 800) {
        return "Высокий уровень дохода";
    } else if (budgetDay() >= 300 && budgetDay() < 800) {
        return "Средний уровень дохода";
    } else if (budgetDay() >= 0 && budgetDay() < 300) {
        return "Низкий уровень дохода";
    } else if (budgetDay() < 0) {
        return "Что то пошло не так";
    }

};

console.log("Накопления за период: ", incomePeriod());
console.log("Цель будет достигнута за "+ targetMonth() + " месяца");
getStatusIncome();