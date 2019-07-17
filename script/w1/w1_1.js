const money = +prompt("Сколько денег");

const appData = {
  budge: money,
  expenses: {},
  asking: function(){
      const a = prompt("Откуда деньги?");
      const b = prompt("Сколько денег");
      appData.expenses[a] = b;
  }
};

appData.asking();