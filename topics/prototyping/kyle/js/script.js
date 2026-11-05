/**
 * Kyle
 * Charlotte Walsh
 *
 * Kyle dialogue and images.
 */


// Kyle's dialogue
const dialogue = [
    "Oh my god you're normal!",
    "Oh sorry, I'm Kyle.",
    "I uh... work here at Couche Tard.",
    "I think there's something weird outside.",
    "xxx"
];

// Kyle's picture array
const kylepics = [];

// Kyle's index
let kyleIndex = 0;

// Organizes the dialogue sequence
let dialogueIndex = 0;
// Text box
let box = {
    x: 65,
    y: 300,
    width: 350,
    height: 80,
    // Space around text and size of text
    padding: 20,
    fontSize: 18
};

// Kyle??
let kyle = {
    x: 0,
    y: 0,
    width: 500,
    height: 417,
}

// Load the image files
function preload() {

    // NOT WORKING
    // kylepic0 = loadImage("./assets/images/kyle-concerned.png")
    // kylepic1 = loadImage("./assets/images/kyle-content.png")
    // kylepic2 = loadImage("./assets/images/kyle-spooked.png")

    // Loads the beautiful pictures of Kyle
    for (let i = 0; i < 9; i++) {
        // load a image file
        // use the i from our loop to refer to each file name
        let kylepic = loadImage(i + "./assets/images/ " + i + " .png");

        // add image file to pics array
        kylepics.push(kylepic);
    }

}

// BROKE THE CODE

// async function setup() {

//     createCanvas(500, 417);

//     // Loads the beautiful pictures of Kyle
//     for (let i = 0; i < 9; i++) {
//         // load a image file
//         // use the i from our loop to refer to each file name
//         let kylepic = loadImage(i + "./assets/images/ " + i + " .png");

//         // add image file to pics array
//         kylepics.push(kylepic);
//     }

//     // Loads the kyle pics
//     console.log(kylepics);
// }

// NOT WORKING EITHER
// Creates Kyle
function createKyle() {

    // Creates Kyle
    const kyle = {
        // Position and dimensions
        x: 0,
        y: 0,
        width: 500,
        height: 417
    };
    return kyle;

}

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 417);

    // Loads the kyle pics
    console.log(kylepics);

    createKyle(kylepics);

}

// Draws Kyle and his dialogue
function draw() {
    background(220);

    // Displays Kyle's yapping
    showDialogue();

    // NOT WORKING
    // drawKyle();

    // Displays kyle????????
    if (kylepics.length > 0) {


        image(kylepics[kyleIndex], 0, 0);
    }
}

/**
 * NOT WORKING
 */
// function drawKyle() {
//     // if there are images in the array
//     // if (kylepics.length > 0) {

//     // use index variable to access image file at each position in the pics array
//     // draw image in corner of canvas
//     // using the image's native width and height
//     image(kylepics[kyleIndex], kyle.x, kyle.y, kyle.width, kyle.height);
//     // }
// }

/**
 * Displays Kyle's dialogue
 */
function showDialogue() {
    // Box behind the text
    push();
    fill(0);
    stroke(255);
    strokeWeight(3);
    rect(box.x, box.y, box.width, box.height);
    pop();

    // Displays the dialogue
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
    // Checks to see where we are in the dialogue
    if (dialogueIndex < dialogue.length - 1) {
        // Advance the line
        dialogueIndex++;
    }

    // Checks to see which Kyle pic we're at
    if (kyleIndex < kylepics.length - 1) {
        kyleIndex++;
    }

}


