
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "3000,4000,5000").replace(" ", "").split(",");
//let deposit =confirm("Есть ли у вас депозит в банке?");
let mission = 200000;
let period =1;
let money;

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

//сумма дополнительного заработка
appData.incomeMonth =0;
//let income ="500000";

//Объект с дополнительным заработком, в нем содержится название дополнительного заработка и сумма
appData.income ={};


//Хранит годовой процент депозита
appData.depositYear =0;

//Хранит объект в котором тариф депозита и сумма
appData.deposit ={};





let expenses;
appData.getExpensesMonth =  function (){
    appData.expensesMonth =appData.asking();
    return appData.expensesMonth;
};


let question, tmpName, tmpValue;
//Получение дополнительного дохода
appData.getIncome = function(){
    question = validBoolean("Есть ли у вас дополнительный заработок?");
    tmpName = validString("Откуда у вас дополнительный заработок?", "freelance");
    tmpValue  =validNumber("Сколько денег?", 100000);
    appData.income[tmpName] = parseInt(tmpValue);
    appData.incomeMonth =appData.income[tmpName];

};

appData.getIncome();



appData.getDeposit = function() {
    question = validBoolean("Есть ли у вас депозит в банке?");
    tmpName = validString("Какой тариф депозита", " VIP");
    tmpValue =validNumber("Сумма на счету", 10000);
    appData.deposit[tmpName] =parseInt(tmpValue);
    appData.depositYear = Math.floor((appData.deposit[tmpName]*0.5*365)/(365*100) );

};

appData.getDeposit();




appData.asking = function() {
    let sum = 0;
    appData.expenses = {};
    for(let i =0; i < 2; i++ ){
        if(i === 0) {
            expenses = validString("Введите обязательную статью расходов?", "food");
        }else if(i === 1) {
            expenses = validString("Введите обязательную статью расходов?", "water");
        }
        let tmp;
        tmp = validNumber("Во сколько это обойдется", 5000);
        appData.expenses[expenses]=tmp;
    }

    for(key in appData.expenses) {
        sum+=appData.expenses[key];
    }
    return sum;
};

appData.getBudget =function () {
    appData.budgetMonth =appData.budget -appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth/ 30);
    return appData.budget -appData.expensesMonth;
};

appData.getTargetMonth = function() {
    return Math.ceil(mission / appData.getBudget());
};


appData.getStatusIncome =function() {
    if(appData.budgetDay >= 800) {
        return "Высокий уровень дохода";
    }else if(appData.budgetDay >= 300 && appData.budgetDay < 800) {
        return "Средний уровень дохода";
    }else if(appData.budgetDay >= 0 && appData.budgetDay < 300) {
        return "Низкий уровень дохода";
    }else if(appData.budgetDay < 0){
        return "Что-то пошло не так.";
    }
};


let expensesAmount = appData.getExpensesMonth();
appData.accumulateMonth = function () {
    return appData.budget -appData.expensesMonth;
};




let budgetPeriod = function() {
    return appData.budget * period;
};
let expensesPeriod = function(){
    return expensesAmount* period;
};

let incomePeriod =function() {
    return budgetPeriod() - expensesPeriod();
};



appData.getStatusIncome();

console.log("Расходы за месяц: ", appData.expensesMonth);
if(appData.getTargetMonth() < 0) {
    console.log("Цель не будет достигнута");
}else {
    console.log("Цель будет достигнута за "+ appData.getTargetMonth() + " месяца");
}

console.log("Уровень дохода : ", appData.getStatusIncome());

console.log("Наша программа включает в себя данные: ");
let i=1;
for(key in appData) {
    console.log(i+". appData."+key+" = "+appData[key]);
    i++;
}






function validBoolean(ask) {
    let boolAsk ;
    do {
        question = confirm(ask);
    }while(question != true);
    return boolAsk;
}

function validString(ask, tmpStr) {
    let str ="";
    do {
        tmpName = prompt(ask, tmpStr);
    }while(isNaN(tmpName)===false || tmpName =='' ||tmpName==null);
    return str;
}

function validNumber(ask, tmpValue){
    let value;
    do {
        value =+prompt(ask, tmpValue);
    }while(isNaN(value)===true || value == '' || value == null);
    return value;
}