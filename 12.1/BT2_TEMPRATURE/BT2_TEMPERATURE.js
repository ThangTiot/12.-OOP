class Temperature {
    doC;

    constructor(doC) {
        this.doC = doC
    }

    getDoF() {
        return (this.doC * 1.8 + 32).toFixed(2);
    }
    getDoK() {
        return (this.doC + 273.15)
    }
}

function convert() {
    let temperature = +document.getElementById("dataInput").value
    let myTemperature = new Temperature(temperature);
    document.getElementById("doF").innerHTML = "Nhiet do F la: " + myTemperature.getDoF()
    document.getElementById("doK").innerHTML = "Nhiet do K la: " + myTemperature.getDoK()
}