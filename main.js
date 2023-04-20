//Create a reference for canvas 
canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
car_x = 10
car_y = 350
car_w = 100
car_h = 140

car_image = "car2.png";
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	background_ImgTag = new Image();
    background_ImgTag.onload = uploadBackground;
    background_ImgTag.src = background_image;

    car_ImgTag = new Image();
	car_ImgTag.onload = uploadgreencar;
    car_ImgTag.src = car_image;
}


function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car_ImgTag, car_x, car_y, car_w, car_h);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    if (keyPressed == "38" || keyPressed == "87") {
        console.log("flecha arriba");
        up();
    }
    if (keyPressed == "40" || keyPressed == "83") {
        console.log("flecha abajo");
        down();
    }
    if (keyPressed == "39" || keyPressed == "68") {
        console.log("flecha derecha");
        right();
    }
    if (keyPressed == "37" || keyPressed == "65") {
        console.log("flecha izquierda");
        left();
    }
}

function up() {
    if (car_y >= 0) {
        car_y = car_y - 20;
        uploadBackground();
        uploadgreencar();
    }
}
function down() {
    if (car_y <= 500) {
        car_y = car_y + 20;
        uploadBackground();
        uploadgreencar();
    }
}
function right() {
    if (car_x <= 700) {
        car_x = car_x + 20;
        uploadBackground();
        uploadgreencar();
    }
}
function left() {
    if (car_x >= 0) {
        car_x = car_x - 20;
        uploadBackground();
        uploadgreencar();
    }
}
