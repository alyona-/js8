'use strict';


let arr = [1, 2,3,4,5];


// for(let i=0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
arr.forEach(function(item, i, array){
    // console.log(item);
    console.log(item, i ,array);
});


for(let item of arr) {
    console.log(item);
}


delete arr[3];
console.log("arr: ", arr[3]);


let obj = {
    a: 3,
    b: true,
    c: "js"
};

test(1,2,3,4);

delete obj.b;


function test() {
    console.log(arguments);
}