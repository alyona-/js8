let a =document.getElementById('a');
let b =document.getElementById('b');
let res = document.getElementById('res');
let sumBut =document.getElementById('sum');

let start = calculator.start.bind(calculator);
sumBut.addEventListener('click',
    /*start*/
    function() {
        alert("a = "+a);
        alert("b = "+b);

    }

);