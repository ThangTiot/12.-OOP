class Circle {
    radius;
    color;

    constructor(radius, color) {
        this.radius = radius
        this.color = color
    }

    getRadius() {
        return this.radius
    }
    getArea() {
        return Math.pow(this.radius,2) * Math.PI
    }

    getColor() {
        return this.color
    }
}


function run() {
    let newCircle = new Circle(5, "black")
    newCircle.radius = 10
    alert("Duong tron ban kinh: " + newCircle.getRadius() + " màu "
        + newCircle.getColor() + " va dien tich la: " + newCircle.getArea().toFixed(2))
}