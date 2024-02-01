// create class instances
const bull = new Bull();
const potArmy = []; 
const potPositionXArr = [10, 30, 50,  70];
let playerJump = true;
const resultElm = document.getElementById("cow")

//generate obstacles
const obstArmy = [];
setInterval(() => {
    const obstacle = new Obstacle();
    obstArmy.push(obstacle);// adding obstacles
}, 2000)

// let pot;
// create pots with specific position
potPositionXArr.forEach((positionX) => {
    const positionY = Math.floor((Math.random()* (60)) + 40);// pots start from different heights
    const pot = new Pot(positionX,positionY);
    potArmy.push(pot);
})

//move targets up and down  Refactoring 

setInterval(() => {
    potArmy[0].moveUpDown();
}, 55)
setInterval(() => {
    potArmy[2].moveUpDown();
}, 50)
setInterval(() => {
    potArmy[1].moveUpDown();
}, 60)
setInterval(() => {
    potArmy[3].moveUpDown();
}, 70)



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
            if (playerJump === true) {
                bull.jumpUpDown();
            }
            playerJump = false;
            setTimeout(() => {
                playerJump = true;
            }, 750)
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
            pot.potElm.style.background = "url('../img/potBroken.png') no-repeat" ; 
            game.createsugarcanes(pot.positionX, pot.positionY);
            game.updateScore();           
            setTimeout(() => {
                pot.potElm.style.background = "url('../img/potFinal.png') no-repeat" ; 
            }, 4000)
            setInterval(() =>{
                game.dropsugarcanes();
            },50)

        }
    })

}, 100)


// obstacle movements
setInterval(() => {
    obstArmy.forEach((obstacle) => {
        obstacle.moveDown();
    })
}, 100)

//obstacle collisio;n detection
const obstacleTimer=setInterval(() => {
    obstArmy.forEach((obstacle) => {

        if (bull.positionX < obstacle.positionX + obstacle.width &&
            bull.positionX + bull.width > obstacle.positionX &&
            bull.positionY < obstacle.positionY + obstacle.height &&
            bull.positionY + bull.height > obstacle.positionY) {
            //    console.log(bull.positionX,(obstacle.positionX + obstacle.width),(bull.positionX+ bull.width),obstacle.positionX)
            //    console.log(bull.positionX, obstacle.width, bull.width,obstacle.positionX)
            game.result.innerText="Game over.. Cow got burned!!!"
            resultElm.style.background = "url('../img/cowangry.png') no-repeat"
            game.resultElm.style.display = "flex";
            game.gameArenaElm.remove();
            game.statusBarElm.remove(); 
            clearInterval(obstacleTimer);
            clearInterval(gameTimer);         
        }
        
    })

}, 30)


//set timer
const gameTimer = setInterval(() => {
    game.updateTimer();
    if (game.timer === 30) {
        if(game.score < 5){
        game.result.innerText ="You failed to feed the cow!! Cow is hangry!!"
        resultElm.style.background = "url('../img/cowangry.png') no-repeat"
       } 
    else{
        game.result.innerText  ="yay!!! Cow is fulll!!!!"
        resultElm.style.background = "url('../img/cowhappy.png') no-repeat"

    }
    game.resultElm.style.display = "flex";
    game.gameArenaElm.remove();
    game.statusBarElm.remove();
    clearInterval(gameTimer);    
    clearInterval(obstacleTimer);
    }
}, 1000)
