'use strict';


let start = document.getElementById("start"),
    cancel = document.getElementById("cancel"),
    btnPlus = document.getElementsByTagName("button"),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItem = document.querySelectorAll('.income-items'),
    dataInputItems = document.querySelectorAll('.data input'),
    mainItems = document.querySelectorAll('.main input'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent =document.querySelector('.deposit-percent');



const AppData= function(){
    this.budget= 0;
    this.budgetDay= 0;
    this.budgetMonth= 0;
    this.income= {};
    this.incomeMonth=0;
    this.addIncome= [];
    this.expenses= {};
    this.expensesMonth= 0;
    this.addExpenses= [];
    this.deposit= false;
    this.percentDeposit= 0;
    this.moneyDeposit= 0;
    this.period= 1;
    this.mission= 0;
};
AppData.prototype.start =function () {
    if (salaryAmount.value === '') {
        return;
    }
    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getAddObject('.additional_income-item');
    this.getAddObject('.additional_expenses-item');
    this.getExpensesMonth();
    this.getInfoDeposit();
    this.getBudget();
    this.showResult();
    start.style.display = 'none';
    cancel.style.display = 'block';
    let input = document.querySelectorAll('.calc input');
    input.forEach(function (item) {
        item.disabled = true;
    });

};
AppData.prototype.cancel =function () {
    let input = document.querySelectorAll('.calc input');
    let button = document.querySelectorAll('button');
    input.forEach(function (item) {
        item.value = '';
        item.disabled = false;
        item.style.display = '';
    });
    button.forEach(function (item) {
        item.style.display = '';
    });
    periodSelect.value = 1;
    periodAmount.textContent = periodSelect.value;
    this.removeSomeBlock();
    this.expensesMonth = 0;
    this.incomeMonth = 0;
    depositCheck.checked = false;
    this.deposit = false;
    depositBank.style.display = '';
    depositAmount.style.display='';

};
AppData.prototype.showResult =function () {
    this.period = +periodSelect.value;
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(", ");
    additionalIncomeValue.value = this.addIncome.join(", ");
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
};

AppData.prototype.addSomeBlock= function (classBlock) {
    let cloneSomeItem; let someItem;let someButton;
    if(classBlock ==='income_add'){
        someItem = incomeItem;
        someButton =incomePlus;
    }else if(classBlock==='expenses_add'){
        someItem =expensesItems;
        someButton=expensesPlus;
    }
    cloneSomeItem = someItem[0].cloneNode(true);
    someItem[0].parentNode.insertBefore(cloneSomeItem, someButton);
    someItem =document.querySelectorAll('.'+cloneSomeItem.className);
    someItem[someItem.length - 1].children[0].value = null;
    someItem[someItem.length - 1].children[1].value = null;
    if (someItem.length === 3) {
        someButton.style.display = 'none';
    }
};


AppData.prototype.removeSomeBlock= function () {
    for(let i=0;i<2;i++){
        let selector;
        if(i===0)selector='.income-items';
        else if(i===1)selector='.expenses-items';

        let someItems = document.querySelectorAll(selector);
        if (someItems.length > 1) {
            for (let j = someItems.length; j > 1; j--) {
                someItems[0].parentNode.removeChild(someItems[j - 1]);
            }
        }
    }
    this.expenses = {};
    this.addExpenses = [];
    this.income = {};

    this.addIncome = [];
};




AppData.prototype.getExpenses =function () {
    expensesItems.forEach((item) =>{
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
            this.expenses[itemExpenses] = parseInt(cashExpenses);
        }
    });
};
AppData.prototype.getIncome= function () {
    incomeItem.forEach( (item) => {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
            this.income[itemIncome] = cashIncome;
        }
    });
};


AppData.prototype.getAddObject = function (selector) {
    let someItem;
    if(selector==='.additional_expenses-item') {
        someItem =additionalExpensesItem.value.split(',');
    }else {
        someItem=additionalIncomeItem;
    }
    console.dir(this);
    someItem.forEach( (item) => {
        if (item !== '') {
            if(selector==='.additional_income-item'){
                this.addIncome.push(item.value.trim());
            }else if(selector==='.additional_expenses-item'){
                this.addExpenses.push(item.trim());
            }

        }
    });


};



AppData.prototype.getInfoDeposit= function () {
    if (this.deposit) {
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
    }
};



AppData.prototype.getExpensesMonth= function () {
    for (let key in this.expenses) {
        this.expensesMonth += this.expenses[key];
    }
};

AppData.prototype.getBudget= function () {
    this.budgetMonth = parseInt(this.budget) + parseInt(this.incomeMonth) - parseInt(this.expensesMonth) +(this.moneyDeposit * this.percentDeposit)/12 ;
    this.budgetDay = Math.round(this.budgetMonth / 30);
};

AppData.prototype.getTargetMonth= function () {
    return parseInt(this.mission) / parseInt(this.budgetMonth);
};

AppData.prototype.getStatusIncome= function () {
    if (this.budgetDay > 800) {
        return "Высокий уровень дохода";
    } else if (this.budgetDay > 300) {
        return "Средний уровень дохода";
    } else if (this.budgetDay > 0) {
        return "Низкий уровень дохода";
    } else {
        return "Что-то пошло не так";
    }
};

AppData.prototype.getMission= function () {
    if (isNaN(targetAmount.value) || targetAmount.value === '' || targetAmount.value == null) {
    } else {
        mission = targetAmount.value;
    }
};

AppData.prototype.calcPeriod=  function () {
    return this.budgetMonth * this.period;
};

let appData =new AppData();
console.log(appData);
start.addEventListener('click', appData.start.bind(appData));
cancel.addEventListener('click', appData.cancel.bind(appData));

// expensesPlus.addEventListener('click', appData.addExpensesBlock('expenses_add'));
// incomePlus.addEventListener('click', appData.addIncomeBlock('income_add'));

//expensesPlus.addEventListener('click', appData.addSomeBlock('.expenses-items'));
//incomePlus.addEventListener('click', appData.addSomeBlock('.income-items'));

document.querySelector('body').addEventListener('click', function(event) {
    let target = event.target;
    let classList = target.classList.toString();
    classList=classList.split(' ');
    for(let i in classList){
        if(classList[i] === 'expenses_add') {appData.addSomeBlock(classList[i]);break;}
        else if(classList[i] === 'income_add') {appData.addSomeBlock(classList[i]);break;}
    }
    event.returnValue = false;
});


periodSelect.addEventListener('input', function (event) {
    periodAmount.textContent = event.target.value;
}, false);


depositCheck.addEventListener('change', function(){
    if(depositCheck.checked){
        console.log('check');
        depositBank.style.display = 'inline-block';
        depositAmount.style.display='inline-block';
        appData.deposit = 'true';
        depositBank.addEventListener('change', function(){
            let selectIndex = this.options[this.selectedIndex].value;
            if(selectIndex === "other"){
                depositPercent.style.display = 'inline-block';
                depositPercent.value ='';
                depositPercent.disabled = false;
            }else {
                depositPercent.style.display ='';
                depositPercent.value = selectIndex;
            }
        });
    } else {
        console.log('uncheck');
        depositBank.style.display = '';
        depositAmount.style.display='';
        depositAmount.value='';
        appData.deposit = 'false';
        depositPercent.disabled = true;
        depositPercent.value = '';
    }
});



