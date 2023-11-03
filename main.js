
//Define an empty variable for storing the status of the cocossd model.
video = " ";

//Define a p5.js setup() function, and inside it write code to:
//Add code for creating canvas and getting the canvas in the center of the screen.
//Add code for accessing the webcam, set the size of the webcam so that we get the result accurate, and hide the extra component created by p5.js for the webcam.
function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

//Define start() function, and inside it:
//Write code for loading the cocossd model.
//Write code for updating the HTML element which was used to hold the status of the cocossd model with “Status: Detecting Objects”.
//Write code for getting the value from the input box defined in the previous project, and store its values in a variable.

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}


//Define modelLoaded() function, and inside it write code:
//To print “model loaded” on the console screen.
//Set the status variable of the model as true.
function modelLoaded() {
    console.log("Model Is Loaded");
    status = true;
}


//Define draw() function, and write code the following code inside draw() function.
//Write code for placing the webcam live on the canvas.
function draw() {
    image(video, 0, 0, 480, 380);
}
