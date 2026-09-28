/**
 * Horsing Around
 * Charlotte Walsh
 * 
 * A horse who eats grass on his field when you click your mouse.
 */

"use strict";

/**
 * Makes the grass a variable
 */
let grassImage = undefined

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
    grassImage = await loadImage("/images/grass.png")
}

/**
 * Sets up the canvas and adds the preload function for images
 */
async function setup() {
    createCanvas(640, 640);

    await preload();
}

/**
 * Draws a beautiful horse on a field
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

/**
 * Makes the horse jump around
*/
function mousePressed() {
    if (mousePressed) {
        horse.x += random(-200, 200),
            horse.y += random(-200, 200)
    }

    // Keeps horse on the canvas
    horse.x = constrain(horse.x, 0, 450);
    horse.y = constrain(horse.y, 0, 450);

}

