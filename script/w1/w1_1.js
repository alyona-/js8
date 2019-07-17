const money = +prompt("Сколько денег");

const appData = {
  budge: money,
  expenses: {},
  asking: function(){
      for(let i=0; i< 2; i++){
          const a = prompt("Откуда деньги?");
          const b = prompt("Сколько денег");
          appData.expenses[a] = b;
      }

  }
};

appData.asking();