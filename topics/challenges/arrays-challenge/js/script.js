/**
 * Boingo
 * Charlotte Walsh & Sofia Allashukurova
 *
 * Colourful balls that bounce around on the canvas.
 */


// let ball1 = undefined; // Will create it with createBall()
let balls = []; // Will create it with createBall()
/**
 * Create the canvas and the ball
 */
function setup() {
    // Create the canvas
    createCanvas(400, 400);
    // Create the ball
    ball = createBall();
}

/**
 * Creates a random ball
 */
function createBall() {
    // Create a ball object with appropriate properties
    const newBall = {
        // Position and dimensions
        x: mouseX,
        y: mouseY,
        size: random(10, 30),
        // Colour
        fill: {
            r: random(0, 255),
            g: random(0, 255),
            b: random(0, 255),
        },
        // Movement
        velocity: {
            x: random(-5, 5),
            y: random(-5, 5)
        }
    };
    return newBall;
}

/**
 * Moves and draws the ball
 */
function draw() {
    background("#87ceeb");

    // Loop to add infinite balls
    for (let ball of balls) {
        moveBall(ball);
        bounceBall(ball);
        drawBall(ball);
    }


    //  ctrl /
    // moveBall(balls);
    // bounceBall(balls);
    // drawBall(balls);

}

/**
 * Moves the ball according to its velocity
 */
function moveBall(ball) {
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(ball) {
    // Check if the ball has reached the left or right
    const bounceX = (ball.x > width || ball.x < 0);
    // Check if the ball has reached the top or bottom
    const bounceY = (ball.y > height || ball.y < 0);

    // Handle bouncing horizontally
    if (bounceX) {
        ball.velocity.x *= -1;
    }
    // Handle bouncing vertically
    if (bounceY) {
        ball.velocity.y *= -1;
    }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(ball) {
    push();
    noStroke();
    fill(ball.fill.r, ball.fill.g, ball.fill.b);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}

/**
 * Draw the ball on the canvas
 */
function mousePressed() {
    let ball = createBall();
    balls.push(ball);

}

/**
 * Draw the ball on the canvas
 */
function keyPressed() {
    let ball = [];
    balls.pop(ball);
}