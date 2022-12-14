//1----------------------------
class Button{
    constructor(width, height, text){
        this._width = width;
        this._height = height;
        this._text = text;
    }
    showBtn(){
        document.write(`<button style="width: ${this._width}; height: ${this._height}; margin: 10px;">${this._text}</button>`)
    }
}

class BootstrapButton extends Button{
    constructor(width, height, text, color){
        super(width, height, text);
        this._color = color;
    }
    showBtn(){
        document.write(`<button style="width: ${this._width}; height: ${this._height}; color: ${this._color}; margin: 10px;">${this._text}</button>`)
    }
}

let button = new Button('120px', '30px', 'Push');
let bootstrapButton = new BootstrapButton('120px', '30px', 'Push', 'aquamarine');
button.showBtn();
bootstrapButton.showBtn();

//2----------------------------
class Figure{
    #getName(){
        console.log("Total class Figure. There is not any name.")
    }
    showFigure(){
        this.#getName();
        this.#getSqueare();
        this.#getPerimeter();
    }
    #getSqueare(){
        console.log("Total class Figure. There is not squeare.")
    }
    #getPerimeter(){
        console.log("Total class Figure. There is not squeare.")
    }
}

class Rectangle extends Figure{
    constructor(a,b){
        super();
        this.a = a;
        this.b = b;
    }
    #getName(){
        console.log("Rectangle: ");
    }
    showFigure(){
        this.#getName();
        this.#getSqueare();
        this.#getPerimeter();
    }
    #getSqueare(){
        let s = this.a * this.b;
        console.log(`S = ${s}`)
    }
    #getPerimeter(){
        let p = (this.a + this.b) * 2;
        console.log(`P = ${p}`)
    }
}

class Quadrate extends Figure{
    constructor(a,b){
        super();
        this.a = a;
        this.b = b;
    }
    #getName(){
        console.log("Quadrate: ");
    }
    showFigure(){
        this.#getName();
        this.#getSqueare();
        this.#getPerimeter();
    }
    #getSqueare(){
        let s = this.a * this.a;
        console.log(`S = ${s}`)
    }
    #getPerimeter(){
        let p = this.a * 4;
        console.log(`P = ${p}`)
    }
}

class Triangle extends Figure{
    constructor(a,b,c){
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }
    #getName(){
        console.log("Triangle: ");
    }
    showFigure(){
        this.#getName();
        this.#getSqueare();
        this.#getPerimeter();
    }
    #getSqueare(){
        let p = (this.a + this.b + this.c) / 2;
        let s = Math.sqrt(p * (p - this.a ) * (p - this.b) * (p - this.c));
        console.log(`S = ${s}`)
    }
    #getPerimeter(){
        let p = this.a + this.b + this.c;
        console.log(`P = ${p}`)
    }
}

let rectangle = new Rectangle(5,10);
let quadrate = new Quadrate(4);
let triangle = new Triangle(5,5,8);
let arr = [rectangle, quadrate, triangle];
arr.forEach(el => el.showFigure());

//3----------------------------
class ExtentedArray extends Array{
    getString(separator){
        let arr = [];
        for (const it of this) {
            arr = it;
        }
        console.log(arr);
        console.log(arr.join(separator));
    }
    getHtml(tagName){
        let arr = [];
        for (const it of this) {
            arr = it;
        }

        if(tagName == 'li' || tagName == 'ul'){
            arr.forEach(el =>{
                document.write(`<ul>
                <li>${el}</li>
                </ul>`)
            });
        }
        else{
            arr.forEach(el =>{
                document.write(`<${tagName}>${el}</${tagName}>`)
            });
        }
    }
}

let ext = new ExtentedArray(['hello','world','!']);
ext.getString('-');
ext.getHtml('li');
ext.getHtml('div');
ext.getHtml('ul');
ext.getHtml('p');
ext.getHtml('a');
ext.getHtml('h2');