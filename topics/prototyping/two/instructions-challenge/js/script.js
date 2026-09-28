/**
 * Abstract Circles
 * Charlotte Walsh
 * 
 * Hungry sim
 */

"use strict";

/**
 * Makes the horse a variable
 */
let horse = {
    // Position of the bird (where we will place the image)
    x: 150,
    y: 150,
    // The image of the bird, which we will load in preload()
    image: undefined
};

/**
 * Preloads the images
 */
async function preload() {

    horse.image = await loadImage("/images/horse.png")

}

/**
 * Sets up the canvas and adds the preload function for images
 */
async function setup() {
    createCanvas(640, 640);

    await preload();
}
/**
 * Draws a horse
 */
function draw() {
    background(0);

    push();
    image(grassImage, 0, 0, 640, 640);
    pop();

    // Display the horse
    push();
    image(horse.image, horse.x, horse.y);
    pop();
}