class Battery {
    energy;
    constructor(energy) {
        this.energy = energy;
    }

    setEnergy(energy) {
        this.energy = energy;
    }

    getEnergy() {
        return this.energy;
    }

    decreaseEnergy(status) {
        if (status) {
            this.energy--
        }
    }
}

class Lamp {
    battery;
    status;

    constructor(battery) {
        this.battery = battery;
    }

    getBattery() {
        return this.battery.getEnergy()
    }
    turnOn() {
        this.status = true
    }
    turnOff() {
        this.status = false
    }
    anNoun() {
        if (this.status) {
            alert("Lighting")
        } else {
            alert("Not lighting")
        }
    }
}

let battery = new Battery(100)
let lamp = new Lamp(battery)

document.write("Tinh trang pin ban dau: " + lamp.getBattery() + "<br>")
lamp.turnOn()
lamp.anNoun()
battery.decreaseEnergy(lamp.status)
document.write("Tinh trang pin sau khi bat den: " + lamp.getBattery())
lamp.turnOff()
lamp.anNoun()
