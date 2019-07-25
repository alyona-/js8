
//let date = new Date();
//let date = new Date('10 march 1987');
// let date = new Date(1987,2,10,9,30,15,100);
// console.log(date);

// date.setFullYear(2000);
// date.setHours(10, 30,30,300);
// date.setDate(date.getDate() -100);
// date.setUTCHours(10, 30,30,300);

// console.log( ' Дата timezona');
// console.log('год '+date.getFullYear());
// console.log('месяц '+date.getMonth() +1);//от нуля
// console.log('День месяца '+date.getDate());
// console.log( ' День недели '+date.getDay()); //от 0 и начинается с воскресенья
// console.log( 'час '+date.getHours());
// console.log( 'минуты '+date.getMinutes());
// console.log( 'секунды '+date.getSeconds());
// console.log( 'миллисекунды '+date.getMilliseconds());
//
//
// console.log( ' Дата по гринвичу');
// console.log('год '+date.getUTCFullYear());
// console.log('месяц '+date.getUTCMonth() +1);//от нуля
// console.log('День месяца '+date.getUTCDate());
// console.log( ' День недели '+date.getUTCDay()); //от 0 и начинается с воскресенья
// console.log( 'час '+date.getUTCHours());
// console.log( 'минуты '+date.getUTCMinutes());
// console.log( 'секунды '+date.getUTCSeconds());
// console.log( 'миллисекунды '+date.getUTCMilliseconds());


let date = new Date();

console.log(date);
console.log(date.getTime());
console.log(date.toTimeString());
console.log(date.toDateString());

console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString());

console.log(date.toLocaleTimeString('ru'));
console.log(date.toLocaleDateString('ru'));


console.log(date.toLocaleTimeString('en'));
console.log(date.toLocaleDateString('en'));


console.log(date.toISOString());
console.log(date.toISOString().substr(0,10));
console.log(Date.now());
console.log(Date.parse('10/03/2019'));

