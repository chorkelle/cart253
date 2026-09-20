/**
 * A Stroke of Genius
 * Charlotte Walsh
 * 
 * The word "GENIUS" spelled out using lines, strokes, and bezier curves.
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(650, 650);

}

/**
 * Writes the word "GENIUS" using a set of functions that make up each letter
*/
function draw() {

    background("white");
    drawG();
    drawE();
    drawN();
    drawI();
    drawU();
    drawS();

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

/**
 * Draws an I
 */
function drawI() {
    // Line for I
    noFill();
    stroke(20, 20, 70);
    strokeWeight(20);
    line(370, 330, 370, 200);
}

/**
 * Draws a U
 */
function drawU() {

    // Bezier for U
    noFill();
    stroke(20, 20, 70);
    strokeWeight(20);
    bezier(460, 200, 460, 375, 400, 375, 400, 200);

}

/**
 * Draws an S
 */
function drawS() {

    // Top bezier for S
    noFill();
    stroke(20, 20, 70);
    strokeWeight(20);
    bezier(510, 265, 500, 260, 460, 220, 530, 200);

    // Bottom bezier for S
    noFill();
    stroke(20, 20, 70);
    strokeWeight(20);
    bezier(510, 265, 560, 300, 510, 330, 500, 330);

}