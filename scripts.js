//Constants
const ball = document.getElementById("ball");
const button = document.getElementById("btn")
let xIni = 0;
let yIni = 0;
let newBallY = 100;
let xMax = window.screen.width;
let xMin = 0;
let yMax = window.screen.height;
let yMin = 0;

const newBall = document.createElement('div');


//Generates random RGB Color
const randomRGB = () => {
    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);
    const RGB = `rgb(${R},${G},${B})`;

    return RGB;
}

const changePosition = () =>{   
    ball.style.backgroundColor = randomRGB();
    ball.style.top = yMax + "px";
    ball.style.left = xMax + "px";
}

setTimeout(changePosition,3000)

//Interaction Interval
// setInterval(()=>{
//     
// },1000)

// button.addEventListener('click',()=>{
    
// })