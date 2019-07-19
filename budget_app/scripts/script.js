'use strict';


let start = document.getElementById("start");
let cancel = document.getElementById("cancel");
let btnPlus = document.getElementsByTagName("button");
let incomePlus = btnPlus[0]
    , expensesPlus =btnPlus[1];



let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let depositCheck =document.querySelector('#deposit-check');

//доход за месяц
let budgetDayValue =document.getElementsByClassName('budget_day-value')[0];
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let expensesMonthValue=document.getElementsByClassName('expenses_month-value')[0];

let accumulatedMonthValue =document.getElementsByClassName('accumulated_month-value')[0];
let additionalIncomeValue =document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue =document.getElementsByClassName('additional_expenses-value')[0];

let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue =document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount');

let incomeTitle= document.querySelector('.income-title');//дополнительный доход
let expensesTitle= document.querySelector('.expenses-title');//обязательный расход
let expensesItems =document.querySelectorAll('.expenses-items');
let additionalExpenses =document.querySelector('.additional_expenses');
let periodSelect = document.querySelector('.period-select');//Период расчета
let periodAmount =document.querySelector('.period-amount');

let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let targetAmount = document.querySelector('.target-amount');
let incomeItem = document.querySelectorAll('.income-items');

let dataInputItems = document.querySelectorAll('.data input');



let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth:0,
    income:{},
    incomeMonth:0,
    addIncome:[],
    expenses:{},
    expensesMonth:0,
    addExpenses:[],
    deposit:false,
    percentDeposit:0,
    moneyDeposit: 0,
    period:1,
    mission:0,
    start : function(event) {
        if(salaryAmount.value ==='') {
           // alert(" Ошибка, поле 'Месячный доход' должно быть заполнено!");
            event.preventDefault();
            return;
        }
        appData.budget = +salaryAmount.value;

        console.log("start this: ", this);


        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();

        appData.getAddExpenses();
        appData.getAddIncome();

        appData.getBudget();
        appData.showResult();

        dataInputItems.forEach(function(item){
            item.disabled = true;
        });

        start.style.display ='none';
        cancel.style.display = 'block';

    },
    showResult: function(){
        appData.period = +periodSelect.value;
      budgetMonthValue.value = appData.budgetMonth;
      budgetDayValue.value = appData.budgetDay;
      expensesMonthValue.value = appData.expensesMonth;
      additionalExpensesValue.value =appData.addExpenses.join(", ");
      additionalIncomeValue.value =appData.addIncome.join(", ");
      targetMonthValue.value = Math.ceil(appData.getTargetMonth());


      incomePeriodValue.value = appData.calcPeriod();

      console.log("showResult this: ", this);


    },
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem,expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');

        expensesItems[expensesItems.length -1].children[0].value=null;
        expensesItems[expensesItems.length -1].children[1].value=null;

        if(expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },

    addIncomeBlock: function(){
        let cloneIncomeItem = incomeItem[0].cloneNode(true);
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem,incomePlus);
        incomeItem = document.querySelectorAll('.income-items');

        incomeItem[incomeItem.length -1].children[0].value=null;
        incomeItem[incomeItem.length -1].children[1].value=null;

        if(incomeItem.length === 3) {
            incomePlus.style.display = 'none';
        }
    },
    getExpenses:function(){
        expensesItems.forEach(function(item){

            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if(itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }

        });

    },
    getIncome:function(){
        incomeItem.forEach(function(item){

        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;

        if(itemIncome !== '' && cashIncome !== '') {
            appData.income[itemIncome] = cashIncome;
        }

        });


    },
    getAddExpenses:function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        })
    },
    getAddIncome: function(){
      additionalIncomeItem.forEach(function(item){
          let itemValue = item.value.trim();
          if(itemValue !== '') {
              appData.addIncome.push(itemValue);
          }
      })
    },
    getInfoDeposit: function (){
        appData.deposit = confirm("Есть ли у вас депозит в банке?");
        if(appData.deposit) {
            appData.percentDeposit = prompt("Какой годовой процент?","10");
            appData.moneyDeposit = prompt("Какая сумма заложена", 100000);
        }
    },
    getExpensesMonth: function(){
        for(let key in appData.expenses){
            appData.expensesMonth +=appData.expenses[key];
        }
    },




    getBudget:function(){
      appData.budgetMonth =appData.budget + appData.incomeMonth - appData.expensesMonth;
      appData.budgetDay = Math.round(appData.budgetMonth /30);
    },
    getTargetMonth: function(){
      return appData.mission /appData.budgetMonth;
    },
    getStatusIncome: function(){
      if(appData.budgetDay > 800) {
          return "Высокий уровень дохода";
      }else if(appData.budgetDay > 300 ){
          return "Средний уровень дохода";
      } else if(appData.budgetDay > 0) {
          return "Низкий уровень дохода";
      } else {
          return "Что-то пошло не так";
      }

    },
    getMission: function(){
        if(isNaN(targetAmount.value) || targetAmount.value ==='' || targetAmount.value==null) {

        }else {
            mission = targetAmount.value;
        }
    },



    calcPeriod: function() {
        return appData.budgetMonth * appData.period;
    }
};
start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);



periodSelect.addEventListener('change', function(event){
    periodAmount.textContent =event.target.value;
},false);




console.log("Расходы за месяц: "+appData.expensesMonth);


if(appData.getTargetMonth() > 0){
    console.log("Цель будет достигнута за " + Math.ceil(appData.getTargetMonth()) + " месяца");
} else {
    console.log("Цель не будет достигнута");
}

console.log(appData.getStatusIncome());


setTimeout(function(){
    appData.start();
},1000);