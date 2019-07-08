'use strict';

//1. Рекурсия
function changeTires(snowTires) {
    snowTires--;
    console.log(snowTires);
    if(snowTires > 0) {
        changeTires(snowTires);
    }
}

changeTires(4);

//2. while
let n = 0 ;
while(n < 5) {
    console.log(n);
    n++;
}

//3. do while
do {
    console.log(n);
}while(n <5);

//4. for
for(let i=0; i < 5; i++) {
    if(i === 3){
       // break;
        continue;
    }

    console.log(i);
}
