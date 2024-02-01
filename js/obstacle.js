//create obstacles class 
class Obstacle{
    constructor(){
        
        this.positionY = 100;
        this.width = 5;
        this.height = 5;
        this.positionX = Math.floor(Math.random()* (100 - this.width + 1));
        this.potElm=null;
        // this.gameElm = document.getElementById("gameArena");
        this.createObstacle();
    }
    createObstacle() {
        // create target pot(target) element
        this.obstElm = document.createElement("div");
        this.obstElm.setAttribute("id", "obstacle");
        this.obstElm.classList.add("obstacle");
        this.obstElm.style.width = (this.width * 9) + "px";
        this.obstElm.style.height = (this.height * 9) + "px";
        this.obstElm.style.left = this.positionX + "vw";
        this.obstElm.style.bottom = this.positionY + "vh";
          
        game.gameArenaElm.appendChild(this.obstElm);
    }

    moveDown(){
        this.positionY = this.positionY - 1;
        this.obstElm.style.bottom = this.positionY + "vh";
    }

}