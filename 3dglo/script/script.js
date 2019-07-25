
window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    //Timer
    function countTimer(deadline){
        let seconds, minutes, hours,day;
        let timerHours =document.querySelector('#timer-hours'),
         timerMinutes =document.querySelector('#timer-minutes'),
         timerSeconds =document.querySelector('#timer-seconds');


          function getTimeRemaining(){
              let dateStop =new Date(deadline).getTime(),
                  dateNow =new Date().getTime(),
                  timeRemaining = (dateStop - dateNow) /1000;
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

       function updateClock(){
           let timer = getTimeRemaining();
           if(timer.hours===0 && timer.minutes===0 && timer.seconds===0){
               let el = document.querySelectorAll('.timer-numbers');
               el.forEach((item)=>{
                  item.style.color ='red';
               });
           }
           timerHours.textContent = beautyNum(timer.hours);
           timerMinutes.textContent = beautyNum(timer.minutes);
           timerSeconds.textContent = beautyNum(timer.seconds);


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
    setInterval(countTimer,1000,'01 july 2019');
});