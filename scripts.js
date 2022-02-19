//Constants
const ball = document.getElementById("ball");
const unhide = document.getElementById("generate")
const hideBtn = document.getElementById("hide");
const randomColorBtn = document.getElementById('randomColor');
const moveRight = document.getElementById('moveRight');
const moveLeft = document.getElementById('moveLeft');
const moveDown = document.getElementById('moveDown');
const moveUp = document.getElementById('moveUp');
const setIntervalBtn = document.getElementById('setIntervalBtn');
const stopBtn = document.getElementById("stopInterval");
let reverse = false;
let velocity = 100;
let xInitial = 0;
let yInitial = 150; //<-- This variable will be used later

//Generates random RGB Color. Returns an RGB value as string friendly with the style sheet. Example: rgb(100,200,45)
const randomRGB = () => {
    const R = Math.floor(Math.random() * 255); //Red spectrum
    const G = Math.floor(Math.random() * 255); //Green spectrum
    const B = Math.floor(Math.random() * 255); //Blue spectrum
    const RGB = `rgb(${R},${G},${B})`;

    return RGB;
}

//Unhides Ball 
unhide.addEventListener('click',()=>{
    ball.classList.remove('hide'); //classList allows the user to add, remove or modify a class that can be added to the element
})

//Hide Ball
hideBtn.addEventListener('click', () => {
    ball.classList.add('hide');
})

//Set random Color 
const randomizeColor = () => {
    ball.style.backgroundColor = randomRGB();
}
randomColorBtn.addEventListener('click',()=>{
    setInterval(randomizeColor, 500)
})

//Global movement function
function calculateMove(ball, moveType, moveDirection) {
    let result = 0;
    let currentPosition = 0;
    let newMove = parseInt(prompt("How many pixels should the ball move?"));

    switch (moveDirection) {
        case "left":
            currentPosition = parseInt(ball.style.left.slice(0, ball.style.left.length - 2));
            break;

        case "top":
            currentPosition = parseInt(ball.style.top.slice(0, ball.style.top.length - 2));
            break;
        default:
            break;
    }

    switch (moveType) {
        case "plus":
            result = currentPosition + newMove;
            break;

        case "minus":
            result = currentPosition - newMove;
            break;

        default:
            break;
    }

    return result + "px";
}

//Move Right
moveRight.addEventListener('click', () => {
    ball.style.left = calculateMove(ball, "plus", "left");
})

//Move Left
moveLeft.addEventListener('click', () => {
    ball.style.left = calculateMove(ball, "minus", "left");
})

//Move Down
moveDown.addEventListener('click', () => {
    ball.style.top = calculateMove(ball, "plus", "top");
})

moveUp.addEventListener('click', () => {
    ball.style.top = calculateMove(ball, "minus", "top");
})

//Note for the movements: Any value that is being requested from the user (user inputs) via the prompts are string, so in order to use them in an operation, the string needs
//to be converted into an integer with parseInt.
//The current location in X or Y is important in order to make the ball move certain amount pixels more or less than the current location.
//When getting the top or left value, the data type returned is an string , so needs to be converted into an integer with parseInt. Also the returned value has "px" at the end,
//the "px" needs to be remove with the slice method, and we remove the last two characters (-2)

//Set Interval
const intervalMovement = () => {
    let xFinal = 800;

    if(xInitial > xFinal || xInitial === 0){
        reverse = !reverse
        ball.style.backgroundColor = randomRGB();
    }

    if(reverse){
        xInitial = xInitial + velocity;
        ball.style.left = xInitial + "px";
    }else{
        xInitial = xInitial - velocity;
        ball.style.left = xInitial + "px";
    }
}
let intervalId;

setIntervalBtn.addEventListener('click',()=>{
    //Get the ball back to the starting point or xInitial. This to make it visible in the preset screen values.
    ball.style.left = xInitial + "px";
    //Remove transition. If the transition is not the removed, the ball lags in between intervals
    ball.style.transition = "0s";
    //Sets interval calling the intervalMovement function
    intervalId = setInterval(intervalMovement, 25);
})

stopBtn.addEventListener('click',() => {
    clearInterval(intervalId);
    ball.style.transition = "0.5s ease-in-out"
})
