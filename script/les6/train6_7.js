//Объект, зададим все переменные
let appData = {
    income: "",
    addIncome: {},
    addExpenses:[],
    deposit: false,
    missions:50000,
    period: 3,
    asking: function(){
        let addExpenses =prompt("ПЕречислите возможные расходы через запятую");
            appData.deposit=  confirm("Есть и у вас депозит");
            appData.addExpenses = addExpenses.toLocaleLowerCase().split(",");

            appData.deposit = confirm("Есть ли у вас депозит в банке");
    }
};