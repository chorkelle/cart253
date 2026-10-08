/**
 * The Only Move Is Not To Play
 * Pippin Barr
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);

    // If the mouse is moved, the lose function is called
    addEventListener("mousemove", lose);
    // If the mousewheel is moved, the lose function is called
    addEventListener("wheel", lose);
    // If the wifi is turned off, the lose function is called
    window.addEventListener("offline", lose);


}

/**
 * Update the score and display the UI
 */
function draw() {
    background("#eb87ca");

    // Only increase the score if the game is not over
    if (!gameOver) {
        // Score increases relatively slowly
        score += 0.05;
    }
    // // If a key is pressed or the mouse is pressed, the lose function is called
    if (keyIsPressed || mouseIsPressed) {
        lose();
    }
    // Displays the UI
    displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
    if (gameOver) {
        push();
        textSize(48);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("You lose!", width / 2, height / 3);
        pop();
    }
    displayScore();
}

/**
 * Display the score
 */
function displayScore() {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(floor(score), width / 2, height / 2);
    pop();
}


/**
 * Checks if you should lose or not
 */
function lose() {
    // Brings the score down everytime you do something that triggers the lose function
    score -= 0.5;
    // Makes it gameover if you reach a score of zero
    if (score <= 0) {
        gameOver = true;
    }
    // Doesn't let score go lower than 0
    if (score < 0) {
        score = 0;
    }

}

