
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
            seconds=Math.floor(timeRemaining % 60);
            minutes=Math.floor((timeRemaining / 60)%60);
            hours=Math.floor(timeRemaining / 60/60);
            day=Math.floor(timeRemaining / 60/60/24);
            return {timeRemaining,hours,minutes,seconds};

        }

        function updateClock(){
            let timer = getTimeRemaining();
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if(timer.timeRemaining > 0) {
                setTimeout(updateClock, 1000);
            }
        }
        updateClock();



    }

    //  countTimer('31 july 2019');
    setInterval(countTimer,1000,'26 july 2019');
});