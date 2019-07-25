
let count =0;

let getMessage =function(name){
  console.log('Привет '+name);
};


let idInteval  = setInterval(function(){
    count++;
    console.log('Привер я setInterval'+count);
},2000);

setTimeout(function(){
    console.log('Привер я setTimeout');
    clearInterval(idInteval);
},5000);
