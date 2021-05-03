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
        if (this.activePhrase.toLowerCase().includes(e.target.innerHTML)) {
            e.target.classList.add("chosen");
            phrase.showMatchedLetter(e.target.innerHTML);
            this.checkForWin();
        } else {
            e.target.classList.add("wrong");
            this.removeLife();
        }
        e.target.disabled = true;
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
        this.winOrLose = winOrLose;
        if (this.winOrLose === "win") {
            document.querySelector('#overlay').classList = 'win';  
            document.querySelector('#game-over-message').innerHTML = 'Great job, you won!';
        } else {
            document.querySelector('#overlay').classList = 'lose';  
            document.querySelector('#game-over-message').innerHTML = 'Better luck next time!';
        }
        document.querySelector('#overlay').style.display = "inherit";  
    }
}