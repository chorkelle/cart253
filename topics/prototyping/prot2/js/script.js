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
 * Shows the guy
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

    // Makes the timer slowly go down if you havent already blown up
    if (emotion.shy = true) {
        // Score increases relatively slowly
        time += 0.02;
    }



}

/**
 * Updates the bears emotion if you interact with the bear
 */
function updateBear() {


    if (keyIsPressed || mouseIsPressed) {
        push();
        image(shyBear.image, shyBear.x, shyBear.y);
        pop();
        emotion.shy = true;
        floor(time, 200, 200);
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
        text("You poked the bear", 100, 100);
        pop();

        emotion.angry = true;
    }

}


