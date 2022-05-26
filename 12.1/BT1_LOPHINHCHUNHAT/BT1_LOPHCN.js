class Rectangle {
    width;
    height;
    color;

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.color = getColorRandom();
    }

    getArea() {
        return this.width*this.height;
    }
    getCV() {
        return (this.height + this.width) * 2
    }
}

function getColorRandom() {
    let red = Math.random() * 255
    let blue = Math.random() * 255
    let green = Math.random() * 255
    return "rgb(" + red + "," + blue + "," + green + ")"
}

let myRectangle = new Rectangle(100,50)
document.write("<br>Dien tich hinh chu nhat " + myRectangle.width + " x " +
    myRectangle.height + " la: " + myRectangle.getArea() + "<br>");
document.write("Chu vi la: " + myRectangle.getCV());

let canvasRectangle = document.getElementById("myCanvas").getContext("2d")
canvasRectangle.fillStyle = myRectangle.color
canvasRectangle.fillRect(100,100,myRectangle.width,myRectangle.height)

