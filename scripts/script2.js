

function DomElement(selector, height, weight, bg, fontSize, options) {
    this.selector =selector;
    this.height = height;
    this.weight = weight;
    this.bg = bg;
    this.fontSize =fontSize;
    this.options = options || {};


}

function NewObject(selector, height, weight, bg, fontSize, options) {
    DomElement.apply(this, arguments);
    this.elements1 =function(){
        let body = document.querySelector('body');
        let firstLetter = this.selector.slice(0,1);

        DomElement.apply(this, arguments);




        //
        let elemHTML;
       if(firstLetter===".") {
            elemHTML =document.createElement("div");

        }else if(firstLetter==="#"){
            elemHTML = document.createElement("p");
        }

       /* elemHTML.style.height = height;
        elemHTML.style.weight =weight;
        elemHTML.style.backgroundColor =bg;
        elemHTML.style.fontSize =fontSize;*/
        alert(elemHTML);


        elemHTML.style.cssText = "width:"+this.weight+"; height:"+this.height+";background-color:"+this.bg+";";
        alert(elemHTML.style.cssText);
       // alert(elemHTML.style.cssText);

        body.appendChild(elemHTML);





    };




}

NewObject.prototype = Object.create(DomElement.prototype);
NewObject.prototype.constructor = NewObject;

let el1 =new NewObject(".blue", "100px", "100px","blue", "20px", "position:'absolute'");

el1.elements1();


