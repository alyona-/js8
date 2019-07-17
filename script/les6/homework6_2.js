let week = [ "Понедельник", "Вторник", "Среда", "Четверг","Пятница", "Суббота", "Воскресенье"];

let today = new Date().getDay();
alert("today 1 ="+today);
if(today >0) {
    today=today-1;
}else today =6;
alert("today 2 ="+today);

let i=1;
for(dayNum in week){
    alert(dayNum);
    if(today==dayNum){
        alert("Hello");
        document.write(i+". <b>"+week[dayNum]+"</b><br>");
    }else if(i===6 || i===7){
        document.write(i+". <i>"+week[dayNum]+"</i><br>");
    }else {
        document.write(i+". "+week[dayNum]+"<br>");
    }

    i++;
}