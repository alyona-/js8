/* 1) Создать переменную num со значением 266219
 Вывести в консоль произведение (умножение) цифр этого числа */

let num = 266219;

let arr = num.toString().split('');

let mult =arr[0];
for(let i=1; i<arr.length; i++){
    mult *= Number(arr[i]);
}
console.log(mult);


/*
 2) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
 Вывести на экран первые 2 цифры полученного числа
 */
mult =mult**3;
console.log(mult.toString().substring(0,2));