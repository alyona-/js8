let income ="500000";
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "3000,4000,5000").replace(" ", "").split(",");
let deposit =confirm("Есть ли у вас депозит в банке?");
let mission = 200000;
let period =1;
let money;

//1) Переписать функцию start циклом do while
let start = function() {
    do {
        money = prompt("Ваш месячный доход?");

    } while (isNaN(money) || money == '' || money == null);
};
start();


let appData = {};
appData.budget =money;

appData.budgetDay =0;
appData.budgetMonth =0;
appData.expensesMonth =0;




let expenses1,
    expenses2;
//2) Добавить валидацию (проверку) на данные которые мы получаем на вопрос 'Во сколько это обойдется?’ в функции  getExpensesMonth
appData.getExpensesMonth =  function (){
    let sum = 0;
    for(let i =0; i < 2; i++ ){
        if(i === 0) {
            expenses1 = prompt("Введите обязательную статью расходов?", "Еда");
        }else if(i === 1) {
            expenses2 = prompt("Введите обязательную статью расходов?", "Вода");
        }
        let tmp;
        do {
            tmp = +prompt("Во сколько это обойдется ");
            if( !((isNaN(tmp) || tmp =='' ||tmp==null) )) {
                sum+=parseInt(tmp);
            }
        }while(isNaN(tmp) || tmp =='' ||tmp==null);
    }

    return sum;
};
/*
let showTypeof = function (item) {
    console.log('Type: '+item, typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);*/


let expensesAmount = appData.getExpensesMonth();
appData.accumulateMonth = function () {
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


appData.budgetDay =function() {
    return Math.floor(appData.accumulateMonth() / 30);
};



let getTargetMonth = function() {
    return Math.ceil(mission / appData.accumulateMonth());
};


//4) Если budgetDay отрицательное значение то вместо уровня дохода пусть выводится сообщение “Что то пошло не так”
appData.getStatusIncome =function() {
    if(appData.budgetDay() >= 800) {
        return "Высокий уровень дохода";
    }else if(appData.budgetDay() >= 300 && appData.budgetDay() < 800) {
        return "Средний уровень дохода";
    }else if(appData.budgetDay() >= 0 && appData.budgetDay() < 300) {
        return "Низкий уровень дохода";
    }else if(appData.budgetDay() < 0){
        return "Что-то пошло не так.";
    }
};
appData.getStatusIncome();
console.log("Накопления за период: ", incomePeriod());

//3) Если getTargetMonth возвращает нам отрицательное значение то вместо “Цель будет достигнута”, необходимо выводить “Цель не будет достигнута”
if(appData.getTargetMonth() < 0) {
    console.log("Цель не будет достигнута");
}else {
    console.log("Цель будет достигнута за "+ appData.getTargetMonth() + " месяца");
}

getStatusIncome();