class Date {
    day;
    month;
    year;

    constructor(ngay,thang,nam) {
        this.day = ngay;
        this.month = thang;
        this.year = nam;
    }
    getDay() {
        return this.day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year
    }
    setDay(newDay) {
        this.day = newDay
    }
    setMonth(newMonth) {
        this.day = newMonth
    }
    setYear(newYear) {
        this.day = newYear
    }
    setDate(newDay,newMonth,newYear) {
        this.day = newDay;
        this.month = newMonth;
        this.year = newYear
    }
    toString() {
        return this.day + "/" + this.month + "/" + this.year
    }
}


function changeDay() {
    let day = document.getElementById("day").value
    let toDay = new Date(20,5,2022)
    toDay.setDay(day);
    console.log(toDay.day)
}