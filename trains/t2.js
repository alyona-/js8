

let getMessage =function(name){
    console.log('Привет '+name);
};

let count =0;

let idInteval  = setInterval(getMessage,2000, 'Василий');

let idTimeout = setTimeout(getMessage,5000,'Иван');

clearTimeout(idTimeout);