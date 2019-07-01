/**
 * Created by OmelkinaAP on 01.07.2019.
 */


'use strict';

// let a = 5;
// console.log('a: ', a);
// let question = confirm('Тебе есть 18 лет ?');
// console.log(question);
// let question2 = prompt('Сколько тебе лет ?');
// console.log(question2);
// console.log(typeof question2);

//Преобразование типов данных

console.log(5 + '5');
console.log(typeof (5 + '5'));

console.log(5 - '5');
console.log(5 * '5');
console.log('js' / '5');

console.log(5 == '5');
console.log(5 === '5');

if(true) console.log('Истина');
if(false)console.log('Этот код выполнится');

let n =4 ;

switch (n) {
    case 3:
        console.log('Условие 1');
        break;
    case 4:
        console.log('Условие 2');
        break;
    case 5:
        console.log('Условие 3');
        break;
    case 6:
        console.log('Условие 4');
        break;

}

let result = n === 3 ? 'верно' : 'не верно';
console.log('result: ',result);