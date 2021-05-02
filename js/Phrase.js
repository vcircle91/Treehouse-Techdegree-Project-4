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
        let phraseToDisplay = '<div id="phrase" class="section">\n<ul>\n';
        // Loop through every letter
        for(var i = 0; i < this.phrase.length; i++) {
            if (/\w/.test(this.phrase[i])) {
                phraseToDisplay += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>\n`;
            } else if (/\s/.test(this.phrase[i])) {
                phraseToDisplay += '<li class="space"> </li>\n';
            }
        }
        phraseToDisplay += '</ul>\n</div>';
        return phraseToDisplay;
    }
    // Check if some selected letter is part of the phrase
    checkLetter(letter){
        return this.phrase.includes(letter.toLowerCase());
    }
}

const phrase = new Phrase('Kika ist lieb');
console.log(phrase.phrase);
console.log(phrase.addPhraseToDisplay());
console.log(phrase.checkLetter('K'));