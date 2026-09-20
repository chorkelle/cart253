/**
 * A Stroke of Genius
 * Charlotte Walsh
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(650, 650);


}


/**
 * Draws a stroke spelling genius
*/
function draw() {

    background(200, 200, 200);
    drawG();
    drawE();
    drawN();
    drawI();
    drawU();

}

/**
 * Draws a G
 */
function drawG() {

    // Central Arc
    noFill();
    stroke(20, 20, 70);
    strokeWeight(20);
    bezier(150, 330, 30, 290, 100, 230, 150, 200);

    // Hook
    noFill();
    stroke(20, 20, 70);
    strokeWeight(20);
    bezier(150, 330, 180, 270, 180, 270, 140, 280);
}

/**
 * Draws an E
 */
function drawE() {

    // Tall line
    noFill();
    stroke(20, 20, 70);
    strokeWeight(20);
    line(200, 330, 200, 200);

    // Prong 1
    noFill();
    stroke(20, 20, 70);
    strokeWeight(20);
    line(200, 200, 240, 200);

    // Prong 2
    noFill();
    stroke(20, 20, 70);
    strokeWeight(20);
    line(200, 265, 235, 265);

    // Prong 3
    noFill();
    stroke(20, 20, 70);
    strokeWeight(20);
    line(200, 330, 240, 330);

}

/**
 * Draws an N
 */
function drawN() {
    // Tall line 1
    noFill();
    stroke(20, 20, 70);
    strokeWeight(20);
    line(270, 330, 270, 200);

    // Tall line 2
    noFill();
    stroke(20, 20, 70);
    strokeWeight(20);
    line(330, 330, 330, 200);

    // Connecting centre line
    noFill();
    stroke(20, 20, 70);
    strokeWeight(20);
    line(270, 200, 330, 330);

}

function drawI() {
    // Line for I
    noFill();
    stroke(20, 20, 70);
    strokeWeight(20);
    line(370, 330, 370, 200);
}

function drawU() {

    // Bezier for U
    noFill();
    stroke(20, 20, 70);
    strokeWeight(20);
    bezier(460, 200, 430, 350, 330, 350, 400, 200);

}