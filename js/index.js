// create class instances
const bull = new Bull();
const potArmy = [];
const potPositionArr = [0, 20, 60, 80, 90, 40];
let pot;
// create pots with specific position
potPositionArr.forEach((position) => {
    const pot = new Pot(position);
    potArmy.push(pot);
})

//move targets up and down  Refactoring 

setInterval(() => {
    potArmy[0].moveUpDown();
}, 45)
setInterval(() => {
    potArmy[2].moveUpDown();
}, 50)
setInterval(() => {
    potArmy[1].moveUpDown();
}, 60)
setInterval(() => {
    potArmy[4].moveUpDown();
}, 55)
setInterval(() => {
    potArmy[3].moveUpDown();
}, 70)
setInterval(() => {
    potArmy[5].moveUpDown();
}, 75)


//move player left and right

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        bull.playLeft();
    }
    if (e.code === 'ArrowRight') {
        bull.playRight();
    }
})
// player jump
document.addEventListener('keyup', (e) => {
    if (e.code === 'Space') {
        bull.jumpUpDown();
        // console.log("bull positionX -"+bull.positionX + " bull positionY -" + bull.positionY)
    }
})

//detecting target hits
setInterval(() => {
    potArmy.forEach((pot) => {
        if (bull.positionX < pot.positionX + pot.width &&
            bull.positionX + bull.width > pot.positionX &&
            bull.positionY < pot.positionY + pot.height &&
            bull.positionY + bull.height > pot.positionY) {
            pot.potElm.style.display = "none";          

            setTimeout(() => {
                pot.potElm.style.display = "block"
                // game.updateScore();
            }, 4000)

        }
    })

}, 30)

//generate obstacles
const obstArmy = [];
setInterval(() => {
    const obstacle = new Obstacle();
    obstArmy.push(obstacle);// adding obstacles
}, 3000)

// obstacle movements
setInterval(() => {
    obstArmy.forEach((obstacle) => {
        obstacle.moveDown();
    })
}, 50)

//obstacle collision detection
setInterval(() => {
    obstArmy.forEach((obstacle) => {

        if (bull.positionX < obstacle.positionX + obstacle.width &&
            bull.positionX + bull.width > obstacle.positionX &&
            bull.positionY < obstacle.positionY + obstacle.height &&
            bull.positionY + bull.height > obstacle.positionY) {
            //    console.log(bull.positionX,(obstacle.positionX + obstacle.width),(bull.positionX+ bull.width),obstacle.positionX)
            //    console.log(bull.positionX, obstacle.width, bull.width,obstacle.positionX)
            location.href = "./game.html"
        }
    })

}, 30)


//set timer

// const gameTimer = setInterval(() => {
//     game.updateTimer();
//     if (game.timer === 30) {
//         location.href = "start.html"
//     }
// }, 1000)
