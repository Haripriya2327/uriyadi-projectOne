// class Game
class Game {
    constructor(name) {
        this.timer = 0;
        this.score = 0;
        this.level = 0;
        this.name = name;
        this.scoreElm = null;
        this.timerElm = null;
        this.bodyElm = document.getElementById("gamePage");
        // this.createTimerElement();
        // this.createScoreElement();
    }
    updateTimer() {
        this.timer++;
        this.timerElm.innerText = "Timer : " + this.timer;
    }
    createTimerElement() {
        this.timerElm = document.createElement("span");
        this.timerElm.classList.add("timer");
        this.timerElm.setAttribute("id", "timer");
        this.timerElm.innerText = "Timer : " + this.timer;

        this.bodyElm.appendChild(this.timerElm);
    }
    createScoreElement() {
        this.scoreElm = document.createElement("span");
        this.scoreElm.classList.add("score");
        this.scoreElm.setAttribute("id", "score");
        this.scoreElm.innerText = "Pots : " + this.score;

        this.bodyElm.appendChild(this.scoreElm);
    }
    updateScore(){
        this.score++;
        this.scoreElm.innerText = "Pots : " + this.score;
    }

}
const game = new Game();

