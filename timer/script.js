
window.addEventListener('DOMContentLoaded', function(){
    'use strict';
let textCon = document.querySelector('.textResult');
textCon.textContent ='hello';
    //Timer
    function countTimer(newYear, today){
        let seconds, minutes, hours,day;

        function getTimeRemaining(newYear, today){
            let dateNY =new Date(newYear).getTime(),
                dateNow =new Date(today).getTime(),
                timeRemaining = (dateNY - dateNow) /1000;
            if(timeRemaining<0){
                seconds=0;
                minutes=0;
                hours=0;
                day=0;
            }else{
                seconds=Math.floor(timeRemaining % 60);
                minutes=Math.floor((timeRemaining / 60)%60);
                hours=Math.floor(timeRemaining / 60/60);
                day=Math.floor(timeRemaining / 60/60/24);
            }

            return {timeRemaining,hours,minutes,seconds};

        }
        function getWeek(todayNum){
            let dayArr =['Воскресенье','Понедельник','Вторник','Среда', 'Четверг','Пятница','Cуббота'];
            return dayArr[todayNum];
        }

        function updateClock(){
            let today = new Date();
            let nowYear = today.getFullYear();
            let ny = new Date('01 january '+(nowYear+1));
            let timer = getTimeRemaining();
            if(timer.hours===0 && timer.minutes===0 && timer.seconds===0){
                textCon.style.color = 'red';
            }
            /*timerHours.textContent = beautyNum(timer.hours);
            timerMinutes.textContent = beautyNum(timer.minutes);
            timerSeconds.textContent = beautyNum(timer.seconds); */
            //textCon.textContent =''+beautyNum(timer.hours)+beautyNum(timer.minutes)+beautyNum(timer.seconds);
            textCon.innerText ='Hello';


            let idInterval;
            if(timer.timeRemaining > 0) {
                idInterval = setInterval(updateClock,1000);
            }else {
                clearInterval(idInterval);
            }
        }

        function beautyNum(num){
            let numStr;
            if(num<10){
                numStr ='0'+num;
            }else numStr =num;
            return numStr;
        }
        updateClock();



    }

    //  countTimer('31 july 2019');
  //  setInterval(countTimer,1000,'01 july 2019');
    setInterval(countTimer,1000,'01 july 2019');
});