'use strict';

function funcMath(){
    let a =10;

    return function(){
        console.log(a * a);
    };
}


//console.log(funcMath());



let mathPow = funcMath();

mathPow();