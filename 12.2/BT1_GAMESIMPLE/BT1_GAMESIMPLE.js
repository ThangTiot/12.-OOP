class Game {
    x;
    y;

    constructor() {
        this.x = 100;
        this.y = 100;
    }

    draw() {
        let canvas = document.getElementById("canvas").getContext("2d");
        canvas.clearRect(0, 0, window.innerWidth, window.innerHeight)
        let img = document.getElementById("image");
        canvas.drawImage(img, this.x, this.y, 100, 100);
    }

    moveRight() {
        this.x += 20
    }

    moveLeft() {
        this.x -= 20
    }

    moveUp() {
        this.y -= 20
    }

    moveDown() {
        this.y += 20
    }
}

let game = new Game()

function run() {
    game.draw();
    if (game.x !== 400 && game.x !== 0 && game.y !== 400 && game.y !== 0) {
        game.moveRight()
    } else if (game.x === 400 && game.y === 400) {
        game.moveLeft()
    } else if (game.x === 0 && game.y === 400) {
        game.moveUp()
    } else if (game.x === 0 && game.y === 0) {
        game.moveRight()
    } else if (game.x === 400 && game.y === 0) {
        game.moveDown()
    } else if (game.y === 400) {
        game.moveLeft()
    } else if (game.x === 0) {
        game.moveUp()
    } else if (game.y === 0) {
        game.moveRight()
    } else if (game.x === 400) {
        game.moveDown()
    }
}

let timeout

function start() {
    timeout = setInterval(run, 100)
}

function stop() {
    clearInterval(timeout)
}

window.onload = run

