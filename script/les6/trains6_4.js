'use strict';

let array = ["Apple", "Orange", "Banana"];

// array.push("kiwi");
// array.unshift("papaya", "mange");
// console.log(array);
// console.log(array.shift());
// console.log(array);
// console.log(array.sort());
// console.log(array.slice());
// console.log(array.slice(1,3));
// console.log(array.slice(1,3));

console.log(array.splice(1,1,"avocado", "papaya"));
console.log(array);

console.log(array.join(" "));
//изменяет текущий массив
console.log(array.reverse());

console.log(array.concat(["avocado", "papaya", "kiwi"], "mango1"));

