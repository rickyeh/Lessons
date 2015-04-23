var RADIUS = 45;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x = 50;
var y = 50;
var dX = 4;
var dY = 4;

function drawCircle(x, y) {

    ctx.beginPath();
    ctx.arc(x, y, RADIUS, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#ccc';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#ccc';
    ctx.stroke();
}

function render() {
    if ( y >= canvas.height - RADIUS || y <= RADIUS) {
        dY = -dY;
    }

    if ( x >= canvas.width - RADIUS || x <= RADIUS) {
        dX = -dX;
   }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    y += dY;
    x += dX;

    drawCircle(x,y);

    requestAnimationFrame(render);
}

$(document).ready(function() {
    drawCircle(x, y);
    render();
});


    // $('ctx').animate({
    //     'marginTop' : '+=600px'
    // });
    // $('ctx').animate({
    //     'marginTop' : '-=600px'
    // });