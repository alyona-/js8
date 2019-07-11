'use strict';

let car = {
  model: "mazda",
  year: 2006,
  turbocharging: true,
    specifications: [],
  style: {
      color: "blue"
  }
};

console.log(car.model);
console.log(car["model"]);

car["place"] = "city";
car["best place"] ="city";
console.log("car");


let titleTrans = "Коробка передач";
let bodyTrans = "Автоматическая коробка передач";

car[titleTrans] = bodyTrans;

console.log(car);


let arr = [1,2,3,4];
console.log(arr);

console.log(arr);

arr[0] ="catch";

console.log(arr.length);

arr[10] ="human";

let array = new Array();
console.log(array);