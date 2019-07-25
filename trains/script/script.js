let worm = document.querySelector('.worm'),
    airplane =document.querySelector('.airplane'),
    count = 0;


let flyInterval;


let flyAnimate = function(){
  count++;



  if(count <350){
      worm.style.top = count + 'px';
      airplane.style.left = count*2 + 'px';
  }else if(count <500){
      airplane.style.left = count*2 + 'px';
  }else {
      clearInterval(idInterval);
  }
  console.log(count);

};

let idInterval =setInterval(flyAnimate, 10);
