// class Game
class Game {
    constructor() {
        this.timer = 0;
        this.score = 0;
        this.level = 0;
        // this.name = name;
        this.sugarcanePositionX = 0;
        this.sugarcanePositionY = 0;
        this.sugarcaneWidth = 10.5;
        this.sugarcaneHeight = 11;
        this.scoreElm = null;
        this.timerElm = null;
        this.hungerLevel = 0;
        // this.statusElm = document.getElementById("statusBar");
        this.bodyElm = document.getElementById("gamePage");
        this.resultElm = document.querySelector("#resultDiv")
        this.result = document.querySelector("#result")
        this.resultElm.style.display = "none";
        this.createGameArena();
        this.createTimerElement();
        this.createScoreElement();
        this.createHomeElement();
    
    }
createGameArena(){
    this.gameArenaElm = document.createElement("div");
    this.gameArenaElm.classList.add("game-arena");
    this.gameArenaElm.setAttribute("id", "gameArena");
    
    this.bodyElm.appendChild(this.gameArenaElm)
    this.statusBarElm = document.createElement("div");
    this.statusBarElm.classList.add("status-bar");
    this.statusBarElm.setAttribute("id", "statusBar");
    
    this.bodyElm.appendChild(this.statusBarElm)
}
    createHomeElement() {
        this.homeElm = document.createElement("a");
        this.homeElm.classList.add("home", "status-box");
        this.homeElm.setAttribute("id", "home");
        this.homeElm.href="../index.html";

        this.statusBarElm.appendChild(this.homeElm);
    }
    createTimerElement() {
        this.timerElm = document.createElement("span");
        this.timerElm.classList.add("timer", "status-box");
        this.timerElm.setAttribute("id", "timer");
        this.timerElm.innerText = "Timer : " + this.timer;

        this.statusBarElm.appendChild(this.timerElm);
    }
    updateTimer() {
        this.timer++;
        this.timerElm.innerText = "Timer : " + this.timer;
    }
    createScoreElement() {
        this.scoreDiv = document.createElement("div");
        this.scoreDiv.classList.add("score-div", "status-box");
        this.scoreDiv.setAttribute("id", "scoreDiv");
        this.statusBarElm.appendChild(this.scoreDiv);
// this.scoreDiv.innerText = "Pots : " + this.score;

        this.scoreElm = document.createElement("div");
        this.scoreElm.classList.add( "hungerBar");
        this.scoreElm.setAttribute("id", "score");
        this.scoreElm.innerText = "";
        this.scoreElm.style.width = this.hungerLevel+"%"

        this.scoreDiv.appendChild(this.scoreElm);
    }
    updateScore() {
        this.score++;
        if(this.hungerLevel <= 100 ){
        this.hungerLevel = this.hungerLevel +20 ;  
        this.scoreElm.style.width =  this.hungerLevel;
        this.scoreElm.style.width = this.hungerLevel+"%"
        }
        if(this.score >= 5 && this.score <7){
           bull.bullElm.style.background = 'url("./img/cownormal.png") no-repeat';
        }  
        else if(this.score > 7 ){
            bull.bullElm.style.background = 'url("./img/cowhappy.png") no-repeat';
            }
    }
    createsugarcanes(sugarcanePositionX, sugarcanePositionY) {
        // create sugarcane element
        this.sugarcanePositionX = sugarcanePositionX;
        this.sugarcanePositionY = sugarcanePositionY;
        this.sugarcaneElm = document.createElement("div");
        this.sugarcaneElm.setAttribute("id", "sugarcane");
        this.sugarcaneElm.classList.add("sugarcane");
        this.sugarcaneElm.style.width = (this.sugarcaneWidth * 9) + "px";
        this.sugarcaneElm.style.height = (this.sugarcaneHeight * 9) + "px";
        this.sugarcaneElm.style.left = this.sugarcanePositionX + "vw";
        this.sugarcaneElm.style.bottom = this.sugarcanePositionY + "vh";

        game.gameArenaElm.appendChild(this.sugarcaneElm);
    }
    dropsugarcanes() {
        this.sugarcanePositionY--;
        this.sugarcaneElm.style.bottom = this.sugarcanePositionY + "vh";
    }
}
const game = new Game();
// const bull = new Bull();   
 
