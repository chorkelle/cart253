/**
 * Circle Sim
 * Charlotte Walsh
 * 
 * Circles that light up different colours depending on the key you press.
 */

"use strict";

let circleA = {

    x: 300,
    y: 300,
    size: 75,
    fill: "#00ff00"

}

let circleB = {

    x: 300,
    y: 300,
    weight: 8,
    size: 125,
    fill: "#00ff00"

}

let circleC = {

    x: 300,
    y: 300,
    weight: 8,
    size: 175,
    fill: "#00ff00"

}

/**
 * Creates canvas
*/
function setup() {
    createCanvas(600, 600);

}


/**
 * Draws some beautiful circles
*/
function draw() {

    drawCircles();

}

/**
 * Draws the circles
 */
function drawCircles() {

    // Draw Circle A
    push();
    noStroke();
    fill(circleA.fill);
    ellipse(circleA.x, circleA.y, circleA.size, circleA.size);
    pop();

    push();
    stroke(circleB.fill);
    strokeWeight(circleB.weight);
    noFill();
    ellipse(circleB.x, circleB.y, circleB.size, circleB.size);
    pop();

    push();
    stroke(circleC.fill);
    strokeWeight(circleC.weight);
    noFill();
    ellipse(circleC.x, circleC.y, circleC.size, circleC.size);
    pop();



}

/**
 * Makes circles change colours when key is pressed
 */
function keyPressed() {
    if (key === 'w') {
        circleA.fill = "#006677";
        circleB.fill = "red";
        circleC.fill = "purple";
    }

    if (key === 'a') {
        circleA.fill = "#fbe009";
        circleB.fill = "purple";
        circleC.fill = "hotpink";
    }

    if (key === 's') {
        circleA.fill = "red";
        circleB.fill = "green";
        circleC.fill = "#006677";
    }

    if (key === 'd') {
        circleA.fill = "purple";
        circleB.fill = "hotpink";
        circleC.fill = "#fbe009";
    }

    if (key === 'q') {
        circleA.fill = "#00ff00";
        circleB.fill = "#00ff00";
        circleC.fill = "#00ff00";
    }
    // makes a separate set of circles that are huge if you hit the spacebar
    if (key === ' ') {
        circleA.size = 400;
        circleB.size = 450;
        circleC.size = 500;
    } else {
        circleA.size = 75;
        circleB.size = 125;
        circleC.size = 175;
    }

}