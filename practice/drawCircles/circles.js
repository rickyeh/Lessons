var minX = 50;
var minY = 50;
var maxX = 950;
var maxY = 700;
var minRad = 20;
var maxRad = 50;

var canvas = document.getElementById('myCanvas');


    // Method: Draws a circle with a fill color.
    // Parameters:
    //     radius - desired radius of the circle
    //     color - color that the circle is to be filled with
function drawRandomCircle() {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(getRandom(minX, maxX), getRandom(minY, maxY), getRandom(minRad, maxRad), 0, 2 * Math.PI, false);
    ctx.fillStyle = getRandomColor();
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$(document).ready(function(){
    for (var i = 0; i < 100 ; i++) {
        drawRandomCircle();
    }
});