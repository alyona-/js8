'use strict';




function outputMessage() {
    console.log('hello world');
}

outputMessage();


let concat = function(name, b, c, d){
    return 'Hello ' + name;
};

let res = concat('Максим', 'Иван', 'Василий');
 console.log('res: ', res);


 function funcMath(a, b, plus, minus) {
     let res = (a > b) ? minus(a, b) : plus(a, b);
     console.log(res);
 }

 funcMath(
     5,
     4,
     function(a, b){ return a + b;},
     function(a, b){ return a - b;}
     );

 let logUser = function(userData) {
     if(userData === 'admin') {
         return 'Администратор';
     }else {
         return 'Пользователь';
     }
 };

 let inputUser = function(){
   let status = 'user';
   if(user === 'Андрей' || user === 'Василий') {
       status = 'admin';
   }
   callback(status);
 };


 inputUser('Максим', logUser);


 let myFunc = 5;
 
 let myFunc2 = function () {
     console.log(n);
 };

 myFunc2();





