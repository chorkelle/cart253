/**
 * Very Normal Soundboard
 * Charlotte Walsh
 * 
 * A soundboard that definitely works normally.
 */

"use strict";

// The dog barking sound effect
const dogBark = {
    // Position and size
    x: 100,
    y: 100,
    size: 100,
    // Colours
    fill: {
        notclicked: "#d0284f",
        clicked: "#7a1630"
    },
    soundEffect: undefined
}

// The dog barking sound effect
const applause = {
    // Position and size
    x: 250,
    y: 100,
    size: 100,
    // Colours
    fill: {
        notclicked: "#5c8cec",
        clicked: "#2e1aaf"
    },
    soundEffect: undefined
}

/**
 * Loads the sound effects
 */
async function preload() {
    // Dog bark
    dogBark.soundEffect = await loadSound("assets/sounds/bark.wav");
    // Cat meow
    applause.soundEffect = await loadSound("assets/sounds/bark.wav");
}

/**
 * Creates the canvas
*/
async function setup() {

    createCanvas(600, 600);

    await preload();

    dogBark.soundEffect.rate(0.5);
    applause.soundEffect.rate(1);


}

/**
 * Draws the program
*/
function draw() {
    // Draws the background
    background("lightgrey");

    // Draws the buttons
    drawButton(dogBark);
    drawButton(applause);

    pushButton(dogBark);
}

/**
 * Draws the buttons
*/
function drawButton(button) {
    // Draws the button
    push();
    noStroke();
    fill(button.fill.notclicked);
    ellipse(button.x, button.y, button.size);
    pop();

}

/**
 * Draws the buttons
*/
function pushButton(button) {
    // Calculates the distance between mouse and button (aka lets you push the button)
    const d = dist(mouseX, mouseY, button.x, button.y);
    const overlap = (d < button.size / 2);
    if (overlap && mouseIsPressed) {
        button.soundEffect.play();
        button.x += 5;
        button.y += 5;
        button.fill.notclicked = button.fill.clicked;
    }

    // Makes the buttons run away from you
    if (!overlap && mouseIsPressed) {
        button.x -= random(1, 5);
        button.y -= random(1, 5);
    }

}