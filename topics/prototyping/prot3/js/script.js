/**
 * IDK MAN
 * Charlotte Walsh
 * 
 * HAHAHAHA 
 */

"use strict";

let grassImage = undefined

let horse = {
    // Position of the bird (where we will place the image)
    x: 150,
    y: 150,
    // The image of the bird, which we will load in preload()
    image: undefined
};

async function preload() {
    // Load the bird image into our bird object's image property
    horse.image = await loadImage("/images/horse.png")
    grassImage = await loadImage("/")
}

async function setup() {
    createCanvas(640, 640);

    await preload();
}

function draw() {
    background("white");

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

    // keep horse on the canvas
    horse.x = constrain(horse.x, 0, 450);
    horse.y = constrain(horse.y, 0, 450);

}

