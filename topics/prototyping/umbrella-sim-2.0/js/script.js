/**
 * Umbrella Sim 2.0
 * Charlotte Walsh 
 * 
 * Avoid the evil raindrop. AKA, umbrella simulator where one raindrop is evil
 */

"use strict";


/**
 * Makes raindrop a variable
*/
const raindrop = {

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
const raindropB = {

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
    drawRain(raindrop);
    drawRain(raindropB);
    drawRain(raindropC);
    drawRain(raindropD);

    // moves the raindrops
    moveRain(raindrop);
    moveRain(raindropB);
    moveRain(raindropC);
    moveRain(raindropD);

    // draws umbrella
    drawUmbrella();
    updateUmbrella();

    //Makes the rain drops bigger for the evil raindrop
    evilRain(raindrop);

    //Makes the rain drops smaller for the good raindrops
    goodRain(raindropB);
    goodRain(raindropC);
    goodRain(raindropD);



}

/**
 * Draws the raindrops (individually because I couldnt figure out how to multiply them... yet)
*/
function drawRain(raindrop) {

    // Draws the raindrops
    noStroke();
    push();
    fill(raindrop.fill.r, raindrop.fill.g, raindrop.fill.b);
    ellipse(raindrop.x, raindrop.y, raindrop.size, raindrop.size);
    pop();

}

/**
 * Makes the rain cycle
 */
function moveRain(raindrop) {

    // moves the rain down
    raindrop.y += raindrop.velocity
    // brings back the raindrop
    if (raindrop.y >= 600) {
        raindrop.y = 0,
            raindrop.x = random(0, 600);
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
function evilRain(raindrop) {
    // Calculate distance between umbrella and raindrop 
    const d = dist(umbrella.x, umbrella.y, raindrop.x, raindrop.y);
    const overlap = (d < umbrella.size / 2 + raindrop.size / 2);

    // Makes the raindrop restart its fall cycle and get HUGE!!
    if (overlap) {
        raindrop.y = 0;
        raindrop.x = random(0, 600);
        raindrop.size += 10;
    }

    // Makes sure evil raindrop can't get smaller than starting size
    if (raindrop.size < 15) {
        raindrop.size = 15
    }
}

/**
   * Makes the umbrella catch the rain
    */
function goodRain(raindrop) {
    // Calculate distance between umbrella and raindrop 
    const d = dist(umbrella.x, umbrella.y, raindrop.x, raindrop.y);
    const overlap = (d < umbrella.size / 2 + raindrop.size / 2);

    // makes the raindrop restart its fall cycle!! B
    if (overlap) {
        raindrop.y = 0;
        raindrop.x = random(0, 600);
        raindrop.size -= 3;
    }

    // Makes sure evil raindrop can't get smaller than starting size
    if (raindrop.size < 15) {
        raindrop.size = 15
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
