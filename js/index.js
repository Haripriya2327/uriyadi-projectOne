// console.log("its working")

class Game {
    constructor() {

    }

}



class Bull {
    constructor() {
        // create player details
        this.positionX = 0;
        this.positionY = 5;
        this.width = 100;
        this.height = 100;
        this.gameElm = document.getElementById("gameArena");
        this.createBull();

    }
    createBull() {
        // create target bull(player) element

        this.bullElm = document.createElement("div");
        this.bullElm.classList.add("player-bull");
        this.bullElm.setAttribute("id", "playerBull");
        this.bullElm.style.width = this.width + "px";
        this.bullElm.style.height = this.height + "px";
        // this.potElm.style.left = this.positionX + "vw";
        this.bullElm.style.left = this.positionX + "vw";
        this.bullElm.style.bottom = this.positionY + "vh";
        // this.potElm.style.bottom= 50+ "vh";

        this.gameElm.appendChild(this.bullElm);
    }
    playRight() {
        if ((this.positionX + 3) < 100) {
            this.positionX = this.positionX + 1;
        }
        this.bullElm.style.left = this.positionX + "vw";
    }
    playLeft() {
        if (this.positionX > 0) {
            this.positionX = this.positionX - 1;
        }
        this.bullElm.style.left = this.positionX + "vw";
    }
    jumpUpDown() {
        // const gameDet = document.querySelector(".game-arena"); Refactoring positionY value needed
        this.positionY = this.positionY + 25;
        this.bullElm.style.bottom = this.positionY + "vh"; 
        const jumpTimer = setInterval(()=>{
            this.positionY = this.positionY - 25;
            this.bullElm.style.bottom = this.positionY + "vh";   
            clearInterval(jumpTimer);
        },150)
       
        // console.log(this.positionY);
        // console.log(gameDet.offsetHeight);
      
    }
}

class Pot {
    constructor(positionX) {
        this.positionY = -50;
        this.width = 100;
        this.height = 500;
        this.moveUp = true;
        this.positionX = positionX;
        this.createTargetPot();
    }
    createTargetPot() {
        // create target pot(target) element
        this.potElm = document.createElement("div");
        this.potElm.setAttribute("id", "targetPot");
        this.potElm.classList.add("target-pot");
        this.potElm.style.width = this.width + "px";
        this.potElm.style.height = this.height + "px";
        // this.potElm.style.left = this.positionX + "vw";
        this.potElm.style.right = this.positionX + "vw";
        this.potElm.style.top = this.positionY + "vh";
        // this.potElm.style.bottom= 50+ "vh";

        const gameElm = document.getElementById("gameArena");
        gameElm.appendChild(this.potElm);
    }

    moveUpDown() {

        if (this.moveUp === true) {
            this.positionY = this.positionY - 1;
            if (this.positionY == -66) {
                this.moveUp = false;
            }
        }
        else {
            this.positionY = this.positionY + 1;
            if (this.positionY === 0) {
                this.moveUp = true;
            }
        }
        this.potElm.style.top = this.positionY + "vh";

    }
}
const game = new Game();
const bull = new Bull();
const potArmy = [];
const potPositionArr = [0, 20, 60, 80, 90, 40];
let pot;
// create pots with specific position
potPositionArr.forEach((position) => {
    const pot = new Pot(position);
    potArmy.push(pot);
})

//move targets up and down  Refactoring needed
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
      if(e.code === 'ArrowUp'){
        bull.jumpUpDown();
        
    }
})
