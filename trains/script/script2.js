let worm = document.querySelector('.worm'),
    airplane =document.querySelector('.airplane'),
    count = 0;


let flyInterval;


let flyAnimate = function(){
    flyInterval =requestAnimationFrame(flyAnimate);
    count++;



    if(count <350){
        worm.style.top = count + 'px';
        airplane.style.left = count*2 + 'px';
    }else if(count <500){
        airplane.style.left = count*2 + 'px';
    }else {
        cancelAnimationFrame(flyInterval);
    }
    console.log(count);

};

flyInterval =requestAnimationFrame(flyAnimate, 10);
