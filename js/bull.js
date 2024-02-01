//class Bull(Player)

class Bull {
    constructor() {
        // create player details
        this.positionX = 45;
        this.positionY = 5;
        this.width = 10.5;
        this.height = 11;
        this.gameElm = document.getElementById("gameArena");
        this.createBull();

    }
    createBull() {
        // create target bull(player) element

        this.bullElm = document.createElement("div");
        this.bullElm.classList.add("player-bull");
        this.bullElm.setAttribute("id", "playerBull");
        this.bullElm.style.width = (this.width * 9) + "px";
        this.bullElm.style.height = (this.height * 9) + "px";
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
        const jumpTimer = setInterval(() => {
            this.positionY = this.positionY - 25;
            this.bullElm.style.bottom = this.positionY + "vh";
            clearInterval(jumpTimer);
        }, 100)

        // console.log(this.positionY);
        // console.log(gameDet.offsetHeight);

    }
}