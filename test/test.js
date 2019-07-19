console.log("Расходы за месяц: "+appData.expensesMonth);

if(appData.getTargetMonth() < 0) {
    console.log("Цель не будет достигнута");
}else {
    console.log("Цель будет достигнута за "+ appData.getTargetMonth() + " месяца");
}

console.log("Уровень дохода : ", appData.getStatusIncome());

console.log("Наша программа включает в себя данные: ");

let i=1;
for(let key in appData) {
    console.log(i+". appData."+key+" = "+appData[key]);
    i++;
}




let result =document.querySelector('.result');


let inputBudgetValue = result.querySelectorAll('div input');

//Цель
let target = document.querySelector('.target-amount');
//возможный расход
let possibleExpense =document.querySelector('.additional_expenses-item');


// возможный расход
let addIncome =document.querySelectorAll('.additional_income-item');






start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);