//перебор всех свойсв объекта
'use strict';

let car = {
  model: "mazda",
  year: 2006,
  turbocharging: true,
  specification: [],
  styel: {
      color:"blue"
  }
};


for(let key in car) {
    console.log("key = "+key+" var: "+car[key]);
}

//Узнать сколько всего свойств у объекта
console.log(Object.keys(car).length);