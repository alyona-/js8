'use strict';


function funcMath() {
    let a = 10;

    return function () {
        console.log(a * a);
    };
}

let mathPow = funcMath();

mathPow();