/**
 * Eye See You
 * Charlotte Walsh 
 *
 * Eye ball that follows your cursor.
 */




/**
 * Creates the canvas
 */
function setup() {
    // Create the canvas
    createCanvas(600, 500);

    // Creates the eyeball elements
    eye = createEye();
    iris = createIris();
    pupil = createPupil();


}

/**
 * Creates an eyeball
 */
function createEye() {
    // Create a ball object with appropriate properties
    const newEye = {
        // Position and dimensions
        x: 300,
        y: 250,
        size: 300,
        // Colour
        fill: "white",
    };
    return newEye;
}

/**
 * Creates a pupil for the eyeball
 */
function createIris() {
    // Create a ball object with appropriate properties
    const iris = {
        // Position and size
        x: 300,
        y: 250,
        size: 150,
        // Colour
        fill: #914e0f,
    };
    return iris;

}

/**
 * Creates a pupil for the eyeball
 */
function createPupil() {
    // Create a ball object with appropriate properties
    const pupil = {
        // Position and size
        x: 300,
        y: 250,
        size: 100,
        // Colour
        fill: "black",
    };
    return pupil;

}

/**
 * Moves and draws the ball
 */
function draw() {
    background("#270317");

    // movePupil(pupil);
    drawEye(eye);
    drawEye(iris);
    drawEye(pupil);



    //  ctrl /
    // moveBall(balls);
    // bounceBall(balls);
    // drawBall(balls);

}

/**
 * Moves the ball according to its velocity
 */
function movePupil(pupil) {
    pupil.x += pupil.velocity;
    pupil.y += pupil.velocity;
}


/**
 * Draw the ball on the canvas
 */
function drawEye(eye) {
    push();
    noStroke();
    fill(eye.fill);
    ellipse(eye.x, eye.y, eye.size);
    pop();
}

