/**
 * Antisocial Horse
 * Charlotte Walsh
 * 
 * A horse who runs away and tries to hide when you move your mouse towards it.
 */

"use strict";


/**
 * Makes the horse a variable
 */
let horse = {
    // Position, velocity, and opacity of the horse
    x: 150,
    y: 150,
    opacity: 255,
    velocity: {
        x: 0,
        y: 0
    },
    // The image of the bird, which we will load in preload()
    image: undefined

};

/**
 * Preloads the images
 */
async function preload() {

    horse.image = await loadImage("/cart253/images/horse.png")
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
    background(255);

    // Gives the horse an opacity
    tint(255, horse.opacity);

    // Display the horse
    push();
    image(horse.image, horse.x, horse.y);
    pop();

    // Makes horse run away
    updateHorse();


}

/**
 * Makes the horse run away from you and try to phase out of existence
*/
function updateHorse() {

    // Horse runs away
    horse.x += horse.velocity.x;
    horse.y += horse.velocity.y;

    horse.velocity.x += (horse.x - mouseX) * 0.0001;
    horse.velocity.y += (horse.x - mouseY) * 0.0001;

    // Horse tries to hide
    horse.opacity = (horse.x + mouseX);
    horse.opacity = (horse.y + mouseY);

    // Keeps horse on the canvas
    horse.x = constrain(horse.x, 0, 400);
    horse.y = constrain(horse.y, 0, 400);


}


