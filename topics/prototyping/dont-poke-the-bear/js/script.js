/**
 * Don't poke the bear
 * Charlotte Walsh
 * 
 * Don't poke the bear on he'll get mad at you
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

let time = 0

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
 * Draws the emotional bear
*/
function draw() {

    background("white");

    if (!emotion.angry || !emotion.shy) {
        push();
        image(bear.image, bear.x, bear.y);
        pop();

        push();
        fill("white");
        textSize(50);
        textStyle(BOLD);
        text("Don't poke me.", 100, 100);
        pop();
    }

    updateBear();

}

/**
 * Updates the bears emotion if you interact with the bear
 */
function updateBear() {

    // Makes the bear hide if you start to poke it
    if (keyIsPressed || mouseIsPressed) {
        push();
        image(shyBear.image, shyBear.x, shyBear.y);
        pop();

        // Counts how long you've poked the bear
        emotion.shy = true;
        floor(time, 200, 200);
        time += 0.05;
    }

    // Makes the bear angry if you don't stop poking the bear
    if (time >= 5) {
        // Displays the angry bear
        push();
        image(angryBear.image, angryBear.x, angryBear.y);
        pop();

        // Angry bear warcry text
        push();
        fill("red");
        textSize(50);
        textStyle(BOLD);
        text("You poked", 100, 100);
        pop();

        emotion.angry = true;
    }

}


