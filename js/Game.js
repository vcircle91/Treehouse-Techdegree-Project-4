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
        } else {
            e.target.classList.add("wrong");
        }
        e.target.disabled = true;
    }
}