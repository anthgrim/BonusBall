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
let yInitial = 150;

//Generates random RGB Color
const randomRGB = () => {
    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);
    const RGB = `rgb(${R},${G},${B})`;

    return RGB;
}

//Generate Ball
generateBtn.addEventListener('click',()=>{
    ball.classList.remove('hide');
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

moveUp.addEventListener('click', ()=> {
    const yMove2 = parseInt(prompt("How many pixels up should the ball move?"));
    const currentY2 = parseInt(ball.style.top.slice(0,ball.style.top.length -2));
    const finalMoveY2 = currentY2 - yMove2;
    ball.style.top = finalMoveY2 + "px";
})

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
    //Get the ball back to the starting point or xInitial
    ball.style.left = xInitial + "px";
    //Remove transition
    ball.style.transition = "0s";
    setInterval(intervalMovement, 25);
})