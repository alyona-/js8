/*
1) Сделать класс DomElement, который

   содержит свойства

  - selector,

  - height,

  - width,

  - bg,

  - fontSize
содержит метод, который создает элемент на странице если в селектор передана строка начинающаяся с точки ‘.’
создавать <div></div> с таким классом если с решетки ‘#’, то создать параграф <p></p>
 */

function DomElement(selector, height, weight, bg, fontSize) {
    this.selector =selector;
    this.height = height;
    this.weight = weight;
    this.bg = bg;
    this.fontSize =fontSize;


}

function NewObject(selector, height, weight, bg, fontSize) {
    DomElement.apply(this, arguments);

    this.elements1 =function(){
        let body = document.querySelector('body');

        let firstLetter = this.selector.slice(0,1);
        let elemHTML;
        if(firstLetter===".") {
            elemHTML =document.createElement("div");

        }else if(firstLetter==="#"){
            elemHTML = document.createElement("p");
        }

        elemHTML.style.height = height;
        elemHTML.style.weight =weight;
        elemHTML.style.backgroundColor =bg;
        elemHTML.style.fontSize =fontSize;

        body.appendChild(elemHTML);

    }


}

NewObject.prototype = Object.create(DomElement.prototype);
NewObject.prototype.constructor = NewObject;

let el1 =new NewObject(".blue", "300px", "200px","blue", "20px");

el1.elements1();