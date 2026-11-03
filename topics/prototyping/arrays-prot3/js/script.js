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

    //  Creates eye white
    eye = createEye();
    // Creates iris
    iris = createIris();
    // Creates the pupil
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
        size: 500,
        // Colour
        fill: "white",
        speed: 0
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
        y: 300,
        size: 250,
        // Colour
        fill: "brown",
        speed: 3
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
        y: 300,
        size: 175,
        // Colour
        fill: "black",
        speed: 3
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

    // pupil.x = mouseX;
    // pupil.y = mouseY;

    // iris.x = mouseX;
    // iris.y = mouseY;

    movePupil(iris);
    movePupil(pupil);



    //  ctrl /
    // moveBall(balls);
    // bounceBall(balls);
    // drawBall(balls);

}

/**
 * Moves the ball according to its velocity
 */
function movePupil(pupil) {

    // Lets the eye track the mouse

    if (mouseX > pupil.x) {
        pupil.x += pupil.speed
    }

    if (mouseX < pupil.x) {
        pupil.x -= pupil.speed
    }
    if (mouseY > pupil.y) {
        pupil.y += pupil.speed
    }

    if (mouseY < pupil.y) {
        pupil.y -= pupil.speed
    }



    // Makes the fish freak out if you touch them
    if (pupil.x >= 300) {
        pupil.x = pupil.x;
    }

    // Makes the fish freak out if you touch them
    if (pupil.x >= 450) {
        pupil.x = pupil.x;
    }

    // if (pupil.x <= 150) {
    //     pupil.x = eye.size / 2;
    // }

    // if (pupil.y >= 450) {
    //     pupil.y = eye.size / 2;
    // }

    // if (pupil.y <= 150) {
    //     pupil.y = eye.size / 2;
    // }




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


