let elems = document.getElementsByClassName("book");

let body = document.querySelector('body');

let adv = document.querySelectorAll('.adv');


//document.body.style.background = 'url(./image/you-dont-know-js.jpg) repeat ';
body.style.background = 'url(./image/you-dont-know-js.jpg) repeat ';


function collectToArray (collect) {
    let arr = [];
    for (let i = collect.length >>> 0; i--;) {
        arr[i] = collect[i];
    }
    return arr;

}



function sortMainDiv() {
// convert nodelist to array
    let array = [];
    /* for (let i = elems.length >>> 0; i--;) {
         array[i] = elems[i];
     }*/
    array = collectToArray(elems);


// perform sort
    array.sort(function (a, b) {
        return Number(a.firstElementChild.firstElementChild.textContent.match(/\d/)[0])
            - Number(b.firstElementChild.firstElementChild.textContent.match(/\d/)[0]);
    });

// join the array back into HTML
    let output = "";
    for (let i = 0; i < array.length; i++) {
        if(i===1 || i===4){
            output+=sortList(array[i]).outerHTML;
        } else if(i===2) {
            array[i].firstElementChild.firstElementChild.textContent = array[i].firstElementChild.firstElementChild.textContent.replace('Пропопипы', 'Прототипы');
            output += array[i].outerHTML;
        }else {
            output += array[i].outerHTML;
        }

    }
    return output;

}

function sortList (elems) {
    //elems[1].children[1].children[0].outerText.indexOf('Предисловие')
//    let ul = elems[1].children[1];
    //  let ul =elems.children[1];
    //alert(ul.outerHTML);
    //let ulArray  = collectToArray(ul);
    //  alert(ul);

    let ul =elems.querySelectorAll('ul');

    let li =  elems.querySelectorAll('li');
    let liArr = collectToArray(li);
    let newElem =[];

    let liIntro = liArr.filter(item => item.textContent.indexOf('Введение')!==-1);
    let liForeword = liArr.filter(item => item.textContent.indexOf('Предисловие')!==-1);
    let liChapt = liArr.filter(item => item.textContent.indexOf('Глава')!==-1);
    let liApp = liArr.filter(item => item.textContent.indexOf('Приложение')!==-1);


    liChapt.sort(function (a, b) {
        return Number(a.textContent.match(/\d/)[0])
            - Number(b.textContent.match(/\d/)[0]);
    });

    liApp.sort(function (a, b) {
        return Number(a.textContent.match(/[A-Za-z]/)[0])
            - Number(b.textContent.match(/[A-Za-z]/)[0]);
    });

    // newElem.concat(liIntro, liForeword, liChapt, liApp);

    //newElem = Object.entries(liIntro);
    //   newElem = liIntro+ liForeword+ liChapt+ liApp;

    // alert(newElem.length);

    //alert(newElem);
    // alert(typeof liIntro);
    // alert(Object.keys(newElem));

    //ul[0].innerHTML =newElem;

    //  ul[0].insertBefore(liApp[1], li[0]);
    //ul[0].replaceChild(liApp[1], li[0]);








    // ul.length=0;

    // alert("ul.length "+ul.length);
    // alert("newElem.length "+newElem.length);
    //  for(let i=0; i<li.length;i++){
    //
    //
    //   li.replaceChild(liIntro[0], li[i]);
    //
    //  }

    /*   if(i<liIntro.length){
       ul.replaceChild(liIntro[i], ul[i]);
   }else if(i<liIntro.length+liForeword.length){
       ul.replaceChild(liForeword[i-liIntro.length], ul[i]);
   }*/

    //ul[0].replaceChild(liApp[1], li[0]);


    // alert(li.length);
//    for(let i=0; i<li.length;i++){
//       if(i<liIntro.length) {
//           ul[0].replaceChild(liIntro[i], li[i]);
//
//
//       }else if(i<Number(liIntro.length+liForeword.length)){
//           alert(i-liIntro.length);
//           ul[0].replaceChild(liForeword[ Number(i-liIntro.length) ], ul[i]);
//       }
//
//
//      }


    for(let i=0; i<li.length; i++){
        ul[0].removeChild(li[i]);
    }


    for(let i=0; i<liChapt.length;i++){
        ul[0].appendChild(liChapt[i]);
    }


    for(let i=0; i<liIntro.length;i++){
        ul[0].replaceChild(liIntro[i], li[i]);
    }

    for(let i=liIntro.length,j=0; i<liForeword.length+liIntro.length;i++,j++){
        ul[0].replaceChild(liForeword[j], li[i]);
    }
    for(let i=liIntro.length+liForeword.length,j=0; i<liChapt.length+liIntro.length+liForeword.length;i++,j++){
        ul[0].replaceChild(liChapt[j], li[i]);
    }
    for(let i=liIntro.length+liForeword.length+liChapt.length,j=0; i<liApp.length+liIntro.length+liForeword.length+liChapt.length;i++,j++){
        ul[0].replaceChild(liApp[j], li[i]);
    }






    return elems;
}


document.getElementsByClassName('books')[0].innerHTML = sortMainDiv(elems);

body.removeChild(adv[0]);
