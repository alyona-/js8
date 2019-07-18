let start = document.getElementById("start");
let btn_plus = document.getElementsByTagName("button");
let income_add, expenses_add;
let depositCheck =document.querySelector('#deposit-check');
let result =document.querySelector('.result');


let inputBudgetValue = result.querySelectorAll('div input');
let additional_incomeItem = document.querySelectorAll('.additional_income-item');

//доход за месяц
let budgetMonth = document.querySelector('.budget_month-value');
//Цель
let target = document.querySelector('.target-amount');
//возможный расход
 let possibleExpense =document.querySelector('.additional_expenses-item');

 //обязательный расход
let expensesTitle = document.querySelector('.expenses-title');
let expensesAmount =document.querySelector('.expenses-amount');

// возможный расход
let addIncome =document.querySelectorAll('.additional_income-item');

//дополнительный доход
let incomeTitle = document.querySelector('.income-title');
let incomeAmount= document.querySelector('.income-amount');

for(let i=0; i<btn_plus.length;i++){
   let classList = btn_plus[i].classList.toString();
    classList=classList.split(' ');
    for(let j in classList){
        if(classList[j] == 'income_add') {
            income_add =btn_plus[i];
        } else if(classList[j] == 'expenses_add'){
            expenses_add=btn_plus[i];
        }
    }
}


function collectToArray (collect) {
    let arr = [];
    for (let i = collect.length >>> 0; i--;) {
        arr[i] = collect[i];
    }
    return arr;

}
inputBudgetValue = collectToArray(inputBudgetValue).filter(item =>item.classList.toString().split(" ")
    .filter(item =>item.indexOf('-value')!==-1)
);

let index1, index2;
let class1='budget_day-value', class2='target_month-value';

 elem =collectToArray(inputBudgetValue);
for(let i=0; i<elem.length; i++) {
    let classList = elem[i].classList.toString();
    classList=classList.split(' ');

    for (let j in classList) {
        if (classList[j] == class1) {
            index1 = i;
        } else if (classList[j] == class2) {
            index2 = i;
        }
    }

}
inputBudgetValue = elem.slice(index1, index2+1);





//
// income_add.addEventListener('click', function(){alert('test 1');}, false);
// expenses_add.addEventListener('click', function(){alert('test 2');}, false);

