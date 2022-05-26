class Apple {
    weight;

    constructor(weight) {
        this.weight = weight;
    }

    decrease() {
        if (this.isEmpty()) {
            document.write("Het cmnr con dau ma an")
        } else {
            this.weight--
        }
    }
    setWeight(value) {
        this.weight = value;
    }
    getWeight() {
        return this.weight
    }
    isEmpty() {
        if (this.weight === 0)
            return true
        else
            return false
    }
}

class Human {
    name;
    gender;
    weight;

    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    checkApple(apple) {
        return apple.getWeight()
    }
    eatApple(apple){
        document.write("An nha!<br>")
        if (apple.isEmpty()) {
            apple.decrease();
        } else {
            apple.decrease();
            this.weight++
        }
    }
    saySomething(string) {
        document.write(string);
    }
    getWeight() {
        return this.weight
    }
}

let adam = new Human("Adam","Nam",60)
let eva = new Human("Eva","Nu",45)
let apple = new Apple(10)

adam.saySomething("Chao nguoi dep!<br>")
eva.saySomething("Chao vi huynh dai! Chen k!!!<br>")
while (apple.weight > 0) {
    adam.saySomething("Moi nang hoc<br>")
    eva.eatApple(apple)
    document.write("Khoi luong tao: " + eva.checkApple(apple) + "<br>")
    document.write("Can nang mu eva: " + eva.getWeight() + "<br>")
    eva.saySomething("Moi chang dop: <br>")
    adam.eatApple(apple)
    document.write("Khoi luong tao: " + adam.checkApple(apple) + "<br>")
    document.write("Can nang ong tuong adm: " + adam.getWeight() + "<br>")
}
adam.saySomething("Nang co muon an nua k? <br>");
eva.eatApple(apple);