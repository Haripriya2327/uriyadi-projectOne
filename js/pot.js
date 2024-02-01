// class Pot(Target)
class Pot {
    constructor(positionX,positionY) {
        this.positionY = positionY;
        this.width = 12;
        this.height = 70;
        this.moveUp = true;
        this.positionX = positionX;
        this.potElm=null;
        this.gameElm = document.getElementById("gameArena");
        this.createTargetPot();
    }
    createTargetPot() {
        // create target pot(target) element
        this.potElm = document.createElement("div");
        this.potElm.setAttribute("id", "targetPot");
        this.potElm.classList.add("target-pot");
        this.potElm.style.width = (this.width * 9) + "px";
        this.potElm.style.height = (this.height * 9) + "px";
        this.potElm.style.left = this.positionX + "vw";
        this.potElm.style.bottom = this.positionY + "vh";
          
        this.gameElm.appendChild(this.potElm);
    }

    moveUpDown() {

        if (this.moveUp === true) {
            this.positionY = this.positionY + 1;
            if (this.positionY == 98) {
                this.moveUp = false;
            }
        }
        else {
            this.positionY = this.positionY - 1;
            if (this.positionY === 30) {
                this.moveUp = true;
            }
        }
        this.potElm.style.bottom = this.positionY + "vh";

    }
}