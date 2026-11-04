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

    background("#270317");
}

/**
 * Creates an eyeball
 */
function createEye() {
    // Creates the eyeball
    const newEye = {
        // Position and dimensions
        x: 300,
        y: 250,
        size: 500,
        // Colour
        fill: "white",
        // Speed
        speed: 0
    };
    return newEye;
}

/**
 * Creates a pupil for the eyeball
 */
function createIris() {
    // Creates the iris
    const iris = {
        // Position and size
        x: 300,
        y: 300,
        size: 250,
        // Colour
        fill: "brown",
        // Speed
        speed: 5
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
        speed: 5
    };
    return pupil;

}

/**
 * Draws the eye and moves the pupil
 */
function draw() {

    // Draws the eyeball (pupil, iris, eye(white))
    drawEye(eye);
    drawEye(iris);
    drawEye(pupil);

    // Moves the iris and the pupil together
    movePupil(iris);
    movePupil(pupil);

}

/**
 * Moves the iris and the pupil to make it look like the eye is tracking your mouse
 */
function movePupil(pupil) {

    // Makes the pupil track your mouse
    if (mouseX + 75 > pupil.x) {
        pupil.x += pupil.speed
    }
    // Makes the pupil track your mouse
    if (mouseX - 75 < pupil.x) {
        pupil.x -= pupil.speed
    }
    // Makes the pupil track your mouse
    if (mouseY + 75 > pupil.y) {
        pupil.y += pupil.speed
    }
    // Makes the pupil track your mouse
    if (mouseY - 75 < pupil.y) {
        pupil.y -= pupil.speed
    }

    // Constrains the pupil and iris to they eyeball (for the most part... I tried using a constrain function but it wasn't working so this is my silly solution)
    // Constrains eye on the right
    if (pupil.x >= 425) {
        pupil.x -= pupil.speed
    }
    // Constrains eye on the left
    if (pupil.x <= 175) {
        pupil.x += pupil.speed
    }
    // Constrains eye on the top
    if (pupil.y <= 125) {
        pupil.y += pupil.speed
    }
    // Constrains eye on the bottom
    if (pupil.y >= 375) {
        pupil.y -= pupil.speed
    }

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


