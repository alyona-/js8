function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.elements1 = function () {
        let body = document.querySelector('body');
        let firstLetter = this.selector.slice(0, 1);
        let elemHTML;
        if (firstLetter === ".") {
            elemHTML = document.createElement("div");
            elemHTML.className = this.selector;
        } else if (firstLetter === "#") {
            elemHTML = document.createElement("p");
            elemHTML.id = this.selector.slice(1);
        }

        elemHTML.style.cssText = "height: " + this.height + ";\
            width: " + this.width + "; \
            background-color: " + this.bg + "; \
            font-size: " + this.fontSize + ";";
        body.appendChild(elemHTML);
    }

}

function NewObject(selector, height, width, bg, fontSize) {
    DomElement.apply(this, arguments);
}

NewObject.prototype = Object.create(DomElement.prototype);
NewObject.prototype.constructor = NewObject;
let el1 = new NewObject("#blue", "300px", "200px", "blue", "20px");
el1.elements1();
