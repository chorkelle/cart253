/**
 * Umbrella Sim 
 * Charlotte Walsh 
 * 
 * Avoid the evil raindrop. AKA, umbrella simulator where one raindrop is evil
 */

"use strict";


/**
 * Makes raindrop a variable
*/
let raindropEVIL = {

    x: 300,
    y: 0,
    size: 15,
    fill: {
        r: 150,
        g: 150,
        b: 200,
    },
    velocity: 19

}

/**
 * Makes a second raindrop 
*/
let raindropB = {

    x: 400,
    y: -9,
    size: 15,
    fill: {
        r: 150,
        g: 150,
        b: 200,
    },
    velocity: 17

}

/**
 * Makes a third raindrop
*/
let raindropC = {

    x: 150,
    y: -5,
    size: 15,
    fill: {
        r: 150,
        g: 150,
        b: 200,
    },
    velocity: 16

}

/**
 * Makes a fourth raindrop
*/
let raindropD = {

    x: 220,
    y: 1,
    size: 15,
    fill: {
        r: 150,
        g: 150,
        b: 200,
    },
    velocity: 20

}

/**
 * Umbrella
*/
const umbrella = {

    x: 0,
    y: 0,
    size: 100,
    fill: {
        r: 200,
        g: 100,
        b: 100
    }

}

/**
 *  Creates the canvas
*/
function setup() {

    createCanvas(600, 600);


}


/**
 * Draws a rainy day with an umbrella you can control
*/
function draw() {
    background(20, 45, 66);

    // gets rid of cursor
    noCursor();

    // draws rain
    drawRain();
    moveRain();

    // draws umbrella
    drawUmbrella();
    updateUmbrella();

    //catches the rain
    catchRain();

}

/**
 * Draws the raindrops (individually because I couldnt figure out how to multiply them... yet)
*/
function drawRain() {

    // Draws raindrop evil
    noStroke();
    push();
    fill(raindropEVIL.fill.r, raindropEVIL.fill.g, raindropEVIL.fill.b);
    ellipse(raindropEVIL.x, raindropEVIL.y, raindropEVIL.size, raindropEVIL.size);
    pop();

    // Draws raindrop B
    noStroke();
    push();
    fill(raindropB.fill.r, raindropB.fill.g, raindropB.fill.b);
    ellipse(raindropB.x, raindropB.y, raindropB.size, raindropB.size);
    pop();

    // Draws raindrop C
    noStroke();
    push();
    fill(raindropC.fill.r, raindropC.fill.g, raindropC.fill.b);
    ellipse(raindropC.x, raindropC.y, raindropC.size, raindropC.size);
    pop();

    // Draws raindrop D
    noStroke();
    push();
    fill(raindropD.fill.r, raindropD.fill.g, raindropD.fill.b);
    ellipse(raindropD.x, raindropD.y, raindropD.size, raindropD.size);
    pop();


}

/**
 * Makes the rain cycle
 */
function moveRain() {

    // moves the rain down
    raindropEVIL.y += raindropEVIL.velocity
    // brings back the raindrop
    if (raindropEVIL.y >= 600) {
        raindropEVIL.y = 0,
            raindropEVIL.x = random(0, 600);
    }

    // move raindrop B down
    raindropB.y += raindropB.velocity
    // brings back traindrop B
    if (raindropB.y >= 600) {
        raindropB.y = 0,
            raindropB.x = random(0, 600);
    }

    // move raindrop C down
    raindropC.y += raindropC.velocity
    // brings back traindrop C
    if (raindropC.y >= 600) {
        raindropC.y = 0,
            raindropC.x = random(0, 600);
    }

    // move raindrop D down
    raindropD.y += raindropD.velocity
    // brings back traindrop D
    if (raindropD.y >= 600) {
        raindropD.y = 0,
            raindropD.x = random(0, 600);
    }
}

/**
 * Makes the umbrella your curser
 */
function updateUmbrella() {

    umbrella.x = mouseX;
    umbrella.y = mouseY;

}

/**
   * Makes the umbrella catch the rain
   */
function catchRain() {
    // Calculate distance between umbrella and raindrop 
    const d = dist(umbrella.x, umbrella.y, raindropEVIL.x, raindropEVIL.y);
    const overlap = (d < umbrella.size / 2 + raindropEVIL.size / 2);

    // Makes the raindrop restart its fall cycle!!
    if (overlap) {
        raindropEVIL.size += 5;
    }

    // Makes sure evil raindrop can't get smaller than starting size
    if (raindropEVIL.size < 15) {
        raindropEVIL.size = 15
    }

    // Calculate distance between umbrella and raindrop B
    const dB = dist(umbrella.x, umbrella.y, raindropB.x, raindropB.y);
    const overlapB = (dB < umbrella.size / 2 + raindropB.size / 2);
    // makes the raindrop restart its fall cycle!! B
    if (overlapB) {
        raindropB.y = 0;
        raindropB.x = random(0, 600);
        raindropEVIL.size -= 3;
    }

    // Calculate distance between umbrella and raindrop C
    const dC = dist(umbrella.x, umbrella.y, raindropC.x, raindropC.y);
    const overlapC = (dC < umbrella.size / 2 + raindropC.size / 2);
    // makes the raindrop restart its fall cycle!! B
    if (overlapC) {
        raindropC.y = 0;
        raindropC.x = random(0, 600);
        raindropEVIL.size -= 3;
    }

    // Calculate distance between umbrella and raindrop D
    const dD = dist(umbrella.x, umbrella.y, raindropD.x, raindropD.y);
    const overlapD = (dD < umbrella.size / 2 + raindropD.size / 2);
    // makes the raindrop restart its fall cycle!! B
    if (overlapD) {
        raindropD.y = 0;
        raindropD.x = random(0, 600);
        raindropEVIL.size -= 3;
    }
}

/**
 * Makes the umbrella
 */
function drawUmbrella() {

    // umbrella cap
    push();
    fill(umbrella.fill.r, umbrella.fill.g, umbrella.fill.b);
    arc(umbrella.x, umbrella.y, umbrella.size, umbrella.size, PI, 0);
    pop();

    // umbrella stick
    push();
    stroke(umbrella.fill.r, umbrella.fill.g, umbrella.fill.b);
    strokeWeight(5);
    line(umbrella.x, umbrella.y - 55, umbrella.x, umbrella.y + 70);
    pop();

    // umbrella handle
    push();
    noFill();
    stroke(umbrella.fill.r, umbrella.fill.g, umbrella.fill.b);
    strokeWeight(7);
    arc(umbrella.x + 10, umbrella.y + 65, 20, 20, 0, PI);
    pop();


}
