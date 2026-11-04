/**
 * Firework Sim
 * Charlotte Walsh
 *
 * Kyle
 */

// The speech itself as an array of strings
const dialogue = [
    "Oh my god you're normal!",
    "Oh sorry, I'm Kyle.",
    "I uh work here at Couche Tard.",
    "I think there's something weird going on outside.",
];

const kylepics = [];

let kyleIndex = 0;

// Organizes the dialogue sequence
let dialogueIndex = 0;
// Text box
let box = {
    x: 50,
    y: 300,
    width: 300,
    height: 80,
    padding: 20,
    fontSize: 18
};

let kyle = {
    x: 0,
    y: 0,
    width: 500,
    height: 417,
}

// let kylepic0;
// let kylepic1;
// let kylepic2;

// Load image files
function preload() {

    // kylepic0 = loadImage("./assets/images/kyle-concerned.png")
    // kylepic1 = loadImage("./assets/images/kyle-content.png")
    // kylepic2 = loadImage("./assets/images/kyle-spooked.png")

    // QUICKER way to load sound files
    // load each image and store (push it) in an array
    // this only works if the image filenames are numbered
    for (let i = 0; i < 9; i++) {
        // load a image file
        // use the i from our loop to refer to each file name
        let kylepic = loadImage(i + ".png");

        // add image file to pics array
        kylepics.push(kylepic);
    }

}

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 417);

    console.log(kylepics);

}


function draw() {
    background(220);

    // Display Marc Anthony and his dialog
    showDialogue();
    // drawKyle();

    // if there are images in the array
    if (kylepics.length > 0) {

        // use index variable to access image file at each position in the pics array
        // draw image in corner of canvas
        // using the image's native width and height
        image(kylepics[kyleIndex], kyle.x, kyle.y, kyle.width, kyle.height);
    }
}

// function drawKyle() {
//     // if there are images in the array
//     if (kylepics.length > 0) {

//         // use index variable to access image file at each position in the pics array
//         // draw image in corner of canvas
//         // using the image's native width and height
//         image(kylepics[kyleIndex], kyle.x, kyle.y, kyle.width, kyle.height);
//     }
// }

/**
 * Display the speech in a dialog box
 */
function showDialogue() {
    // The background box
    push();
    fill(0);
    stroke(255);
    strokeWeight(3);
    rect(box.x, box.y, box.width, box.height);
    pop();

    // The text
    // Note how we're using extra arguments in text() to specify
    // the dimensions we want the text to wrap inside, including
    // using the padding of the dialog box
    push();
    fill(255);
    textSize(18);
    text(dialogue[dialogueIndex], box.x + box.padding, box.y + box.padding, box.width - 2 * box.padding, box.height - 2 * box.padding);
    pop();
}

/**
 * Lets you click to keep listening
 */
function mousePressed() {
    // Make sure we're not at the end of the speech aready
    if (dialogueIndex < dialogue.length - 1) {
        // Advance the line
        dialogueIndex++;
    }

    // if we access all the files in the array, then reset index number to 0 to start at the beginning
    // if we access all the files in the array, then reset index number to 0 to start at the beginning
    if (kyleIndex == kylepics.length) {
        kyleIndex = 0;
    }
    kyleIndex++;
}


