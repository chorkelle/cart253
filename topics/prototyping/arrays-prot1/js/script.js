/**
 * Cat Mouse
 * Charlotte Walsh 
 *
 * Not sure yet.
 */



let mice = []; // Will create it with createBall()

let cat = {     // Position and dimensions
    x: mouseX,
    y: mouseY,
    // Movement
    image: undefined
};


/**
 * Create the canvas and the ball
 */
async function setup() {
    // Create the canvas
    createCanvas(600, 500);

    await preload();

    // Makes all the mice
    mouse = createMouse();
}

/**
 * Creates a random ball
 */
function createMouse() {
    // Create a ball object with appropriate properties
    const newMouse = {
        // Position and dimensions
        x: mouseX,
        y: mouseY,
        size: random(45, 50),
        // Colour
        fill: {
            r: 128,
            g: 128,
            b: 128,
        },
        // Movement
        velocity: {
            x: random(-5, 5),
            y: random(-5, 5)
        }
    };
    return newMouse;
}

/**
 * Moves and draws the ball
 */
function draw() {
    background("#87ceeb");

    // Loop to add infinite balls
    for (let mouse of mice) {
        moveMouse(mouse);
        runMouse(mouse);
        drawMouse(mouse);
    }

}

/**
 * Moves the ball according to its velocity
 */
function moveMouse(mouse) {
    mouse.x += mouse.velocity.x;
    mouse.y += mouse.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function runMouse(mouse) {
    // Check if the ball has reached the left or right
    const runX = (mouse.x > width || mouse.x < 0);
    // Check if the ball has reached the top or bottom
    const runY = (mouse.y > height || mouse.y < 0);

    // Handle bouncing horizontally
    if (runX) {
        mouse.velocity.x *= -1;
    }
    // Handle bouncing vertically
    if (runY) {
        mouse.velocity.y *= -1;
    }
}

/**
 * Draw the ball on the canvas
 */
function drawMouse(mouse) {
    // Draws the circle mice
    push();
    noStroke();
    fill(mouse.fill.r, mouse.fill.g, mouse.fill.b);
    ellipse(mouse.x, mouse.y, mouse.size);
    pop();
}

/**
 * Draw the ball on the canvas
 */
function mousePressed() {
    let mouse = createMouse();
    mice.push(mouse);

}

/**
 * Erases the last ball created
 */
function keyPressed() {
    let mouse = [];
    mice.pop(mouse);
}