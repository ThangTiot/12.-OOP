class Circle {
    x;
    y;
    radius;

    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
}

function getRandomColor() {
    let red = Math.random() * 255
    let green = Math.random() * 255
    let blue = Math.random() * 255
    return "rgb(" + red + "," + green + "," + blue + ")"
}

function creatCircle() {
    let cc = document.getElementById("myCanvas").getContext("2d")
    let radius = Math.random() * 80
    let x = Math.random() * 600
    let y = Math.random() * 500
    let circle = new Circle(x, y, radius)
    cc.beginPath()
    cc.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI)
    cc.fillStyle = getRandomColor()
    cc.fill()
    cc.stroke()
    cc.strokeStyle = getRandomColor()
    cc.lineWidth = 5
}

function creatMultiCircle() {
    for (let i=0;i<50;i++) {
        creatCircle()
    }
}

creatMultiCircle()