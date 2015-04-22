// Minimum and Maximum values for Center X, Y, and Radius
var minX = 50;
var minY = 50;
var maxX = 950;
var maxY = 700;
var minRad = 20;
var maxRad = 50;

var canvas = document.getElementById('myCanvas');

// Array of letters for hex color generation
var letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function drawRandomCircle() {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(getRandom(minX, maxX), getRandom(minY, maxY), getRandom(minRad, maxRad), 0, 2 * Math.PI, false);
    ctx.fillStyle = getRandomColor();
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomColor() {
    var color = '#';
    
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$(document).ready(function(){
    for (var i = 0; i < 100 ; i++) {
        setTimeout(drawRandomCircle, getRandom(0,3000));
    }
});