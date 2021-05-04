/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Allowing the start button to work
document.querySelector('#btn__reset').addEventListener('click', () => {
    game = new Game;
    game.startGame();
});

// Allowing keyboard to be used
document.onkeypress = (e) => {
    if (/\w/.test(e.key)){
        let buttonList = document.querySelectorAll('.key');
        // Scroll through buttons until right one found
        for (let i = 0; i < buttonList.length; i++) {
            if (buttonList[i].innerHTML === e.key) {
                // Initiate click and therefore fire event listener
                if (document.querySelector('#overlay').style.display === "none") {
                    buttonList[i].click();
                }
            }
        }
    }
}


// Make buttons listen to clicks and handle interaction
buttons = document.querySelectorAll('.key')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        game.handleInteraction(e);
    });
} 


