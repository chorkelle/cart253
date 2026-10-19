/**
 * Antisocial Bear
 * Charlotte Walsh
 * 
 * A guy who doesn't like it when he notices your presence
 */

"use strict";

let bear = {
    x: 0,
    y: 0,
    image: undefined
}

let shyBear = {
    x: 0,
    y: 0,
    image: undefined
}

let angryBear = {
    x: 0,
    y: 0,
    image: undefined
}

let emotion = {
    angry: false,
    shy: false
}

/**
 * Preloads the images
 */
async function preload() {

    bear.image = await loadImage("./assets/images/bear.png")
    angryBear.image = await loadImage("./assets/images/angry-bear.png")
    shyBear.image = await loadImage("./assets/images/shy-bear.png")
}

/**
 * Creates the canvas
*/
async function setup() {
    createCanvas(600, 600);

    await preload();

}


/**
 * Shows the guy
*/
function draw() {

    background("white");

    if (!emotion.angry || !emotion.shy) {
        push();
        image(bear.image, bear.x, bear.y);
        pop();
    }

    pissOff();
    shyGuy();



}

function pissOff() {

    if (keyIsPressed || mouseIsPressed) {
        push();
        image(angryBear.image, angryBear.x, angryBear.y);
        pop();
    }

}

function shyGuy() {

    if (keyIsPressed || mouseIsPressed) {
        push();
        image(shyBear.image, shyBear.x, shyBear.y);
        pop();
    }

}