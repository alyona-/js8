'use strict';


let car = {
    model: "mazda",
    year: 2006
};
let obj = new Object();


car.turbocharging = true;
console.log(car.model);


obj.color ="black";

//
// console.log(obj);
//
 car.style = obj;
//
// console.log(car);
console.log(car.style);
console.log(car.style === obj);

car.style.color = "red";

car.ride =function(speed){
  console.log("Машина едет со скоростью " +speed +"км/ч");
};

car.ride(60);

console.log(car);

function stop(){
    console.log("Машина стоит");
}
car.stop = stop;
car.stop();