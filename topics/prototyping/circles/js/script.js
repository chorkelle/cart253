/**
 * Circles
 * Charlotte Walsh
 * 
 * A simple circle that does different things depending on the events triggered.
 */

"use strict";

// Makes the circle a variable
let circle = {
    x: 300,
    y: 300,
    size: {
        w: 300,
        h: 300
    },
    fill: {
        r: 149,
        g: 235,
        b: 52,
    }
}

// Sets chaos as a variable
let chaos = false;

// Sets time as a variable
let time = 1;

let smile = false;

/**
 * Makes the canvas
*/
function setup() {

    createCanvas(600, 600);

    // If the mousewheel is moved, a smiley face is drawn
    addEventListener("wheel", smiley);

}


/**
 * Draws the program
*/
function draw() {

    // draws the background
    background("white");

    // changes the circle based on key pressed
    keysChange();

    // multiplies the circle when mouse is clicked
    multiply();

    // Only increase the score if the game is not over
    if (!chaos) {
        // Score increases relatively slowly
        time += 0.05;
    }

    // Return circle to center if it touches canvas right or bottom
    if (circle.x > 450 || circle.y > 450) {
        circle.x = 300;
        circle.y = 300;
    }

    // Return circle to center if it touches canvas left or top
    if (circle.x < 150 || circle.y < 150) {
        circle.x = 300;
        circle.y = 300;
    }

    // sets a timer
    timer();

    // draws the circle
    drawCircle();

    // draws a smiley face if you scroll using your mouse
    if (smile) {
        push();
        textSize(48);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text(":)", width / 2, height / 2);
        pop();
    }

}

/**
 * Draws a beautiful circle
*/
function drawCircle() {

    push();
    noStroke();
    fill(circle.fill.r, circle.fill.g, circle.fill.b);
    ellipse(circle.x, circle.y, circle.size.w, circle.size.h);
    pop();

}

/**
 * Changes the circle differently based on certain keys
*/
function keysChange() {

    if (key === 'q') {
        circle.fill.r = 0;
        circle.fill.g = 88;
        circle.fill.b = 189;
    }

    if (key === 'k') {
        circle.fill.r += 10;
        circle.fill.g += 10;
        circle.fill.b += 10;
    }

    if (key === 'e') {
        circle.fill.r -= 10;
        circle.fill.g -= 10;
        circle.fill.b -= 10;
    }

    if (key === 'r') {
        circle.fill.r -= 10;
    }

    if (key === 't') {
        circle.fill.r += 10;
        circle.fill.g -= 10;
    }

    if (key === 'y') {
        circle.fill.r = 212;
        circle.fill.g = 0;
        circle.fill.b = 155;
    }

    if (key === 'u') {
        circle.fill.b += 10;
    }

    if (key === 'i') {
        circle.fill.r = 100;
        circle.fill.g = 15;
        circle.fill.b = 200;
    }

    if (key === 'o') {
        circle.fill.r += 10;
        circle.fill.g = random(0, 250);
        circle.fill.b += 10;
    }

    if (key === 'p') {
        circle.fill.r -= 20;
        circle.fill.g -= 10;
        circle.fill.b -= 15;
    }

    if (key === 'h') {
        circle.size.w += 0.5;
    }

    if (key === 'g') {
        circle.size.h += 0.5;
    }

    if (key === 'f') {
        circle.fill.r = 200;
        circle.fill.g = 15;
        circle.fill.b = 13;
    }

    if (key === 'j') {
        circle.fill.r = random(3, 250);
        circle.fill.g = random(0, 250);
        circle.fill.b = random(4, 250);
    }

    if (key === 'a') {
        circle.x -= 0.5;
    }

    if (key === 'd') {
        circle.x += 0.5;
    }

    if (key === 's') {
        circle.y += 0.5;
    }

    if (key === 'w') {
        circle.y -= 0.5;
    }

    if (key === 'm') {
        circle.size.w -= random(0, 10);
        circle.size.h -= random(0, 10);
    }

    if (key === 'l') {
        circle.size.w += random(0, 10);
        circle.size.h += random(0, 10);
    }

    if (key === 'c') {
        circle.size.w += 10;
        circle.size.h += 15;
    }

    if (key === 'b') {
        circle.size.w -= 15;
        circle.size.h -= 5;
    }

    if (key === 'v') {
        circle.size.w -= 15;
        circle.size.h -= 5;
    }

    // makes the circle normal again when space bar is pressed
    if (key === ' ') {
        circle.size.w = 300;
        circle.size.h = 300;
        circle.fill.r = 149;
        circle.fill.g = 235;
        circle.fill.b = 52;
        circle.x = 300;
        circle.y = 300;
    }

}

/**
 * Makes things happen when you move your mouse
 */
function multiply() {

    // makes chaos happen when mouse is clicked
    if (mouseIsPressed) {
        background("black");
    }


}

/**
 * Creates a timer that counts how long the program has been running
 */
function timer() {
    // sets a timer
    floor(time);

    // makes chaos start after timer reaches 30
    if (time >= 30) {
        chaos = true;
    }

    // makes chaos
    if (chaos === true) {
        push();
        noStroke();
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(random(0, 600), random(0, 600), random(0, 400), random(0, 400));
        pop();
    }

}

/**
 * Checks if you should lose or not
 */
function smiley() {

    smile = true;




}

