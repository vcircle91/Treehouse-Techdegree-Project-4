/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    // Generate the html to display a phrase
    addPhraseToDisplay() {
        // Create output variable to return later
        let phraseToDisplay = '';
        // Loop through every letter
        for(var i = 0; i < this.phrase.length; i++) {
            if (/\w/.test(this.phrase[i])) {
                phraseToDisplay += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>\n`;
            } else if (/\s/.test(this.phrase[i])) {
                phraseToDisplay += '<li class="space"> </li>\n';
            }
        }
        document.querySelector('#phrase').firstElementChild.innerHTML = phraseToDisplay;
        console.log(phraseToDisplay);
    }
    // Check if some selected letter is part of the phrase
    checkLetter(letter){
        return this.phrase.includes(letter.toLowerCase());
    }
    // Show letter if it is a match
    showMatchedLetter(letter){
        if (this.checkLetter(letter)) {
            let allLetters = document.getElementsByClassName(`${letter}`);
            console.log(allLetters);
            for (let i = 0; i < allLetters.length; i++) {
                allLetters[i].className = `show letter ${letter}`;
            }
        }
    }
}