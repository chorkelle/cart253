/**
 * Umbrella Sim 
 * Charlotte Walsh 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


/**
 * Makes raindrop a variable
*/
let raindrop = {

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
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(20, 45, 66);

    noCursor();

    drawRain();
    moveRain();

    drawUmbrella();
    updateUmbrella();

}

/**
 * Draws the raindrops (individually because I couldnt figure out how to multiply them... yet)
*/
function drawRain() {

    // Draws raindrop alpha
    noStroke();
    push();
    fill(raindrop.fill.r, raindrop.fill.g, raindrop.fill.b);
    ellipse(raindrop.x, raindrop.y, raindrop.size, raindrop.size);
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

function moveRain() {

    // moves the rain down
    raindrop.y += raindrop.velocity
    // brings back the raindrop
    if (raindrop.y >= 600) {
        raindrop.y = 0,
            raindrop.x = random(0, 600);
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

function updateUmbrella() {

    umbrella.x = mouseX;
    umbrella.y = mouseY;
}

function drawUmbrella() {

    // umbrella cap
    push();
    fill(umbrella.fill.r, umbrella.fill.g, umbrella.fill.b);
    arc(umbrella.x, umbrella.y, 100, 100, PI, 0);
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
