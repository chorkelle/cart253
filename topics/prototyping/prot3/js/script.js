/** A Very Normal Soundboard
 * 
 * Charlotte Walsh
 * 
 * A soundboard that tries to run away when you click the buttons.
 */

"use strict";

// The dog barking sound effect
const dogBark = {
    // Position and size
    x: 150,
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
    x: 300,
    y: 100,
    size: 100,
    // Colours
    fill: {
        notclicked: "#5c8cec",
        clicked: "#2e1aaf"
    },
    soundEffect: undefined
}

// The dog barking sound effect
const boing = {
    // Position and size
    x: 450,
    y: 100,
    size: 100,
    // Colours
    fill: {
        notclicked: "#53ec30",
        clicked: "#085720"
    },
    soundEffect: undefined
}

// The cat meowing sound effect
const catMeow = {
    // Position and size
    x: 450,
    y: 250,
    size: 100,
    // Colours
    fill: {
        notclicked: "#ec307e",
        clicked: "#570808"
    },
    soundEffect: undefined
}

// The cat meowing sound effect
const trumpets = {
    // Position and size
    x: 300,
    y: 250,
    size: 100,
    // Colours
    fill: {
        notclicked: "#ec307e",
        clicked: "#570808"
    },
    soundEffect: undefined
}

// The vine boom sound effect
const vineBoom = {
    // Position and size
    x: 150,
    y: 250,
    size: 100,
    // Colours
    fill: {
        notclicked: "#ec307e",
        clicked: "#570808"
    },
    soundEffect: undefined
}

/**
 * Loads the sound effects
 */
async function preload() {
    // Dog bark
    dogBark.soundEffect = await loadSound("assets/sounds/bark.wav");
    // Applause 
    applause.soundEffect = await loadSound("assets/sounds/applause.wav");
    // Boing
    boing.soundEffect = await loadSound("assets/sounds/boing.wav");
    // Cat meow
    catMeow.soundEffect = await loadSound("assets/sounds/cat-meow.wav");
    // Trumpet fanfare
    trumpets.soundEffect = await loadSound("assets/sounds/trumpets.wav");
    // Vine boom
    vineBoom.soundEffect = await loadSound("assets/sounds/vine-boom.wav");
}

/**
 * Creates the canvas
*/
async function setup() {

    createCanvas(600, 600);

    await preload();

    // Lets me change the speed at which the sound effects are played
    dogBark.soundEffect.rate(0.5);
    applause.soundEffect.rate(0.9);
    boing.soundEffect.rate(0.9);
    catMeow.soundEffect.rate(0.9);
    trumpets.soundEffect.rate(0.9);
    vineBoom.soundEffect.rate(0.9);


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
    drawButton(boing);
    drawButton(catMeow);
    drawButton(trumpets);
    drawButton(vineBoom);

    // Allows you to click the buttons (moves them and plays the sound effect)
    pushButton(dogBark);
    pushButton(applause);
    pushButton(boing);
    pushButton(catMeow);
    pushButton(trumpets);
    pushButton(vineBoom);
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
        button.x += random(1, 7);
        button.y += random(1, 8);
        button.x -= random(1, 8);
        button.y -= random(1, 7);
        button.fill.notclicked = button.fill.clicked;
    }

    // Makes the buttons run away from you
    if (!overlap && mouseIsPressed) {
        button.x += random(1, 2);
        button.y += random(1, 2);
        button.x -= random(1, 2);
        button.y -= random(1, 2);
    }

}