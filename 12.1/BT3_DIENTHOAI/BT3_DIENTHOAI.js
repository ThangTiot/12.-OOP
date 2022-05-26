class Mobile{
    pin;
    tinDangSoan;
    tinDaGui;
    tinDaNhan;
    trangThai;

    constructor() {
        this.pin = 100;
        this.trangThai = 'off'
    }

    setTinDaGui(noiDung) {
        if (this.trangThai === "on") {
            this.pin -= 1;
            this.tinDaGui = noiDung;
        }
    }
    setTinDaNhan(noiDung) {
        if (this.trangThai === "on") {
            this.pin -= 1;
            this.tinDaNhan = noiDung;
        }
    }
    setTrangThai(trangThai) {
        this.trangThai = trangThai;
    }
    setPin(phanTramPin) {
        this.pin = phanTramPin;
    }
    setSoanTinNhan(noidung) {
        if (this.trangThai === "on") {
            this.pin -= 1;
            this.tinDangSoan = noidung;
        }
    }
    getTrangThai() {
        return this.trangThai;
    }
    getHopThuDen() {
        if (this.trangThai === "on") {
            this.pin -= 1;
            return this.tinDaNhan;
        }
    }
    getTinDaGui() {
        if (this.trangThai === "on") {
            this.pin -= 1;
            return this.tinDaGui;
        }
    }
}

function turnOn() {
    if (nokia.trangThai === 'off' || iphone.trangThai === 'off') {
        let change = confirm("Dien thoai dang tat! Ban co muon bat k?")
        if (change) {
            nokia.trangThai = 'on'
            iphone.trangThai = 'on'
        }
    }
}

let nokia = new Mobile()
let iphone = new Mobile()
function dataInput() {
    turnOn()
    let messenger = document.getElementById("messenger").value
    nokia.setSoanTinNhan(messenger);
}
function sent() {
    nokia.setTinDaGui(nokia.tinDangSoan)
    iphone.setTinDaNhan(nokia.getTinDaGui())
    console.log(iphone.getHopThuDen())
    console.log(nokia.pin)
    console.log(iphone.pin)
}
