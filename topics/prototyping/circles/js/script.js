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
        text(":)", circle.x, circle.y);
        pop();
    }

}

/**
 * Draws a beautiful circle
*/
function drawCircle() {

    // makes r value change based on mouse position
    const minColour = 250;
    const maxColour = 1;
    let d = dist(mouseX, mouseY, circle.x, circle.y);
    let colourR = map(d, 0, width, minColour, maxColour);

    // makes g value change based on mouse position
    const minColourG = 200;
    const maxColourG = 15;
    let dG = dist(mouseX, mouseY, circle.x, circle.y);
    let colourG = map(dG, 0, width, minColourG, maxColourG);

    // makes b value change based on mouse position
    const minColourB = 1;
    const maxColourB = 250;
    let dB = dist(mouseX, mouseY, circle.x, circle.y);
    let colourB = map(dB, 0, width, minColourB, maxColourB);

    // draws the circle
    push();
    noStroke();
    fill(colourR, colourG, colourB);
    ellipse(circle.x, circle.y, circle.size.w, circle.size.h);
    pop();



}

/**
 * Changes the circle differently based on certain keys
*/
function keysChange() {

    if (key === 'q' || key === 'Q') {
        circle.x = 449;
        circle.y = 449;
    }

    if (key === 'k' || key === 'K') {
        circle.size.w -= random(0, 100);
        circle.size.h -= random(0, 30);
    }

    if (key === 'e' || key === 'E') {
        circle.x = 449;
        circle.y = 449;
    }

    if (key === 'r' || key === 'R') {
        circle.x = random(151, 449);
    }

    if (key === 't' || key === 'T') {
        circle.x = random(151, 449);
        circle.y = random(151, 449);
    }

    if (key === 'y' || key === 'Y') {
        circle.x = 151;
        circle.y = 151;
    }

    if (key === 'u' || key === 'U') {
        circle.y -= 1;
    }

    if (key === 'i' || key === 'I') {
        circle.size.w += random(0, 40);
        circle.size.h += random(0, 2);
    }

    if (key === 'o' || key === 'O') {
        circle.y -= 1;
    }

    if (key === 'p' || key === 'P') {
        circle.size.w -= random(0, 100);
        circle.size.h -= random(0, 30);
    }

    if (key === 'h' || key === 'H') {
        circle.size.w += 0.5;
    }

    if (key === 'g' || key === 'G') {
        circle.x += 1;
    }

    if (key === 'f' || key === 'F') {
        circle.x += 1;
    }

    if (key === 'j' || key === 'J') {
        circle.y -= 1;
    }

    if (key === 'a' || key === 'A') {
        circle.x -= 1;
    }

    if (key === 'd' || key === 'D') {
        circle.x += 1;
    }

    if (key === 's' || key === 'S') {
        circle.y += 1;
    }

    if (key === 'w' || key === 'W') {
        circle.y -= 1;
    }

    if (key === 'm' || key === 'M') {
        circle.size.w -= random(0, 10);
        circle.size.h -= random(0, 10);
    }

    if (key === 'l' || key === 'L') {
        circle.size.w += random(0, 10);
        circle.size.h += random(0, 10);
    }

    if (key === 'c' || key === 'C') {
        circle.size.w += 10;
        circle.size.h += 15;
    }

    if (key === 'b' || key === 'B') {
        circle.size.w -= 15;
        circle.size.h -= 5;
    }

    if (key === 'v' || key === 'V') {
        circle.size.w -= 15;
        circle.size.h -= 5;
    }

    // makes the circle normal again when space bar is pressed
    if (key === ' ') {
        circle.size.w = 300;
        circle.size.h = 300;
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

    // slows down the framerate so viewer doesnt have an anurysm 
    if (chaos === true) {
        frameRate(15);
    }

}

/**
 * Checks if you should lose or not
 */
function smiley() {

    smile = true;

}

