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
let mainItems = document.querySelectorAll('.main input');


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
    start : function() { /*event*/
        alert("work 2");
        if(salaryAmount.value ==='') {
            return;
        }
        this.budget = +salaryAmount.value;

        console.log("start this: ", this);
        console.log(this.budget);
        console.log(salaryAmount.value);


        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();

        this.getAddExpenses();
        this.getAddIncome();

        this.getBudget();
        this.showResult();
        alert("work3");

        dataInputItems.forEach(function(item){
            item.disabled = true;
        });

        start.style.display ='none';
        cancel.style.display = 'block';

    },
    cancel: function(){
       appData =  JSON.parse(JSON.stringify(tmpData));
       mainItems.forEach(function(item){
            item.value = '';
            item.disabled =false;
        });
        start.style.display ='block';
        cancel.style.display = 'none';
        periodSelect.value =1;
        periodAmount.textContent =periodSelect.value;




    },showResult: function(){
        this.period = +periodSelect.value;


      budgetMonthValue.value = this.budgetMonth;
      budgetDayValue.value = this.budgetDay;
      expensesMonthValue.value = this.expensesMonth;
      additionalExpensesValue.value =this.addExpenses.join(", ");
      additionalIncomeValue.value =this.addIncome.join(", ");
      targetMonthValue.value = Math.ceil(this.getTargetMonth());


      incomePeriodValue.value = this.calcPeriod();

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
            console.log("get Expenced this"+this);
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if(itemExpenses !== '' && cashExpenses !== '') {

                appData.expenses[itemExpenses] = parseInt(cashExpenses);
            }

        });

    },
    getIncome:function(){
        incomeItem.forEach(function(item){
            console.log("get Income this"+this);
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;

        if(itemIncome !== '' && cashIncome !== '') {
            appData.income[itemIncome] = cashIncome;
        }

        });


    },
    getAddExpenses:function(){
        console.log("get getAddExpenses this"+this);
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                console.log(' getAddExpances this '+this);
                appData.addExpenses.push(item);
            }
        })
    },
    getAddIncome: function(){
        console.log("get getAddIncome this"+this);
      additionalIncomeItem.forEach(function(item){
          let itemValue = item.value.trim();
          if(itemValue !== '') {
              appData.addIncome.push(itemValue);
          }
      })
    },
    getInfoDeposit: function (){
        console.log("get getInfoDeposit this"+this);
        appData.deposit = confirm("Есть ли у вас депозит в банке?");
        if(appData.deposit) {
            appData.percentDeposit = prompt("Какой годовой процент?","10");
            appData.moneyDeposit = prompt("Какая сумма заложена", 100000);
        }
    },
    getExpensesMonth: function(){
        console.log("get getExpensesMonth this"+this);
        for(let key in appData.expenses){
            appData.expensesMonth +=appData.expenses[key];
        }
    },




    getBudget:function(){
      appData.budgetMonth =parseInt(appData.budget) + parseInt(appData.incomeMonth) - parseInt(appData.expensesMonth);
      appData.budgetDay = Math.round(appData.budgetMonth /30);
    },
    getTargetMonth: function(){
      return parseInt(appData.mission) /parseInt(appData.budgetMonth);
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
    },
    export: function() {
        return {
            value: this
        }
    }
};


let startContext = appData.start.bind(appData);
let cancelContext = appData.cancel.bind(appData);


start.addEventListener('click',startContext);
cancel.addEventListener('click',cancelContext);



const tmpData = JSON.parse(JSON.stringify(appData));








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


