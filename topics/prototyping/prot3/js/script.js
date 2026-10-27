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
    size: 30,
    // Colours
    fills: {
        notclicked: "#d0284f",
        clicked: "#7a1630"
    },
    soundEffect: undefined
}

// The dog barking sound effect
const catMeow = {
    // Position and size
    x: 100,
    y: 100,
    size: 30,
    // Colours
    fills: {
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
    dogBark.soundEffect = await loadSound("assets/sounds/bark.wav");
}

/**
 * Creates the canvas
*/
function setup() {

    createCanvas(600, 600);

}


/**
 * Draws the program
*/
function draw() {

    background(20, 280, 110);
}