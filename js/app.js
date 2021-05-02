/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
game = new Game;

// Allowing the start button to work
document.querySelector('#btn__reset').addEventListener('click', () => {
    game.startGame();
});

buttons = document.querySelectorAll('.key')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        game.handleInteraction(e);
    });
}