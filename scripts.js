//Constants
const ball = document.getElementById("ball");
const generateBtn = document.getElementById("generate")
const hideBtn = document.getElementById("hide");
const randomColorBtn = document.getElementById('randomColor');
const moveRight = document.getElementById('moveRight');
const moveLeft = document.getElementById('moveLeft');
const moveDown = document.getElementById('moveDown');
const moveUp = document.getElementById('moveUp');
const setIntervalBtn = document.getElementById('setIntervalBtn');
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
generateBtn.addEventListener('click',()=>{
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

//Move Right
moveRight.addEventListener('click',()=> {
    const xMove1 = parseInt(prompt("How many pixels should the ball move?"))
    const currentX1 = parseInt(ball.style.left.slice(0,ball.style.left.length - 2)); 
    const finalMove1 = currentX1 + xMove1;
    ball.style.left = finalMove1 + "px"
})

//Move Left
moveLeft.addEventListener('click',() =>{
    const xMove2 = parseInt(prompt("How many pixels should the ball move?"))
    const currentX = parseInt(ball.style.left.slice(0,ball.style.left.length - 2));
    const finalMove2 = currentX - xMove2;
    ball.style.left = finalMove2 + "px"
})

//Move Down
moveDown.addEventListener('click', () => {
    const yMove1 = parseInt(prompt("How many pixels down should the ball move?"));
    const currentY1 = parseInt(ball.style.top.slice(0,ball.style.top.length -2));
    const finalMoveY1 = currentY1 + yMove1;
    ball.style.top = finalMoveY1 + "px";
})

//Move Up
moveUp.addEventListener('click', ()=> {
    const yMove2 = parseInt(prompt("How many pixels up should the ball move?"));
    const currentY2 = parseInt(ball.style.top.slice(0,ball.style.top.length -2));
    const finalMoveY2 = currentY2 - yMove2;
    ball.style.top = finalMoveY2 + "px";
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

setIntervalBtn.addEventListener('click',()=>{
    //Get the ball back to the starting point or xInitial. This to make it visible in the preset screen values.
    ball.style.left = xInitial + "px";
    //Remove transition. If the transition is not the removed, the ball lags in between intervals
    ball.style.transition = "0s";
    //Sets interval calling the intervalMovement function
    setInterval(intervalMovement, 25);
})
