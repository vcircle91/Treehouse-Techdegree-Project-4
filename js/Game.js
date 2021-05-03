/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ['Hello coder', 'Have a coffee', 'Work hard', 'Treehouse is great', 'You made it'];
        this.activePhrase = null;
    }
    startGame() {
        document.querySelector('#overlay').style.display = "none";  
        this.activePhrase = this.getRandomPhrase();
        phrase = new Phrase(this.activePhrase);
        phrase.addPhraseToDisplay();
    }
    getRandomPhrase() {
        // Create random number to pick phrase
        var rnd = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[rnd];
    }
    handleInteraction(e) {
        e.target.disabled = true;
        if (this.activePhrase.toLowerCase().includes(e.target.innerHTML)) {
            e.target.classList.add("chosen");
            phrase.showMatchedLetter(e.target.innerHTML);
            this.checkForWin();
        } else {
            e.target.classList.add("wrong");
            this.removeLife();
        }
    }
    removeLife() {
        this.missed += 1;
        if (this.missed > 4){
            this.gameOver('lose');
        } else {
            document.querySelector('.tries').remove();
        }
    }
    checkForWin() {
        if (!document.querySelector('#phrase').firstElementChild.innerHTML.includes('hide')) {
            this.gameOver('win')
        }
    }
    gameOver(winOrLose) {
        // Check if player won or lost and show message
        this.winOrLose = winOrLose;
        if (this.winOrLose === "win") {
            document.querySelector('#overlay').classList = 'win';  
            document.querySelector('#game-over-message').innerHTML = 'Great job, you won!';
        } else  if (this.winOrLose === "lose") {
            document.querySelector('#overlay').classList = 'lose';  
            document.querySelector('#game-over-message').innerHTML = 'Better luck next time!';
        }
        document.querySelector('#overlay').style.display = "inherit";  

        // Reset Phrase
        document.querySelector('#phrase').firstElementChild.innerHTNL = '';
        // Reset keys
        let allKeys = document.querySelectorAll('.key');
        for (let i = 0; i < allKeys.length; i++) {
            allKeys[i].classList = 'key';
            allKeys[i].disabled = false;
            
        }
        // Reset lives
        this.missed = 0;
        document.querySelector('#scoreboard').innerHTML = `<ol>
        <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
        <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
        <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
        <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
        <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
        </ol>`
    }
}